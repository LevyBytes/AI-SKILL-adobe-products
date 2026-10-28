# UI Callbacks

For converting between coordinate systems and pulling OS-specific details about drawing contexts, After Effects hands you callbacks so you avoid guesswork and never have to query the OS yourself. Lean on them. `PF_EventCallbacks` supplies pointers to these callbacks, and the macros in `AE_EffectUI`.h and `AE_EffectCB`.h give you access to the underlying routines.

You can certainly ship a working plug-in with a custom UI that skips the coordinate-transposition callbacks. The trouble shows up the instant a user zooms into the layer panel or rotates a layer, at which point your plug-in starts misbehaving. The whole reason these macros and callbacks exist is to fold custom interfaces into the After Effects UI smoothly, sparing developers the usual interface-handling burden. So, once more: use them.

For convenience these macros fill in the refcon and context handle on your behalf. The refcon presumes a local variable called "extra" is in scope, and the context defaults to whatever the current context is. Those defaults come from the `PF_EventCallbacks` structure (declared in `AE_EffectUI`.h). Should you need different values, route the callbacks through the `PF_EventExtra` structure to override them. Editing the header-file macros is neither advised nor supported, so leave them alone.

Function

Purpose

layer_to_comp

Transforms layer panel coordinates to the composition panel coordinates.

```cpp
PF_Err layer_to_comp (
  void           *refcon,
  PF_ContextH    context,
  A_long         curr_time,
  A_long         time_scale,
  PF_FixedPoint  *pt);
```

comp_to_layer

Transforms composition panel coordinates to the layer panel coordinates.

```cpp
PF_Err comp_to_layer (
  void           *refcon,
  PF_ContextH    context,
  A_long         curr_time,
  A_long         time_scale,
  PF_FixedPoint  *pt);
```

get_comp2layer_xform

Returns the matrix used to convert from the composition panel to the layer panel.

If *exists returns FALSE, the matrix cannot be computed because the layer scales to zero.

```cpp
PF_Err get_comp2layer_xform (
  void            *refcon,
  PF_ContextH     context,
  A_long          curr_time,
  long            time_scale,
  long            *exists,
  PF_FloatMatrix  *comp2layer);
```

get_layer2comp_xform

Returns the transformation matrix used to convert from the layer panel to the composition panel.

This always exists.

```cpp
PF_Err get_layer2comp_xform (
  void            *refcon,
  PF_ContextH     context,
  A_long          curr_time,
  A_long          time_scale,
  PF_FloatMatrix  *layer2comp);
```

source_to_frame

Transforms the source coordinates in the current context to screen coordinates.

Screen (frame) coordinates are affected by the current zoom level.

```cpp
PF_Err source_to_frame(
  void           *refcon,
  PF_ContextH    context,
  PF_FixedPoint  *pt);
```

frame_to_source

Transforms the screen coordinates identified by *pt to the source coordinates of the current context.

```cpp
PF_Err frame_to_source(
  void           *refcon,
  PF_ContextH    context,
  PF_FixedPoint  *pt);
```
