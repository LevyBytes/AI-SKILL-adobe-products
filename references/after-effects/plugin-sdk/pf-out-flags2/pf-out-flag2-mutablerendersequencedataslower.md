# PF_OutFlag2_MUTABLE_RENDER_SEQUENCE_DATA_SLOWER

`PF_OutFlag2_MUTABLE_RENDER_SEQUENCE_DATA_SLOWER`

Found in the After Effects Beta builds from March 2021 onward, and in After Effects 2022. Signals that the effect wants sequence_data duplicated per render thread, which lets each render hold its own writable sequence_data. Be aware that edits to sequence_data are dropped on a regular basis — at present after each span of frames finishes rendering, such as a single RAM Preview or a Render Queue export.

Note

Reserve this flag for plugins you've confirmed to be thread-safe with multi-frame rendering turned on in AE.

For guidance on applying this flag, consult Multi-Frame Rendering in AE under Effect Details.


### Parameters

Parameters are time-varying streams of values: the source image, plus sliders, angles, points, colors, paths, and whatever custom data types you let the user touch.

The plug-in receives them as a `PF_ParamDef` array, though the array's values only hold meaning during specific selectors.

Parameter interpolation and management rank among the finest features of the After Effects effect API.

Wondering how far the shutter angle shifts across a quarter of a 29.97 fps frame? Don't — that's After Effects' job, not yours.

Declare your plug-in's parameters at `PF_Cmd_PARAM_SETUP` time by calling `PF_ADD_PARAM`.

The ceiling sits at roughly 38 kajillion parameters, or however many your users will tolerate scrolling past before they demand their money back. Pick sensibly.

Spare yourself endless grief by zeroing `PF_ParamDefs` with `AEFX_CLR_STRUCT` (declared in `AE_Macros`.h) before you register them.
