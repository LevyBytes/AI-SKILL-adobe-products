# `PF_KeyDownEvent`

| Member | Purpose |
| --- | --- |
| when | Time at which the click occurred. |
| screen_point | The mouse pointer's screen coordinate at the instant the key went down. With Custom Comp UI, the UI Callbacks let you turn these into composition coordinates. The CCU sample project shows how. |
| key_code | Either a character code (for printable characters we take the unshifted upper-case form; A not a, 7 not &), or a control code: - `PF_ControlCode_Unknown` - `PF_ControlCode_Space` - `PF_ControlCode_Backspace` - `PF_ControlCode_Tab` - `PF_ControlCode_Return` - `PF_ControlCode_Enter` - `PF_ControlCode_Escape` - `PF_ControlCode_F1` - ... - `PF_ControlCode_F24` - `PF_ControlCode_PrintScreen` - `PF_ControlCode_ScrollLock` - `PF_ControlCode_Pause` - `PF_ControlCode_Insert` - `PF_ControlCode_Delete` - `PF_ControlCode_Home` - `PF_ControlCode_End` - `PF_ControlCode_PageUp` - `PF_ControlCode_PageDown` - `PF_ControlCode_Help` - `PF_ControlCode_Clear` - `PF_ControlCode_Left` - `PF_ControlCode_Right` - `PF_ControlCode_Up` - `PF_ControlCode_Down` - `PF_ControlCode_NumLock` - `PF_ControlCode_Command` - `PF_ControlCode_Option` - `PF_ControlCode_Alt` = `PF_ControlCode_Option` - `PF_ControlCode_Control` - `PF_ControlCode_Shift` - `PF_ControlCode_CapsLock` - `PF_ControlCode_ContextMenu` |
| modifiers | Whichever modifier keys, if any, were down as the key was pressed. - `PF_Mod_NONE` - `PF_Mod_CMD_CTRL_KEY` (cmd on Mac, ctrl on Windows) - `PF_Mod_SHIFT_KEY` - `PF_Mod_CAPS_LOCK_KEY` - `PF_Mod_OPT_ALT_KEY` (option on Mac, alt on Windows) - `PF_Mod_MAC_CONTROL_KEY` |
