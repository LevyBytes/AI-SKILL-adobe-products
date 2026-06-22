# Command Selectors Table, What S The Difference, Pf Indata

> Adobe After Effects reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Command Selectors Table; What's The Difference?; `PF_I`nData.

## Command Selectors Table

### Command Selectors — Command Selectors Table

### Global Selectors

Every plug-in is obligated to handle this group of selectors.

Selector

Response

`PF_C`md_ABOUT

Put up a dialog that explains what the plug-in does. Fill out_data>return_msg and a basic modal dialog gets shown by After Effects. Make sure the dialog carries your plug-in's version details. While this selector runs on macOS, the active resource file points at your effects module.

`PF_C`md\_`GLOBAL_SETUP`

Establish whatever flags and `PF_O`utData fields (out_data>my_version among them) are needed to characterize how your plug-in operates.

`PF_C`md\_`GLOBAL_SETDOWN`

Release every piece of global data — only needed when you allocated any.

`PF_C`md\_`PARAM_SETUP`

Lay out your parameters and sign them up through `PF_ADD_PARAM`. Custom interface elements get registered here too. Make `PF_O`utData>num_params equal to how many parameters you defined.

| --- | --- |

### Sequence Selectors

Handling of sequence data is governed by these.

Selector

Response

`PF_C`md\_`SEQUENCE_SETUP`

Reserve and set up whatever data belongs to a given sequence. This arrives the moment the effect gets applied for the first time. `PF_I`nData has been populated by then.

`PF_C`md\_`SEQUENCE_RESETUP`

Rebuild — typically unflatten — the sequence data. This comes through after the data has been loaded from disk, while pre-composing, or upon the effect being copied; before any duplication After Effects flattens the sequence data. When duplicating, both the original and the freshly made sequence get a `PF_C`md*`SEQUENCE_RESETUP`. A `PF_C`md*`SEQUENCE_FLATTEN` won't necessarily appear between two `PF_C`md\_`SEQUENCE_RESETUP`s.

`PF_C`md\_`SEQUENCE_FLATTEN`

Arrives during a save and during sequence duplication. Take sequence data that holds pointers or handles and flatten it into a form fit for disk. What you produce gets stored alongside the project file. Dispose of the unflat copy and aim out*data>sequence_data at the new flattened block. The flat data has to carry the correct byte order for file storage. Starting with 6.0, an effect whose sequence data was flattened a short while ago may be removed without a further `PF_C`md*`SEQUENCE_SETDOWN`; in that situation your flat sequence data is discarded by After Effects.

`PF_C`md\_`SEQUENCE_SETDOWN`

Release all of the sequence data.

| --- | --- |

### Frame Selectors

Delivered for every frame — or batch of audio samples — that your plug-in is asked to render.

Selector

Response

`PF_C`md\_`FRAME_SETUP`

Reserve any data tied to a single frame. It shows up right before each frame renders so per-frame setup data can be prepared. Should your effect alter how big its output buffer is, declare the fresh output height, width, and relative origin. Every parameter other than the input layer holds a valid value. After Effects disregards your reply to the next `PF_C`md*RENDER if you zero out both width and height. NOTE: with `PF_O`utflag*`I_EXPAND_BUFFER` set, this selector (along with `PF_C`md\_`FRAME_SETDOWN`) reaches you twice, the first pair without any `PF_C`md_RENDER separating them. That tells us if the layer in question is going to be visible at all. Frame data harks back to an era when a machine might carry 8MB of RAM. With the calling order shown above, allocating inside `PF_C`md_RENDER instead is far more efficient.

`PF_C`md_RENDER

Produce the effect in the output using the input frame plus whatever the parameters say. Only 8-bit or 16-bit per channel rendering is supported by this render call. Anything at 32-bit per channel has to go through `PF_C`md*`SMART_RENDER`. Each field of `PF_I`nData is valid. Should something interrupt your reply to this selector — an error code returned by your `PF_ABORT` or `PF_PROGRESS` calls — your output gets discarded. frame_data cannot be freed during this selector; hold off until `PF_C`md*`FRAME_SETDOWN`.

`PF_C`md\_`FRAME_SETDOWN`

Release whatever frame data you reserved under `PF_C`md\_`FRAME_SETUP`.

`PF_C`md\_`AUDIO_SETUP`

Comes ahead of each audio render. Ask for a stretch of input audio over time. Reserve and initialize whatever data is specific to the sequence. When your effect needs input drawn from a different time span than the output one, revise the startsampL and endsampL fields of `PF_O`utData.

`PF_C`md\_`AUDIO_RENDER`

Fill `PF_O`utData.dest_snd with the processed audio. Each field of `PF_I`nData is valid. If your reply to this selector gets interrupted — your `PF_ABORT` or `PF_PROGRESS` calls hand back an error code — the output you made is not used.

`PF_C`md\_`AUDIO_SETDOWN`

Release the memory you reserved under `PF_C`md\_`AUDIO_SETUP`.

`PF_C`md\_`SMART_PRE_RENDER`

```

SmartFX only. Work out, by whatever logic the effect uses, which region(s) of the input are needed to generate its output.

When the host is MediaCore, this can arrive as many as two times. The first one shows up inside GetFrameDependencies as the inputs are gathered.

Full frame dimensions are something the source checkouts may hand back at this point. After the sources finish rendering, should their size not match what the first call produced, a second emission of this selector follows, carrying the real source sizes so the output size comes out right.

Keep in mind that the entire output is what MediaCore is after, hence PF_PreRenderOutput::max_result_rect is what gets used.

New in 16.0

To drive rendering on the GPU, turn on PF_RenderOutputFlag_GPU_RENDER_POSSIBLE within PF_PreRenderOutput.

When that flag stays off, the render being asked for cannot run on the requested GPU — whether due to parameters or to render settings.

PreRender may be issued again by the host carrying a different what_gpu choice (or PF_GPU_Framework_None).

typedef struct {
  PF_RenderRequest  output_request; // what the effect is being asked to render
  short             bitdepth;       // bitdepth the effect is being driven in (in bpc)
  const             void *gpu_data; // (new AE 16.0)
  PF_GPU_Framework  what_gpu;       // (new AE 16.0)
  A_u_long          device_index;   // (new AE 16.0) For use in conjunction with PrSDKGPUDeviceSuite
} PF_PreRenderInput;
```

`PF_C`md\_`SMART_RENDER`

SmartFX only. Carry out the rendering and supply output covering the region(s) the effect was instructed to render.

|  |  |
| --- | --- |
|  |  |
|  |  |
|  |  |
|  |  |
|  |  |
|  |  |
|  |  |
|  |  |

### Messaging

How your plug-in and After Effects talk to each other.

Selector

Response

`PF_C`md_EVENT

The extra parameter comes into play with this selector; which kind of event needs handling is signaled by the e_type field, part of the structure that extra points to. See Effect UI & Events.

`PF_C`md\_`USER_CHANGED_PARAM`

A parameter value was altered by the user. This command reaches you solely when you've turned on the `PF_P`aramFlag*SUPERVISE flag. You adjust the parameter to govern values, or let one parameter's value shape others. Several different actions can modify a parameter. While the user is changing the param that fired `PF_C`md*`USER_CHANGED_PARAM`, in_data.current_time holds the time of the frame they're viewing in the UI (under the hood, the comp's current time mapped into layer time). That's likewise the time of any keyframe added on its own — provided none exists yet and the stopwatch is on. Usually it lines up with the value handed to the `PF_C`md_RENDER that comes right after (caps lock being down is the exception), though not always — another open comp window might trigger a render at some other time because of the changed param.

`PF_C`md\_`UPDATE_PARAMS_UI`

A refresh of the effect controls palette (ECP) is required. That can happen once the ECP opens or once you move to a different time in the composition. Parameter characteristics can be altered (for instance, switching them on or off) via a call to `PF_U`pdateParamUI(). Replies to this command may only involve cosmetic changes. Hold off on changing parameter values while handling `PF_C`md*`UPDATE_PARAMS_UI`; handle that under `PF_C`md*`USER_CHANGED_PARAM` instead. For this command to arrive on a regular basis, `PF_O`utFlag*`SEND_UPDATE_PARAMS_UI` has to have been set in the PiPL and during `PF_C`md*`GLOBAL_SETUP`.

Note

Parameters should never be checked out during this selector. Recursive trouble is all but certain to follow.

`PF_C`md\_`DO_DIALOG`

Put up an options dialog. It gets sent once the Options button gets clicked (or a menu command is picked). The selector arrives only when the effect has already declared it owns a dialog (by turning on the global `PF_O`utFlag*`I_DO_DIALOG` flag in reply to `PF_C`md*`GLOBAL_SETUP`). Under version 3.x, the params delivered with `PF_C`md*`DO_DIALOG` were not valid. That has changed; plug-ins are now able to reach non-layer parameters, check parameters out at other times, and refresh the UI throughout `PF_C`md*`DO_DIALOG`. Altering the parameter's values is still off limits to them.

`PF_C`md\_`ARBITRARY_CALLBACK`

Handle your arbitrary data type. This comes to you only once you've signed up a custom data type parameter. Which handler function is being invoked is indicated by the extra parameter. There's more on custom data types in Implementing Arbitrary Data.

`PF_C`md\_`GET_EXTERNAL_DEPENDENCIES`

Sent solely when `PF_O`utFlag*`I_HAVE_EXTERNAL_DEPENDENCIES` was turned on under `PF_C`md*`GLOBAL_SETUP`. Load up a string handle (found in the `PF_E`xtDependenciesExtra that extra points to) with a rundown of what your plug-in depends on, taking care to leave room for the closing NULL character. Should there be nothing to declare, just hand back a NULL pointer for the string handle. Where the check type is `PF_D`epCheckType*`ALL_DEPENDENCIES`, declare everything your plug-in could conceivably need to render. Declare only the items that are absent (or a null string when none are) where the check type is `PF_D`epCheckType*`MISSING_DEPENDENCIES`.

`PF_C`md\_`COMPLETELY_GENERAL`

Answer an AEGP. Whatever parameter the AEGP passed is what the extra parameter points at. Effects that reply to this selector are the only ones an AEGP can talk to.

`PF_C`md\_`QUERY_DYNAMIC_FLAGS`

Goes only to plug-ins that have declared `PF_O`utFlag2*`SUPPORTS_QUERY_DYNAMIC_FLAGS` in `PF_O`utFlags2, both in their PiPL and during `PF_C`md*`GLOBAL_SETUP`. For every one of the dynamic flags, if there's any chance you'll alter it under this command, the flag must have been switched on during `PF_C`md*`GLOBAL_SETUP`. The timing of this selector is arbitrary. The proper reply is for the effect to reach its (non-layer) parameters through `PF_CHECKOUT_PARAM` and judge whether any flag that backs `PF_C`md*`QUERY_DYNAMIC_FLAGS` ought to be set, among them: - `PF_O`utFlag*`WIDE_TIME_INPUT` - `PF_O`utFlag*`NON_PARAM_VARY` - `PF_O`utFlag*`PIX_INDEPENDENT` - `PF_O`utFlag*`I_USE_SHUTTER_ANGLE` - `PF_O`utFlag2*`I_USE_3D_CAMERA` - `PF_O`utFlag2*`I_USE_3D_LIGHTS` - `PF_O`utFlag2*`DOESNT_NEED_EMPTY_PIXELS` - `PF_O`utFlag2*`REVEALS_ZERO_ALPHA` - `PF_O`utFlag2*`DEPENDS_ON_UNREFERENCED_MASKS` - `PF_O`utFlag2*`OUTPUT_IS_WATERMARKED` Because caching and optimization rely on this information, try to answer as fast as you can.

`PF_C`md\_`GPU_DEVICE_SETUP`

The host may invoke this selector whenever it likes. No GPU device gets it more than a single time. Several GPU devices can sit in the setup state simultaneously. Its arrival falls after GlobalSetup yet ahead of SequenceSetup. The idea is to let the effect handle GPU initialization where needed and to give it a chance to decline a GPU device purely on that device's own properties, apart from any render context such as frame size. An effect that turns down the GPU device ends up called for CPU render instead. `PF_I`nData::what*gpu != `PF_GPU_F`ramework_None is the expectation. The effect should turn on one or both `PF_O`utFlag2*`SUPPORTS_GPU_RENDER_F`xx flags in `PF_O`utData::out*flags2 when the device and framework named in what_gpu are supported. Bear in mind only `PF_O`utFlag2*`SUPPORTS_GPU_RENDER_F32` exists in AE 16.0. Any effect that leaves these flags unset will NOT be treated as supporting GPU rendering on those devices. `PF_GPUD`eviceSetupOutput::gpu*data is a pointer the plug-in owns and must let go through the `PF_C`md*`GPU_DEVICE_SETDOWN` selector. That same pointer can also be reached at render time.

`PF_C`md\_`GPU_DEVICE_SETDOWN`

```

Let go of whatever resources gpu_data holds. Within AE this fires right before the GPU device is released.

typedef struct {
  void              *gpu_data;  // effect must dispose.
  PF_GPU_Framework  what_gpu;
  A_u_long          device_index; // For use in conjunction with PrSDKGPUDeviceSuite
} PF_GPUDeviceSetdownInput;

typedef struct {
  PF_GPUDeviceSetdownInput  input;
} PF_GPUDeviceSetdownExtra;
```

`PF_C`md\_`GPU_SMART_RENDER_GPU`

```

The GPU counterpart of the established PF_Cmd_SMART_RENDER selector.

Whether PF_Cmd_SMART_RENDER or PF_Cmd_SMART_RENDER_GPU fires at render time hinges on whether a CPU or a GPU frame is the expected output from the effect.

PF_Cmd_SMART_RENDER_GPU fires only where what_gpu != PF_GPU_Framework_None, and it bears on every input / output PF_LayerDef.

Every frame check-in and check-out works on GPU frames while this selector is underway. Be aware the Extra structs are shared with PF_Cmd_SMART_RENDER.

typedef struct {
  PF_RenderRequest  output_request;   // what the effect is being asked to render
  short             bitdepth;         // bitdepth the effect is being driven in (in bpc)
  void              *pre_render_data; // passed back from value placed in extra->output->pre_render_data during PF_Cmd_PRE_RENDER
  const void        *gpu_data;        // (new AE 16.0)
  PF_GPU_Framework  what_gpu;         // (new AE 16.0)
  A_u_long          device_index;     // (new AE 16.0)
} PF_SmartRenderInput;

typedef struct {
  PF_SmartRenderInput *input;
  PF_SmartRenderCallbacks *cb;
} PF_SmartRenderExtra;
```

For the GPU-related selectors, the what*gpu and device_index fields carried in the extra input tell the plug-in which GPU framework rendering will use. Input and output buffers get readied on that framework and device. PrSDKGPUDeviceSuite::GetDeviceInfo lets you query the device, context, command queue, and the rest of the related GPU state. The value of what_gpu stays identical across the `PF_C`md*`SMART_PRE_RENDER` and `PF_C`md\_`SMART_RENDER_GPU` selector calls.

| --- | --- |

## What's The Difference?

### Command Selectors — What's The Difference?

A fine distinction separates `PF_C`md*`USER_CHANGED_PARAM` from `PF_C`md*`UPDATE_PARAMS_UI`.

What an effect has to tell apart is a genuine change to a parameter value by the user (`PF_C`md*`USER_CHANGED_PARAM`) versus mere scrubbing along the timeline (`PF_C`md*`UPDATE_PARAMS_UI`, which also fires the first time the plug-in loads).

Predictability extends only to the opening handful of command selectors; user action drives the remainder of the calling order.

On first application a plug-in is handed `PF_C`md*`GLOBAL_SETUP`, followed by `PF_C`md*`PARAM_SETUP`. `PF_C`md\_`SEQUENCE_SETUP` arrives every time the user drops the effect onto a layer.

For every frame that a plain non-SmartFX effect renders, the order from After Effects is `PF_C`md*`FRAME_SETUP`, then `PF_C`md_RENDER, then `PF_C`md*`FRAME_SETDOWN`. `PF_C`md_RENDER must be handled by all effect plug-ins.

With SmartFX, any number of `PF_C`md*`SMART_PRE_RENDER` calls may precede the single `PF_C`md*`SMART_RENDER` that follows.

On exit — when the user pulls an effect or shuts the project — `PF_C`md*`SEQUENCE_SETDOWN` goes out. `PF_C`md*`SEQUENCE_RESETUP` goes out when a project loads or when the layer it sits on changes. `PF_C`md\_`SEQUENCE_FLATTEN` goes out as the After Effects project gets written to disk.

`PF_C`md_ABOUT goes out once the user picks About... from the Effect Controls Window (ECW).

`PF_C`md\_`GLOBAL_SETDOWN` goes out as After Effects shuts down, or once the final instance of the effect is pulled. Don't lean on this message to tell when your plug-in leaves memory; rely on OS-specific entry points for that.

## `PF_I`nData

System, project, layer, and audio details are relayed from After Effects by way of `PF_I`nData. Ahead of each command selector reaching a plug-in, this structure gets refreshed.

Where a field only carries valid data during particular `PF_C`mds, that's called out.

And relax — `PF_I`nData may look intimidatingly big, but committing every member's role to memory isn't necessary; only some of the fields will matter to you, and only some of the time.

### Basic Host Differences — `PF_I`nData

Premiere Pro handles field rendering differently from After Effects. During field rendering, `PF_I`nData>field reports the current field being rendered, regardless of whether `PF_O`utFlag\_`PIX_INDEPENDENT` was set.

In Premiere Pro, `PF_I`nData>quality contains the monitor window quality setting received by effects. After Effects differs because this field contains the source layer's quality setting.
