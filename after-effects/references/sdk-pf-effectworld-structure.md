# Pf Effectworld Structure, New In 16 0, Rowbytes In Pf Effectworlds, Byte Alignment ...

> Adobe After Effects reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: `PF_E`ffectWorld Structure; New In 16.0; Rowbytes In `PF_E`ffectWorlds; Byte Alignment; Accessor Macros For Opaque (Data Type) Pixels; `PF_P`ixelPtr Accessor Macros; Errors; Error Codes; Error Reporting Policy; Dig In!; Multi-Frame Rendering in AE; Multi-Frame Rendering Effect Updates with March 2021 SDK; Implications to Command Selectors with Multi-Frame Rendering; Sequence Data in Multi-Frame rendering; Compute Cache For Multi-Frame Rendering; What does it mean for an effect to be thread-safe?; How to locate the static and global variables in your effects.

## `PF_E`ffectWorld Structure

### `PF_E`ffectWorld / `PF_L`ayerDef — `PF_E`ffectWorld Structure

Item

Description

world_flags

At present the flags are just: - `PF_W`orldFlag_DEEP - set when the world is 16-bpc - `PF_W`orldFlag_WRITEABLE - marks that altering the world's image data is permitted. Effects ordinarily can't change input image data, only output.

data

A pointer to the image data, held as a `PF_P`ixelPtr. Don't touch it directly; go through the `PF_P`ixelPtr Accessor Macros. In After Effects, image data is always laid out as successive words, each packing Alpha, Red, Green, Blue from low byte to high byte.

rowbytes

How many bytes long each row of the image's pixel block is. That block holds height lines, each carrying width pixels followed by a little padding. The width pixels — times four, since every pixel runs four bytes — plus any extra padding sums to rowbytes bytes. Lean on this value to walk the image data. Because of platform-specific padding at row ends, sweeping the whole buffer is risky. Locate the start of each row from height and rowbytes instead.

Note

Turning field rendering on or off leaves this value unchanged.

Note

Two worlds of identical dimensions, one input and one output, may still carry different rowbytes.

width

Width and height of the pixel buffer.

height

extent_hint

The tightest rectangle that wraps every opaque (non-zero alpha) pixel in the layer. It marks the region that has to be output. Should your plug-in change with extent — a diffusion dither, say — disregard this and just render the whole frame every time.

pix_aspect_ratio

The pixel aspect ratio, given as a `PF_R`ational.

Note

For checked-out layers an effect may use this value, but for the layer it's actually applied to it must use `PF_I`nData.pixel_aspect_ratio. Sorry.

platform_ref

Dropped as of CS5. Holds reference data that depends on the platform. Under Windows it carries an opaque value; under macOS, a CGrafPtr and a GDeviceHandle come from a `PF_E`ffectWorld via `PF_GET_PLATFORM_REFS`.

Note

Since no output context exists yet at `PF_C`md\_`GLOBAL_SETUP`, you can't grab a platform_ref there. Patience, my pet.

dephault

Applies to layer parameters alone. Its value is one of `PF_L`ayerDefault_MYSELF or `PF_L`ayerDefault_NONE.

| --- | --- |

## New In 16.0

### `PF_E`ffectWorld / `PF_L`ayerDef — New In 16.0

While `PF_C`md\_`SMART_RENDER_GPU` runs, `PF_L`ayerDef is populated exactly as it would be for ordinary CPU renders, except `PF_L`ayerDef.data comes through null; every other field remains valid.

## Rowbytes In `PF_E`ffectWorlds

### `PF_E`ffectWorld / `PF_L`ayerDef — Rowbytes In `PF_E`ffectWorlds

Don't count on reaching a `PF_E`ffectWorld's next scanline with (width \* sizeof(current_pixel_type)) + 4 or anything similar; rely on the `PF_E`ffectWorld's rowbytes instead.

Writing past the marked region of a `PF_E`ffectWorld is off-limits — doing so can corrupt cached image buffers you don't own.

Want to check that your effects respect the `PF_E`ffectWorld>rowbytes? Run the Grow Bounds effect right after yours.

The output buffer ends up with bigger rowbytes than the input, even though its logical size stays the same.

## Byte Alignment

### `PF_E`ffectWorld / `PF_L`ayerDef — Byte Alignment

There's no guarantee that a `PF_E`ffectWorld's pixels sit on 16-byte boundaries. An effect might be handed a subregion of a larger `PF_E`ffectWorld. Anyone using Apple's sample pixel-processing optimization code, consider this your warning.

Past 8-bit-per-channel color, After Effects also handles 16-bit and 32-bit float per channel.

Effects will never be given input and output worlds of differing bit depths, nor worlds at a higher bit depth than they've declared they can handle.

## Accessor Macros For Opaque (Data Type) Pixels

### `PF_E`ffectWorld / `PF_L`ayerDef — Accessor Macros For Opaque (Data Type) Pixels

Reach into the contents of (opaque) `PF_P`ixelPtrs through the macros listed below.

Bluntly: casting a pointer of one type straight into another is unsafe. Getting it to compile at all demands a cast, and nothing stops you from writing that cast wrong. The underlying implementation may shift in some future release — and when that day comes, you'll be glad this abstraction was forced on you.

## `PF_P`ixelPtr Accessor Macros

### `PF_E`ffectWorld / `PF_L`ayerDef — `PF_P`ixelPtr Accessor Macros

Macro

Purpose

`PF_GET_PIXEL_DATA16`

```

Obtain a pointer to a 16-bpc pixel within the specified world.

The returned pixel pointer will be NULL if the world is not 16-bpc.

The second parameter is optional; if it is not NULL, the returned pixel will be an interpretation of the values in the passed-in pixel, as if it were in the specified PF_EffectWorld.

PF_GET_PIXEL_DATA16 (
  PF_EffectWorld wP,
  PF_PixelPtr    pP0,
  PF_Pixel16     *outPP);
```

`PF_GET_PIXEL_DATA8`

```

Obtain a pointer to a 8-bpc pixel within the specified world.

The returned pixel pointer will be NULL if the world is not 8- bpc.

The second parameter is optional; if it is not NULL, the returned pixel will be an interpretation of the values in the passed-in pixel, as if it were in the specified PF_EffectWorld.

PF_GET_PIXEL_DATA8 (
  PF_EffectWorld wP,
  PF_PixelPtr    pP0,
  PF_Pixel8      *outPP);
```

| --- | --- |

Picture `PF_GET_PIXEL_DATA16` and `PF_GET_PIXEL_DATA8` as your (cough) safe casting helpers.

Pulling a `PF_P`ixel16\* out of the `PF_E`ffectWorld output takes remarkably little code:

```
{
    PF_Pixel16 *deep_pixelP = NULL;
    PF_Err     err = PF_Err_NONE;
    err = PF_GET_PIXEL_DATA16(output, NULL, &deep_pixelP);
}
```

Should the world lack deep pixels, deep_pixelP comes back as NULL.

You'll rarely need the second parameter, so pass NULL for it; feed in a `PF_P`ixelPtr that lives outside any `PF_E`ffectWorld when you want to force it to that `PF_E`ffectWorld's depth.

## Errors

Without exception — every single time — hand a `PF_E`rr back from main(). Whatever errors arise, your plug-in is obligated to relay them to After Effects.

Passing along any error you receive from callbacks and PICA suites to After Effects is critical, the lone exception being errors you've already dealt with yourself.

Stay disciplined about reporting the correct error code and releasing whatever memory you've claimed.

No joke. We mean it.

## Error Codes

### Errors — Error Codes

Error

Meaning

`PF_E`rr_NONE

Success.

`PF_E`rr\_`OUT_OF_MEMORY`

Memory allocation failed. Note that RAM preview will cause this condition, so After Effects will be expecting to receive this error from your plug-in.

`PF_E`rr\_`INTERNAL_STRUCT_DAMAGED`

Problems using a data structure.

`PF_E`rr\_`INVALID_INDEX`

Problems finding/using array member.

`PF_E`rr\_`UNRECOGNIZED_PARAM_TYPE`

Problem with parameter data.

`PF_E`rr\_`INVALID_CALLBACK`

Problems accessing function through pointer.

`PF_E`rr\_`BAD_CALLBACK_PARAM`

Problems using a parameter passed to a callback.

`PF_I`nterrupt_CANCEL

Both effect and AEGP callbacks can return this to effects, if a user action aborts a render. If the effect gets this error from a callback, it should stop processing the frame and return the error to the host. Failure to pass the error back may result in misrendered frames being cached.

`PF_E`rr\_`CANNOT_PARSE_KEYFRAME_TEXT`

Return this from `PF_A`rbitrary\_`SCAN_FUNC` when problems occur parsing the clipboard into keyframe data.

| --- | --- |

## Error Reporting Policy

### Errors — Error Reporting Policy

A uniform error-handling policy governs After Effects, and you're expected to follow it.

Hit an error inside your plug-in's code, and you must surface it to the user right then — ahead of handing control back to After Effects.

Any operating-system errors that crop up while your plug-in runs are treated by After Effects as belonging to you.

When a callback function of ours returns an error code to you, relay it onward to After Effects, since the reporting on our side is already done.

After Effects never surfaces out-of-memory errors. Likewise, all error reporting is muted throughout RAM preview and whenever After Effects runs in -noui mode.

Reporting an error from inside a plug-in means setting `PF_O`utFlag\_`DISPLAY_ERROR_MESSAGE` and writing the error description into `PF_O`utData>return_msg.

That step logs your error in the render log and heads off system hangs during renders driven by a render engine or by scripting.

## Dig In!

### Errors — Dig In!

With a working grasp of effect plug-ins behind you, the time has come to play with actual code. Dive in!

Once the groundwork of your plug-in is in place, questions may surface around reusable code, more advanced capabilities, and tuning your code for greater speed.

For that purpose, a vast portion of its internal machinery is made available by After Effects via function suites.

Leaning on After Effects' own code for utility work should let you stand up your image-processing algorithms in short order.

Coverage of that topic continues in Effect Details.

## Multi-Frame Rendering in AE

To exploit today's hardware with its higher CPU core and thread counts, Multi-Frame Rendering is now supported in After Effects 2022 and later. With Multi-Frame rendering (MFR), several frames render in parallel, which accelerates both the rendering and the export of AE compositions.

Setting the `PF_O`utFlag below through the AE Effects SDK is how a third-party effect opts into Multi-Frame Rendering support:

```
PF_OutFlag2_SUPPORTS_THREADED_RENDERING
```

What this flag signals is that the effect can render across several threads at once. Whether applied once or multiple times on a layer, the effect may be invoked to render simultaneously across multiple threads. Before this flag goes on, the effect has to be thread-safe. More on that appears in the section below titled "What does it mean for an effect to be thread-safe?"

Note

With Multi-Frame Rendering active in After Effects, an effect that lacks thread-safety and leaves this flag unset will compel each render thread to step through the effect code one at a time, entering and exiting in sequence. That sharply cuts into the speed gains MFR delivers, and to flag the cost, a warning icon appears next to the effect in the Effects Control Window.

A backwards-compatibility flag exists for effects that must write to sequence_data during Render:

```
PF_OutFlag2_MUTABLE_RENDER_SEQUENCE_DATA_SLOWER
```

Under this flag every render thread holds its own sequence_data instance, neither shared with nor synchronized against the other render threads. When computing the data held in sequence_data is expensive, reach for the new Compute Cache For Multi-Frame Rendering instead.

Note

To employ the `PF_O`utFlag2\_`MUTABLE_RENDER_SEQUENCE_DATA_SLOWER` flag, you have to build against the March 2021 SDK or a newer one.

## Multi-Frame Rendering Effect Updates with March 2021 SDK

### Multi-Frame Rendering in AE — Multi-Frame Rendering Effect Updates with March 2021 SDK

New sequence_data behavior arrives with the March 2021 SDK, switched on as of AE beta builds 22.0x6 (released on June 29th 2021). To gain Multi-Frame Rendering support, any effect built with the June 2020 SDK has to be rebuilt against the March 2021 SDK. Such effects also have to tell AE they were compiled with version 13.25 at minimum, though leaning on the SDK constants `PF_AE_PLUG_IN_VERSION` and `PF_AE_PLUG_IN_SUBVERS` to set the associated SDK automatically is the recommended route.

What an effect must change to adopt the new behavior is laid out in the table that follows:

MFR & Sequence Data Usage

Changes Needed with March 2021 SDK

Plugin does not set `PF_O`utFlag2\_`SUPPORTS_THREADED_RENDERING`

No changes needed. Effect and sequence_data will continue to work as it did in the past.

Plugin sets `PF_O`utFlag2\_`SUPPORTS_THREADED_RENDERING` but neither reads nor writes to sequence_data during Render

Recompile the plugin with the March 2021 SDK, no other code changes are required. If the plugin is not compiled with the March 2021 SDK, the plugin will stop utilizing MFR starting with AE 22.0x6.

Plugin sets `PF_O`utFlag2\_`SUPPORTS_THREADED_RENDERING` but only reads sequence_data during Render

Recompile the plugin with the March 2021 SDK, update reading sequence_data via `PF_E`ffectSequenceDataSuite1 for thread-safe access. See Accessing sequence_data at Render Time with Multi-Frame Rendering for more information.

Plugin sets `PF_O`utFlag2\_`SUPPORTS_THREADED_RENDERING` and reads and writes to sequence_data during Render

Recompile the plugin with the March 2021 SDK and modify the plugin to: 1. Utilize the Compute Cache API for thread-safe cache access instead of reading/writing to sequence*data directly. See Compute Cache For Multi-Frame Rendering for more information. AND / OR 2. Add the `PF_O`utFlag2*`MUTABLE_RENDER_SEQUENCE_DATA_SLOWER` to the effect to restore direct read/write access to sequence_data.

| --- | --- |

Note

Effects compiled with the March 2021 SDK and using the `PF_O`utFlag2*`SUPPORTS_THREADED_RENDERING` flag and, optionally, the `PF_O`utFlag2*`MUTABLE_RENDER_SEQUENCE_DATA_SLOWER` flag will work with After Effects beta builds starting with 18.0 when the `PF_E`ffectSequeceDataSuite1 was introduced. Check for the presence of this suite if you need to support both sequence_data behaviors.

## Implications to Command Selectors with Multi-Frame Rendering

### Multi-Frame Rendering in AE — Implications to Command Selectors with Multi-Frame Rendering

The main thread still receives UI selectors, but `PF_C`md*`SEQUENCE_SETUP`, `PF_C`md*`SEQUENCE_RESETUP`, `PF_C`md*`SEQUENCE_SETDOWN`, `PF_C`md*`SMART_PRE_RENDER`, `PF_C`md*RENDER and `PF_C`md*`SMART_RENDER` can arrive on several threads concurrently while those UI selectors are also being processed — so each of these selectors has to be thread safe.

Only the main thread ever receives the `PF_C`md*`GLOBAL_SETUP` and `PF_C`md*`GLOBAL_SETDOWN` selectors, and they never coincide with any other selector.

## Sequence Data in Multi-Frame rendering

### Multi-Frame Rendering in AE — Sequence Data in Multi-Frame rendering

Across the years, the sequence_data object together with its related Sequence Selectors have offered a means of holding data for the duration of an effect's lifetime. A few shifts worth noting come in with Multi-Frame Rendering:

Changes as of June 2020

- For Multi-Frame rendering, After Effects has to marshal sequence*data over to the render threads. To keep that efficient for effects whose sequence_data needs flattening via the `PF_O`utFlag*`SEQUENCE_DATA_NEEDS_FLATTENING` flag, those effects are now also required to set the `PF_O`utFlag2\_`SUPPORTS_GET_FLATTENED_SEQUENCE_DATA` flag.

Note

A later After Effects release will enforce the requirement to set the `PF_O`utFlag2\_`SUPPORTS_GET_FLATTENED_SEQUENCE_DATA` flag and to handle the matching selector inside the plugin. Loading any effect that falls short of this will trigger a warning dialog.

Changes as of March 2021

- Read at Render time, the sequence_data object is now const and ought to be reached through the `PF_E`ffectSequenceDataSuite interface.
- By default, writing to seqeunce_data at render time is turned off, and the outcome is undefined should a write to sequence_data be attempted at render time.
- An effect that has to write to sequence*data at render time must set the `PF_O`utFlag2*`MUTABLE_RENDER_SEQUENCE_DATA_SLOWER` flag, which instructs After Effects to permit writes to sequence_data at a performance cost. At the start of the render, the sequence_data object is duplicated to each render thread, and for the render's lifetime every render thread maintains its own separate copy of sequence_data. On performance grounds, using the Compute Cache For Multi-Frame Rendering to write whatever data the effect needs is the preferred approach.

## Compute Cache For Multi-Frame Rendering

### Multi-Frame Rendering in AE — Compute Cache For Multi-Frame Rendering

As a stand-in or companion to Sequence Data, the Compute Cache offers a thread-safe cache in which effects can compute, hold, and read data either ahead of or during Render.

### When would you use the Compute Cache?

- Reach for the Compute Cache when your effect relies on sequence_data and must write to or refresh sequence_data during Render — all the more so when calculating the needed data is expensive.
- Lacking the Compute Cache, the effect has to add the `PF_O`utFlag2\_`MUTABLE_RENDER_SEQUENCE_DATA_SLOWER` flag, which spins up a distinct copy of sequence_data for every render thread. Each render thread might then have to redo the expensive calculations on its own, with no way to share the outcome across the render threads.
- Through the Compute Cache, render threads can divide the work of computing the data and benefit from data that's already been computed.
- Depending on what the effect requires, the Compute Cache API handles both single- and multi-checkout computation tasks. The Compute Cache API documentation has more detail.

### How do I enable the Compute Cache?

Starting in the March 2021 SDK the Compute Cache API is available, and in After Effects 2022 and later builds the suite is on by default.

For implementation specifics and sample code, see the Compute Cache API documentation.

## What does it mean for an effect to be thread-safe?

### Multi-Frame Rendering in AE — What does it mean for an effect to be thread-safe?

You can call an effect thread-safe when its implementation and shared data are certain to be without race conditions and remain in a valid state whenever accessed from more than one thread at once.

Put more precisely, the effect:

1. Either carries no static or global variables at all, or any it does carry are kept clear of race conditions.
2. Leaves in*data->global_data unwritten at render time. Reads are fine; restrict any writes to `PF_C`md*`GLOBAL_SETUP` and `PF_C`md\_`GLOBAL_SETDOWN`.
3. Leaves in*data->sequence_data unwritten at render time and throughout the `PF_C`md*`UPDATE_PARAMS_UI` event. Reads are fine through the `PF_E`ffectSequenceDataSuite interface.

Note

Should an effect rely on any blocking synchronization primitives — mutexes or gates, say — it must not keep them held while calling back into the host. Typical such calls happen when you use a suite or issue a checkout call. Neglecting this will very probably land you in a deadlock.

## How to locate the static and global variables in your effects

### Multi-Frame Rendering in AE — How to locate the static and global variables in your effects

To make hunting down the static and global variables in your effect easier, we put together a Static Analyzer tool. You'll find it hosted at this Git Repo: https://github.com/adobe/ae-plugin-thread-safety

### On MacOS

1. Pull down the Git Repo from the URL given above, whether by clone or download
2. Inside the Mac folder, look for the bash script check_symbols_for_thread_safety.sh
3. Dig into a plugin or effect's package content and track down the binary files. (As an example, Curves.plugin keeps its binary file at: /Applications/Adobe After Effects [your AE version]/Plug-ins/Effects/Curves.plugin/Contents/MacOS/Curves)

```
check_symbols_for_thread_safety.sh [Binary location]
For example, check_symbols_for_thread_safety.sh /Applications/Adobe After Effects [your AE version]/Plug-ins/Effects/Curves.plugin/Contents/MacOS/Curves)
```

```
[symbol type]; [symbol name]
```

6. [symbol type] is an one case-sensitive letter that indicates the type of the variable. You can find all the type information here: https://linux.die.net/man/1/nm

```
b; Deform::FindSilEdges()::new_kInfinite
```

- b shows this symbol is in the uninitialized data section, which indicates it might be a static variable.
- Deform::FindSilEdges()::new_kInfinite is the symbol name where Deform is name of the namespace that the variable is located at.
- FindSilEdges() is the function name the variable is in.
- new_kInfinite is the actual variable name. Namespace and function names might not be shown based on where the variable is.

8. Search for each symbol in your code, fix it (see here on how) and repeat for every binary file in your solution

### On Windows

### Preparation

1. Running this tool calls for a functioning Visual Studio installation
2. Grab the Git Repo from the URL listed above, by clone or by download
3. Within the Win folder, locate the register_msdia.cmd script
4. From the Start Menu, search out "x64 Native Tools Command Prompt for VS...."
5. Right-click it and choose Run as an Administrator
6. Once in the terminal, cd over to whichever directory holds your register_msdia.cmd
7. Run .\register_msdia.cmd
8. Registration of the DIA SDK, along with a few other dependencies it needs, is handled for you by this script
9. The Static Analyzer should be ready to work

### Using the Windows Static Analyzer

1. Find the executable CheckThreadSafeSymbols.exe in the Win folder
2. Compile your effect in Debug mode and find its .pdb file
3. You should also find some .obj files in the same build directory if you haven't modified your project build settings
   - Use the -source option if you don't know exactly what binaries your source code is ending up in, or if you'd like to keep track of thread safety on a per-source-file basis.
   - Use the -objfile option if you want more fine-grained control over what parts of your project you're scanning.

```
CheckThreadSafeSymbols.exe -objfile [absolute path to the binary you want analyzed] [absolute path to .pdb]
```

```
CheckThreadSafeSymbols.exe -source [absolute path to the source file you want analyzed] [absolute path to .pdb]
```

```
CheckThreadSafeSymbols.exe -g [absolute path to .pdb]
```

```
CheckThreadSafeSymbols.exe -sf [absolute path to .pdb]
```

```
[Symbol name], [Symbol type], [Datakind], ([Section type of data location], [Binary Address][Binary Address Offset])
```

```
menuBuf, Type: char[0x1000], File Static, (static, [0008FCD0][0003:00001CD0])
```

- menuBuf is the actual variable name.
- Type: char[0x1000] shows what type of the variable it is. The data here is a char.
- File Static shows what kind of that data it is. The data here is a File-scoped static variable. You can find all the data kinds and what they mean on this page https://docs.microsoft.com/en-us/visualstudio/debugger/debug-interface-access/datakind?view=vs-2019
- static shows that the data is in the static section of the memory.
- [0008FCD0][0003:00001CD0] shows the Binary Address and the Binary Address offset of the data.

11. Search for each symbol in your code, fix it (see here on how) and repeat for every binary/source file in your solution
