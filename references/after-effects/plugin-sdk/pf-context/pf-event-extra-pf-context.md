# `PF_EventExtra``PF_Context`

The event's UI context is spelled out by `PF_Context`.

| Member | Purpose |
| --- | --- |
| magic | Do not change. |
| w_type | The window type. Should one plug-in carry both a Custom Comp UI and an ECW UI, this field is your means of distinguishing the two (and honestly, who subjects themselves to that?). - `PF_Window_COMP`, - `PF_Window_LAYER`, - `PF_Window_EFFECT` |
| reserved_flt | Do not change. |
| plugin_state[4] | A four-element array of A_longs the plug-in can lean on to stash state information for a given context. |
| reserved_drawref | A `DRAWBOT_DrawRef` meant for the Drawbot suites. |
| \*reserved_paneP | Do not change. |
