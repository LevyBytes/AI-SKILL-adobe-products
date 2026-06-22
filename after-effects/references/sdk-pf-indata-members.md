# Pf Indata Members, Extent Hint Usage, Now With 20 More Pixels, Point Controls And Buffer Expansion ...

> Adobe After Effects reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: `PF_I`nData Members; extent_hint Usage; Now with 20% More Pixels!; Point Controls And Buffer Expansion; `PF_O`utData; `PF_O`utData Members; `PF_O`utFlags.

## `PF_I`nData Members

### `PF_I`nData — `PF_I`nData Members

Name

Description

inter

Callbacks covering user interaction, parameter addition, testing whether the user has interrupted the effect, showing a progress bar, and fetching source frames and parameter values at times apart from the one currently rendering. This thoroughly handy suite is covered in Interaction Callback Functions.

utils

Callbacks for graphics and math. This pointer holds a value at every moment.

effect_ref

Opaque data that has to be handed to most of the assorted callback routines. After Effects relies on it to recognize your plug-in.

quality

Whichever quality is in force at the moment, either `PF_Q`uality_HI or `PF_Q`uality_LO. Effects ought to run quicker under LO and with greater precision under HI. Because the graphics utility callbacks behave differently across LO and HI quality, your effect should too. Every frame and sequence selector defines this field.

version

Effects specification version. State the version you require to run properly during `PF_C`md\_`GLOBAL_SETUP`.

serial_num

The invoking application's serial number.

appl_id

The invoking application's identifier. When After Effects hosts your plug-in, appl_id holds the application creator code 'FXTC'. Under Premiere Pro & Other Hosts it is 'PrMr' instead. Use it to check whether a plug-in licensed for one application is being run under another.

num_params

Count of input parameters.

what_cpu

On macOS this holds the Gestalt value identifying the CPU type (consult Inside Macintosh, volume 6). On Windows it has no defined value.

what_fpu

On macOS this holds the Gestalt value identifying the FPU type. On Windows it has no defined value.

current_time

Time of the frame currently rendering, valid throughout `PF_C`md_RENDER. This is current time within the layer rather than within any composition. Should a layer be time-stretched, or start at some point that isn't time 0, the layer's time parts ways with the composition's. Dividing current_time by time_step yields the current frame number. Dividing current_time by time_scale yields the current time in seconds. To cope with time stretching, shifts in composition frame rate, and time remapping, After Effects can request renders at non-integral times — partway between two frames. Stay ready for that; never take for granted that requests land only on frame boundaries.

Note

Since CS3 (8.0), a request to render at a negative current time is possible for effects. Deal!

time_step

How long the source frame currently rendering lasts. Across several nested-composition cases, this source-frame duration can differ from the gap between frames in the layer (local*time_step). Divide by time_scale to express it in seconds. When you compute other source-frame times, such as for `PF_CHECKOUT_PARAM`, rely on this value in place of local_time_step. A time-reversed layer can make it negative. Time remapping on a nested composition can make it shift from one frame to the next. Stretched or remapped source material inside a nested composition can make it differ from local_time_step. As an illustration, that might arise where an inner composition sits within an outer one running at a different frame rate, or where time remapping applies to the outer composition. During `PF_C`md*`SEQUENCE_SETUP` this value reads 0 if it isn't constant across all frames. The `PF_C`md*`FRAME_SETUP` and `PF_C`md*`FRAME_SETDOWN` selectors set it properly.

Warning

Since it can be zero, test it ahead of dividing.

total_time

How long the layer lasts. A layer time-stretched beyond 100% has the value adjusted to suit; a layer stretched shorter leaves the value untouched. With time remapping switched on, this becomes the composition's duration. Divide by time_scale to express it in seconds.

local_time_step

The time gap separating frames in the layer. Any time stretch on a layer affects it. A time-reversed layer can make it negative. In contrast to time_step, it stays constant across consecutive frames. Divide by time_scale to express it in seconds. For a step value that holds steady over the whole frame range of the layer, use local_time_step, which derives from the composition's framerate together with layer stretch.

time_scale

The number of units per second in which current_time, time_step, local_time_step and total_time are expressed. Where time_scale equals 30, those four values are counted in 30ths of a second. A time_step of 3 in that case would mean the sequence is in fact rendering at 10 frames per second. A total_time of 105 would mean the sequence runs 3.5 seconds.

field

Valid solely when `PF_O`utFlag*`PIX_INDEPENDENT` was turned on during `PF_C`md*`GLOBAL_SETUP`. Inspect this field to learn whether processing just the upper or just the lower field is an option.

shutter_angle

The shutter angle for motion blur. The range runs 0 to 1, standing for 360 degrees. It reads zero unless motion blur is both enabled and checked for the layer in question. A shutter*angle of 180 denotes the span between current_time and current_time + 1/2 time_step. Valid solely when `PF_O`utFlag*`I_USE_SHUTTER_ANGLE` was turned on during `PF_C`md\_`GLOBAL_SETUP`. Consult the Motion Blur section for how to build motion blur into your effect.

width

Size of the source layer, which need not equal the width and height fields of the input image parameter. That gap can come from buffer-resizing effects. Downsampling leaves it unaffected.

height

extent_hint

Where the visible parts of the input and output layers overlap; it bounds the composition rectangle once that's transformed into layer coordinates. Looping over only this rectangle of pixels can accelerate your effect dramatically. Consult extent_hint Usage later in this chapter on using it correctly.

output_origin_x

Where the output buffer sits within the input buffer. It's non-zero only when the effect moves the origin.

output_origin_y

downsample_x

So that a user can tell After Effects to render just every nth pixel, point control parameters and layer parameter dimensions get adjusted automatically. Effects require the downsampling factors in order to read scalar parameters that stand for pixel distances within the image, such as sliders. A 4-pixel blur, for instance, should read as a 2-pixel blur when the downsample factor is 1/2 along each axis (downsample factors take the form of ratios). Valid only during: - `PF_C`md*`SEQUENCE_SETUP` - `PF_C`md*`SEQUENCE_RESETUP` - `PF_C`md\_`FRAME_SETUP` - `PF_C`md_RENDER

downsample_y

pixel_aspect_ratio

The pixel aspect ratio, that is width divided by height.

in_flags

Unused.

global_data

Data your plug-in stored under other selectors. After Effects locks it before calling the plug-in and unlocks it afterward.

sequence_data

frame_data

start_sampL

The starting sample number, measured from the start of the audio layer.

dur_sampL

How long the audio runs, given as a sample count. Audio-specific.

total_sampL

The number of samples in the audio layer; the same as total_time stated in samples.

src_snd

A `PF_S`oundWorld describing the incoming sound. Audio-specific.

pica_basicP

A pointer to the PICA Basic suite, which is used to obtain other suites.

pre_effect_source_origin_x

Where the source image originates within the input buffer. Valid only when delivered with a frame selector. It's non-zero only when one or more effects ahead of this one on the same layer resized the output buffer and shifted the origin. Test for both the resize and the new origin to work out the output area. This helps effects that carry implicit spatial operations beyond point controls — flipping a file about an image's center, for one.

Note

Checked-out point parameters get adjusted for the pre-effect origin at the current time, not at the time being checked out.

pre_effect_source_origin_y

shutter_phase

The offset from frame time to the moment the shutter opens, given as a percentage of one frame's duration.

| --- | --- |

## extent_hint Usage

### `PF_I`nData — extent_hint Usage

Note

For SmartFX, hint rectangles become a good deal more potent...and more involved.

Lean on extent_hint to touch only the pixels whose output is actually needed; among the easiest optimizations available, this is one of them.

Signal to After Effects that you rely on in*data>extent_hint by turning on `PF_O`utFlag*`USE_OUTPUT_EXTENT` in `PF_O`utData during `PF_C`md\_`GLOBAL_SETUP` (and within your PiPL).

Switch caching off in the preferences menu before you test extent_hint code, so that any change in your composition makes After Effects re-render your effect.

Were caching left on, the mechanism would mask your plug-in's output — possibly incorrect output.

Slide the layer around inside the composition until it gets cropped. The portion of the layer visible within the composition is the output>extent_hint.

Drop a mask onto your layer and shift it about.

Doing so alters the extent_hint, which bounds every non-zero alpha region of the image.

The in_data>extent_hint is where those two rectangles — the composition and the mask — intersect, and it shifts whenever either does.

To keep rectangle intersection between input and output extents simple for effects that set `PF_O`utFlag\_`PIX_INDEPENDENT`, extent rectangles get computed in the original input layer's coordinate space, before any resizing and origin shifting.

For the output extent in the output buffer's coordinate system, shift the extent_hint by the `PF_I`nData->output_origin_x and y fields.

Allow for downsampling as you compute output size; rendering at full resolution has to remain available to users.

Should the output buffer run past 30,000 by 30,000, clamp it there, and weigh putting up an alert dialog.

After your code is behaving right, switch the cache back on and observe how often the effect actually has to re-render.

Take a drop shadow as an example; a static drop shadow is something users commonly lay over a still image.

Since the output>extent_hint goes unused, the cache sees heavier use.

For effects that expand the buffer, intersect the output>extent*hint with your plug-in's transformed bounds and set the size to match during `PF_C`md*`FRAME_SETUP`.

## Now with 20% More Pixels!

### `PF_I`nData — Now with 20% More Pixels!

Since 6.0, the extent_hints handed over run 20% bigger than the layer itself, which aids our predictive rendering decisions.

Plenty of effects pad the buffer "just a touch", and the hint rectangles often get put to use by After Effects down the line.

## Point Controls And Buffer Expansion

### `PF_I`nData — Point Controls And Buffer Expansion

Effects that grow the output buffer place the original layer's top-left corner by setting output*origin_x/y in `PF_I`nData during `PF_C`md*`FRAME_SETUP`.

Effects further down the chain are told of this shift through the pre_effect_source_origin_x/y. Point parameters get adjusted for the shift on their own.

Put a buffer expander like Gaussian Blur or the Resizer SDK sample ahead of your effect, and feed it a large resize value.

Where your effect mishandles pre_effect_source_origin_x/y, toggling the blur on and off will move the output's position.

Every point parameter value, at any time, carries shift values given by pre_effect_source_origin_x/y. This is seamless for the majority of effects.

That said, when a buffer expansion shifts over time — an animated blur amount, say — the origin shift will displace points that aren't animated.

Keep this in mind while designing effects that cache point parameter values from one frame to the next.

## `PF_O`utData

Report whatever your plug-in changes back to After Effects through `PF_O`utData. The points at which altering these fields is permitted are noted.

## `PF_O`utData Members

### `PF_O`utData — `PF_O`utData Members

Field

Description

my_version

Use the `PF_VERSION` macro to set this flag to the version of your plug-in's code. After Effects reads it to settle which among duplicate effects to load.

name

Unused.

global_data

A handle that comes back to you inside `PF_I`nData on every call. Allocate it with After Effects' memory functions.

num_params

After Effects measures this field against how many `PF_ADD_PARAM` calls were made, plus the implicit input layer.

sequence_data

Allocatable once `PF_C`md\_`SEQUENCE_SETUP` arrives, this handle is handed back to you in `PF_I`nData on every call thereafter.

flat_sdata_size

Unused — After Effects already knows the size, since its allocation functions are what gave you the memory to begin with.

frame_data

A handle you may have allocated under `PF_C`md*`FRAME_SETUP`. It's never written to disk; its job was carrying information from your `PF_C`md*`FRAME_SETUP` reply to your `PF_C`md*RENDER or `PF_C`md*`FRAME_SETDOWN` (which is required if you resize the output buffer). Apart from that, this memory rarely sees use.

width, height, origin

Set under `PF_C`md\_`FRAME_SETUP` when the output image size is not the same as the input. width and height give the output buffer's size, and origin gives the point the input should land on within the output. For a 5-pixel drop shadow toward the upper left, make origin (5, 5).

out_flags

Pass messages to After Effects. OR several values together.

return_msg

Whatever C string you place here gets displayed by After Effects (it's checked and cleared following every command selector).

start_sampL, dur_sampL, dest_snd

For Audio commands only

out_flags2

Pass messages to After Effects. OR several values together.

| --- | --- |

## `PF_O`utFlags

### `PF_O`utData — `PF_O`utFlags

After Effects learns about capability and status through these flags. Earlier releases also used them to carry crude messages — refreshing the UI or sending an error message, for example.

Function suites have taken over those duties, and every new messaging function will arrive in that shape. The PiPL, though, still holds the capability flags.

Whenever you change something, revise both the PiPL and your source code. A good many of these flags are changeable over the course of an After Effects session.

Flag

Indicates

`PF_O`utFlag\_`KEEP_RESOURCE_OPEN`

The plug-in's resources have to be reachable throughout every command. Under `PF_C`md*`GLOBAL_SETUP` the plug-in's resources are always open, but at all other times they're unreachable (apart from during `PF_C`md_ABOUT and `PF_C`md*`DO_DIALOG`) unless this flag is set. Set it when you require resource access at any moment beyond `PF_C`md\_`GLOBAL_SETUP`.

Note

Our advice is for the plug-in to load and hold the resources it needs in global data, instead of leaving the file's resources open.

`PF_O`utFlag\_`WIDE_TIME_INPUT`

The effect checks a parameter out at some time other than current*time. Set this flag if you draw on a parameter (layer parameters included) from another time. Without it, After Effects won't properly invalidate the cached frames your effect uses. Set during `PF_C`md*`GLOBAL_SETUP`. Where you set this flag, we strongly advise also setting `PF_O`utFlag2\_`AUTOMATIC_WIDE_TIME_INPUT` for stronger performance.

`PF_O`utFlag\_`NON_PARAM_VARY`

With this flag on, After Effects refrains from caching output where the effect is applied to a still. Otherwise it caches your output for use in rendering other frames where it can. Set this flag where output changes based on anything other than a parameter value. An effect that yields changing frames on a still image with every parameter held constant is a clear signal this bit belongs on (Wave Warp, for instance). Particle effects, say, will require it. Set during `PF_C`md*`GLOBAL_SETUP`. It can be overridden on the fly when needed under `PF_C`md*`QUERY_DYNAMIC_FLAGS`. Switch it off wherever you can to help performance.

`PF_O`utFlag_RESERVED6

Unused. Once `PF_O`utFlag*`SEND_PARAMS_UPDATE`. Superseded by `PF_O`utFlag*`REFRESH_UI`.

`PF_O`utFlag\_`SEQUENCE_DATA_NEEDS_FLATTENING`

This flag is taken as set by both After Effects and Premiere Pro. Flattening becomes necessary where sequence data carries referencing items (pointers, handles), which have to be flattened for storage and unflattened for use. See `PF_C`md\_`SEQUENCE_RESETUP`.

`PF_O`utFlag\_`I_DO_DIALOG`

The effect puts up a dialog in reply to `PF_C`md*`DO_DIALOG`. Set during `PF_C`md*`GLOBAL_SETUP`, checked during `PF_C`md\_`SEQUENCE_SETUP`.

Note

An effect's reply to `PF_O`utFlag\_`I_DO_DIALOG` cannot be undone. Should such changes prove necessary, arbitrary data paired with a custom UI is an option.

`PF_O`utFlag\_`USE_OUTPUT_EXTENT`

The effect respects the output extent*rect. Set during `PF_C`md*`GLOBAL_SETUP`. For correct usage, see the details at the chapter's end.

Note

Obsolete for SmartFX.

`PF_O`utFlag\_`SEND_DO_DIALOG`

For the effect to work it must show a dialog (added to stay compatible with Photoshop plug-ins). `PF_C`md*`DO_DIALOG` gets sent by After Effects after `PF_C`md*`SEQUENCE_SETUP`. Set during `PF_C`md*`SEQUENCE_RESETUP` rather than during `PF_C`md*`GLOBAL_SETUP`.

`PF_O`utFlag\_`DISPLAY_ERROR_MESSAGE`

Show what return_msg holds inside an error dialog. Any time return_msg isn't NULL, its contents get shown by After Effects in a dialog, which becomes an error dialog when this flag is set. Set following any command, and handy while debugging. It's also a tidy way to put nag messages into tryout versions.

`PF_O`utFlag\_`I_EXPAND_BUFFER`

The effect grows the output buffer. Set during `PF_C`md*`GLOBAL_SETUP`. Set both this flag and `PF_O`utFlag*`USE_OUTPUT_EXTENT` so that, during `PF_C`md\_`FRAME_SETUP`, where your fresh buffer size overlaps the output extent_rect is what's used. Lean on the pre_effect_source_origin fields to spot other transformations.

Note

Set this flag only where you have to; it slashes caching efficiency.

Note

Obsolete for SmartFX.

`PF_O`utFlag\_`PIX_INDEPENDENT`

Any given pixel stands apart from the pixels surrounding it. Set during `PF_C`md*`GLOBAL_SETUP` or `PF_C`md*`QUERY_DYNAMIC_FLAGS`. For instance, color correction effects tend to be pixel independent while distortions aren't.

Note

Where your effect doesn't let one pixel's color values sway those of neighboring pixels, set this outflag!

The performance gains can be dramatic.

`PF_O`utFlag\_`I_WRITE_INPUT_BUFFER`

The effect writes into the input buffer. Its usefulness is narrow; it saves an allocation but voids some pipeline caching. Set during `PF_C`md\_`GLOBAL_SETUP`.

`PF_O`utFlag\_`I_SHRINK_BUFFER`

To be kinder on memory, the effect shrinks its buffer according to the extent*rect. Set during `PF_C`md*`GLOBAL_SETUP` whenever you can.

Note

Obsolete for SmartFX.

`PF_O`utFlag\_`WORKS_IN_PLACE`

Unused.

`PF_O`utFlag\_`SQUARE_PIX_ONLY`

Unused.

`PF_O`utFlag\_`CUSTOM_UI`

The effect carries a custom user interface and needs `PF_C`md*EVENT messages. Set during `PF_C`md*`GLOBAL_SETUP`.

`PF_O`utFlag_RESERVED5

Unused.

`PF_O`utFlag\_`REFRESH_UI`

Refresh the whole of the effect controls, composition, and layer windows. Set during `PF_C`md*EVENT, `PF_C`md_RENDER, and `PF_C`md*`DO_DIALOG`. When you refresh custom UI under `PF_C`md_EVENT, our recommendation is the new redraw mechanism with its finer granularity.

`PF_O`utFlag\_`NOP_RENDER`

Set this flag during `PF_C`md\_`FRAME_SETUP` to void the current render.

`PF_O`utFlag\_`I_USE_SHUTTER_ANGLE`

Signals that rendered images hinge on the value of shutter_angle.

`PF_O`utFlag\_`I_USE_AUDIO`

The effect's parameters hinge on audio data, fetched via `PF_CHECKOUT_LAYER_AUDIO`.

`PF_O`utFlag\_`I_AM_OBSOLETE`

The effect remains usable within an old project where it was first applied, yet stays off the effect menu.

`PF_O`utFlag\_`FORCE_RERENDER`

The effect made a change calling for a re-render. `PF_C`hangeFlag\_`CHANGED_VALUE` likewise forces a re-render.

`PF_O`utFlag_Pi`PL_OVERRIDES_OUTDATA_OUTFLAGS`

After Effects will go by the PiPL outflags and disregard whatever was set during `PF_C`md\_`GLOBAL_SETUP`.

`PF_O`utFlag\_`I_HAVE_EXTERNAL_DEPENDENCIES`

The effect leans on an external file (or external font). With it set, After Effects sends `PF_C`md\_`GET_EXTERNAL_DEPENDENCIES`.

`PF_O`utFlag\_`DEEP_COLOR_AWARE`

The effect copes with 16-bpc color.

`PF_O`utFlag\_`SEND_UPDATE_PARAMS_UI`

Set this flag during `PF_C`md*`GLOBAL_SETUP` so that `PF_C`md*`UPDATE_PARAMS_UI` reaches you.

`PF_O`utFlag\_`AUDIO_FLOAT_ONLY`

The effect needs audio data in `PF_SIGNED_FLOAT` format. Any conversion required is carried out by After Effects. You're also obliged to set either `PF_O`utFlag*`AUDIO_EFFECT_TOO` or `PF_O`utFlag*`AUDIO_EFFECT_ONLY`.

`PF_O`utFlag\_`AUDIO_IIR`

Set during `PF_C`md*`GLOBAL_SETUP` where the (audio) effect is an Infinite Impulse Response filter. That holds when output at one time hinges on output from earlier times. As an IIR filter takes `PF_C`md*`AUDIO_RENDER`, the input audio span matches the output audio span (where these meet the output span asked for in `PF_C`md*`AUDIO_SETUP`). Replying to `PF_C`md*`AUDIO_SETUP`, the filter is able to ask for audio from earlier times (the case for delay effects). It can reach parameters from that earlier time, and ought to cache them — along with interim audio — within sequence data. Where the audio produced doesn't match the requested output audio's time, set the output audio duration to zero. Drawing on the parameters and the input audio, the filter can refresh its delay line. With its delay line cached, ask for more input audio during `PF_C`md\_`AUDIO_SETUP` based on that last cached delay line. Lean on `PF_H`asParamChanged to judge whether your cache still holds.

`PF_O`utFlag\_`I_SYNTHESIZE_AUDIO`

Set during `PF_C`md*`GLOBAL_SETUP` where the effect makes audio, even when handed silence. You're also obliged to set either `PF_O`utFlag*`AUDIO_EFFECT_TOO` or `PF_O`utFlag\_`AUDIO_EFFECT_ONLY`.

`PF_O`utFlag\_`AUDIO_EFFECT_TOO`

Set during `PF_C`md\_`GLOBAL_SETUP` where the effect changes audio.

`PF_O`utFlag\_`AUDIO_EFFECT_ONLY`

Set during `PF_C`md\_`GLOBAL_SETUP` where the effect changes audio output alone.

| --- | --- |
