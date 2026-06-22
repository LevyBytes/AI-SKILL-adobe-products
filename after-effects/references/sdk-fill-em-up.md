# Fill Em Up, Sampling Images, Do The Math For Me, Interaction Callback Functions ...

> Adobe After Effects reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Fill 'Em Up!; Sampling Images; Do The Math For Me; Interaction Callback Functions; Interaction Callbacks; Parameter Checkout vs. Param Zero; Parameter Checkout Behavior; Parameter Checkout And Re-Entrancy; Progress During Iteration; Pixel Aspect Ratio; Don't Assume Pixels Are Square, Or 1-To-1; Suggested Approach; Applying User Input In Pixels.

## Fill 'Em Up!

### Graphics Utility Suites — Fill 'Em Up!

Use the FillMatteSuite when you want to populate a `PF_E`ffectWorld: one option floods it with a color of your choosing, the other premultiplies it by a given alpha.

### `PF_F`illMatteSuite2

Function

Purpose

fill

```

Fills a rect with a color (or, if the color pointer is null, fills with black and alpha zero).

If the rect is null, it fills the entire image.

PF_Err fill (
  PF_ProgPtr      effect_ref,
  const PF_Pixel  *color,
  const PF_Rect   *dst_rect,
  PF_EffectWorld  *world);
```

fill16

Same as fill, but takes a pointer to a `PF_P`ixel16 color.

fill_float

Takes a pointer to a `PF_P`ixelFloat color.

premultiply

```

Converts to (and from) r, g, and b color values pre-multiplied with black to represent the alpha channel.

Quality independent.

- forward is used as a boolean

- true means convert non-premultiplied to pre-multiplied

- false mean un-pre-multiply.

PF_Err premultiply (
  A_long          forward,
  PF_EffectWorld  *dst);
```

premultiply_color

```

Converts to (and from) having r, g, and b color values premultiplied with any color to represent the alpha channel.

PF_Err premultiply_color (
  PF_ProgPtr      effect_ref,
  PF_EffectWorld  *src,
  PF_Pixel        *color,
  A_long          forward,
  PF_EffectWorld  *dst);
```

premultiply_color16

Same as above, but takes a pointer to a `PF_P`ixel16 color.

premultiply_color_float

Takes a pointer to a `PF_P`ixelFloat color.

| --- | --- |

## Sampling Images

### Graphics Utility Suites — Sampling Images

Note: any region lying beyond the edges of the image being sampled counts as zero alpha. As a convenience, this single table gathers the functions from `PF_S`ampling8Suite1, `PF_S`ampling16Suite1, and `PF_S`amplingFloatSuite1 together.

### `PF_S`amplingSuite Functions (Multiple Suites)

Function

Purpose

nn_sample

```

Performs nearest neighbor sampling.

PF_Err nn_sample (
  PF_ProgPtr       effect_ref,
  PF_Fixed         x,
  PF_Fixed         y,
  const PF_SampPB  *params,
  PF_Pixel         *dst_pixel );
```

nn_sample16

Same as above, but takes a pointer to a `PF_P`ixel16 dst_pixel.

nn_sample_float

Takes a pointer to a `PF_P`ixelFloat dst_pixel.

subpixel_sample

Queries the appropriate alpha-weighted interpolation of colors at a non-integral point in a source image, in high quality. Nearest neighbor sampling is used in low quality. Because the sampling routine, if used, will typically be called many times, it is convenient to copy the function pointer out to the callbacks structure and into a register or onto the stack to speed up your inner loop. See the sample code for an example.

Note

The sampling assumes that 0,0 is the center of the top left pixel.

```

PF_Err subpixel_sample (
  PF_ProgPtr       effect_ref,
  PF_Fixed         x,
  PF_Fixed         y,
  const PF_SampPB  *params,
  PF_Pixel         *dst_pixel);
```

subpixel_sample16

Same as above, but takes a pointer to a `PF_P`ixel16\* dst_pixel.

subpixel_sample_float

Takes a pointer to a `PF_P`ixelFloat\* dst_pixel.

area_sample

Use this to calculate the appropriate alpha weighted average of an axis-aligned non-integral rectangle of color in a source image, in high quality. Nearest neighbor sampling is used in low quality. Because of overflow issues, this can only average a maximum of a 256 x 256 pixel area (i.e. x and y radius < 128 pixels).

Note

The sampling radius must be at least one in both x and y.

```

PF_Err area_sample (
  PF_ProgPtr       effect_ref,
  PF_Fixed         x,
  PF_Fixed         y,
  const PF_SampPB  *params,
  PF_Pixel         *dst_pixel);
```

Note

Areas outside the boundaries of the layer are considered the same as zero alpha, for sampling purposes.

area_sample16

Same as above, but takes a `PF_P`ixel16\* dst_pixel.

| --- | --- |

### `PF_B`atchSamplingSuite1 Functions

Function

Purpose

begin_sampling

```

Your effect is going to perform some batch sampling; After Effects will perform setup tasks to optimize your sampling.

PF_Err (*begin_sampling)(
  PF_ProgPtr    effect_ref,
  PF_Quality    qual,
  PF_ModeFlags  mf,
  PF_SampPB     *params);
```

end_sampling

```

Tells After Effects you're done sampling.

PF_Err (*end_sampling)(
  PF_ProgPtr    effect_ref,
  PF_Quality    qual,
  PF_ModeFlags  mf,
  PF_SampPB     *params);
```

get_batch_func

```

Obtains a pointer to After Effects' batch sampling function (highly optimized).

PF_Err (*get_batch_func)(
  PF_ProgPtr          effect_ref,
  PF_Quality          quality,
  PF_ModeFlags        mode_flags,
  const PF_SampPB     *params,
  PF_BatchSampleFunc  *batch);
```

get_batch_func16

```

Obtains a pointer to After Effects' 16-bpc batch sampling function (also highly optimized).

PF_Err (*get_batch_func16)(
  PF_ProgPtr            effect_ref,
  PF_Quality            quality,
  PF_ModeFlags          mode_flags,
  const PF_SampPB       *params,
  PF_BatchSample16Func  *batch);
```

| --- | --- |

## Do The Math For Me

### Graphics Utility Suites — Do The Math For Me

Beyond the assorted graphics utilities, we hand over a set of ANSI-standard routines too, sparing plug-ins from pulling in extra libraries just to call the usual functions.

A broad set of math operations — trig, square root, logarithms, and the like — is offered to you as function pointers.

Going through our suite functions buys you a measure of application-level error handling and steers you clear of conflicts that arise when several "standard" libraries ship differing versions.

Every one of these returns a double. Angles are always given in radians; when you need to turn degrees into radians, apply `PF_RAD_PER_DEGREE`, a constant declared in `AE_E`ffectCB.h.

### `PF_ANSIC`allbackSuite1

| Function | Purpose | Replaces |
| --- | --- | --- |
| acos | Returns the arc cosine of x. | `PF_ACOS` |
| asin | Returns the arc sine of x. | `PF_ASIN` |
| atan | Returns the arc tangent of x. | `PF_ATAN` |
| atan2 | Returns atan(y/x). | `PF_ATAN2` |
| ceil | Returns the next integer above x. | `PF_CEIL` |
| cos | Returns the cosine of x. | `PF_COS` |
| exp | Returns e to the power of x. | `PF_EXP` |
| fabs | Returns the absolute value of x. | `PF_FABS` |
| floor | Returns the closest integer below x. | `PF_FLOOR` |
| fmod | Returns x modulus y. | `PF_FMOD` |
| hypot | Returns the hypotenuse of x and y, which is sqrt(x*x + y*y). | `PF_HYPOT` |
| log | Returns the natural log (ln) of x. | `PF_LOG` |
| log10 | Returns the log (base 10) of x. | `PF_LOG10` |
| pow | Returns x to the power of y. | `PF_POW` |
| sin | Returns the sine of x. | `PF_SIN` |
| sqrt | Returns the square root of x. | `PF_SQRT` |
| tan | Returns the tangent of x. | `PF_TAN` |
| (while not strictly math functions, these emulate ANSI functionality) |  |  |
| sprintf | Emulates the C sprintf function. | `PF_SPRINTF` |
| strcpy | Emulates the C strcpy function. | `PF_STRCPY` |

## Interaction Callback Functions

You will find the un-macro'd function pointers sitting in `PF_I`nData, but reach for the supplied macros to get at them. Notice how strict our stance on deprecating macro usage is? We'll keep that just between us.

## Interaction Callbacks

### Interaction Callback Functions — Interaction Callbacks

Function

Purpose

`PF_ADD_PARAM`

Call this repeatedly while handling `PF_C`md\_`PARAM_SETUP` to declare each of your plug-in's parameters to After Effects.

Note

Lots of trouble can stem from a `PF_P`aramDef that was not fully cleared ahead of `PF_ADD_PARAM`(). Make a habit of running `AEFX_CLR_STRUCT` before you add any parameter.

```

PF_Err PF_ADD_PARAM (
  PF_InData       *in_data,
  PF_ParamIndex   index,
  PF_ParamDefPtr  def);
```

We provide convenience macros for specific parameter types, in Utils/ Param_Utils.h: - `PF_ADD_COLOR` - `PF_ADD_ARBITRARY` - `PF_ADD_SLIDER` - `PF_ADD_FIXED` - `PF_ADD_FLOAT_SLIDERX` - `PF_ADD_CHECKBOXX` - `PF_ADD_BUTTON` - `PF_ADD_ANGLE` - `PF_ADD_NULL` - `PF_ADD_LAYER` - `PF_ADD_255_SLIDER` - `PF_ADD_PERCENT` - `PF_ADD_POINT` - `PF_ADD_POINT_3D` - `PF_ADD_TOPICX` - `PF_END_TOPIC` - `PF_ADD_POPUPX` - `PF_ADD_FLOAT_SLIDERX_DISABLED`

`PF_ABORT`

```

Returns non-zero if the user has cancelled; return that value to After Effects.

Wrap your render routine in a "while abort has not been requested" while loop.

PF_Err PF_ABORT (PF_InData *in_data);
```

`PF_PROGRESS`

```

Displays a progress bar during processing; current and total describe the percentage complete.

Returns non-zero if you should suspend or abort your current processing; return that value to After Effects.

Call once per scanline, unless your effect is very slow.

If total is 0, PF_ABORT is used instead (presenting the user with different choices).

PF_Err PF_PROGRESS (
  PF_InData  *in_data,
  A_long     current,
  A_long     total );
```

`PF_CHECKOUT_PARAM`

```

Obtains parameter values, or the source video layer, at a specified time. After Effects makes caching decisions based on the checkout state of parameters.

Allocate a new PF_ParamDef to hold the result; those passed to the plug-in are read-only.

If you check out a layer parameter that's set to <none>, the layer returned will be filled with zeros.

Masks are not included with checked-out layers.

Do not check out layer parameters during UI event handling.

PF_Err PF_CHECKOUT_PARAM (
  PF_InData      *in_data,
  PF_ParamIndex  index,
  A_long         what_time,
  A_long         step,
  A_long         time_scale,
  PF_ParamDef    *param);
```

When the source layer is what you check out, the frame comes back deinterlaced. Request a time that points at the upper field and you get the upper field back, with a filter producing the in-between scanlines. Say lines 0 and 2 hold upper fields while line 1 holds a lower field: checking out the upper fields hands lines 0 and 2 straight from the source footage, and derives line 1 by averaging lines 0 and 2. To rebuild a full-resolution source frame containing both fields, call `PF_CHECKOUT_PARAM` twice — once per field — and reinterlace the footage yourself. And if the checkout time falls between frames? Every item carries effectively unlimited time resolution, so After Effects renders it at whatever time you request. With a composition, that means interpolating all the keyframe values to the subframe moment. With footage, After Effects returns the full image matching the requested time, namely the nearest frame to its left. Should that layer have frame-blending enabled, an interpolated frame is produced instead.

`PF_CHECKIN_PARAM`

```

Balance every PF_CHECKOUT_PARAM, with a PF_CHECKIN_PARAM.

Not doing so causes dismal performance and leaks memory. Once checked in, the fields in the PF_ParamDef will no longer be valid.

PF_Err PF_CHECKIN_PARAM (
  PF_InData    *in_data,
  PF_ParamDef  *param );
```

`PF_REGISTER_UI`

```

Register a custom user interface element. See Effect UI & Events. Note: The PF_UIAlignment flags are not honored.

PF_Err PF_REGISTER_UI (
  PF_InData        *in_data,
  PF_CustomUIInfo  *cust_info );
```

`PF_CHECKOUT_LAYER_AUDIO`

```

Given an index, start_time, duration, time_scale, rate, bytes_per_sample, num_channels, and fmt_signed, After Effects will return a corresponding PF_LayerAudio.

After Effects will perform any necessary resampling.

PF_Err PF_CHECKOUT_LAYER_AUDIO (
  PF_InData      *in_data,
  PF_ParamIndex  index,
  A_long         start_time,
  A_long         duration,
  A_u_long       time_scale,
  PF_UFixed      rate,
  A_long         bytes_per_sample,
  A_long         num_channels,
  A_long         fmt_signed,
  PF_LayerAudio  *audio);
```

`PF_CHECKIN_LAYER_AUDIO`

```

Balance all calls to PF_CHECKOUT_LAYER_AUDIO, regardless of error conditions, with matching calls to PF_CHECKIN_LAYER_AUDIO.

PF_Err PF_CHECKIN_LAYER_AUDIO (
  PF_InData      *in_data,
  PF_LayerAudio  audio );
```

`PF_GET_AUDIO_DATA`

```

Returns information about the PF_LayerAudio.

All the parameters after audio are optional; pass 0 for any value in which you aren't interested. rate0 is unsigned, and fmt_signed0 should be non-zero for signed, zero for unsigned.

This callback is for visual effects that read audio information. To alter audio, write an audio filter.

PF_Err PF_GET_AUDIO_DATA (
  PF_InData        *in_data,
  PF_LayerAudio    audio,
  PF_SndSamplePtr  *data0,
  A_long           *num_samples0,
  PF_UFixed        *rate0,
  A_long           *bytes_per_sample0,
  A_long           *num_channels0,
  A_long           *fmt_signed0);
```

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
|  |  |

## Parameter Checkout vs. Param Zero

### Interaction Callback Functions — Parameter Checkout vs. Param Zero

Within the Effect Control (and Composition) panel, effects run against an image in sequence, from 0 through n.

What effect[n-1] produces becomes effect[n]'s input, that is, its param[0].

By contrast, a normal effect that checks out a layer through `PF_CHECKOUT_PARAM` gets the raw, un-effected source layer no matter where it sits in the order.

A SmartFX effect, though, sees previous effects already applied when it checks out its input parameter (params[0]).

## Parameter Checkout Behavior

### Interaction Callback Functions — Parameter Checkout Behavior

No matter whether the layer's in and out points were trimmed, the frames you receive run valid from the start of the source footage through its end, with transparency on either side of that span.

When a layer parameter runs at a slower frame rate than the composition checking it out, it refreshes only as frequently as that slower rate demands.

Take a 10fps layer checked out within a 30fps composition: a refresh is needed only every third frame. Should your effect need to vary its output on every frame even though the input layer holds still, you would set `PF_O`utflag\_`NON_PARAM_VARY`.

Whenever an effect checks out an Adobe Illustrator layer set to continuous rasterization, After Effects renders that Illustrator layer with its geometrics applied into a composition-sized buffer.

## Parameter Checkout And Re-Entrancy

### Interaction Callback Functions — Parameter Checkout And Re-Entrancy

Re-entrant behavior can arise from plug-ins that check out layers at differing times. Picture the Checkout sample plug-in applied to a layer inside composition B, where B is then pre-composed into composition A and Checkout is applied there too.

Rendering composition A sends `PF_C`md_RENDER to Checkout[A], and during that render it checks out a layer — composition B — at some time other than the present one.

To supply that checked-out layer, After Effects then issues `PF_C`md_RENDER to Checkout[B].

Presto, recursion!

Any effect of yours that checks out parameters has to cope gracefully with re-entrant render requests.

Steer clear of globals and don't read or write static variables...though of course you had no intention of doing that, right?

## Progress During Iteration

### Interaction Callback Functions — Progress During Iteration

Keeping the interface lively for the person at the keyboard matters to After Effects even mid-render, and your plug-in should match that behavior by leaning on `PF_ITERATE`() wherever it fits. Imagine, say, that a single `PF_C`md_RENDER response leans on a `PF_ITERATE`'d routine across three separate passes.

The opening setup for that scenario looks like this:

```
lines_per_iterateL = in_data>extent_hint.top - in_data>extent_hint.bottom;
total_linesL = 3 * lines_per_iterateL;
lines_so_farL = 0;
```

Once a pass wraps up, roll the lines you've already finished into the running tally before the next call:

```
suites.iterate8suite()>iterate( lines_so_farL,
                                total_linesL,
                                input_worldP,
                                &output>extent_hint,
                                refcon,
                                WhizBangPreProcessFun,
                                output_worldP);

lines_so_farL += lines_per_iterateL;

ERR(PF_PROGRESS(lines_so_farL, total_linesL));

suites.iterate8suite()>iterate( lines_so_farL,
                                total_linesL,
                                input_worldP,
                                &output>extent_hint,
                                refcon,
                                WhizBangRenderFunc,
                                output_worldP);

lines_so_far += lines_per_iterateL;

ERR(PF_PROGRESS(lines_so_farL, total_linesL));

suites.iterate8suite()>iterate( lines_so_farL,
                                total_linesL,
                                input_worldP,
                                &output>extent_hint,
                                refcon,
                                WhizBangPostProcessFunc,
                                output_worldP);

ERR(PF_PROGRESS(lines_so_farL, total_linesL));
```

## Pixel Aspect Ratio

Footage with non-square pixels, plus downsampling that differs along each axis, has to be handled gracefully by an effect — and remember that individual layer parameters may each carry their own pixel aspect ratio. None of this is hard to get right once the underlying ideas click.

For straightforward effects, no special effort is needed to line point parameters up with the real output pixels. After Effects hands you point parameters already adjusted for downsample factor and pixel aspect ratio, expressed in the input buffer's coordinate frame. The upshot is an implicit "pixel coordinate system" that's both convenient and intuitive. The catch is reserved for effects relying on absolute pixel distances or geometry: those need to examine more closely how the input buffer maps onto the final rendered image.

## Don't Assume Pixels Are Square, Or 1-To-1

### Pixel Aspect Ratio — Don't Assume Pixels Are Square, Or 1-To-1

To begin with, pixel aspect ratio together with a non-uniform downsample factor mean this coordinate system may not be square at all. Horizontally, the finished render can end up stretched or compressed compared with the pixels your effect actually touches. The result: circles turn into ellipses and squares into rectangles. How far apart two points sit depends on the angle between them in such a system, and anything you rotate there comes out skewed once rendered.

Beyond that, a square coordinate system still won't necessarily match the final output's dimensions. So any slider expressing a size in pixels runs into trouble when the frame renders at reduced resolution; downsample factor also shifts how wide your anti-aliasing filters end up.

There are cases where none of this bites. If an effect tints each pixel purely as a linear function of its x and y position, it can ignore pixel aspect ratio and downsample factor entirely. Remaining in the input coordinate space is one route, provided you handle pixel aspect ratio and downsample factor somewhere else.

Picture building a particle system that flings textured sprites out from a source point set by an effect control. Tracking those particle positions in pixel coordinates works well enough — at least while the particles never orbit a point — but the moment you render the particle textures themselves, you must scale them by pixel aspect ratio and downsample factor.

When an effect's pipeline already includes coordinate-transformation gear, a frequently tidier route opens up. A good many algorithms call for some kind of coordinate transformation anyway — matrices used to assemble a transformation, for instance. Yet plenty of other algorithms adapt just as readily, such as a texture-generation effect deriving every pixel's value strictly from where it sits. There, the code has to take each raw pixel position and factor in pixel aspect ratio along with downsample factor.

## Suggested Approach

### Pixel Aspect Ratio — Suggested Approach

Working start to finish in full-resolution square coordinates, and only then scaling by downsample factor and pixel aspect ratio as one last output step, is the cleanest path to correctness. Because point parameters always arrive in input-buffer coordinates, translate them into full-resolution square coordinates before you touch them. Take that route and sliders defining a size in pixels stop being a headache; simply read them as a size measured in full-resolution vertical pixels.

1. The instant your point parameters arrive, move them straight into floating point under a square pixel grid at full resolution, in this fashion.

```
x *= in_data>pixel_aspect_ratio.num / (float)in_data>pixel_aspect_ratio.den;
x *= in_data>downsample_x.den / (float)in_data>downsample_x.num;
y *= in_data>downsample_y.den / (float)in_data>downsample_y.num;
```

1. Do every bit of setup within this coordinate space — laying out transformation matrices, producing coordinates for later scan conversion, deriving values from point-to-point distances, rotating things, and so on. Keep in mind you aren't touching pixels yet at this stage; you're only working with coordinates or coordinate transformations.
2. When it's time to return to a coordinate system that maps one-to-one onto the output buffer's pixels, reverse the transformations from the first step. Hold this off until the last possible moment, so that as little of your code as possible has to grapple with the non-square space. With matrices, that reversal becomes your closing output transformation. For an effect that draws something from each pixel's coordinate, walk the output pixels and convert each pixel coordinate into square coordinates before running any per-pixel processing.

It might look like make-work, yet most effects this elaborate already carry a coordinate-transformation step; and the ones that don't still require one to deal correctly with pixel aspect ratio and downsample factor.

## Applying User Input In Pixels

### Pixel Aspect Ratio — Applying User Input In Pixels

All of the stretching After Effects performs happens along the horizontal axis to avoid adding needless field interpolations; so whenever a measurement is given in pixels, treat those as vertical pixels.
