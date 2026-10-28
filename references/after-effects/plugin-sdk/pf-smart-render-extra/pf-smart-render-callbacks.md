# PF_SmartRenderCallbacks

`PF_SmartRenderCallbacks`

```cpp
PF_Err checkout_layer_pixels(
  PF_ProgPtr      effect_ref,
  A_long          checkout_idL,
  PF_EffectWorld  **pixels);
```

Reach the actual pixels of layers that were checked out back in PF_Cmd_SMART_PRE_RENDER through this.

Until it is checked in — or until the current command wraps up — the PF_EffectWorld it returns stays valid.

With a given checkout_idL from PF_Cmd_SMART_PRE_RENDER, a single checkout_layer_pixels call is all you get.

The count of checkouts in PF_Cmd_SMART_PRE_RENDER and the count in PF_Cmd_SMART_RENDER have to line up one-to-one.

Want checkout_layer_pixels on a layer more than once? Then in PF_Cmd_SMART_PRE_RENDER call checkout_layer again on that same layer under a fresh, unique checkout_idL, and feed that checkout_idL into a separate checkout_layer_pixels during PF_Cmd_SMART_RENDER.

```cpp
PF_Err checkin_layer_pixels(
  PF_ProgPtr  effect_ref,
  A_long      checkout_idL);
```

Calling this is optional — After Effects sweeps up every such checkout once the effect exits PF_Cmd_SMART_RENDER — yet it helps reclaim memory.

```cpp
PF_Err checkout_output(
  PF_ProgPtr      effect_ref,
  PF_EffectWorld  **output);
```

Hands back the output buffer. Keep in mind that checking out the output is off-limits until a minimum of one input has been checked out (the lone exception being an effect with no inputs whatsoever).

Tip

To keep memory lean, hold off on requesting the output for as long as you can, and pull in only a handful of inputs at once.
