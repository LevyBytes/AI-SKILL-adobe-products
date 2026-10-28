# `PF_EventExtra`

Context details about the running event live in this structure. A pointer to it is what After Effects supplies in the Entry Point function's extra parameter.

Carried inside the `PF_EventExtra`, the `PF_EventUnion` shifts according to event type and holds whatever is specific to that event.

| Member | Purpose |
| --- | --- |
| contextH | Handle to the `PF_Context`. Both the Drawbot suites (for drawing) and the UI Callbacks make use of this drawing context. |
| e_type | The event that's taking place. |
| u | A `PF_EventUnion` holding the event-specific information. |
| effect_win | A `PF_EffectWindowInfo` about the event when it lands in the effects window. Otherwise — as of After Effects 5.0 — a `PF_WindowUnion` can stand in for effect_win. That struct bundles a `PF_EffectWindowInfo` together with a `PF_ItemWindowInfo`, the latter being (at the moment) nothing more than the item window's port rectangle. This swap kicks in only when `PF_USE_NEW_WINDOW_UNION` was defined at compile time; absent that, it stays a plain `PF_EffectWindowInfo`. |
| cbs | Pointer to UI Callbacks, which you need for converting points across the layer, composition, and screen coordinate systems. |
| evt_in_flags | Event Input Flags. At present this holds a single value, `PF_EI_DONT_DRAW` — check it before you draw! |
| evt_out_flags | Any combination of the following, OR'd together bitwise: - `PF_EO_NONE` - `PF_EO_HANDLED_EVENT` lets After Effects know the event is handled. - `PF_EO_ALWAYS_UPDATE` makes After Effects re-render the composite on every click or drag, mirroring what 'alt-scrubbing' a parameter value does. - `PF_EO_NEVER_UPDATE` holds off After Effects from re-rendering the composite until clicking and dragging stop. - `PF_EO_UPDATE_NOW` has After Effects refresh the view the moment the event returns, following a `PF_InvalidateRect` call |
