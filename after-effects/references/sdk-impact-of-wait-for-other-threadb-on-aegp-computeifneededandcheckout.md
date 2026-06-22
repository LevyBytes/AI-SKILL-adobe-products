# Impact Of Wait For Other Threadb On Aegp Computeifneededandcheckout, Checking Cache State, Persistence Of Cache, Real World Integration Example ...

> Adobe After Effects reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Impact of wait*for_other_threadB on `AEGP_C`omputeIfNeededAndCheckout; Checking Cache State; Persistence of Cache; Real-world Integration Example; SmartFX; The Way Things Were; The Way Things Are Now; Content Bounds; How To Smartify; `PF_C`md*`SMART_PRE_RENDER`; `PF_P`reRenderExtra; preserve*rgb_of_zero_alpha; Rectangles; The "Size" Of A Layer; Flag On The Play; `PF_C`md*`SMART_RENDER`; `PF_S`martRenderExtra; When To Access Layer Parameters.

## Impact of wait_for_other_threadB on `AEGP_C`omputeIfNeededAndCheckout

### Compute Cache API — Impact of wait_for_other_threadB on `AEGP_C`omputeIfNeededAndCheckout

Across almost every combination of the parameters, `AEGP_C`omputeIfNeededAndCheckout will give you back a checkout receipt for the cache value; the lone exception is a false wait_for_other_threadB while another thread is already rendering that requested value.

Cache State

wait_for_other_threadB set to False

wait_for_other_threadB set to True

No cache for key

Compute and checkout receipt returned

Compute and checkout receipt returned

Being computed by another thread

Returns `A_E`rr\_`NOT_IN_CACHE_OR_COMPUTE_PENDING` Note that After Effects will not report this error to the user, it is only for the effect to respond to.

Wait for another thread and return checkout receipt upon completion

Cached

Checkout receipt returned

Checkout receipt returned

| --- | --- | --- |

## Checking Cache State

### Compute Cache API — Checking Cache State

- An effect might want to test whether a cache value has been computed yet without actually running the compute or stalling while it waits on a different thread to finish. `AEGP_C`heckoutCached() is how you do that.
- One use is a polling arrangement in which some other code is meant to fill the cache. A UI thread, say, could keep polling for a histogram being produced over on a render thread.
- When the value is ready, a checkout receipt comes back in the `AEGP_CCC`heckoutReceiptP parameter, and you pass it along to `AEGP_G`etReceiptComputeValue() to fetch the value. When it isn't ready, the call hands back an `A_E`rr\_`NOT_IN_CACHE_OR_COMPUTE_PENDING` error code.

## Persistence of Cache

### Compute Cache API — Persistence of Cache

- The Compute Cache differs from flattened sequence data in that its contents never persist with the project, so whatever was computed has to be recomputed once the project is reopened.
- Whenever After Effects needs the memory for something else, cache entries purge on their own. Write any code that depends on a cached value as though the compute step might have to run afresh every time.
- Keep approx_size_value fast while still returning a fairly accurate gauge of how much data the cache entry holds. That accuracy lets After Effects choose more wisely what to purge and when.
- Unregistering a cache class wipes every bit of that class's data from the cache, firing a delete_compute_value callback for each entry tied to the class.
- Inside delete_compute_value, release every resource attached to the cache entry. Since the Compute Cache only keeps a void \* pointer to those resources, it has no way to free them for the effect.

## Real-world Integration Example

### Compute Cache API — Real-world Integration Example

After Effects ships with the Auto Color plugin, an effect that has begun leaning on the Compute Cache plus the HashSuite1 suite to cache histogram and level data whenever its Temporal Smoothing parameter exceeds 0.

Getting started with the Cache and Hash suites meant first pinning down what Auto Color's Temporal Smoothing actually computes, which parts of that are slow, and which effect parameters would force a recompute.

Note

The data each effect computes and caches differs, so run this analysis specifically for your own effect.

Temporal Smoothing in Auto Color needs both histogram and level data drawn from the frames around the one being rendered. How many neighboring frames are required depends on the value of the temporal smoothing parameters. Although both histogram and levels data can be costly to compute, each can usually be worked out a single time per frame, cached, and then reused on demand.

That said, Auto Color carries several additional parameters that feed into the cache values, among them Black Clip, White Clip, Mid Tones and the Auto Color mode. Those parameters therefore have to be part of the generate_key and compute methods.

Armed with that, we set about integrating the Compute Cache:

- `PF_C`md\_`GLOBAL_SETUP` is where the `AEGP_C`lassRegister call runs.
- `PF_C`md\_`GLOBAL_SETDOWN` is where the `AEGP_C`lassUnregister call runs.

- generate_key leans on `AEGP_H`ashSuite1 to mint a unique key. Into that key go four parameters — black clip, white clip, mid tones and auto levels mode — plus the frame time and time step, the latter pair guaranteeing a distinct cache for whichever frame is under computation.
- compute works out the histogram and levels, packing both data structures into one struct that becomes the out_valuePP parameter returned from the compute callback.
- approx_size_value sums the sizeof() the histogram and level data structures held in the cached value to report how much memory the cache entry consumes.
- delete_compute_value releases the memory occupied by the histogram and level data structures for the entry.

- Calls to `AEGP_C`omputeIfNeededAndCheckout were folded into the Temporal Smoothing code. Each frame time / time step the algorithm requires triggers one, drawing on results from other render threads that are computing the histogram and levels of surrounding frames.

- With every cache value for a frame computed, the effect code then checks out the values it needs through `AEGP_G`etReceiptComputeValue.
- Those cache values then drive the temporal smoothing algorithm as it tweaks the frame's color.
- The moment the current frame no longer needs a cache value, `AEGP_C`heckinComputeReceipt is invoked for each cache-value receipt.
- For now, Auto Color makes no use of `AEGP_C`heckoutCached.

- Previously Auto Color kept its histogram and levels data in sequence data, which meant a separate copy of sequence_data on each render thread before the Compute Cache existed. As a result every histogram and level a frame needed had to be rendered on every thread.
- After the switch to the Compute Cache, each rendered frame picked up the speed gains of other render threads computing the histogram and levels data and saving it for later reuse.
- Rendering the Auto Color effect across a stretch of footage with the Compute Cache turns out to be at minimum 3x quicker than the sequence_data approach.

## SmartFX

Effects and After Effects talk to each other in both directions through the SmartFX API, which opens the door to numerous performance gains and surfaces dependency information that was not obtainable before. Implementing 32-bit-per-channel support in After Effects goes through this extension of the effect API.

A conventional effect plug-in receives a full-sized input buffer and is told to render a full-sized output buffer. The output extent_hint does mark which slice of the output buffer genuinely has to be filled, yet the arrangement remains quite wasteful when the effect doesn't require its whole input. On top of that, plenty of effects ignore extent hints altogether.

## The Way Things Were

### SmartFX — The Way Things Were

Picture a blur dropped onto an enormous layer that sits mostly off-screen, or is seen through a tiny region of interest, or has been masked down small. Only a modest slice of the output needs rendering, which the output extent_hint communicates to the effect. The slice of input needing the blur is likewise small — that output extent_hint grown by the blur radius. The legacy effects API, though, gives After Effects no means of knowing this, and so the whole layer goes to the plug-in. Computing those surplus pixels can prove wildly expensive and wasteful, particularly when prior effects or nested comps are involved.

## The Way Things Are Now

### SmartFX — The Way Things Are Now

By flipping the calling sequence around, SmartFX gets past this problem. Now the effect learns how much of its output is wanted and has to ask the host outright for the inputs it requires. Rendering breaks into two phases: pre-render and render.

In the pre-render phase, the effect spells out the input pixel data it requires; that requirement can hinge on whatever you please (non-input layer parameters, non-layer parameters, data from in_data, sequence-data settings, and so on). The effect also has to report the extent of the output it will produce, which can come out smaller than what was asked for when the requested portion of the layer contains empty pixels.

Throughout the render phase, the effect is limited to fetching pixels it asked for earlier. Splitting the work this way opens up many key optimizations. Take an effect that multiplies or mattes one input against another: it may find its first input is not

needed in the slightest if the mask fails to intersect it. After Effects also runs important optimizations internally to copy image buffers as rarely as possible, and those only become feasible once the host knows the buffer sizes for every input and output.

After Effects never unloads SmartFX plug-ins, the same as with AEGPs.

## Content Bounds

### SmartFX — Content Bounds

A node's content bounds are the biggest possible result rectangle a PreRender call could ever return. Under no circumstances can it shift with the current render request or anything besides; compute it with care, not casually.

Treat this calculation as critical. It is a built-in property of the node along with its inputs, locked in the moment the graph gets built. Break it and you will, in all likelihood, trigger every kind of trouble throughout assorted stretches of code.

## How To Smartify

### SmartFX — How To Smartify

An effect that sets `PF_O`utFlag2*`SUPPORTS_SMART_RENDER` (from `PF_O`utFlags) is handed the SmartFX calls `PF_C`md*`SMART_PRE_RENDER` and `PF_C`md*`SMART_RENDER` (from Frame Selectors) in place of the older `PF_C`md*`FRAME_SETUP` / `PF_C`md*RENDER / `PF_C`md*`FRAME_SETDOWN` run. So that you stay compatible with hosts that aren't smartified, it may be wise to keep supporting those older commands as well.

## `PF_C`md\_`SMART_PRE_RENDER`

### SmartFX — `PF_C`md\_`SMART_PRE_RENDER`

The effect is asked by After Effects to produce output. In return the effect states which input it requires to make that output, doing so through callback functions and by editing the structures in the extra parameter. Any layer input the effect has not checked out during `PF_C`md*`SMART_PRE_RENDER` is off-limits — its pixels cannot be reached. For that reason every layer input the effect could conceivably want has to be checked out ahead of time with checkout_layer. Even if rendering later reveals a layer wasn't needed, any layer input the effect might require has to be checked out at this point. And because SmartFX gets no parameter array during `PF_C`md*`SMART_PRE_RENDER` or `PF_C`md\_`SMART_RENDER`, you must pull any non-layer parameters you need with `PF_CHECKOUT_PARAM` (from Interaction Callbacks)

## `PF_P`reRenderExtra

### SmartFX — `PF_P`reRenderExtra

Member

Purpose

`PF_P`reRenderInput

```

Spells out what rendering After Effects wants (via the PF_RenderRequest) along with the requested bit depth (in the fittingly named bitdepth member).

typedef struct {
  PF_LRect        rect;
  PF_Field        field;
  PF_ChannelMask  channel_mask;
  PF_Boolean      preserve_rgb_of_zero_alpha;
  char            unused[3];
  long            reserved[4];
} PF_RenderRequest;
```

rect is in layer coordinates. field is also relative to the layer origin; whether the active field falls on even or odd scanlines of the output buffer depends on the origin of the output buffer. channel*mask names the channels for which the effect ought to supply output; anything the effect writes to other channels gets ignored. Its value is one or more of these, OR'd together: - `PF_C`hannelMask_ALPHA - `PF_C`hannelMask_RED - `PF_C`hannelMask_GREEN - `PF_C`hannelMask_BLUE - `PF_C`hannelMask_ARGB Where preserve_rgb_of_zero_alpha pixels is TRUE, the effect is obliged to carry the color of transparent pixels through into the output. That relates to `PF_O`utFlag2*`REVEALS_ZERO_ALPHA` but is not the same thing, since that flag signals to After Effects that the effect might give such pixels non-zero alpha and so bring them back into view.

`PF_P`reRenderOutput

```

The effect fills this out to declare to After Effects, given the input, the output it intends to make.

typedef struct {
  PF_LRect                    result_rect;
  PF_LRect                    max_result_rect;
  PF_Boolean                  solid;
  PF_Boolean                  reserved;
  PF_RenderOutputFlags        flags;
  void*                       pre_render_data;
  PF_DeletePreRenderDataFunc  func;
} PF_PreRenderOutput;
```

During `PF_C`md*`SMART_RENDER` the effect gets pre_render_data handed back to it. As of now the sole `PF_R`enderOutputFlags value is `PF_R`enderOutputFlag*`RETURNS_EXTRA_PIXELS`.

`PF_P`reRenderCallbacks

```

For the moment a single callback exists — checkout_layer. The effect picks checkout_idL.

Keep it positive and distinct. After Effects fills in the PF_CheckoutResult.

PF_Err checkout_layer(
  PF_ProgPtr              effect_ref,
  PF_ParamIndex           index,
  A_long                  checkout_idL,
  const PF_RenderRequest  *req,
  A_long                  what_time,
  A_long                  time_step,
  A_u_long                time_scale,
PF_CheckoutResult       *result);

typedef struct {
  PF_LRect          result_rect;
  PF_LRect          max_result_rect;
  PF_RationalScale  par;
  long              solid;
  PF_Boolean        reservedB[3];
  A_long            ref_width;
  A_long            ref_height;
} PF_CheckoutResult;
```

result*rect is allowed to be empty. max_result_rect is the biggest the output could become if the host requested every bit of it. solid being TRUE means the whole result_rect carries opaque alpha. ref_width and ref_height give the layer's original size, before any effects, downsample factors set aside. For collapsed layers that equals the composition's size. Version 11.0 has a bug with the Global Performance Cache when a SmartFX effect sets both `PF_O`utFlag2*`AUTOMATIC_WIDE_TIME_INPUT` & `PF_O`utFlag*`NON_PARAM_VARY`: a checkout_layer call during `PF_C`md*`SMART_PRE_RENDER` hands back empty rects in `PF_C`heckoutResult. Just repeating the call works around it. As of 11.0.1 this workaround is unnecessary.

result_rect

What the render request yields as output, in layer coordinates (may be empty). Barring `PF_R`enderOutputFlag\_`RETURNS_EXTRA_PIXELS` being set, this can't exceed the input request rectangle, though it can fall short of it.

max_result_rect

The largest the output might ever be should After Effects ask for the whole thing. It must stay constant regardless of the requested output size.

solid

Mark this TRUE when every output pixel will be wholly opaque. Set it where you can, as it unlocks certain optimizations.

reserved

Ignore.

flags

For now the one flag is `PF_R`enderOutputFlag\_`RETURNS_EXTRA_PIXELS`, signaling to After Effects that the smart effect will hand back more pixels than After Effects asked for.

pre_render_data

Aim this at whatever data the effect wants to reach while rendering. As with ordinary (non-smart) effects, an effect may also allocate handles and keep them in out*data>frame_data. Because `PF_C`md*`SMART_PRE_RENDER` can fire without any matching `PF_C`md*`SMART_RENDER`, effects must never delete this data on their own; the moment the effect returns from `PF_C`md*`SMART_PRE_RENDER`, ownership passes to After Effects, which will dispose of it (through either the function below or a standard free call).

delete_pre_render_data_func

Aim this at a function that will be called in due course to delete the pre_render_data.

| --- | --- |

## preserve_rgb_of_zero_alpha

### SmartFX — preserve_rgb_of_zero_alpha

preserve_rgb_of_zero_alpha plays two roles: as input it tells the effect what to render, and as output it describes the input the effect needs (handed along to the checkout call). Whenever an input request has preserve_rgb_of_zero_alpha set, the effect has to forward it recursively on its own checkouts, or else prior effects and masking will strip away the very pixels the effect means to reveal. Relying on this is frowned upon, even though CS3 (8.0) still supports it.

## Rectangles

### SmartFX — Rectangles

Both result rectangles must be set precisely by the effect. Because After Effects' caching depends on them, wrong values can trigger no end of trouble. Should the plug-in hand back a result_rect smaller than the request_rect, After Effects reads the pixels that lie inside request_rect but outside result_rect as empty.

In the same way, max_result_rect has to take in every non-zero pixel; the effect is never asked to render past that region. Any pixels beyond this rectangle will never appear on screen.

Output rectangles of the wrong size bring their own trouble. Make these rectangles too large and performance suffers.

Not only do scads of empty pixels end up cached (stealing precious memory from the application), but the effect may get asked needlessly to render vast empty stretches. That is exactly why max_result_rect has to be calculated correctly instead of being set to some arbitrarily big size.

result_rect and max_result_rect alike may shift with the effect's parameters, the current time, and so forth; they hold only for that particular invocation of the effect. max_result_rect, however, must not hinge on the specific render request. Whatever slice of the output After Effects asks for, it has to stay the same.

Returning an empty result_rect is legitimate when the request_rect fails to intersect the effect's output pixels, since nothing needs rendering.

After Effects may likewise call the effect with an empty request_rect, in which case the effect is only being asked to work out the max_result_rect.

preserve_rgb_of_zero_alpha can sway how the bounds get computed (both result_rect and max_result_rect) and has to be honored whenever the effect acts differently based on that setting.

## The "Size" Of A Layer

### SmartFX — The "Size" Of A Layer

Just like non-smart effects, every smart effect is free to shrink or grow its requested input however it likes. They can't count on a fixed frame size, and the input's size may shift over time.

The user might, for instance, apply an animated drop shadow to a layer, which would tack pixels onto different edges of the layer at different moments, according to the direction the shadow is thrown.

Certain effects (those that need to line up one layer against another, for example) call for some idea of "size." That could be pinned down in two ways, each carrying its own trade-offs.

in_data>width/height gives the original layer's size, prior to any effects or downsampling. Because nothing applied afterward touches this value, it can serve as an absolute reference for things such as center points.

This isn't foolproof, though, since the user might have applied a distortion or translation effect. Beyond that, the value exists only for the layer the effect is applied to, not for other layer parameters.

...or...

Every layer input carries a max_result_rect taking in all its pixel data, which in a sense is the master "size" of a layer.

It exists for all layers, yet shifts over time with previously applied effects, sometimes in ways that catch the user off guard (as the drop-shadow case above shows).

Be aware that you can get an input's ref_width/height and max_result_rect without rendering, by calling checkout_layer with an empty request_rect.

That is reasonably efficient and comes in handy when you need a layer's "size" first to work out precisely which pixels rendering will require.

Here is a case of requesting a layer in pre-render and then never calling checkout_layer (here, there are none).

## Flag On The Play

### SmartFX — Flag On The Play

Ordinarily a given `PF_R`enderRequest has its max_result_rect clipped to whatever applied mask bounds it.

If `PF_O`utFlag2\_`REVEALS_ZERO_ALPHA` is set, though, the max_result_rect becomes the size of the layer.

## `PF_C`md\_`SMART_RENDER`

### SmartFX — `PF_C`md\_`SMART_RENDER`

For any given pre-render, no more than a single `PF_C`md\_`SMART_RENDER` call reaches the effect.

Be aware that a render pass might not happen whatsoever. It's possible that After Effects was only after some bounds math, or that it later figured out the effect's result wouldn't be needed anyway — that situation arises, for instance, when a track matte's pre-render phase hands back a rectangle that misses the effect's output entirely.

Without leaking resources or slipping into an unstable condition, every effect has to cope with a Pre-Render that is never followed by a Render.

The extra parameter, during `PF_C`md\_`SMART_RENDER`, refers to a `PF_S`martRenderExtra.

## `PF_S`martRenderExtra

### SmartFX — `PF_S`martRenderExtra

Member

Purpose

`PF_S`martRenderInput

Made up of a `PF_R`enderRequest, the bitdepth, and a pointer to pre*render_data (which was allocated back in `PF_C`md*`SMART_PRE_RENDER`). The same `PF_S`martRenderInput handed to the matching `PF_C`md\_`SMART_PRE_RENDER` is what you get here.

`PF_S`martRenderCallbacks

```

PF_Err checkout_layer_pixels(
  PF_ProgPtr      effect_ref,
  A_long          checkout_idL,
  PF_EffectWorld  *pixels);
```

```

Reach the actual pixels of layers that were checked out back in PF_Cmd_SMART_PRE_RENDER through this.

Until it is checked in — or until the current command wraps up — the PF_EffectWorld it returns stays valid.

With a given checkout_idL from PF_Cmd_SMART_PRERENDER, a single checkout_layer_pixels call is all you get.

The count of checkouts in PF_Cmd_SMART_PRERENDER and the count in PF_Cmd_SMART_RENDER have to line up one-to-one.

Want checkout_layer_pixels on a layer more than once? Then in PF_Cmd_SMART_PRERENDER call checkout_layer again on that same layer under a fresh, unique checkout_idL, and feed that checkout_idL into a separate checkout_layer_pixels during PF_Cmd_SMART_RENDER.

PF_Err checkin_layer_pixels(
  PF_ProgPtr  effect_ref,
  A_long      checkout_idL);
```

```

Calling this is optional — After Effects sweeps up every such checkout once the effect exits PF_Cmd_SMART_RENDER — yet it helps reclaim memory.

PF_Err checkout_output(
  PF_ProgPtr      effect_ref,
  PF_EffectWorld  *output);
```

Hands back the output buffer. Keep in mind that checking out the output is off-limits until a minimum of one input has been checked out (the lone exception being an effect with no inputs whatsoever).

Tip

To keep memory lean, hold off on requesting the output for as long as you can, and pull in only a handful of inputs at once.

| --- | --- |

## When To Access Layer Parameters

### SmartFX — When To Access Layer Parameters

You're free to check out any parameter except layer inputs whenever you like. Layer inputs, by contrast, can only be reached within `PF_C`md\_`SMART_PRE_RENDER`.

That said, there's no obligation to actually consume every input.

Should you check out a frame (or just part of one) in `PF_C`md*`SMART_PRE_RENDER` yet never check it out again in `PF_C`md*`SMART_RENDER`, rendering it becomes unnecessary — a big win for performance.

## Wait, Gimme That Layer Back!

### SmartFX — Wait, Gimme That Layer Back!

With the checkout_id you used in PreRender, checkout_layer_pixels gets exactly one call. The number of checkouts in PreRender and the number in SmartRender must map one-to-one. When the layout of your code means you need a layer's pixels checked out repeatedly, the fix is simply to use several checkout_ids. Inside PreRender, call checkout_layer against that same layer using distinct, unique checkout_ids. Over in SmartRender, each checkout_layer_pixels call then draws on a different one of those checkout_ids.

## Effect UI & Events

An effect may furnish its own UI in a pair of spots: first, the Effect Controls Window — that's the custom ECW UI; and second, the Composition or Layer Windows, known as Custom Comp UI.

To go custom, an effect sets `PF_O`utFlag*`CUSTOM_UI` (from `PF_O`utFlags) during `PF_C`md*`GLOBAL_SETUP` (from Global Selectors) and deals with the `PF_C`md_EVENT selector.

With custom ECW UI, an effect can hand a parameter a tailored control — usable either alongside the standard parameter types or with Arbitrary Data Parameters.

A parameter carrying custom UI needs `PF_PUI_CONTROL` (from Parameter UI Flags) set as it's added.

Custom Comp UI lets an effect manipulate the video directly within the Composition or Layer Windows.

With the effect selected, the Window is able to lay custom controls right over the video and field user interaction with them, making parameter adjustment quicker and more intuitive.

By calling `PF_REGISTER_UI`, effects sign themselves up to receive events.

For user-interface handling and parameter management, After Effects can dispatch events to effects, folding them into its central message queue.

User input triggers many events, but After Effects also fires events at effects tasked with managing arbitrary data parameters.

`PF_E`ventExtra->e_type carries the event type, and the assorted events get covered below.
