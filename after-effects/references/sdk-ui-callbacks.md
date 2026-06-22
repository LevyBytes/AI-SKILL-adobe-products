# Ui Callbacks, Ui Performance, How Deep Are My Pixels, Arbitrary Data ...

> Adobe After Effects reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: UI Callbacks; UI Performance; How Deep Are My Pixels?; Arbitrary Data; Custom UI Implementation for Color Sampling, Using Keyframes; Audio; Global Outflags; Audio Data Structures; Audio-Specific Float Slider Variables; Flags; Phase; Curve Tolerance; What's Zero, Really?; Accessing Audio Data; Extending Audio Clips; Audio Considerations; AEGPs; Overview.

## UI Callbacks

For converting between coordinate systems and pulling OS-specific details about drawing contexts, After Effects hands you callbacks so you avoid guesswork and never have to query the OS yourself. Lean on them. `PF_E`ventCallbacks supplies pointers to these callbacks, and the macros in `AE_E`ffectUI.h and `AE_E`ffectCB.h give you access to the underlying routines.

You can certainly ship a working plug-in with a custom UI that skips the coordinate-transposition callbacks. The trouble shows up the instant a user zooms into the layer panel or rotates a layer, at which point your plug-in starts misbehaving. The whole reason these macros and callbacks exist is to fold custom interfaces into the After Effects UI smoothly, sparing developers the usual interface-handling burden. So, once more: use them.

For convenience these macros fill in the refcon and context handle on your behalf. The refcon presumes a local variable called "extra" is in scope, and the context defaults to whatever the current context is. Those defaults come from the `PF_E`ventCallbacks structure (declared in `AE_E`ffectUI.h). Should you need different values, route the callbacks through the `PF_E`ventExtra structure to override them. Editing the header-file macros is neither advised nor supported, so leave them alone.

Function

Purpose

layer_to_comp

```

Transforms layer panel coordinates to the composition panel coordinates.

PF_Err layer_to_comp (
  void           *refcon,
  PF_ContextH    context,
  A_long         curr_time,
  A_long         time_scale,
  PF_FixedPoint  *pt);
```

comp_to_layer

```

Transforms composition panel coordinates to the layer panel coordinates.

PF_Err comp_to_layer (
  void           *refcon,
  PF_ContextH    context,
  A_long         curr_time,
  A_long         time_scale,
  PF_FixedPoint  *pt);
```

get_comp2layer_xform

```

Returns the matrix used to convert from the composition panel to the layer panel.

If *exists returns FALSE, the matrix cannot be computed because the layer scales to zero.

PF_Err get_comp2layer_xform (
  void            *refcon,
  PF_ContextH     context,
  A_long          curr_time,
  long            time_scale,
  long            *exists,
  PF_FloatMatrix  *comp2layer);
```

get_layer2comp_xform

```

Returns the transformation matrix used to convert from the layer panel to the composition panel.

This always exists.

PF_Err get_layer2comp_xform (
  void            *refcon,
  PF_ContextH     context,
  A_long          curr_time,
  A_long          time_scale,
  PF_FloatMatrix  *layer2comp);
```

source_to_frame

```

Transforms the source coordinates in the current context to screen coordinates.

Screen (frame) coordinates are affected by the current zoom level.

PF_Err source_to_frame(
  void           *refcon,
  PF_ContextH    context,
  PF_FixedPoint  *pt);
```

frame_to_source

```

Transforms the screen coordinates identified by *pt to the source coordinates of the current context.

PF_Err frame_to_source(
  void           *refcon,
  PF_ContextH    context,
  PF_FixedPoint  *pt);
```

`PF_GET_PLATFORM_DATA`

```

Retrieves platform-specific data. For plug-ins loaded with localized resource files, PF_PlatData_RES_FILE_PATH will point to the external file, not the plug-in file.

Use PF_PlatData_EXE_FILE_PATH if you want the path of your plug-in.

Starting in CS6, use PF_PlatData_EXE_FILE_PATH_W and PF_PlatData_RES_FILE_PATH_W instead of the old non-wide calls.

PF_Err PF_GET_PLATFORM_DATA (
  PF_PlatDataID  which,
  void           *ppData);
```

`PF_P`latDataID can have the following values: - `PF_P`latData*`MAIN_WND` - `PF_P`latData*`EXE_FILE_PATH_DEPRECATED` - `PF_P`latData*`RES_FILE_PATH_DEPRECATED` - `PF_P`latData*`RES_REFNUM` // macOS - `PF_P`latData*`RES_DLLINSTANCE` // Win - `PF_P`latData*`BUNDLE_REF` - `PF_P`latData*`EXE_FILE_PATH_W` // new CS6 - `PF_P`latData*`RES_FILE_PATH_W` // new CS6

| --- | --- |

## UI Performance

### Tips & Tricks — UI Performance

Try toggling `PF_EO_ALWAYS_UPDATE` against `PF_EO_NEVER_UPDATE` (both from `PF_E`ventExtra) until you strike the right balance of speed versus precision.

There's a deliberate quirk on macOS: when custom UI draw events fire, the foreground and background colors are left as-is rather than being reset to white and black.

That behavior is intentional. Since you're painting straight into our context, resetting the background color isn't something you need to bother with.

## How Deep Are My Pixels?

### Tips & Tricks — How Deep Are My Pixels?

While events are being handled, the bit depth of the layer or layers under processing simply isn't exposed.

A workable substitute is to stash the most recently seen pixel depth inside your sequence data.

An even cleaner route: have your fixed and float slider parameters lean on the `PF_V`alueDisplayFlags set in their parameter definitions. Doing that makes the parameters' UI honor whatever the user has chosen for pixel display values.

There's also the option of inspecting your input world's depth while `PF_C`md_RENDER is running.

## Arbitrary Data

### Tips & Tricks — Arbitrary Data

For wrangling your custom UI, few things work as well as an arbitrary data parameter.

Tuck state, preferences, and the last-used item into an arb, and recovering any of it later is never a problem.

Compared with custom UIs, the message stream that After Effects devotes to parameters is considerably richer.

## Custom UI Implementation for Color Sampling, Using Keyframes

### Tips & Tricks — Custom UI Implementation for Color Sampling, Using Keyframes

Say a plug-in needs to sample a color from some layer inside a composition. To pick the point, the user either reaches for the eyedropper tied to a color parameter or works through the plug-in's own custom composition panel UI.

On the click event, the plug-in maps the click coordinates into layer space and tucks that away in sequence data. A re-render is then forced, and during it the plug-in can read the color of the layer point that matches the stored coordinates.

That color value gets saved into sequence data, the plug-in aborts the render, and it asks for a redraw of whichever parameter or parameters are involved.

At draw time, the plug-in then lays down the right keyframes on its color parameter stream by way of the `AEGP_K`eyframeSuite.

And yes, the upshot is that the effect has to resort to Cheating Effect Usage of AEGP Suites and tap the AEGP API.

## Audio

Audio running as high as 96Khz at floating point (24-bit) resolution, in either mono or stereo, is something After Effects can handle.

Resampling on our end is high quality.

Details that pertain specifically to audio handling live in both `PF_I`nData and `PF_O`utData.

Audio may not headline the After Effects feature set, yet for compositing and pre-visualization workflows it matters a great deal.

On top of that, a number of engineers here are audio devotees who make sure our audio effects, and indeed the entire audio pipeline, hit the highest quality bar.

## Global Outflags

Every audio effect is obliged to set one of `PF_O`utFlag*`AUDIO_EFFECT_TOO` or `PF_O`utFlag*`AUDIO_EFFECT_ONLY`.

When a visual effect checks out audio data but leaves it untouched, that's what `PF_O`utFlag\_`I_USE_AUDIO` is for.

Finer command over audio output comes from `PF_O`utFlag*`AUDIO_FLOAT_ONLY`, `PF_O`utFlag*`AUDIO_IIR` and `PF_O`utFlag\_`I_SYNTHESIZE_AUDIO` (consult `PF_O`utFlags for the full story).

## Audio Data Structures

To describe audio data, After Effects relies on the data types listed below.

Structure

Description

`PF_S`oundFormat

Tells you whether the audio uses unsigned pulse code modulation (PCM), signed PCM, or a floating point format.

`PF_S`oundSampleSize

Each sample occupies 1, 2, or 4 bytes.

`PF_S`oundChannels

Reports whether the audio is mono or stereo.

`PF_S`oundFormatInfo

Holds the sampling rate, the channel count, the sample size, and the format of the audio it describes.

`PF_S`oundWorld

Audio is represented through `PF_S`oundWorlds. Beyond a `PF_S`oundFormatInfo, each one carries the audio's length together with a pointer to the actual audio data.

| --- | --- |

A `PF_S`oundFormatInfo is what contains `PF_S`oundFormat, `PF_S`oundSampleSize, and `PF_S`oundChannels.

Each `PF_S`oundWorld wraps a `PF_S`oundFormatInfo plus additional per-instance information.

## Audio-Specific Float Slider Variables

Unlike other sliders, `PF_P`aram\_`FLOAT_SLIDER`s carry a few extra members: flags, phase, and curve tolerance.

## Flags

### Audio-Specific Float Slider Variables — Flags

`PF_FS`liderFlag\_`WANT_PHASE` is the lone flag on offer.

Setting it signs the effect up to receive refreshed phase information from After Effects as audio renders.

Want to see what it actually does? Switch it off and inspect your output.

## Phase

### Audio-Specific Float Slider Variables — Phase

The phase value that was requested gets held here.

## Curve Tolerance

### Audio-Specific Float Slider Variables — Curve Tolerance

After Effects leans on curve tolerance to subdivide the time-variant parameters of audio effects. Leave it at zero for the default behavior (and likewise for `FLOAT_SLIDER` parameters that aren't audio-related).

## What's Zero, Really?

### Audio-Specific Float Slider Variables — What's Zero, Really?

At zero amplitude, After Effects sits at -192db.

## Accessing Audio Data

Pulling in an audio layer is done with `PF_CHECKOUT_LAYER_AUDIO` from Interaction Callbacks.

Because the layer comes back opaque, you reach for `PF_GET_AUDIO_DATA` to read out the particulars of that audio.

Just as with pixel data, checking the audio back in promptly really matters.

Should your effect need an input time span that differs from the output span, adjust the startsampL and endsampL field in `PF_O`utData while `PF_C`md\_`AUDIO_SETUP` from Frame Selectors is active.

## Extending Audio Clips

### Accessing Audio Data — Extending Audio Clips

There is no API call that lengthens an audio clip for you.

That said, the user can readily stretch the clip out ahead of running your effect: apply time remapping to the layer, then drag its out point later.

Say your effect tacks a delay onto a sound clip — you'll want headroom for the tail to decay rather than chopping it off where the original audio stopped.

Spell out in your documentation what users need to do before they apply the effect.

## Audio Considerations

Sampling rates as high as 96Khz are handled by the After Effects audio API, across as broad a range of formats as it can manage.

Just as pixel-processing routines in plug-ins ought to stay "resolution independent," audio plug-ins should not assume any particular sample rate or bit depth.

There's no way for your plug-in to learn the eventual output format of the audio it touches; downstream of your plug-in the signal could be stretched, normalized, truncated, or phase-inverted before it reaches the final mix.

The problems that confront audio filters differ from those that image filters run into.

For a sample of how audio rendering can be done, look at the SDK example.

## AEGPs

Reaching well past what effect plug-ins can do, the After Effects General Plug-in (AEGP) API is both deep and wide in the capabilities it exposes.

From the user's vantage point, an AEGP looks like a built-in piece of After Effects.

Such plug-ins are able to insert, intercept, and fire menu commands, reach into the keyframe database, and hook their own functions into the internal messaging of After Effects.

Projects and compositions can have items added or removed by AEGPs, and the same goes for filters and keyframes.

After its command fires, an AEGP turns to the many PICA function suites (covered throughout this section) to operate on any After Effects item it likes.

An AEGP can expose function suites for plug-ins to call, work over every part of a project, alter interpretations, swap files, and decide which external files feed into a project's render.

A handful of AEGP variants exist — Keyframers, Artisans, and I/O modules (AEIOs). Each remains an AEGP at heart, but gains entry to specialized messaging streams that it registers for with After Effects.

## Overview

To get at everything they need, AEGPs rely on Plug-In Component Architecture (PICA) function suites.

An AEGP is also free to publish suites of its own for effect plug-ins to consume (because the order in which plug-ins load isn't fixed, an AEGP can't count on any suite that After Effects itself doesn't supply).

On top of that, an AEGP may ask for a suite and, should it be missing, step in with its own substitute implementation.

## AEGP Communication With After Effects

### Overview — AEGP Communication With After Effects

With effect plug-ins, every exchange with After Effects flows through one entry point function — but AEGPs don't work that way.

After Effects does invoke the entry point named in the AEGP's PiPL (which you still have to supply), yet from there on every interaction between the two travels through the hook functions that the AEGP has registered.

You have to carry out that registration inside the plug-in's entry function, by way of the Register Suite.

## Different Tasks, Same API

### Overview — Different Tasks, Same API

No matter which specialization an AEGP takes on, it operates along the same lines.

One might do nothing more than drop in a single menu item that kicks off an outside application, while another could be as involved as an Artisan.

Any plug-in is technically free to reach for any function suite, but only a plug-in of the matching type ends up with access to every parameter it needs.

Render contexts go only to Artisans, input and output specifications arrive only at AEIO plug-ins, and what messages you get depends on which hook functions you registered.

## Data Types

Where it can, After Effects hands plug-ins opaque data types and supplies accessor functions to work on them. Video frames, for instance, ride along as the opaque `AEGP_W`orldH. Directly poking at the underlying structure might occasionally be faster, but keeping the data types opaque lets us rework our implementation without forcing you to recompile (and reship) your plug-ins.

## AEGP API Data Types

### Data Types — AEGP API Data Types

Type

Describes

Manage Using

`AEGP_M`emHandle

There's more inside this structure than the memory it points at, so never dereference it straight away. Call `AEGP_L`ockMemHandle in the AEGP Memory Suite to obtain a pointer to the memory the `AEGP_M`emHandle refers to — and naturally, unlock it once you've finished.

AEGP Memory Suite

`AEGP_P`rojectH

The active After Effects project. A project is a collection of elements laid out hierarchically in a tree so their semantic relationships hold together. The tree's interior nodes are folders. From CS6 onward, only a single project is ever open at a time.

AEGP Project Suite

`AEGP_I`temH

A general handle for any piece of a project, folders included. If it can be selected, it's an item. Because several kinds of object can be selected, we keep them as `AEGP_I`temHs until we need to pin down exactly what they are.

AEGP Item Suite

`AEGP_C`ollection2H

A group of items that are selected.

AEGP Collection Suite

`AEGP_C`ompH

A composition strings together renderable items that jointly yield output. Each one spans a stretch of time, and a single project can hold many of them.

AEGP Composition Suite

`AEGP_F`ootageH

Any item you can render. The lone exceptions — items that aren't footage — are folders and compositions.

AEGP Footage Suite

`AEGP_L`ayerH

A piece of a composition. Because layers render one after another, they can occlude one another. Whether it's solids, text, paint, cameras, lights, images, or image sequences, each shows up as a layer. A layer may span only a portion of the composition's overall time interval.

AEGP Layer Suite

`AEGP_W`orldH

A single frame's worth of pixels.

AEGP World Suite

`AEGP_E`ffectRefH

An effect that's been applied to a layer. Think of an effect as a function: feed it a layer (perhaps along with other parameters) and it hands back a modified layer ready to render.

AEGP Effect Suite

`AEGP_S`treamRefH

Any parameter stream hanging off a layer within a composition. For the complete roster of stream types, consult the writeup of `AEGP_G`etNewLayerStream in `AEGP_S`treamSuite5.

AEGP Stream Suite, AEGP Dynamic Stream Suite, AEGP Keyframe Suite

`AEGP_M`askRefH

A mask attached to a layer. You use an `AEGP_M`askRefH to reach details of the mask stream rather than the individual points that form the mask. A mask is a rasterized path — a run of vertices — that splits a layer in two so each half can render on its own terms.

AEGP Mask Suite

`AEGP_M`askOutlineValH

The actual points that make up the mask. A mask outline's points come in a set order, and the mask doesn't have to be closed.

AEGP Mask Outline Suite

`AEGP_T`extDocumentH

Stands in for the real text that belongs to a text layer.

AEGP Text Document Suite

`AEGP_T`extOutlinesH

A handle to every path forming the outlines of a particular text layer.

AEGP Text Layer Suite

`AEGP_M`arkerVal

Whatever data is tied to a specific timeline marker.

AEGP Marker Suite

`AEGP_P`ersistentBlobH

A "blob" holding the preferences as they currently stand.

AEGP Persistent Data Suite

`AEGP_R`enderOptionsH

The configuration that goes with a render request.

AEGP Render Options Suite

`AEGP_L`ayerRenderOptionsH

The configuration that goes with a layer render request.

AEGP Layer Render Options Suite

`AEGP_F`rameReceiptH

A handle pointing at a frame that has been rendered.

AEGP Render Suite

`AEGP_RQI`temRefH

One entry in the render queue.

AEGP Render Queue Suite, AEGP Render Queue Item Suite

`AEGP_O`utputModuleRefH

An output module bound to a particular `AEGP_RQI`temRef sitting in the render queue.

AEGP Output Module Suite

`AEGP_S`oundDataH

The audio configuration in force for a given layer.

AEGP Sound Data Suite

`AEGP_R`enderLayerContextH

A snapshot of state at the moment a render is requested, which After Effects passes along to an Artisan.

AEGP Canvas Suite

`AEGP_R`enderReceiptH

What Artisans rely on while they render.

AEGP Canvas Suite

| --- | --- | --- |

## Nasty, Brutish, and Short

### Data Types — Nasty, Brutish, and Short

Details about layers, streams, and plenty of other items are short-lived — user actions tend to invalidate them in short order.

Anything that changes how many items exist (their quantity, not their quality) will void references to those items: drop a keyframe onto a stream and references to that stream go stale, though pushing a layer through a render leaves references to it intact. Never cache a layer's pixels.

Holding onto references across separate invocations of one of your plug-in's hook functions is a bad bet; grab what you need at the moment you need it, and let it go (release it) the instant you can.

## Were You Just Going To Leave That Data Lying Around?

### Data Types — Were You Just Going To Leave That Data Lying Around?

Once you've had After Effects fill in and return handles to data structures, the cleanup falls to you. The data types listed here each require you to invoke the matching disposal routine.

## Data Types Requiring Disposal

### Data Types — Data Types Requiring Disposal

Data Type

Disposal Function

`AEGP_C`ollection2H

`AEGP_D`isposeCollection, from `AEGP_C`ollectionSuite2

`AEGP_F`ootageH

`AEGP_D`isposeFootage, from `AEGP_F`ootageSuite5

`AEGP_W`orldH

`AEGP_D`ispose, from `AEGP_W`orldSuite3 (Or `AEGP_D`isposeTexture, from `AEGP_C`anvasSuite8, if layer texture created using `AEGP_R`enderTexture)

`AEGP_E`ffectRefH

`AEGP_D`isposeEffect, from `AEGP_E`ffectSuite4

`AEGP_M`askRefH

`AEGP_D`isposeMask, from `AEGP_M`askSuite6

`AEGP_R`enderOptionsH

`AEGP_D`ispose, from `AEGP_R`enderQueueMonitorSuite1

`AEGP_L`ayerRenderOptionsH

`AEGP_D`ispose, from `AEGP_L`ayerRenderOptionsSuite1

`AEGP_R`enderReceiptH

`AEGP_D`isposeRenderReceipt, from `AEGP_C`anvasSuite8

| --- | --- |

## Implementation

The AEGP API reaches so far, and ties into After Effects so thoroughly, that getting your plug-in to behave correctly in every scenario takes a fair amount of design thought.

PICA function suites are the channel through which AEGPs talk to After Effects.

There's no guaranteed order in which AEGPs load.

From inside your AEGP's entry point function, test the AEGP API version to learn whether a particular suite will be on hand.

An AEGP is also free to call any effect API suite function that doesn't demand a `PF_P`rogPtr (which effects pull from `PF_I`nData).

## Specialization

### Implementation — Specialization

To get the messaging streams they count on, AEIOs and Artisans have to register themselves with After Effects.

As with the rest of the AEGP API, you do this through a function suite — here, the fittingly named `AEGP_R`egisterSuite.

## Example: Adding A Menu Item

### Implementation — Example: Adding A Menu Item

Inside your entry point function, call `AEGP_G`etUniqueCommand() from the Command Suite to have After Effects give you a command ID to hand to `AEGP_I`nsertMenuCommand. Assign a distinct ID to every menu item you create.

By way of `AEGP_R`egisterSuite's `AEGP_R`egisterCommandHook(), let After Effects know which function to invoke once your menu item(s) get picked. The function you sign up through `AEGP_R`egisterUpdateMenuHook() is what enables and disables those items. Skip registering a menu-updating function and your menu item(s) stay disabled for good.

However many menu items you tack on, just one CommandHook gets registered. Inside it, work out which item the user picked (from the command ID), lean on the AEGP PICA suite functions to read the project's present state, and respond to fit. Keyframing plug-ins, say, might keep their menu items grayed out until a (keyframe-able) parameter stream shows up in the current selection.

## Private Data

### Implementation — Private Data

AEGPs, unlike effects, stay loaded for the whole After Effects session and are never unloaded. Even so, leaning on static and global variables still isn't a smart move.

Every hook function receives a plugin_refconPV where it can stash storage tied to that particular function. Plenty of AEGP Suite functions ask for the aegp_plugin_id; tuck it away in the global_refconPV you're handed — either inside a structure you allocate or as the bare ID.

Wherever you can, lean on these refcons for storage rather than statics and globals. That matters all the more once multi-threading enters the picture.

Reach for global_refconPV to hold your globals (your aegp_plugin_id, for one) and for hook-function-specific storage use refcon.

Watch for a "multiple instances of After Effects" trap: fire up a second, command-line instance and every one of an AEGP's handles gets duplicated. Should that trip you up (and it might), ship code that ties saved handles back to particular instantiations of your plug-in.
