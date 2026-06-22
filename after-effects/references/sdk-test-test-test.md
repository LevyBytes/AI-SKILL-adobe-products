# Test Test Test, Global Sequence Frame Data, Persistence, Validating Sequence Data ...

> Adobe After Effects reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Test Test Test!; Global, Sequence, & Frame Data; Persistence; Validating Sequence Data; Flattened And Unflattened Sequence Data; Resizing Sequence Data; Accessing sequence_data at Render Time with Multi-Frame Rendering; Arbitrary Data Parameters; Arbitrary Data Selectors; Implementing Arbitrary Data; Arbitrary Data? Re-Entrancy!; When Not To Access Arbitrary Parameters; Changes During Dialogs; `PF_E`ffectUISuite.

## Test Test Test!

### Pixel Aspect Ratio — Test Test Test!

Run your tests at 1/2, 1/4, and custom resolutions, then line the outputs up against each other. An anamorphic (2:1) pixel aspect ratio composition is excellent for flushing out pixel-aspect-ratio handling bugs — it puts them on full display — and don't forget to vary the horizontal and vertical downsample factors independently while testing.

A few developers have run into zero-valued downsample factors coming from certain "After Effects compatible" plug-in hosts. Guard against a zero before you divide by it.

### Parameters & Floating Point Values

Here's a small confession: for years we handed you 8-bit color values while quietly keeping floating-point representations internally the whole time.

Indeed, even where colors ran over-bright, all you ever heard from us was '255, 255, 255'. Sure, that was the truth.

We just can't keep up the pretense any longer! Hand this function a color parameter — the kind After Effects places in your effect's parameter array — and it gives back a floating-point representation that carries any high dynamic range component along with it.

### Parameters & Floating Point Values — `PF_C`olorParamSuite1

Function

Purpose

`PF_G`etFloatingPoint ColorFromColorDef

```

PF_Err PF_GetFloatingPointColorFromColorDef(
  PF_ProgPtr         effect_ref,
  const PF_ParamDef  *color_defP,
  PF_PixelFloat      *fp_colorP);
```

| --- | --- |

### Parameters & Floating Point Values — `PF_P`ointParamSuite1

Point parameters can be fetched as floating-point values too, by way of the following.

Function

Purpose

`PF_G`etFloatingPoint ValueFromPointDef

```

PF_Err PF_GetFloatingPointValueFromPointDef(
  PF_ProgPtr         effect_ref,
  const PF_ParamDef  *point_defP,
  A_FloatPoint       *fp_pointP);
```

| --- | --- |

### Parameters & Floating Point Values — `PF_A`ngleParamSuite1

As of CS6.0.2, angle parameters can likewise be retrieved in floating-point form.

Function

Purpose

`PF_G`etFloatingPoint ValueFromAngleDef

```

PF_Err PF_GetFloatingPointValueFromAngleDef(
  PF_ProgPtr         effect_ref,
  const PF_ParamDef  *angle_defP,
  A_FloatLong        *fp_valueP);
```

| --- | --- |

### Parameter Supervision

The term supervision refers to driving one parameter's value off the values held by others, adjusting them on the fly. Mark a parameter for supervision by applying `PF_P`aramFlag*SUPERVISE while you add it under `PF_C`md*`PARAM_SETUP`. From then on, every change to it delivers a `PF_C`md*`USER_CHANGED_PARAM` to you. That changed parameter's index within the plug-in's parameter array travels along inside the `PF_U`serChangedParamExtra (extra) param. While `PF_C`md*`USER_CHANGED_PARAM` is in play, both the values and the look of any of your parameters are yours to adjust.

### Parameter Supervision — Updating Parameter UI

Apply `PF_P`aramFlag*SUPERVISE to even a single parameter and After Effects responds by delivering `PF_C`md*`UPDATE_PARAMS_UI`, exactly as though `PF_O`utFlag\_`SEND_UPDATE_PARAMS_UI` had been set.

Within `PF_C`md*`UPDATE_PARAMS_UI`, your reach is limited to the look and the enable state of parameters. Refresh the interface through `PF_U`pdateParamUI() out of `PF_P`aramUtilSuite3, handing it a copy of whichever parameter you intend to alter. Leave the original untouched. There's no need to apply `PF_O`utFlag*`REFRESH_UI`; that part is taken care of by `PF_U`pdateParamUI() on your behalf.

Note

For `PF_PUI_STD_CONTROL_ONLY` parameters, refreshing the UI through this path is the sole option.

### Parameter Supervision — Updating Parameter Values

The actual value of a parameter — not merely its UI — is editable while `PF_C`md*`USER_CHANGED_PARAM` runs, and also during `PF_C`md_EVENT (specifically `PF_E`vent*`DO_CLICK`, `PF_E`vent_DRAG, & `PF_E`vent_KEYDOWN). Edits attempted outside those windows won't be respected by After Effects.

To alter a parameter's value rather than only its UI, work on the original parameter directly and assign `PF_P`aramdef.uu.change*flags the value `PF_C`hangeFlag*`CHANGED_VALUE`.

Doing so refreshes the UI as well and leaves the edit undoable by the user. Be aware that layer parameters do not support `PF_C`hangeFlag\_`CHANGED_VALUE`.

The point of this suite is to hand effect plug-ins a measure of reach into their own parameter streams without dragging in AEGP suite usage. Several third-party hosts implement at least a portion of these functions. They prove particularly useful to effects that rely on supervised parameters.

### Parameter Supervision — `PF_P`aramUtilSuite3

Function

Purpose

`PF_U`pdateParamUI

```

PF_UpdateParamUI(
  PF_ProgPtr         effect_ref,
  PF_ParamIndex      param_index,
  const PF_ParamDef  *defP);
```

Compels After Effects to redraw the parameter's UI within the effect controls palette. From CC 2014 onward, a changed custom UI height is now respected by After Effects. Just adjust the ui_height on your custom UI `PF_P`aramDef, then invoke `PF_U`pdateParamUI. The Effect Control Window picks up the effect's revised custom UI height. As of CS6, disabling a parameter from a plug-in now records that condition in the UI flags, letting the plug-in consult that flag later to learn whether it remains disabled.

Danger

Passing param[0] here is something you must never do.

`PF_G`etCurrentState

```

PF_GetCurrentState(
  PF_ProgPtr     effect_ref,
  PF_ParamIndex  param_index,
  const A_Time   *startPT0,
  const A_Time   *durationPT0,
  PF_State       *stateP);
```

Paired with `PF_A`reStatesIdentical further down, this API tells you whether a collection of inputs (layers, other properties, or a mix) differs between an earlier `PF_G`etCurrentState call and the present one — which makes it handy for caching. You may scope it to a span of time or to all time. CS6 widened it with param*index, startPT0, and durationPT0. The param_index pre-defined constants are: - `PF_P`aramIndex*`CHECK_ALL` - examine every parameter, even every layer that a layer parameter points to. - `PF_P`aramIndex*`CHECK_ALL_EXCEPT_LAYER_PARAMS` - leave out all layers. Supply a particular layer parameter index to test only that one layer parameter. - `PF_P`aramIndex*`CHECK_ALL_HONOR_EXCLUDE` - like `CHECK_ALL`, except it respects `PF_P`aramFlag*`EXCLUDE_FROM_HAVE_INPUTS_CHANGED`. Supplying NULL for start and duration both means all time. With effects that simulate across time and consequently set `PF_O`utFlag2*`AUTOMATIC_WIDE_TIME_INPUT`, a time range you query gets stretched to cover whatever times are required to generate that range. Fills in a `PF_S`tate, an opaque type that serves as a receipt capturing the present condition of the effect's parameters (within our frame-caching database internally, this `PF_S`tate is what gets used).

`PF_A`reStatesIdentical

```

PF_AreStatesIdentical(
  PF_ProgPtr      effect_ref,
  const PF_State  *state1P,
  const PF_State  *state2P,
  A_Boolean       *samePB);
```

New in CS6. Pits two separate states, each obtained through `PF_G`etCurrentState above, against each other.

`PF_H`asParamChanged

```

No longer supported in PFParamUtilsSuite3.

PF_HasParamChanged(
  PF_ProgPtr     effect_ref,
  const          PF_State *stateP,
  PF_ParamIndex  param_index,
  PF_Boolean     *changedPB);
```

Hand it a `PF_S`tate and it returns true when any tested parameter has drifted from the saved state. Despite what the name suggests, it offers no means of checking just one parameter. Every non-layer parameter, at the very least, gets tested. When you need finer control to test a particular group of parameters, reach for `PF_H`aveInputsChangedOverTimeSpan below instead. The param*index pre-defined constants are: - `PF_P`aramIndex*`CHECK_ALL` - examine every parameter, even every layer that a layer parameter points to. - `PF_P`aramIndex\_`CHECK_ALL_EXCEPT_LAYER_PARAMS` - leave out all layers. Supply a particular layer parameter index to test only that one layer parameter.

`PF_H`aveInputsChangedOverTimeSpan

No longer supported in PFParamUtilsSuite3. Use `PF_A`reStatesIdentical() instead.

`PF_I`sIdenticalCheckout

```

PF_IsIdenticalCheckout(
  PF_ProgPtr     effect_ref,
  PF_ParamIndex  param_index,
  A_long         what_time1,
  A_long         time_step1,
  A_u_long       time_scale1,
  A_long         what_time2,
  A_long         time_step2,
  A_u_long       time_scale2,
  PF_Boolean     *identicalPB);
```

Hands back TRUE when a parameter holds the identical value at both supplied times. Note: those times don't have to be adjacent; differing values could sit in between.

`PF_F`indKeyframeTime

```

PF_FindKeyframeTime(
  PF_ProgPtr     effect_ref,
  PF_ParamIndex  param_index,
  A_long         what_time,
  A_u_long       time_scale,
  PF_TimeDir     time_dir,
  PF_Boolean     *foundPB,
  PF_KeyIndex    *key_indexP0,
  A_long         *key_timeP0,
  A_u_long       *key_timescaleP0);
```

Looks, along the direction you specify, for the parameter stream's next keyframe. Those final three parameters can be omitted.

`PF_G`etKeyframeCount

```

PF_GetKeyframeCount(
  PF_ProgPtr     effect_ref,
  PF_ParamIndex  param_index,
  PF_KeyIndex    *key_countP);
```

Hands back, for the given parameter, how many keyframes its stream holds.

`PF_C`heckoutKeyframe

```

PF_CheckoutKeyframe(
  PF_ProgPtr     effect_ref,
  PF_ParamIndex  param_index,
  PF_KeyIndex    key_index,
  A_long         *key_timeP0,
  A_u_long       *key_timescaleP0,
  PF_ParamDef    *paramP0);
```

From our keyframe database, retrieves one keyframe belonging to the parameter you name. param_index counts from zero. Request time, timescale, or neither, as you prefer; handy when you roll your own motion blur.

`PF_C`heckinKeyframe

```

PF_CheckinKeyframe(
  PF_ProgPtr   effect_ref,
  PF_ParamDef  *paramP);
```

Pair every `PF_C`heckoutKeyframe call with a matching check-in like this one, lest pain follow.

`PF_K`eyIndexToTime

```

PF_KeyIndexToTime(
  PF_ProgPtr     effect_ref,
  PF_ParamIndex  param_index,
  PF_KeyIndex    key_indexP,
  A_long         *key_timeP,
  A_u_long       *key_timescaleP);
```

Hands back the named keyframe's time, together with its timescale.

## Global, Sequence, & Frame Data

Three storage scopes are open to plug-ins under After Effects: global, sequence, and frame. Weigh your choice of where to keep information with care; a bad call can drag down performance or leave users baffled by your plug-in.

Reserve global data for whatever every instance of the effect shares: static variables and data, bitmaps, and pointers off to other DLLs or outside applications. Should your effect handle Multi-Frame Rendering, every static or global variable has to be clear of race conditions (the topic What does it mean for an effect to be thread-safe? covers this in more depth).

Whatever belongs to this particular plug-in instance — UI settings, text strings, plus any custom data you don't keep in parameters — goes into Sequence Data or the new Compute Cache For Multi-Frame Rendering.

As for frame data, it holds whatever pertains to rendering one specific frame. Most machines can now pull a whole frame into memory at once, so this scope has largely gone unused. Naturally, the folks among your users generating IMAX frames will be grateful for whatever optimizations you manage.

## Persistence

### Global, Sequence, & Frame Data — Persistence

Of the three, only sequence data gets written into the project file by After Effects; global and frame data do not. Any pointers inside sequence data that reference external data are almost certainly stale once the project reopens and have to be hooked back up. That round trip is what we label "flattening" and "unflattening" the sequence data.

Note

Contents of the Compute Cache aren't written to the project file. Whatever the cache holds has to be rebuilt while rendering.

## Validating Sequence Data

### Global, Sequence, & Frame Data — Validating Sequence Data

Validating sequence data carefully matters most for effects simulating across time, where frame N leans on frame N-1 and you keep a cache of computed data inside your sequence data. Change a parameter and some of that computed data may become invalid, yet mindlessly recomputing everything after each change would be wasteful too.

On being told to render frame N — supposing your cached data already runs up through frame N-1 — invoke `PF_G`etCurrentState() / `PF_A`reStatesIdentical() out of `PF_P`aramUtilSuite3 to check whether your computed-data cache still holds up under the present parameter settings.

Across the supplied time span, every parameter's state is checked, layer parameters (param[0] included) among them, the lone exceptions being those carrying `PF_P`aramFlag\_`EXCLUDE_FROM_HAVE_INPUTS_CHANGED`.

Timestamps drive the change tracking, which keeps this efficient.

Should the inputs prove unchanged, your cache is safe to use, and on top of that the internal caching system will presume you hold a temporal dependency across the supplied range. That way, when something upstream shifts, the host's caches get invalidated correctly on their own.

To confirm it's behaving, apply your effect with a single parameter keyframed at every frame. Fill the cache with a RAM Preview, then nudge one of those keyframes. That frame and everything depending on it (e.g. the later frames, where a simulation is involved) ought to shed their cache marks and demand re-rendering. By the same token, upstream edits to the sources feeding layer parameters should trigger time-selective invalidation of the cache.

## Flattened And Unflattened Sequence Data

### Global, Sequence, & Frame Data — Flattened And Unflattened Sequence Data

Whenever your sequence data points off to external memory through pointers or handles, you have to flatten and unflatten it so it stores safely to disk. Think of it as rolling your own tiny file format.

When `PF_C`md\_`SEQUENCE_FLATTEN` arrives, gather whatever your pointers reference into a single contiguous block from which the former structure can later be rebuilt.

Where your sequence data carries a pointer to a long, set aside 4 bytes to hold the flattened version. Platform-specific byte ordering falls to you to manage.

Bear in mind that your users — the ones who sprang for two copies of your plug-in, at any rate — might want one project to run on both macOS and Windows.

Whenever the data reloads, flat or unflat alike, After Effects issues `PF_C`md\_`SEQUENCE_RESETUP`.

Place a flag at a shared offset inside both structures to record which state the data is in.

```
typedef struct {
    A_char*    messageZ;
    PF_FpLong  big_numF;
    void*      temp_storage;
} non_flat_data;

typedef struct {
    char       message[256];
    PF_FpLong  big_numF;
    A_Boolean  big_endianB;
} flat_data;
```

## Resizing Sequence Data

### Global, Sequence, & Frame Data — Resizing Sequence Data

Under `PF_C`md\_`SEQUENCE_SETUP`, set aside a handle for whatever data is unique to this instance of your effect.

The sequence data's contents are open to change during any selector, though its size is not.

Resizing the sequence data handle is permitted only within these selectors:

- `PF_C`md\_`AUDIO_SETUP`
- `PF_C`md\_`AUDIO_SETDOWN`
- `PF_C`md\_`FRAME_SETUP`
- `PF_C`md\_`FRAME_SETDOWN`
- `PF_C`md\_`AUDIO_RENDER`
- `PF_C`md_RENDER
- `PF_C`md\_`SEQUENCE_SETUP`
- `PF_C`md\_`SEQUENCE_SETDOWN`
- `PF_C`md\_`SEQUENCE_FLATTEN`
- `PF_C`md\_`SEQUENCE_RESETUP`
- `PF_C`md\_`DO_DIALOG`

## Accessing sequence_data at Render Time with Multi-Frame Rendering

### Global, Sequence, & Frame Data — Accessing sequence_data at Render Time with Multi-Frame Rendering

Switch on Multi-Frame Rendering for an effect and the sequence_data object turns read-only/const throughout Render, reachable on each render thread by way of the `PF_E`ffectSequenceDataSuite1 suite.

### `PF_E`ffectSequenceDataSuite1

Function

Purpose

`PF_G`etConstSequenceData

```

Retrieves the read-only const sequence_data object for a rendering thread when Multi-Frame Rendering is enabled for an effect.

PF_Err(*PF_GetConstSequenceData)(
  PF_ProgPtr effect_ref,
  PF_ConstHandle *sequence_data);
```

| --- | --- |

```
static PF_Err Render(
    PF_InData   *in_dataP,
    PF_OutData  *out_dataP,
    PF_ParamDef *params[],
    PF_LayerDef *output )
{
    PF_ConstHandle seq_handle;

    AEFX_SuiteScoper<PF_EffectSequenceDataSuite1> seqdata_suite =
        AEFX_SuiteScoper<PF_EffectSequenceDataSuite1>(
            in_dataP,
            kPFEffectSequenceDataSuite,
            kPFEffectSequenceDataSuiteVersion1,
            out_dataP);

    PF_ConstHandle const_seq;
    seqdata_suite->PF_GetConstSequenceData(in_data->effect_ref, &const_seq);

    // cast const_seq to the type used when storing to sequence_data

    // rest of render function code...
}
```

## Arbitrary Data Parameters

Certain values simply don't map cleanly onto the parameter types that ship with After Effects. For those cases, register data of the arbitrary type — "arb data" — and let After Effects interpolate it for you. That way the host's interpolation engine and its parameter bookkeeping stay available to you, and there's no need to wedge your data into one of the predefined parameter shapes.

For these custom types we added a dedicated messaging structure. The easiest mental model is to picture its callbacks as the member (and friend) functions of a C++ class. Every selector documented below has to be answered if your plug-in works with arb data.

The selectors below cover lifecycle and storage of your custom structure. Because the user can unload and reload arb data at any moment, you are responsible for supplying flatten and unflatten routines that are safe to write to and read back from disk.

## Arbitrary Data Selectors

### Arbitrary Data Parameters — Arbitrary Data Selectors

Selector

Response

`PF_A`rbitrary\_`NEW_FUNC`

Carve out a brand-new instance of your arb data, fill it in, and pass back a handle to it.

`PF_A`rbitrary\_`DISPOSE_FUNC`

Release one instance of your arbitrary data type and tear it down.

`PF_A`rbitrary\_`COPY_FUNC`

Duplicate an instance that already exists. Two handles arrive, yet only the source one holds a real instance; build a fresh instance, transfer the values across from the source, and store it in the destination handle. Should the handle you receive be NULL, hand back a default instance of your arb data instead.

`PF_A`rbitrary\_`FLAT_SIZE_FUNC`

A handle to one instance of your type arrives together with a variable; report into that variable how large a flattened form of the instance would be.

`PF_A`rbitrary\_`FLATTEN_FUNC`

Take the instance handed to you, flatten it, and write it into the buffer provided. That buffer matches whatever size you stated back in `PF_A`rbitrary\_`FLAT_SIZE_FUNC`.

`PF_A`rbitrary\_`UNFLATTEN_FUNC`

Reconstitute the buffer's contents into an instance of your arbitrary data type, then store that instance in the handle passed to you.

`PF_A`rbitrary\_`INTERP_FUNC`

Three handles to instances of your type arrive: one carrying the starting values (0), one carrying the ending values (1), and a third where the interpolated result (somewhere between 0 and 1) belongs. A float also arrives telling you the point between 0 and 1 at which your value should land. Create an instance, populate it with the interpolated result, and drop that instance into the handle you were given. By the time the normalized time value reaches you, the velocity curves have already been factored in.

Note

Never check out parameters if the in_data>effect_ref is NULL.

`PF_A`rbitrary\_`COMPARE_FUNC`

Two instances of your arbitrary data arrive along with a pointer for the comparison outcome. Fill that outcome with one of the `PF_A`rbCompareResult values (see `AE_E`ffect.h), signaling whether the first instance equals, falls below, exceeds, or merely differs from the second.

`PF_A`rbitrary\_`PRINT_SIZE_FUNC`

State how big a buffer you need to print the parameter's current values, by writing print_sizePLu (a member of print_size_func_params, which lives inside the `PF_A`rbParamsExtra structure).

`PF_A`rbitrary\_`PRINT_FUNC`

Render your arbitrary data as text suitable for export and copy that into the buffer; make it as elaborate as you wish. Aim to mirror the cut-and-paste behavior that the plug-ins bundled with After Effects already show when text versions of parameter settings get pasted (into a Microsoft Excel spreadsheet, say). How you lay out that output is largely up to you.

`PF_A`rbitrary\_`SCAN_FUNC`

You're handed a text-data buffer (frequently off the system clipboard); turn its contents into your own arbitrary data format.

| --- | --- |

## Implementing Arbitrary Data

### Arbitrary Data Parameters — Implementing Arbitrary Data

Beyond the usual command and event selectors, arb data calls for an extra layer of host interaction. With other parameter types this stays hidden, because After Effects looks after the data that backs them. Building an arb data plug-in is a window into just how much parameter management After Effects carries out on your behalf, and the order those operations run in. It might even prompt you to reconsider your design and lean on the parameter types the host manages for you.

Create your arb data — naturally, through After Effects' own memory allocation routines — and aim ParamDef.u.arb_d.dephault at it. Fill it with sensible defaults. Setting up the parameter needs no value variable; clear it to zero just to be safe.

Within your plug-in's entry function, add a case that handles `PF_C`md\_`ARBITRARY_CALLBACK`.

From there, call out to a secondary event handler, HandleArbitrary. A `PF_A`rbParamsExtra reaches it through extra, and that structure carries a `PF_F`unctionSelector naming the command that was issued.

Say After Effects has issued `PF_C`md*`ARBITRARY_CALLBACK` with `PF_A`rbitrary*`COPY_FUNC` as the `PF_F`unctionSelector. You'll find pointers to a source and a destination Arb inside `PF_A`rbParamsExtra.copy_func_params. Allocate a fresh Arb and aim dest_arbPH at it. When src_arbH comes through NULL, build a default Arb for dest_arbPH.

A user might highlight the arb's keyframe data in the Timeline panel, copy it, and then jump to a different application. That sends you a `PF_A`rbitrary*`PRINT_SIZE_FUNC`; size your output buffer by writing print_sizePLu in the `PF_A`rbParamsExtra. `PF_A`rbitrary*`PRINT_FUNC` follows; fill the print_bufferPC output buffer with a text rendering of the Arb(s) involved.

A user may also paste keyframe data into your Arb's timeline, which delivers `PF_A`rbitrary\_`SCAN_FUNC` to you. Build an Arb from whatever sits in the character buffer you're handed (print_sizeLu tells you its size).

## Arbitrary Data? Re-Entrancy!

### Arbitrary Data Parameters — Arbitrary Data? Re-Entrancy!

Supporting custom data types means your plug-in code has to tolerate recursive re-entrancy, since After Effects might call into it for all sorts of reasons. Imagine your plug-in checks out a layer that itself relies on another instance of your own effect: the act of checking out that apparently unrelated layer is what kicks off your plug-in's arbitrary data handling. Stay wary of C run-time library calls that lean on static state reached through global variables. Fail to plan for this scenario and you'll lock up After Effects, leaving users cursing and pounding their monitors.

## When Not To Access Arbitrary Parameters

### Arbitrary Data Parameters — When Not To Access Arbitrary Parameters

If in_data>effect_ref is NULL, do not check out arbitrary parameters.

## Changes During Dialogs

### Arbitrary Data Parameters — Changes During Dialogs

Whatever edits land on arbitrary data parameters while `PF_C`md\_`DO_DIALOG` is running, After Effects throws them away.

That's intentional: edits performed while the options dialog is on screen apply across the whole effect stream rather than to the arbitrary parameter at one specific time.

Should you need your arb to react to such edits, stash that detail in sequence data and bring it into play afterward — typically when `PF_C`md\_`USER_CHANGED_PARAM` arrives.

## `PF_E`ffectUISuite

### Useful Utility Functions — `PF_E`ffectUISuite

Parameters aren't really this suite's concern, but it does let you rename the options button.

Function

Purpose

`PF_S`etOptionsButtonName

Relabels the options button shown in the effect controls palette.

Note

This must be called during `PF_C`md\_`PARAM_SETUP`.

```

PF_SetOptionsButtonName(
  PF_ProgPtr    effect_ref,
  const A_char  *nameZ);
```

nameZ may be up to A_char[31] in length.

| --- | --- |
