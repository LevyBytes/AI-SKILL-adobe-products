# PF_AdjustCursorEventInfo fields

| Member | Purpose |
| --- | --- |
| screen_point | The mouse pointer's screen coordinate. With Custom Comp UI, the UI Callbacks let you turn these into composition coordinates. The CCU sample project shows how. |
| modifiers | Whichever modifier keys, if any, were held as the message went out. |
| set_cursor | Set this to the cursor you want, or to `PF_Cursor_CUSTOM` when you've already set the cursor yourself with OS-specific calls. `AE_EffectUI`.h lists every built-in cursor. To leave the cursor alone, set this to `PF_Cursor_NONE` or just disregard the message. |
