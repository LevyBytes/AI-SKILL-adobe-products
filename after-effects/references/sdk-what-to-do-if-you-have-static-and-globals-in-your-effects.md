# What To Do If You Have Static And Globals In Your Effects, Setting An Effect As Thread Safe, How To Test Whether An Effect Is Thread Safe, Thread Safe First Party Effects ...

> Adobe After Effects reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: What to do if you have static and globals in your effects; Setting an Effect as Thread-safe; How to test whether an effect is Thread-Safe; Thread-Safe First Party Effects; Effect Details; Free Code == Good; Accessing the After Effects Function Suites; Suite Versions; Threading; Memory Allocation; `PF_H`andleSuite1; Image Buffer Management Functions; `PF_W`orldSuite2; Iteration Suites; `PF_I`terate8Suite1, `PF_I`terate16Suite1, `PF_I`terateFloatSuite1; Graphics Utility Suites; Transform Worlds; Kernel Flags.

## What to do if you have static and globals in your effects

### Multi-Frame Rendering in AE — What to do if you have static and globals in your effects

Whenever a static or global variable turns up, turning it into a local variable is the ideal move where you can. But suppose that variable genuinely has to remain static or global?

Below are several go-to tactics for handling statics or globals:

### Could the data be easily passed between functions instead without a change in behavior?

```
// Example of a non Thread-Safe code
static int should_just_be_local;

void UseState() {
    DoComputation(should_just_be_local);
}

void SetAndUseState() {
    should_just_be_local = DoComputation();
    UseState();
}
```

Fold it into a struct, or widen the function arguments to carry it:

```
// We can fix the above code by passing the should_just_be_local variable through function arguments

void UseState(int should_just_be_local) {
    DoComputation(should_just_be_local);
}

void SetAndUseState() {
    int should_just_be_local = DoComputation();
    UseState(should_just_be_local);
}
```

### Could the data be initialized before you execute your code (e.g. a lookup table, a const variable)?

```
// Example of a non Thread-Safe code

// Many places in the code need to read this table but won't be writing to it
static int state_with_initializer[64];
static bool state_was_initialized = false;

void InitializeState() {
    for (int i = 0; i < 64; ++i) {
        state_with_initializer[i] = i * i;
    }
    state_was_initialized = true;
}

void Main() {
    if (!state_was_initialized) {
        InitializeState();
    }
    DoComputation(state_with_initializer);
}
```

Turn it const, or swap it for a macro:

```
std::array<int, 64> InitializeState() {
    std::array<int, 64> temp;

    for (int i = 0; i < 64; ++i) {
        temp[i] = i * i;
    }
    return temp;
}

// We can fix the above code by making this table a const and initialize it before using it
static const std::array<int, 64> state_with_initializer = InitializeState();

void Main() {
    DoComputation(state_with_initializer);
}
```

### Is the data initialized once at runtime based on data that doesn't change on subsequent renders?

```
// Example of a non Thread-Safe code
static int depends_on_unchanging_runtime_state;

void UseState() {
    DoComputation(depends_on_unchanging_runtime_state);
}

void SetAndUseState() {
    depends_on_unchanging_runtime_state = DoComputationThatNeedsStateOnlyOnce();
    UseState();
}
```

Confirm first that this state can't be known ahead of your code running (case 2); but if runtime initialization is unavoidable, reach for a const static local. (The C++ spec, after all, makes thread-safe initialization of static local objects guaranteed):

```
void UseState(int depends_on_unchanging_runtime_state) {
    DoComputation(depends_on_unchanging_runtime_state);
}

void SetAndUseState() {
    // We can fix the above code by making the variable a const static local
    static const int depends_on_unchanging_runtime_state = DoComputationThatNeedsStateOnlyOnce();

    UseState(depends_on_unchanging_runtime_state);
}
```

### The data has to stay static/global not being a const. But each render thread can have its own copy of the data.

```
// This variable has to be static and not a const
static int this_thread_needs_access;

void SetState(int new_state) {
    this_thread_needs_access = new_state;
}

void UseState() {
    DoComputation(this_thread_needs_access);
}
```

Just declare it thread_local and you're done:

```
// Make this variable a thread_local variable
thread_local static int this_thread_needs_access;

void SetState(int new_state) {
    this_thread_needs_access = new_state;
}

void UseState() {
    DoComputation(this_thread_needs_access);
}
```

### The data has to stay static/global not being a const and each thread needs to read and write from the most up-to-date state. (rare)

```
// This variable has to be static and not a const
// It also needs to be shared across several threads
static int every_thread_needs_latest_state;

void SetState(int new_state) {
    every_thread_needs_latest_state = new_state;
}

void UseState() {
    DoComputation(every_thread_needs_latest_state);
}
```

For this situation, wrap every access in a lock:

```
// Add a mutex (lock)
static std::mutex ex_lock;

static int every_thread_needs_latest_state;

void SetState(int new_state) {
    {
        // Protect the access with the mutex (lock)
        std::lock_guard<std::mutex> lock(ex_lock);
        every_thread_needs_latest_state = new_state;
    }
}

void UseState() {
    int state_capture;
    {
        // Protect the access with the mutex (lock)
        std::lock_guard<std::mutex> lock(ex_lock);
        state_capture = every_thread_needs_latest_state;
    }
    DoComputation(state_capture);
}
```

Note

What you see above are the situations we run into most often across our own effects. Feel free to devise other ways of handling your statics and globals that fit your needs best.

## Setting an Effect as Thread-safe

### Multi-Frame Rendering in AE — Setting an Effect as Thread-safe

- In GlobalSetup, set the `PF_O`utFlag2\_`SUPPORTS_THREADED_RENDERING` flag; this is how you signal Thread-Safety and Multi-Frame Rendering support for your effect to the host.
- Where needed, add the `PF_O`utFlag2\_`MUTABLE_RENDER_SEQUENCE_DATA_SLOWER` so that sequence_data can be written during the Render stage.
- Refresh the `AE_E`ffect_Global_OutFlags_2 magic number. The first time, start AE with your effect while leaving the magic number alone, apply the effect, and AE will report back the correct number for you to enter.
- Should you be using the `PF_O`utFlag*`SEQUENCE_DATA_NEEDS_FLATTENING` flag, don't forget to set the `PF_O`utFlag2*`SUPPORTS_GET_FLATTENED_SEQUENCE_DATA` flag as well.

## How to test whether an effect is Thread-Safe

### Multi-Frame Rendering in AE — How to test whether an effect is Thread-Safe

Having worked through the steps above to render your effect Thread-Safe, you're now set to begin testing.

### Enable Multi-Frame Rendering

- In After Effects 2022, Multi-Frame Rendering comes enabled by default.
- Switching MFR on or off is done under Preferences > Memory & Performance > Performance via the Multi-Frame Rendering checkbox.

### Test your effect

With the preparation steps above wrapped up, put your effect through thorough testing. Both simple and complex compositions should be testable, and you ought to observe performance gains as the effect takes advantage of multi-frame rendering.

- Run through every one of your existing manual and automated test plans.
- Exercise all the effect parameters and confirm they behave correctly.
- Mix in a few of the AE effects already converted to thread-safe where it makes sense. See the Thread-Safe First Party Effects section.
- Confirm that enabling multi-frame rendering brings no crashes, hangs, render differences, or other surprises.

## Thread-Safe First Party Effects

### Multi-Frame Rendering in AE — Thread-Safe First Party Effects

For the complete roster of MFR-supported effects, visit https://helpx.adobe.com/after-effects/user-guide.html/after-effects/using/effect-list.ug.html. The list grows every week.

## Effect Details

Having walked through the fundamentals of effect plug-ins, we turn now to a few finer points that put a final shine on your effect. Since not every section applies to every plug-in, feel free to lean on the PDF document bookmarks and jump straight to whatever is relevant to your current project.

## Free Code == Good

### Effect Details — Free Code == Good

As much information and supporting code as it can muster is handed to effect plug-ins by After Effects. Tap our function suites and callbacks to read parameter values (source footage included) across different times. Lean on our memory allocation suite so you aren't fighting the host over resources. Turn to our image processing suites to copy, fill, blend, and convolve images, and to move between color spaces. Pull information about the masks sitting on a layer. We also ship ANSI emulation and math utility suites, plus details on the application, the user, the serial number, and the active drawing context.

Many common tasks were served by functions in earlier After Effects versions. With the shift toward deeper color, those got relocated into function suites. Favor the newer function suites wherever you can; everything simply works out better.

Relying on our function suites keeps your plug-in lean, since there's less code for you to write and test. These functions have been tested, optimized, and put to work by our own plug-ins. They're spread across multiple processors and exploit whatever hardware acceleration is on hand.

We're not kidding — use the functions we provide. Seriously.

## Accessing the After Effects Function Suites

For C++ code, the way to reach the suites is through `AEFX_S`uiteScoper, which grabs the suite when it's needed and releases it once you're finished.

Below is an example that uses `AEFX_S`uiteScope to reach the `PF_GPUD`eviceSuite1 suite:

```
AEFX_SuiteScoper<PF_GPUDeviceSuite1> gpu_suite = AEFX_SuiteScoper<PF_GPUDeviceSuite1>(
    in_dataP,
    kPFGPUDeviceSuite,
    kPFGPUDeviceSuiteVersion1,
    out_dataP);
```

Note

When the requested suite can't be acquired and the optional second template argument, `ALLOW_NO_SUITE`, is left false, `AEFX_S`uiteScoper throws an Exception, `A_E`rr\_`MISSING_SUITE`.

When `ALLOW_NO_SUITE` is false, be sure to surround the `AEFX_S`uiteScoper<> call with a try/catch wrapper.

When `ALLOW_NO_SUITE` is true, you should verify the returned pointer isn't NULL before you use it.

With the suite in hand, you can call any function from the suite list, like so:

```
gpu_suite->GetDeviceInfo(in_dataP->effect_ref, extraP->input->device_index, &device_info);
```

For C code, you'll need to acquire and release the suites by hand using the `PF_S`uite_Helper utility files, as shown in the Checkout sample project.

Under the hood, both approaches obtain PICA function suites via AcquireSuite, a member function of the SPBasicSuite that `PF_I`nData points to.

## Suite Versions

### Accessing the After Effects Function Suites — Suite Versions

As an illustration, WhizBangSuite1 might expose a Foobar() entry point accepting two arguments, while WhizBangSuite2>Foobar() could accept three. A fresh release of a suite replaces its predecessor, but you are welcome to hold references to several versions at once — previously shipped suites are never withdrawn or modified on our end.

If you cannot be certain what the plug-in host supports (apart from Premiere, no third-party host implements PICA), try to obtain the newest version first and "fall back" toward earlier ones. Should a capability you depend on be missing, alert the user and hand back an error — or, on more "primitive" plug-in hosts, substitute alternate behavior. Be aware that, across other hosts running After Effects plug-ins, suite support resembles a maze of twisty caves and passages, all alike.

## Threading

### Accessing the After Effects Function Suites — Threading

Treat every function our suites expose as not thread-safe unless its documentation states otherwise. To give one case, anything that touches the user interface should be confined to your plug-in's main thread.

### Implementation — Threading

Threading gets no support whatsoever in AEGP. The main thread has to do all the work, whether driven by a callback or by the idle hook.

A single call bucks that rule and is thread safe: `AEGP_C`auseIdleRoutinesToBeCalled().

That said, because SPBasicSuite isn't thread safe on its own, you'll have to squirrel away the function pointer back on the main thread.

## Memory Allocation

For allocations of any meaningful size, route them through After Effects. Tiny allocations may go through new and delete, yet that should be treated as the exception rather than the norm. When memory runs short — RAM preview being one such situation — it is critical that plug-ins handle out-of-memory states cleanly and avoid contending with After Effects for OS memory. Relying on our allocation routines lets After Effects recognize the right moment to release cached images and thereby sidestep memory swapping. Skip our functions on large allocations and you invite lock-ups, crashes, and tech support calls. Don't do that.

When you are wrapping pre-existing C++ classes, build a base class that supplies new and delete for the class and inherit from it. As for the STL, overloading global new and delete is not something we advise; supply an allocator through the template definition instead.

Any handles After Effects hands to you arrive already locked, and they are unlocked again once you return.

## `PF_H`andleSuite1

### Memory Allocation — `PF_H`andleSuite1

Function

Purpose

Replaces

host_new_handle

```

Allocates a new handle.

PF_Handle (*host_new_handle)(
  A_HandleSize size);
```

`PF_NEW_HANDLE`

host_lock_handle

```

Locks a handle.

void * (*host_lock_handle)(
  PF_Handle pf_handle);
```

`PF_LOCK_HANDLE`

host_unlock_handle

```

Unlocks a handle.

void (*host_unlock_handle)(
  PF_Handle pf_handle);
```

`PF_UNLOCK_HANDLE`

host_dispose_handle

```

Frees a handle.

void (*host_dispose_handle)(
  PF_Handle pf_handle);
```

`PF_DISPOSE_HANDLE`

host_get_handle_size

```

Returns the size, in bytes, of the reallocatable block whose handle is passed in.

A_HandleSize (*host_get_handle_size)(
  PF_Handle pf_handle);
```

`PF_GET_HANDLE_SIZE`

host_resize_handle

```

Resizes a handle.

PF_Err (*host_resize_handle)(
  A_HandleSize new_sizeL, PF_Handle *handlePH);
```

`PF_RESIZE_HANDLE`

| --- | --- | --- |

## Image Buffer Management Functions

Reach for these functions when you need to build or tear down a `PF_E`ffectWorld / `PF_L`ayerDef, or to query its bit-depth.

## `PF_W`orldSuite2

### Image Buffer Management Functions — `PF_W`orldSuite2

Function

Description

`PF_N`ewWorld

```

Creates a new PF_EffectWorld.

PF_Err PF_NewWorld(
  PF_ProgPtr      effect_ref,
  A_long          widthL,
  A_long          heightL,
  PF_Boolean      clear_pixB,
  PF_PixelFormat  pixel_format,
  PF_EffectWorld  *worldP);
```

`PF_D`isposeWorld

```

Disposes of a PF_EffectWorld.

PF_Err PF_DisposeWorld(
  PF_ProgPtr      effect_ref,
  PF_EffectWorld  *worldP);
```

`PF_G`etPixelFormat

```

Get the pixel format for a given PF_EffectWorld.

PF_Err PF_GetPixelFormat(
  const PF_EffectWorld  *worldP,
  PF_PixelFormat        *pixel_formatP);
```

pixel_formatP can be: - `PF_P`ixelFormat_ARGB32 - standard 8-bit RGB - `PF_P`ixelFormat_ARGB64 - 16-bit RGB - `PF_P`ixelFormat_ARGB128 - 32-bit floating point RGB

| --- | --- |

## Iteration Suites

A common pattern for effects is to walk every pixel in an image and filter it one at a time. Leaning on the iteration suites that After Effects supplies lets the host split your work across however many processors exist, while also picking up any hardware-specific acceleration.

On top of that, progress reporting and user cancellation are handled for you by After Effects.

So use these suites! Just confirm that whichever pixel-processing routines you feed into those iterator callbacks happen to be re-entrant ones.

Note

The October 2021 SDK update increases the number of concurrent iterate threads up to the available system CPU cores instead of the previous hard-coded limit of 32.

## `PF_I`terate8Suite1, `PF_I`terate16Suite1, `PF_I`terateFloatSuite1

### Iteration Suites — `PF_I`terate8Suite1, `PF_I`terate16Suite1, `PF_I`terateFloatSuite1

Function

Purpose

iterate

```

Iterates across pixels from a source image, alters them, and populates a destination image.

You may specify a rectangular region of pixels across which to iterate; if you don't, After Effects will iterate over every overlapping pixel.

You give a refcon, and the function is invoked with that refcon, plus the x and y coordinates of the current pixel, plus pointers to that pixel in the source and destination images.

If you pass a NULL source, it will iterate over the dst. This function is quality independent.

Don't depend upon the pixels being traversed in any particular order.

The image may be subset to different CPUs, so consider all the parameters (except dst) to be read-only while After Effects is processing.

This callback automatically includes progress and abort checking, so don't do so in your pixel function.

iterate(
  PF_InData       *in_data,
  A_long          progress_base,
  A_long          progress_final,
  PF_EffectWorld  *src,
  const PF_Rect   *area,
  void            *refcon,
  PF_Err (*pix_fn)(
    void      *refcon,
    A_long    x,
    A_long    y,
    PF_Pixel  *in,
    PF_Pixel  *out),
  PF_EffectWorld  *dst);
```

iterate_origin

```

Lets you specify an offset from the input into the output.

For example, if your output buffer is smaller than your input buffer, pass (in_- data>output_origin_x, in_data>output_origin_y) as the origin, and NULL for area, and this function will offset the src pixel pointer appropriately for your pixel function.

iterate_origin(
  PF_InData       *in_data,
  A_long          progress_base,
  A_long          progress_final,
  PF_EffectWorld  *src,
  const PF_Rect   *area,
  const PF_Point  *origin,
  void            *refcon,
  PF_Err (*pix_fn)(
    void      *refcon,
    A_long    x,
    A_long    y,
    PF_Pixel  *in,
    PF_Pixel  *out),
  PF_EffectWorld  *dst);
```

iterate_lut

```

PF_Iterate8Suite only. Allows a Look-Up Table (LUT) to be passed for iteration; you can pass the same or different LUTs for each color channel.

If no LUT is passed, an identity LUT is used.

iterate_lut(
  PF_InData       *in_data,
  A_long          prog_base,
  A_long          prog_final,
  PF_EffectWorld  *src,
  const PF_Rect   *area,
  A_u_char        *a_lut0,
  A_u_char        *r_lut0,
  A_u_char        *g_lut0,
  A_u_char        *b_lut0,
  PF_EffectWorld  *dst);
```

iterate_origin_non_clip_src

```

Allows for iteration across pixels outside the intersection of the source and destination layers. For these pixels, you will be passed a PF_Pixel with values {0,0,0,0}.

iterate_origin_non_clip_src(
  PF_InData       *in_data,
  A_long          progress_base,
  A_long          progress_final,
  PF_EffectWorld  *src,
  const PF_Rect   *area,
  const PF_Point  *origin,
  void            *refcon,
  PF_Err (*pix_fn)(
    void      *refcon,
    A_long    x,
    A_long    y,
    PF_Pixel  *in,
    PF_Pixel  *out),
  PF_EffectWorld  *dst);
```

iterate_generic

`PF_I`terate8Suite only. If you want to do something once per available CPU, this is the function to use (pass `PF_I`terations\_`ONCE_PER_PROCESSOR` for iterationsL). Only call abort and progress functions from thread index 0.

Note

You can iterate over more than pixels. Internally, we use it for row-based image processing, and for once-per-entity updates of complex sequence data.

```

iterate_generic(
  A_long iterationsL,
  void   *refconPV,
  PF_Err (*fn_func)(
    void    *refconPV,
    A_long  thread_idxL,
    A_long  i,
    A_long  itrtL));
```

| --- | --- |

## Graphics Utility Suites

The function suites listed below give you access to the transform and graphics utility routines that After Effects runs internally.

## Transform Worlds

### Graphics Utility Suites — Transform Worlds

The routines here merge `PF_E`ffectWorlds together in useful ways, and invoking them runs the very same code After Effects relies on under the hood.

### `PF_W`orldTransformSuite1

Function

Purpose

composite_rect

```

Composite a rectangle from one PF_EffectWorld into another, using one of After Effects' transfer modes.

PF_Err composite_rect (
  PF_ProgPtr      effect_ref,
  PF_Rect         *src_rect,
  A_long          src_opacity,
  PF_EffectWorld  *src_world,
  A_long          dst_x,
  A_long          dst_y,
  PF_Field        field_rdr,
  PF_XferMode     xfer_mode,
  PF_EffectWorld  *dst);
```

field*rdr can be upper, lower or both. xfer_mode is one of the following: - `PF_X`fer_COPY - `PF_X`fer_BEHIND - `PF_X`fer*`IN_FRONT`

blend

```

Blends two images, alpha-weighted. Does not deal with different-sized sources, though the destination may be either PF_EffectWorld.

PF_Err blend (
  PF_ProgPtr            effect_ref,
  const PF_EffectWorld  *src1,
  const PF_EffectWorld  *src2,
  PF_Fixed              ratio,
  PF_EffectWorld        *dst);
```

convolve

```

Convolve an image with an arbitrary size kernel on each of the a, r, g, and b channels separately.

You can specify a rectangle to convolve (for instance, the extent_hint from PF_EffectWorld Structure), or pass 0 to convolve the entire image.

Do not use if the source is the destination.

Describe the convolution using Kernel Flags.

PF_Err convolve(
  PF_EffectWorld  *src,
  const PF_Rect   *area,
  PF_KernelFlags  flags,
  A_long          kernel_size,
  void            *a_kernel,
  void            *r_kernel,
  void            *g_kernel,
  void            *b_kernel,
  PF_EffectWorld  *dst);
```

copy

```

Copies a region from one PF_EffectWorld to another, preserving alpha (unlike the macOS CopyBits).

PF_Err copy (
  PF_EffectWorld  *src,
  PF_EffectWorld  *dst,
  PF_Rect         *src_r,
  PF_Rect         *dst_r);
```

copy_hq

A higher fidelity version of the above (using the same parameters).

transfer_rect

```

Blends using a transfer mode, with an optional mask.

PF_Err transfer_rect (
  PF_ProgPtr              effect_ref,
  PF_Quality              quality,
  PF_ModeFlags            m_flags,
  PF_Field                field,
  const PF_Rect           *src_rec,
  const PF_EffectWorld    *src_world,
  const PF_CompositeMode  *comp_mode,
  const PF_MaskWorld      *mask_world0,
  A_long                  dest_x,
  A_long                  dest_y,
  PF_EffectWorld          *dst_world);
```

transform_world

```

Given a PF_EffectWorld and a matrix (or array of matrices), transforms and blends using an After Effects transfer mode, with an optional mask.

The matrices pointer points to a matrix array used for motion-blur.

When is a transform not a transform? A Z-scale transform is not a transform, unless the transformed layer is a parent of other layers that do not all lie in the z=0 plane.

PF_Err transform_world (
  PF_InData               *in_data,
  PF_Quality              quality,
  PF_ModeFlags            m_flags,
  PF_Field                field,
  const PF_EffectWorld    *src_world,
  const PF_CompositeMode  *comp_mode,
  const PF_MaskWorld      *mask_world0,
  const PF_FloatMatrix    *matrices,
  A_long                  num_matrices,
  Boolean                 src2dst_matrix,
  const PF_Rect           *dest_rect,
  PF_EffectWorld          *dst_world);
```

| --- | --- |

## Kernel Flags

### Graphics Utility Suites — Kernel Flags

Routines like convolve or gaussian kernel operate on kernels — that is, matrices holding filter-weight values — and those matrices may take any format. How a matrix gets built and applied is governed by the kernel flags, which you OR together as needed.

Whichever flags apply to a particular routine are listed beside that routine's prototype.The left column's first entry is always the default and carries the value 0.

Kernel Flags

Indicates

`PF_K`ernelFlag_2D `PF_K`ernelFlag_1D

Specifies a one or two dimensional kernel.

`PF_K`ernelFlag_UNNORMALIZED `PF_K`ernelFlag_NORMALIZED

NORMALIZED equalizes the kernel; the volume under the kernel surface is the same as the volume under the covered area of pixels.

`PF_K`ernelFlag*CLAMP `PF_K`ernelFlag*`NO_CLAMP`

CLAMP restricts values to the valid range for their data type.

`PF_K`ernelFlag*`USE_LONG` `PF_K`ernelFlag*`USE_CHAR` `PF_K`ernelFlag*`USE_FIXED` `PF_K`ernelFlag*`USE_UNDEFINED`

`USE_LONG` defines the kernel as an array of longs valued from 0 to 255. `USE_LONG` is the only implemented flag. `USE_CHAR` defines the kernel as an array of unsigned chars from 0 to 255. `USE_FIXED` defines the kernel as an array of fixeds from 0 to 1.

`PF_K`ernelFlag_HORIZONTAL `PF_K`ernelFlag_VERTICAL

Specifies the direction of the convolution.

`PF_K`ernelFlag*`TRANSPARENT_BORDERS` `PF_K`ernelFlag*`REPLICATE_BORDERS`

Use `TRANSPARENT_BORDERS` to treat pixels off the edge as alpha zero (black). Use `REPLICATE_BORDERS` to replicate border pixels when sampling off the edge. `REPLICATE_BORDERS` is not implemented and will be ignored.

`PF_K`ernelFlag*`STRAIGHT_CONVOLVE` `PF_K`ernelFlag*`ALPHA_WEIGHT_CONVOLVE`

Use `STRAIGHT_CONVOLVE` to indicate straight convolution. Use `ALPHA_WEIGHT_CONVOLVE` to tell the convolution code to alpha-weight the contributions of pixels to the resulting convolved output. `ALPHA_WEIGHT_CONVOLVE` is not implemented and will be ignored.

| --- | --- |
