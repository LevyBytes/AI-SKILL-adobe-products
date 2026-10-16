# What's New — What's New in CC 2017.1 (14.2)?

- Layer Params can include Masks and Effects

Where an effect takes a layer as input — Set Matte and Displacement Map are examples — it can now reach into that input layer's masks and effects rather than being limited to the layer's source alone. The upshot: there's no longer a reason to pre-compose layers purely so an effect can reference them.

Whenever an effect carries a layer parameter, a fresh menu sits beside the layer selector and lets you decide whether the input layer is taken from its source, its masks, or its effects:

- Source: pulls from the layer's source only; both masks and effects are skipped.
- Masks: pulls from the layer once its masks have been applied, ignoring effects.
- Effects & Masks: pulls from the layer after both its masks and its effects have been applied.

You'll find this control behaves much like the View menu down at the foot of the Layer viewer panel, which lets you draw the layer from various points along the rendering order — its source, its masks, or its separate effects.

Since the user sees this option, the intent is for it to stay invisible to the effect itself. As far as the effect can tell, the input merely carries the upstream effects and masks already folded in, with nothing about the effect altered. If your effect relies on layer params, consider these checks while testing:

- The effect keeps behaving the way it should.
- Driving the layer param's new Source/Mask/Effects control works correctly with the effect.
- Loading legacy projects, or saving down to an earlier project version, leaves the effect intact.
- Verify the effect can't reference itself — that is, it can't feed its own layer's effects back in as input for that same layer.
- Suite Enhancements

Now at version 3, `PF_AdvTimeSuite` ships a reworked `PF_GetTimeDisplayPref`() call built around an updated `PF_TimeDisplayPrefVersion` parameter that copes with higher frame rates. Should the values overflow the range the structure can hold, the earlier version 2 of that call may now hand back an error.

Comp Suite has advanced to version 11 and adds `AEGP_ReorderCompSelection`() for shifting a selection to a given layer index. Pair it with `AEGP_SetSelection`() when you use it.
