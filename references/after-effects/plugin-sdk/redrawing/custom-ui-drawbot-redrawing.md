# Custom UI & Drawbot - Redrawing

When you want one specific region of a pane redrawn, here's what we suggest:

1. Call `PF_InvalidateRect` (from `PF_AppSuite`) from the effect. This triggers a lazy display redraw that takes effect at the next free idle moment. The rect uses coordinates tied to the pane it belongs to. Pass a NULL rect to refresh the whole pane.
2. Set the event outflag to `PF_EO_UPDATE_NOW`, so that an immediate draw event fires for the named pane the moment the current event returns.

When an effect has to refresh more than one window at once, it should set `PF_OutFlag_REFRESH_UI` (from `PF_OutFlags`), triggering a redraw across the entire ECW, comp, and layer windows.
