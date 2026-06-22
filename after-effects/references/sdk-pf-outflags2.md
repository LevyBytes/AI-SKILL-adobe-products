# Pf Outflags2, Pf Paramdef, Param Zero, The Rest Of The Parameters ...

> Adobe After Effects reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: `PF_O`utFlags2; `PF_P`aramDef; Param Zero; The Rest Of The Parameters; `PF_P`aramDef Members; Parameter UI Flags; Parameter Flags; `PF_V`alueDisplayFlags; `PF_E`ffectWorld / `PF_L`ayerDef.

## `PF_O`utFlags2

### `PF_O`utData — `PF_O`utFlags2

A second batch of outflags arrived with After Effects 5.0 — kept partly to leave headroom for later additions, and partly to wean us off the habit of overloading flags that already meant something else.

Just like `PF_O`utFlags, a good number of these can be flipped over the course of an After Effects session.

Whenever you alter one, keep the PiPL and your source code in sync.

Flag

Indicates

`PF_O`utFlag2_NONE

Nothing.

`PF_O`utFlag2\_`SUPPORTS_QUERY_DYNAMIC_FLAGS`

The effect responds to `PF_C`md*`QUERY_DYNAMIC_FLAGS`. Must be set in the PiPL and during `PF_C`md*`GLOBAL_SETUP`.

`PF_O`utFlag2\_`I_USE_3D_CAMERA`

Tells AE the effect reads 3D camera data.

`PF_O`utFlag2\_`I_USE_3D_LIGHTS`

Tells AE the effect reads 3D lighting data.

`PF_O`utFlag2\_`PARAM_GROUP_START_COLLAPSED_FLAG`

On its own, this bit does not decide whether the param-group twirlies open or close. Each group's starting collapse state comes from `PF_C`md*`PARAM_SETUP`, where you raise `PF_P`aramFlag*`START_COLLAPSED` in `PF_P`aramFlags — yet those per-group choices are ignored unless the effect also turns on this bit. Without it, every parameter group starts collapsed. Set this both in the PiPL and right here during `PF_C`md\_`GLOBAL_SETUP`.

`PF_O`utFlag2\_`I_AM_THREADSAFE`

For now this has no effect. If that piques your interest, look instead at `PF_O`utFlag2\_`PPRO_DO_NOT_CLONE_SEQUENCE_DATA_FOR_RENDER`, covered further down.

`PF_O`utFlag2\_`CAN_COMBINE_WITH_DESTINATION`

Initially introduced for Premiere, but no longer in use.

`PF_O`utFlag2\_`DOESNT_NEED_EMPTY_PIXELS`

Introduced as a render optimization; it trims the input buffer handed to the effect so empty pixels are left out (here "empty" means "zero alpha" — unless `PF_O`utFlag2*`REVEALS_ZERO_ALPHA` is on, in which case RGB has to be zero too). Set it during `PF_C`md*`GLOBAL_SETUP` or `PF_C`md*`QUERY_DYNAMIC_FLAGS`. You'll find where the trimmed buffer starts in in_data>pre_effect_source_origin. When an effect raises both this flag and `PF_O`utFlag*`I_EXPAND_BUFFER`, a fully empty input can result in a null input buffer being passed in, and the effect has to survive that case rather than crash.

Note

raising it may resize the output buffer.

Note

Has no purpose under SmartFX.

`PF_O`utFlag2\_`REVEALS_ZERO_ALPHA`

Of all these flags, this is the one to watch most closely, because it shifts the default behavior. Raise it when the effect can take zero-alpha pixels and surface the RGB hiding inside them (our Set Channels effect does exactly this). Doing so signals After Effects to leave such pixels in place when it works out the effect's input. You can toggle this during `PF_C`md\_`QUERY_DYNAMIC_FLAGS`. Bear in mind that although it can alter the extent_hint's size, the image buffer size stays the same. Starting with 6.0, any pixels beyond the mask's bounding box get zeroed. If your effect can bring those pixels back, set this flag to keep AE from discarding their RGB values. Where the effect only sometimes reveals them, set the bit dynamically. To find out whether you need it, drop a mask much smaller than the layer onto a solid, then apply the effect and switch it into its alpha-modifying mode. Should the mask's rectangular bounding box show up, the bit is required.

`PF_O`utFlag2\_`PRESERVES_FULLY_OPAQUE_PIXELS`

Preserve those pixels!

`PF_O`utFlag2\_`SUPPORTS_SMART_RENDER`

The effect uses the SmartFX API.

`PF_O`utFlag2\_`FLOAT_COLOR_AWARE`

Signals that the effect handles 32-bpc floating point color.

Note

`PF_O`utFlag2\_`SUPPORTS_SMART_RENDER` must also be set.

`PF_O`utFlag2\_`I_USE_COLORSPACE_ENUMERATION`

Meant for effects tuned to handle different color spaces inside Premiere Pro. Consult the Premiere Pro SDK for the specifics.

`PF_O`utFlag2\_`I_AM_DEPRECATED`

Raise this at `PF_C`md*`GLOBAL_SETUP` and the effect lands in the localized "Obsolete" folder of the Effects panel. Contrast with `PF_O`utFlag*`I_AM_OBSOLETE`.

`PF_O`utFlag2\_`PPRO_DO_NOT_CLONE_SEQUENCE_DATA_FOR_RENDER`

Honored in Premiere Pro but not After Effects. It governs the way Premiere Pro runs the plug-in across multiple threads.

`PF_O`utFlag2\_`AUTOMATIC_WIDE_TIME_INPUT`

Set during `PF_C`md*`GLOBAL_SETUP`. You still have to raise `PF_O`utFlag*`WIDE_TIME_INPUT` (which keeps support for old hosts working), but in practice this flag supersedes it. Once it's on, every parameter checkout gets tracked, so the host learns the over-time dependencies and runs far more efficiently. To illustrate: with only the older `PF_O`utFlag*`WIDE_TIME_INPUT` set, any change at any time upstream of your effect forces a re-render. With this flag instead, if frame 17 checked out data from times 0-17, AE understands that edits at frame 18 and beyond leave that cached frame untouched. Keep in mind that once you adopt this new flag, you must not stash any time-dependent data in your sequence data (or anywhere), unless you first confirm that cache with `PF_G`etCurrentState() / `PF_A`reStatesIdentical() from `PF_P`aramUtilSuite3 before relying on the time-dependent data. This is limited to SmartFX (the ones raising `PF_O`utFlag2*`SUPPORTS_SMART_RENDER`). Without that, After Effects quietly downgrades this to `PF_O`utFlag\_`WIDE_TIME_INPUT`.

`PF_O`utFlag2\_`I_USE_COMP_TIMECODE`

Set during `PF_C`md\_`GLOBAL_SETUP`. It informs AE that an effect should be re-rendered whenever the composition's start time or its drop-frame setting changes.

`PF_O`utFlag2\_`DEPENDS_ON_UNREFERENCED_MASKS`

New in CS6. Raise it when you intend to read paths that no path param points to directly — say, drawing a stroke across every mask. This lets After Effects know it must invalidate your output when a mask your effect doesn't appear to reference gets edited. Set it during `PF_C`md*`GLOBAL_SETUP` or `PF_C`md*`QUERY_DYNAMIC_FLAGS`.

`PF_O`utFlag2\_`OUTPUT_IS_WATERMARKED`

New in CS6. Raise it during `PF_C`md*`GLOBAL_SETUP` when your output will carry a watermark of some sort that makes it unfit for final delivery — typically because the user is on an unlicensed demo build. It's fine to flip this state mid-session via `PF_C`md*`QUERY_DYNAMIC_FLAGS`, for instance when a floating license status shifts. Authors whose state really does change asynchronously have to ensure the next render matches the most recent state returned from `PF_C`md\_`QUERY_DYNAMIC_FLAGS`, or race conditions may cache the wrong frames. (None of this matters if you only change it in response to `DO_DIALOG`.)

`PF_O`utFlag2\_`SUPPORTS_GPU_RENDER_F32`

New in 16.0 Setting it at `PF_C`md*`GLOBAL_SETUP` declares GPU support: the effect then receives GPU selectors and shows a GPU-supporting badge in the GUI. When `PF_C`md*`GPU_DEVICE_SETUP` runs, these flags spell out what a particular device and framework can render.

`PF_O`utFlag2\_`SUPPORTS_THREADED_RENDERING`

Present in the After Effects Beta builds from June 2020 onward, and in After Effects 2022. Set during `PF_C`md*`GLOBAL_SETUP`, this signals that the effect can render on several threads simultaneously. A layer may carry a single instance or several, and any of them can be told to render concurrently across threads. The flag declares that concurrent multi-threaded rendering is supported; whether one copy or many copies of the effect sit on a layer, all of them can be driven to render at the same moment on different threads. If the `PF_O`utFlag*`SEQUENCE_DATA_NEEDS_FLATTENING` flag is in play, be sure to raise `PF_O`utFlag2\_`SUPPORTS_GET_FLATTENED_SEQUENCE_DATA` as well. See Sequence Data in Multi-Frame rendering for more information.

Note

Reserve this flag for plugins you've verified to be thread-safe once multi-frame rendering is switched on in AE.

To learn how this flag is meant to be used, refer to Multi-Frame Rendering in AE within Effect Details.

`PF_O`utFlag2\_`MUTABLE_RENDER_SEQUENCE_DATA_SLOWER`

Found in the After Effects Beta builds from March 2021 onward, and in After Effects 2022. Signals that the effect wants sequence_data duplicated per render thread, which lets each render hold its own writable sequence_data. Be aware that edits to sequence_data are dropped on a regular basis — at present after each span of frames finishes rendering, such as a single RAM Preview or a Render Queue export.

Note

Reserve this flag for plugins you've confirmed to be thread-safe with multi-frame rendering turned on in AE.

For guidance on applying this flag, consult Multi-Frame Rendering in AE under Effect Details.

| --- | --- |

### Parameters

Parameters are time-varying streams of values: the source image, plus sliders, angles, points, colors, paths, and whatever custom data types you let the user touch.

The plug-in receives them as a `PF_P`aramDef array, though the array's values only hold meaning during specific selectors.

Parameter interpolation and management rank among the finest features of the After Effects effect API.

Wondering how far the shutter angle shifts across a quarter of a 29.97 fps frame? Don't — that's After Effects' job, not yours.

Declare your plug-in's parameters at `PF_C`md\_`PARAM_SETUP` time by calling `PF_ADD_PARAM`.

The ceiling sits at roughly 38 kajillion parameters, or however many your users will tolerate scrolling past before they demand their money back. Pick sensibly.

Spare yourself endless grief by zeroing `PF_P`aramDefs with `AEFX_CLR_STRUCT` (declared in `AE_M`acros.h) before you register them.

### Parameters — Parameter Types

Parameter Type

Parameter Type

`PF_P`aramDefUnion Member

Param Value Data Type

Description

`PF_P`aram_LAYER

`PF_L`ayerDef

ld

A_long

Image and audio layers within the composition. Every effect comes with a minimum of one layer parameter — param[0], the layer the effect is applied to. As effect parameters these show up as a drop-down from which the user picks a layer in the current composition. After Effects fills in the drop-down's entries. NOTE: what you get is a pointer to a layer holding pixels and audio samples — not the pixels and audio samples themselves.

`PF_P`aram_SLIDER

`PF_S`liderDef

sd

long

No longer used.

`PF_P`aram\_`FIX_SLIDER`

`PF_F`ixedSliderDef

fd

`PF_F`ixed

Deprecated. We championed fixed sliders for years. These days `PF_P`aram\_`FLOAT_SLIDER`s are our recommendation instead — the extra precision pays off in plenty of cases and no longer costs what it used to, and frankly the low-byte / high-byte nonsense had worn out its welcome. `FIX_SLIDER`s offer more precision than `PF_P`aram_SLIDER. Set the UI decimal places on their own. Drop the `PF_F`ixed's low word to land on integer results.

`PF_P`aram\_`FLOAT_SLIDER`

`PF_F`loatSliderDef

fs_d

`PF_FPL`ong

Sliders stand for numeric values. `FLOAT_SLIDER`s hold phase, precision, and curve-tolerance values that audio filters use. Give a minimum and a maximum, and the user either drags the slider or types a figure to set it. `PF_P`aram\_`FLOAT_SLIDER`s also honor the slider flags covered in Audio Filters.

`PF_P`aram_ANGLE

`PF_A`ngleDef

ad

`PF_F`ixed

Angles given in fixed-point degrees, precise to tiny fractions of a degree. Because users may dial in several full turns, values can exceed 360.

`PF_P`aram_CHECKBOX

`PF_C`heckBoxDef

bd

`PF_B`oolean

Every checkbox has `PF_P`aramFlag\_`CANNOT_INTERP` applied automatically.

`PF_P`aram_COLOR

`PF_C`olorDef

cd

`PF_P`ixel

An RGB value (alpha goes unused) selectable through the standard color picker or an eye-dropper. When you need floating-point accuracy, pull the values via `PF_C`olorParamSuite1.

`PF_P`aram_POINT

`PF_P`ointDef

td

`PF_F`ixed

A point in two dimensions, giving x and y in destination layer space. The layer's origin is its top-left corner, with x growing rightward and y growing downward. From CS5.5 on, use `PF_P`ointParamSuite1 to read the values at floating-point accuracy. A bit of dusty history: before API spec version 12.1 (After Effects 4.0), the point's default ran 0 to 100 in fixed point with the radix point at bit 16 (plain fixed point, in other words). Passing (50,50) in fixed point landed at the image center. The value handed back for a point control is in absolute pixels carrying some number of fixed-point bits. So if you supplied (50,50) as the default and the user dropped the effect on a 640 by 480 layer, the default you'd receive would come through as (320, 240) in Fixed point. Plug-ins declaring API versions earlier than 12.1 keep the old behavior.

`PF_P`aram_POPUP

`PF_P`opupDef

pd

A_long

A set of choices. In `PF_DEF_NAMESPTR`, build a string whose read-only pop-up items take the form ("Entry1 / Entry2 / Entry3"). After Effects duplicates the data and builds the pop-up menu. Once the parameter is added these entries are fixed, unless the parameter's ui_flags carry `PF_PUI_STD_CONTROL_ONLY`. See Supervisor example. Use an entry of "(-" to draw a separator between the entries on either side.

`PF_P`aram\_`ARBITRARY_DATA`

`PF_A`rbitraryDef

arb_d

???

A custom data type. Arbitrary Data Parameters carry an ID (so you can run more than one custom type in a single effect), a default value (which tells After Effects the starting state of your type), and a handle to the parameter itself. Within AE you must set either `PF_PUI_TOPIC` / `PF_PUI_CONTROL` or `PF_PUI_NO_ECW`. From PPro 8.0 onward you may leave all of those unset, which lets the parameter's keyframe track appear on the right side of Effect Controls without building a custom control.

`PF_P`aram_PATH

`PF_P`athDef

path_d

`PF_P`athID

Path parameters point to masks on the same layer as the effect. You can't reach path parameter data directly; manage and query paths through `PF_P`athQuerySuite1 and `PF_P`athDataSuite. `PF_P`athDef.path_id holds the index of the user's chosen mask. Obtain the matching `AEGP_M`askRefH via `AEGP_G`etLayerMaskByIndex from `AEGP_M`askSuite6.

`PF_P`aram*`GROUP_START` `PF_P`aram*`GROUP_END`

(none) (none)

Parameter groups — also called topics — bundle parameters into sets. Every group gets a twirly of its own and sits indented in the ECP next to the surrounding parameters or groups. You can nest one group inside another. The user can spin any twirly open or shut, and so can the effect under program control. The effect is free to start some groups open and others closed.

`PF_P`aram_BUTTON

`PF_B`utton

button_d

(no value)

A plain push button. Reach for Parameter Supervision to catch when it gets pressed. Added to After Effects in CS5.5.

`PF_P`aram\_`POINT_3D`

`PF_P`oint3D

point3d_d

`PF_F`pLong (3)

A point in three dimensions. New in CS5.5. Not supported in Premiere Pro.

| --- | --- | --- | --- | --- |

### Parameters — Slider Range Issues?

Got a slider that looks inactive yet isn't grayed out? Inspect the valid*min, slider_min, valid_max, and slider_max fields. Check whether the param is a `PF_P`aram*`FIX_SLIDER` — and if it is, whether you turned your mins and maxs into sensible fixed values. The macros in `AE_M`acros.h take ints, so handing them fixed-point values simply won't work.

### Parameters — Point Parameter Origin

Any point parameter gets adjusted by After Effects to compensate for an origin offset that "upstream" effects introduce when they change the output dimensions. The offset is already baked in even when the ECP UI shows the point parameter sitting at (0,0).

## `PF_P`aramDef

With every selector, After Effects hands the effect an array of `PF_P`aramDefs that describes the plug-in's parameters as they stand at the current time. Those array values only carry meaning during certain selectors (each selector's description notes which).

## Param Zero

### `PF_P`aramDef — Param Zero

params[0], the first parameter, is the input image — a `PF_E`ffectWorld / `PF_L`ayerDef — that the effect is meant to process.

## The Rest Of The Parameters

### `PF_P`aramDef — The Rest Of The Parameters

A `PF_P`aramDef stands in for every parameter type. Because unions are involved, you only need to fill in — and only should fill in — the relevant portions of the `PF_P`aramDef.

## `PF_P`aramDef Members

### `PF_P`aramDef — `PF_P`aramDef Members

Data Type

Name

Description

A_long

id

This parameter's ID. Keep a parameter's ID consistent across versions and you can rearrange parameters in later releases of your plug-in without forcing users to re-apply your effect.

`PF_C`hangeFlags

change_flags

Gets set when you've altered a parameter value. Valid only during drag events — not clicks — at `PF_C`md*`USER_CHANGED_PARAM` or `PF_C`md*`UPDATE_PARAMS_UI`.

`PF_P`aramUIFlags

ui_flags

Declare a parameter's UI behavior before you add it; during event handling, only `PF_PUI_DISABLED` can be set.

A_short

ui_width

The width of the parameter's user interface (non-standard parameters only).

A_short

ui_height

The height of the parameter's user interface (non-standard parameters only).

`PF_P`aramType

param_type

Type of parameter.

A_char[32]

`PF_DEF_NAME`

The parameter's name. You can change it while handling events. And yes, people have asked for longer parameter names since After Effects 1.0 — treat fitting an adequate description of your world-altering effect into a mere 31 characters as a poetic constraint, rather like haiku.

`PF_P`aramFlags

flags

Declare a parameter's UI behavior before you add it; during event handling, only `PF_P`aramFlag\_`COLLAPSE_TWIRLY` can be set.

`PF_P`aramDefUnion

u

A union spanning every possible Parameter Type. Only the member named by param_type holds meaningful data.

| --- | --- | --- |

## Parameter UI Flags

### `PF_P`aramDef — Parameter UI Flags

Steer a parameter's user interface using these flags.

Keep UI flags distinct from behavior flags — they live in separate fields of your parameter's definition, and mixing them up leads to erratic behavior.

Flag

Description

`PF_PUI_TOPIC`

Raise this flag when you handle `PF_C`md*EVENTs for the parameter's "topic." The "topic" is the slice of the param UI in the Effect Controls Window (ECW) that stays on screen once the twirly-arrow is twirled up for that param. Setting it obliges you to also set `PF_O`utFlag*`CUSTOM_UI` at `PF_C`md\_`GLOBAL_SETUP` time.

`PF_PUI_CONTROL`

Raise this flag when you handle `PF_C`md*EVENTs for the control area — the region in the ECP that disappears once a parameter's spinner is twirled up. This too requires that `PF_O`utFlag*`CUSTOM_UI` be raised back at `PF_C`md\_`GLOBAL_SETUP`. See Effect UI & Events for more details.

`PF_PUI_STD_CONTROL_ONLY`

Raise this flag when you want only the standard control — no data stream attaches to the parameter, so no keyframes turn up in the Timeline panel. Handy for driving something in your sequence data with a standard control, or your arb data, or custom UI in the comp window, or for setting several other controls as a group. This flag cannot be used with: - `PF_P`aram*CUSTOM - `PF_P`aram*`NO_DATA` - `PF_P`aram*LAYER - `PF_P`aram*`ARBITRARY_DATA` - `PF_P`aram*PATH Setting it obliges you to also set `PF_P`aramFlag_SUPERVISE (otherwise value changes would never reach you, and the setting would do nothing). It does not require that `PF_O`utFlag*`CUSTOM_UI` be set. To give `PF_P`aram*`ARBITRARY_DATA` a standard control, simply add one or more via `PF_PUI_STD_CONTROL_ONLY` with the supported param types, then revise your arb data while handling `PF_C`md*`USER_CHANGED_PARAM`.

`PF_PUI_NO_ECW_UI`

Raise this flag when you want nothing to show in the Effect Controls Window. It presumes the parameter's value gets set elsewhere — perhaps through comp-window custom UI, or as you process `PF_C`md\_`USER_CHANGED_PARAM` for some other param carrying `PF_P`aramFlag_SUPERVISE. Under AE, timeline keyframe visibility is unaffected. Under PPro, the entire row vanishes, so no keyframes show.

`PF_PUI_ECW_SEPARATOR`

Unused in After Effects, but used in Premiere. Raise it when you want a thick line drawn above this parameter in the effect control window. It exists so parameters can be grouped visually when needed, without actually adding groups. You can change it at runtime via the `PF_U`pdateParamUI() method.

`PF_PUI_DISABLED`

Grays the parameter out, typically as a response to `PF_C`md\_`USER_CHANGED_PARAM`.

`PF_PUI_DONT_ERASE_TOPIC`

Keeps After Effects from clearing the parameter's topic.

`PF_PUI_DONT_ERASE_CONTROL`

Keeps After Effects from clearing the parameter's control.

`PF_PUI_RADIO_BUTTON`

Unused in After Effects, but used in Premiere. Renders the parameter as a radio-button group. Valid only for `PF_P`aram_POPUP.

`PF_PUI_INVISIBLE`

First available in Premiere, and now in After Effects CS6 and later. It conceals the parameter UI across both the Effect Controls and the Timeline. Premiere only: the flag is dynamic, so parameter visibility can be flipped during the `PF_U`pdateParamUI callback.

| --- | --- |

On top of these flags, you can hide or show an effect parameter through `AEGP_G`etDynamicStreamFlags.

## Parameter Flags

### `PF_P`aramDef — Parameter Flags

Behavior flags and UI flags capture different aspects of a parameter. Set them before you add the parameter during `PF_C`md\_`PARAM_SETUP`. Where a flag may be set during events, that's called out.

Flag

Meaning

`PF_P`aramFlag\_`CANNOT_TIME_VARY`

The parameter doesn't change over time, so the Timeline panel offers no keyframe control for it.

`PF_P`aramFlag\_`CANNOT_INTERP`

Values aren't interpolated algebraically. Discontinuous (hold) interpolation is still allowed. Good for parameters that are simply on or off, and it speeds rendering up.

`PF_P`aramFlag\_`COLLAPSE_TWIRLY`

Set this flag during `PF_C`md*`USER_CHANGED_PARAM`. You can now both set and clear this bit while handling `PF_C`md*`UPDATE_PARAMS_UI` and `PF_C`md\_`USER_CHANGED_PARAM` messages, letting you twirl your parameters and groups open or shut whenever you like.

`PF_P`aramFlag_SUPERVISE

Turn this on so the parameter is sent `PF_C`md\_`USER_CHANGED_PARAM` messages. See Parameter Supervision for more information.

`PF_P`aramFlag\_`START_COLLAPSED`

Governs a topic spinner's twirl state. It can change during parameter supervision, not only during `PF_C`md*`PARAM_SETUP`. The flag is ignored unless `PF_O`utFlag2*`PARAM_GROUP_START_COLLAPSED` is set.

`PF_P`aramFlag\_`USE_VALUE_FOR_OLD_PROJECTS`

This matters only when loading projects saved by an older build of the effect that didn't yet have parameters you added later. With it set, the `PF_P`aramDef.value supplied in `PF_ADD_PARAM`() seeds the missing parameter, while the dephault field still drives the initial value when the effect is freshly applied or reset. It helps when you want one default value yet need a different one to keep older projects rendering as before.

`PF_P`aramFlag\_`LAYER_PARAM_IS_TRACKMATTE`

Premiere Pro only: valid solely for layer parameters. It marks a layer param as a track-matte carrying applied filters. After Effects ignores it.

`PF_P`aramFlag\_`EXCLUDE_FROM_HAVE_INPUTS_CHANGED`

Matters only for an effect that raises `PF_O`utFlag2\_`AUTOMATIC_WIDE_TIME_INPUT` and intends to invoke `PF_A`reStatesIdentical or `PF_H`aveInputsChangedOverTimeSpan

`PF_P`aramFlag\_`SKIP_REVEAL_WHEN_UNHIDDEN`

New in CS6. When this parameter is unhidden, the flag tells After Effects not to twirl any parents open and not to scroll the parameter into view in either the Effect Controls panel or the Timeline panel. After Effects relies on this internally for paint strokes, so revealing the parameter doesn't distract the user. In a different situation, though — switching on Time Remapping — that parameter does get revealed. So we hand you the same control over parameters in your own effects.

| --- | --- |

## `PF_V`alueDisplayFlags

### `PF_P`aramDef — `PF_V`alueDisplayFlags

Inside `PF_P`aramDefUnion, both `PF_F`loatSliderDef and `PF_F`ixedSliderDef carry a `PF_V`alueDisplayFlags member, letting them follow whatever pixel value display preference the user picks in the info palette. When it's set, the parameter's value shows as 0-1, 0-255, 0-32768, or 0.0 to 1.0, according to that preference. Setting the first bit (`PF_V`alueDisplayFlag_PERCENT) also tacks a percent sign onto the displayed value.

Of course you'd never pull such a stunt, but if you build a parameter that reads as a percentage, spare the user any confusion and don't permit a range beyond 0 to 100. Please. Percent does mean 'out of one hundred'.

## `PF_E`ffectWorld / `PF_L`ayerDef

`PF_E`ffectWorlds — also known as `PF_L`ayerDefs — are how After Effects holds images.
