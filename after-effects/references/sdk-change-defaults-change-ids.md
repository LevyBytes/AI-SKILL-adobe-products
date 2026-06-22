# Change Defaults Change Ids, Best Practices, Responsiveness, Make Your Effect Easy To Find ...

> Adobe After Effects reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Change defaults? Change IDs; Best Practices; Responsiveness; Make Your Effect Easy To Find; Sampling Pixels At (x,y); Where's The Center Of A Pixel?; Text Layer Origin; Clean Slate; Caching Behavior; Global Performance Cache Consideratons; Some Thoughts On Time From A Long-Time Developer; Rate x Time == Pain!; Testing; Compute Cache API; `AEGP_C`omputeCacheSuite1; `AEGP_C`omputeCacheCallbacks; Generating a Key; `AEGP_H`ashSuite1.

## Change defaults? Change IDs

### Changing Parameter Orders, the Nice Way — Change defaults? Change IDs

Skip this and here's what happens: someone saves a project carrying the old default, then opens it again with the updated effect in place, and that parameter quietly snaps to the new default.

Presto! Instant support call.

This is exactly the kind of situation `PF_P`aramFlag\_`USE_VALUE_FOR_OLD_PROJECTS` from Parameter Flags was made for.

## Best Practices

### Tips & Tricks — Best Practices

If your prototypes resemble ours at all, the first build of your plug-in that manages to run without crashing looks nothing like the build you eventually release.

The way your plug-in copes with downsampling, errors and exceptions, pixel aspect ratio, running low on memory, and getting interrupted mid-process is what decides how usable it really is — and how big your support queue gets.

## Responsiveness

### Tips & Tricks — Responsiveness

Lean on `PF_ABORT`() and `PF_PROGRESS`() from Interaction Callbacks to keep your plug-ins feeling snappy.

Every one of our effects gets checked for whether it can be interrupted; it's remarkable how impatient users become while your sluggish effect chews through a film-resolution sequence!

You get this for free inside After Effects' iteration functions, so there's no need to invoke those calls yourself from your pixel-processing routines.

## Make Your Effect Easy To Find

### Tips & Tricks — Make Your Effect Easy To Find

You can arrange for your effect to surface in the "Effects & Presets" palette even when a user searches on a term that isn't the plug-in's actual name.

Apply the effect — keep everything at its defaults unless you're really sure the user expects different values when searching that term — then choose "Save selection as animation preset" from the effect controls palette.

Give it whatever name you'd like users to discover the plug-in under.

Configure your plug-in's installer to drop the generated .ffx file into the \Presets directory, alongside the After Effects executable.

Whenever someone searches for the name you saved it under, your preset turns up.

## Sampling Pixels At (x,y)

### Tips & Tricks — Sampling Pixels At (x,y)

There are times you don't want to walk every pixel and instead need to jump straight to a particular offset inside the input frame. The snippet below shows one approach to reading the pixel at a chosen (x,y) spot; writing to that same spot would look much the same.

```
PF_Pixel *sampleIntegral32(PF_EffectWorld &def, int x, int y){
    return (PF_Pixel*)((char*)def.data +
        (y * def.rowbytes) +
        (x * sizeof(PF_Pixel)));
}

PF_Pixel16 *sampleIntegral64(PF_EffectWorld &def, int x, int y){
    assert(PF_WORLD_IS_DEEP(&def));
    return (PF_Pixel16*)((char*)def.data +
        (y * def.rowbytes) +
        (x * sizeof(PF_Pixel16)));
}
```

Thanks go to Paul Miller for fielding this one.

## Where's The Center Of A Pixel?

### Tips & Tricks — Where's The Center Of A Pixel?

Deeeeeep, man. With the anchor point (see User Documentation) sitting at (0,0), After Effects pivots around the top-left corner of the top-left pixel.

The catch is that the subpixel sample and area sample callbacks read (.0, .0) as landing dead center. Knock 0.5 off your x and y values before you call them to make up for that.

You won't hit this snag with the matrix functions (transform_world from `PF_W`orldTransformSuite1).

If you're shifting an image by a fractional pixel, give the output layer one extra pixel of width over its input and keep the origin parked at (0,0).

## Text Layer Origin

### Tips & Tricks — Text Layer Origin

The origin for nearly every kind of layer lands in the top-left corner. Text layers break that rule!

By default a text layer puts its origin at the bottom-left baseline of the first character. Create a text item, then select the layer to reveal the anchor point, and you'll spot it.

Notice where that default anchor point sits. The transform isn't at the corner of the layer's rectangle at all.

## Clean Slate

### Tips & Tricks — Clean Slate

The output you start with isn't guaranteed to be a clean slate. To get one, our Gaussian blur filter runs the following ahead of rendering:

```
src_rect.left   = in_data>output_origin_x;
src_rect.right  = src_rect.left + input>width;
src_rect.top    = in_data>output_origin_y;
src_rect.bottom = src_rect.top + input>height;

err = PF_FILL(NULL, NULL, output);

if (!err) {
    err = PF_COPY(¶ms[0]>u.ld, output, NULL, &src_rect);
}
```

## Caching Behavior

### Tips & Tricks — Caching Behavior

After Effects gives you several knobs for controlling caching behavior. The flags `PF_O`utFlag*`NON_PARAM_VARY`, `PF_O`utFlag*`WIDE_TIME_INPUT`, `PF_O`utFlag*`I_USE_SHUTTER_ANGLE`, `PF_O`utFlag*`I_SYNTHESIZE_AUDIO`, `PF_O`utFlag2*`I_USE_3D_CAMERA`, and `PF_O`utFlag2*`I_USE_3D_LIGHTS` (all from `PF_O`utFlags) each feed into how caching is handled.

Backing dynamic outflags can deliver a real speed boost by keeping After Effects from throwing away your effect's cache more eagerly than necessary.

Make sure your plug-in holds up across the various After Effects cache settings. Is After Effects asking your plug-in to refresh as frequently as you'd expect, or does it assume its pixels are still good when you know they aren't?

## Global Performance Cache Consideratons

### Tips & Tricks — Global Performance Cache Consideratons

Under the revamped CS6 caching, a change to how your effect renders may require clearing already-cached frames so that frames rendered and saved before the change don't get reused. Here's how to do that by hand during development:

1. In Preferences > Media & Disk Cache, disable the Disk Cache
2. Click "Empty Disk Cache" just to be sure (disabling the Disk Cache in step 1 only disables the writing of disk cache, not necessarily the usage)
3. Relaunch

Run into a glitch and odds are it's a real bug in your effect — mishandled rectangles in SmartFX, say.

Then again, after you squash a rendering bug and push out an update, you can't count on every user emptying their disk caches. One of them might be holding a cached copy of the buggy frame that has to be invalidated. The fix? Bump your plug-in's effect version. Since that value (along with the AE build number) feeds the cache key, raising it means any cached frames containing your plug-in's content stop matching.

## Some Thoughts On Time From A Long-Time Developer

### Tips & Tricks — Some Thoughts On Time From A Long-Time Developer

Stoney Ballard wrote up the following rundown of how time behaves for effects, which you might find useful.

A filter sees time described through five in_data parameters:

- current_time
- time_step
- local_time_step
- total_time
- time_scale

What drives their values:

- The frame being rendered
- The duration of the layer and composition The frame rate of the comp
- Any Time Stretch Any Time Remapping
- The time behavior of an outer composition (one enclosing the composition with the layer being filtered)
- The setting of the "Preserve frame rate when nested or in render queue" (PFR) switch

current_time tracks the frame under render and is given in the local (layer) time system. With the PFR switch off, current_time can take any value that isn't negative; flip it on and the value is held to a multiple of time_step and local_time_step. Only total_time responds to layer duration. Comp duration enters the picture solely when Time Remapping (TR) is active, at which point total_time becomes whichever is greater between layer duration and composition duration. Only time_scale reflects the composition frame rate. Time Stretch touches nothing but time_step and local_time_step, and a negative stretch flips both of those negative. total_time stays put even when the layer's duration as it appears in the comp shifts. The behavior mirrors having Time Stretch sit above a filter yet below an outer comp. PFR leaves Time Stretch's effect intact. What sets Time Stretch apart from an outer comp is that it hits both step params the same way, whereas an outer comp touches only time_step.

Because Time Remapping operates beneath the filter, the only time param it disturbs is total_time. Turn TR on and the layer is stretched to match the comp's length (though never trimmed shorter), no matter how long it genuinely runs or where it falls within the comp. That can push total_time higher. None of this depends on the actual time map — purely on whether the feature is switched on.

Nesting inside an outer comp produces the widest swings, except when PFR is on. With PFR on, an outer comp's time variations can't reach the filter at all. Naturally, current_time won't necessarily advance in time_step increments then. Frames may be skipped or run in reverse.

With PFR off, local_time_step, total_time, and time_scale stay fixed at their inner-comp values, while time_step holds the gap to the next frame of the outer comp, stated in the local time system. That can be anything, zero included. Read it as an instantaneous time rate rather than a span. A value of 0 can persist across however many rendered frames, yet current_time on the local layer holds still.

Flipping the perspective around:

Except when rendering an outer comp that has PFR off for the inner comp, current_time snaps to time_step intervals. This is the time within the layer, not within any comp.

Nothing but Time Stretch moves local_time_step. It can go negative but never reaches zero.

Apart from when an outer comp is being rendered with PFR off, time_step and local_time_step always carry the same value. time_step additionally answers to the time behavior of an outer comp (with PFR off). Positive, negative, or zero — it can be any of those, and it can differ frame to frame (in the outer comp). With PFR off, time_step doubles as a way to read off the current frame's duration.

total_time gives the layer's duration, except where Time Remapping is on, in which case it takes the larger of the layer duration and the comp duration.

time_scale is the factor for which total_time / time_scale yields the layer's duration in seconds within its comp. The comp frame rate is the only thing that moves it, though in principle every time value could be scaled in proportion for whatever reason.

You won't find a layer's intrinsic frame rate (when it has one) exposed anywhere, even though it generally matches the comp frame rate. Should a filter need to reach a clip's real frames, it can

do so only while living in a comp at the same frame rate, with neither Time Stretch nor Time Remapping on its layer. local_time_step is what it should use to locate the frames.

## Rate x Time == Pain!

### Tips & Tricks — Rate x Time == Pain!

Take care whenever a parameter of yours stands for speed or velocity. Take the ripple effect: it treats the value as constant and reads the current time to work out how far the ripple has traveled (d = v \* t). Should the user interpolate that speed across time, the right move is to integrate the velocity function from time zero up to the current time. Ripple skips that, offering instead a "phase" parameter the user can interpolate however they like, which gives correct output so long as the speed stays at zero. To deliver correct behavior yourself, either sample and integrate the speed parameter from the start of time through the current time with `PF_CHECKOUT_PARAM`(), or expose a "phase" or "distance" parameter and caution the user against interpolating the speed. Checking out plenty of parameter values barely costs anything next to rendering, which makes it the approach we recommend.

Whenever you check out parameter values at other times — or touch layer parameters at all — you have to check those parameters back in once you're done, even if something went wrong. Bear in mind that checked-out parameters can only be read.

## Testing

### Tips & Tricks — Testing

Run your plug-in through RAM previews to confirm it copes cleanly when memory runs short. Does it degrade gracefully once memory is exhausted?

When a memory request hands you `PF_E`rr\_`OUT_OF_MEMORY` (from Error Codes), are you handing it back up to After Effects?

And what becomes of your video effect when it's dropped onto an audio-only layer? Put it through projects built with earlier releases of your plug-in.

## Compute Cache API

Serving as either a stand-in for Sequence Data or an addition to it, the Compute Cache API offers a thread-safe cache where effects can work out, hold, and retrieve data ahead of or during Render. Reserve it for data whose computation is costly. Effects doing Multi-Frame Rendering can gain a lot from it, since it wipes out duplicate work spread across threads. After Effects keeps this cache pooled with its others, so memory is kept in balance across them all. The design further lets a user run A/B parameter testing while the cache state survives for both the A and the B states, which accelerates the workflow. Those final two traits pay off for single-frame and multi-frame rendering effects alike.

`AEGP_C`omputeCache is the suite that implements the Compute Cache, reachable through `AEGP_C`omputeCacheSuite1 and `AEGP_C`omputeCacheCallbacks.

## `AEGP_C`omputeCacheSuite1

### Compute Cache API — `AEGP_C`omputeCacheSuite1

Function

Purpose

`AEGP_C`lassRegister

```

Associates a cache type with a compute-class GUID that is unique everywhere, for instance "adobe.ae.effect.test_effect.cache_v_1".

Populate an AEGP_ComputeCacheCallbacks structure, wiring its function pointers to the callbacks that AEGP_ComputeCacheSuite1 expects.

Although PF_Cmd_GLOBAL_SETUP is the usual moment for this call, you are free to invoke it whenever you like.

A_Err (*AEGP_ClassRegister)(
  AEGP_CCComputeClassIdP  compute_classP,
  const AEGP_ComputeCacheCallbacks  *callbacksP);
```

`AEGP_C`lassUnRegister

```

Drops a cache type you had registered earlier, identifying it by the same compute-class GUID.

Purging happens here: every stored value is released by way of delete_compute_value invocations.

PF_Cmd_GLOBAL_SETDOWN is the customary place for this call, yet any time works.

A_Err (*AEGP_ClassUnregister)(
  AEGP_CCComputeClassIdP    compute_classP);
```

`AEGP_C`omputeIfNeededAndCheckout

```

Think of this as the primary checkout entry point: it computes the entry when required and hands back an AEGP_CCCheckoutReceiptP receipt pointer into the cache.

Supply the very same AEGP_CCComputeClassIdP that you handed to the AEGP_RegisterClass method.

Whatever you stash in AEGP_CCComputeOptionsRefconP flows straight through to generate_key and compute inside AEGP_ComputeCacheCallbacks. Because its type is opaque to AEGP_ComputeCacheSuite1, your generate_key and compute code is responsible for casting it back.

How the boolean wait_for_other_threadB behaves matters only while the value still has to be computed. A true value forces the call to either run the compute step itself or surrender a finished receipt. A false value still runs the compute step, except when a different thread is mid-computation on that same entry, and then you get back A_Err_NOT_IN_CACHE_OR_COMPUTE_PENDING.

Further detail on this argument lives under Impact of wait_for_other_threadB on AEGP_ComputeIfNeededAndCheckout.

That opaque CCCheckoutReceiptP pointer is exactly what you feed to AEGP_GetReceiptComputeValue to obtain a pointer to the value computed in the cache.

A_Err (*AEGP_ComputeIfNeededAndCheckout)(
  AEGP_CCComputeClassIdP    compute_classP,
  AEGP_CCComputeOptionsRefconP  opaque_optionsP,
  bool  wait_for_other_threadB,
  AEGP_CCCheckoutReceiptP   *compute_receiptPP);
```

`AEGP_C`heckoutCached

```

Reach for this method to discover whether the value is already computed, in which case the AEGP_CCCheckoutReceiptP receipt comes back to you.

When nothing has been computed yet, the return code is A_Err_NOT_IN_CACHE_OR_COMPUTE_PENDING.

A_Err (*AEGP_CheckoutCached)(
  AEGP_CCComputeClassIdP    compute_classP,
  AEGP_CCComputeOptionsRefconP    opaque_optionsP,
  AEGP_CCCheckoutReceiptP   *compute_receiptPP);
```

`AEGP_G`etReceiptComputeValue

```

This is how you pull the value produced by the compute method back out.

Hand it the receipt that either AEGP_ComputeIfNeededAndCheckout or AEGP_CheckoutCached gave you.

Cast the CCComputeValueRefconP that comes back to whatever object type your compute method actually produced.

A_Err (*AEGP_GetReceiptComputeValue)(
  const AEGP_CCCheckoutReceiptP   compute_receiptP,
  AEGP_CCComputeValueRefconP    *compute_valuePP);
```

`AEGP_C`heckinComputeReceipt

```

Once your effect has finished with a checked-out, computed value and before control goes back to the host, invoke this and pass the receipt from AEGP_ComputeIfNeededAndCheckout or AEGP_CheckoutCached.

An invalid receipt yields A_Err_STRUCT, and a dialog pops up reading, "Trying to check in invalid receipt. Please make sure you are not double checking in or checking in invalid receipts."

A_Err (*AEGP_CheckinComputeReceipt)(
  AEGP_CCCheckoutReceiptP   compute_receiptP );
```

| --- | --- |

## `AEGP_C`omputeCacheCallbacks

### Compute Cache API — `AEGP_C`omputeCacheCallbacks

Your effect is required to supply implementations of each of these callbacks.

Function

Purpose

generate_key

Fires both while a cache entry is created and during a cache lookup, and it ought to run quickly. Every input that pins down the address of a cache entry has to be folded into the key. Should computing the value require a layer checkout — a histogram being one case — that input's hash belongs in the key too; consult `PF_P`aramUtilsSuite::`PF_G`etCurrentState for the hash of a layer param. Keep in mind this hashes the inputs that produce the frame rather than the frame's pixels, so calling it triggers no render. The `AEGP_CCC`omputeOptionsRefconP holds whatever was supplied to `AEGP_C`omputeIfNeededAndCheckout or `AEGP_C`heckoutCached. Via the `AEGP_CC`omputeKeyP out_keyP you get the hashed key back; the `AEGP_CCC`omputeKey definition for that type sits in `AE_C`omputeCacheSuite.h.

Note

Both generate_key and compute receive the `AEGP_CCC`omputeOptionsRefconP parameter, and it has to carry every input required to derive the hash key for a cache value and to compute the value itself.

In practice that often means most or all effect parameters plus whatever layer parameters feed the cache value. The Real-world Integration Example covers this further.

```

A_Err (*generate_key)(
  AEGP_CCComputeOptionsRefconP   optionsP,
  AEGP_CCComputeKeyP   out_keyP);
```

compute

```

AEGP_ComputeIfNeededAndCheckout invokes this whenever a value has to be computed.

The data handed to AEGP_ComputeIfNeededAndCheckout arrives inside the AEGP_CCComputeOptionsRefconP.

Aim out_valuePP at your computed result, cast over to the AEGP_CCComputeValueRefconP type.

For example:

*out_valuePP = reinterpret_cast(myComputedResultP);
```

```

A_Err (*compute)(
  AEGP_CCComputeOptionsRefconP   optionsP,
  AEGP_CCComputeValueRefconP   *out_valuePP);
```

approx_size_value

```

The cache machinery calls this to gauge the overall memory footprint of the computed value, which need not be a flat structure.

That size feeds into the heuristic that decides what gets purged.

You derive the size to return from the AEGP_CCComputeValueRefconP, which is the computed value itself.

size_t (*approx_size_value)(
  AEGP_CCComputeValueRefconP   valueP);
```

delete_compute_value

```

Invoked to release the value when its cache entry is being purged; free everything the value owns right here.

void (*delete_compute_value)(
  AEGP_CCComputeValueRefconP   valueP);
```

| --- | --- |

## Generating a Key

### Compute Cache API — Generating a Key

Within its Registered Class, the generate_key callback has to hand back a key that is unique; that said, to stay safe down the road we'd urge you to make the key unique across every registered class globally. To help mint a GUID usable as that key, the AE SDK ships the `AEGP_H`ashSuite1 suite.

What generate_key produces has to be delivered as an `AEGP_CCC`omputeKey object, a type defined from this struct:

```
typedef struct AEGP_GUID {
    A_long bytes[4];
} AEGP_GUID;
```

## `AEGP_H`ashSuite1

### Compute Cache API — `AEGP_H`ashSuite1

To mint a unique key inside the generate_key() callback of `AEGP_C`omputeCacheCallbacks, lean on the `AEGP_H`ashSuite1.

Once you've acquired the suite, fire `AEGP_C`reateHashFromPtr() with a buffer — a character array holding a memorable string is our suggestion, so the contents of the cache entry stay easy to identify. Follow that with `AEGP_H`ashMixInPtr() for each effect parameter, layer-checkout hash result, and anything else that should push the cache toward a distinct key and entry.

Function

Purpose

`AEGP_C`reateHashFromPtr

```

Kick off hash creation with this; the result lands in hashP, ready to return out of generate_key.

A_Err (*AEGP_CreateHashFromPtr)(
  const A_u_longlong buf_sizeLu,
  const void *bufPV,
  AEGP_GUID *hashP);
```

`AEGP_H`ashMixInPtr

```

Fire this once per effect parameter, layer-checkout hash, or any other datum that factors into a cache entry's identity.

A_Err(*AEGP_HashMixInPtr)(
  const A_u_longlong buf_sizeLu,
  const void *bufPV,
  AEGP_GUID *hashP);
```

| --- | --- |

Below, Levels2Histo_generate_key_cb() stands in as the callback wired to generate_key() and shows `AEGP_H`ashSuite1 in action:

```
A_Err Levels2Histo_generate_key_cb(AEGP_CCComputeOptionsRefconP opaque_optionsP, AEGP_CCComputeKeyP out_keyP)
{
    try
    {
        const Levels2Histo_options&  histo_op( *reinterpret_cast<Levels2Histo_options*>(opaque_optionsP));
        A_Err err = Err_NONE;

        AEFX_SuiteScoper<AEGP_HashSuite1> hash_suite = AEFX_SuiteScoper<AEGP_HashSuite1>(
            in_dataP,
            kAEGPHashSuite,
            kAEGPHashSuiteVersion1,
            out_dataP);

        // define a simple buffer that is easy to recognize as a starting hash
        const char* hash_buffer = "Level2Histo";
        err = hash_suite->AEGP_CreateHashFromPtr(sizeof(hash_buffer), hash_buffer, out_keyP);

        // Mix in effect parameters that would create a different compute result and should generate a different cache entry and key.
        if (!err) {
            err = hash_suite->AEGP_HashMixInPtr(sizeof(histo_op.depthL), &histo_op.depthL, out_keyP);
        }

        if (!err) {
            err = hash_suite->AEGP_HashMixInPtr(sizeof(histo_op.bB), &histo_op.bB, out_keyP);
        }

        // mix in any other effect parameters that should affect the cache key
        // ...

        // out_keyP is returned as the generated key for use as the cache key.
    }
    catch (...)
    {
        /* return most appropriate PF_Err */
    }
}
```

## Compute or Checkout the Cache Value

### Compute Cache API — Compute or Checkout the Cache Value

An early decision when wiring up cache support is whether one render call must check out more than a single cache value. Where a render depends on several cache values, the multi-checkout pattern lets you compute those caches in parallel across multiple render calls, so the compute never serializes.

### Single Cache Value

Should a render call require just one cache value to render a frame, hand `AEGP_C`omputeIfNeededAndCheckout a wait_for_other_threadB of true. A receipt comes back from the checkout call, which may run the compute callback to fill the cache, or instead wait on a thread that already kicked off the needed computation.

### Multi-Checkout Cache Values

When a render call leans on several cache values, the multi-checkout pattern keeps the render threads busy and thereby stops the compute from serializing.

The idea behind multi-checkout is to let one render thread (say, the one rendering frame 3) ride on whatever other render threads (say, frames 1 and 2) happen to be computing the cache values it needs at the same time (frame 3, for example, depends on data from frames 1 and 2). Where no other thread is computing the requested cached value, the render thread (frame 3) runs the compute itself. After all the cache-value checkout calls are issued, that render thread (frame 3) can pause until any other threads (frames 1 and 2) wrap up their compute, then proceed to render the pixels. As soon as the pixel render finishes, be certain to check in whatever cache values were checked out (frames 1, 2 and 3).

Pseudo-code illustrating the approach follows.

```
Render()
{
    // Make a request for each cache value that is needed to complete the render
    bool first_err = AEGP_ComputeIfNeededAndCheckout(first_options, do_not_wait, first_cache_receipt);
    bool second_err = AEGP_ComputeIfNeededAndCheckout(second_options, do_not_wait, second_cache_receipt);
    // Add as many additional do_not_wait checkout calls here as needed.

    // Once all the requests have been made, check to see if any of the Checkouts did not return
    // a valid checkout receipt.
    if(first_err == A_Err_NOT_IN_CACHE_OR_COMPUTE_PENDING) {
        AEGP_ComputeIfNeededAndCheckout(wait, first_cache_receipt);
    }
    if(second_err == A_Err_NOT_IN_CACHE_OR_COMPUTE_PENDING) {
        AEGP_ComputeIfNeededAndCheckout(wait, second_cache_receipt);
    }
    // Add as many additional waiting checkout calls here as needed

    // All cache values are now available via AEGP_GetReceiptComputeValue for use in the Render

    // ... complete the render steps

    // Check in all cache values now
    AEGP_CheckinComputeReceipt(first_cache_receipt);
    AEGP_CheckinComputeReceipt(second_cache_receipt);
}
```
