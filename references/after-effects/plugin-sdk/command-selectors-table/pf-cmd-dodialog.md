# PF_Cmd_DO_DIALOG

`PF_Cmd_DO_DIALOG`

Put up an options dialog. It gets sent once the Options button gets clicked (or a menu command is picked). The selector arrives only when the effect has already declared it owns a dialog (by turning on the global `PF_OutFlag_I_DO_DIALOG` flag in reply to `PF_Cmd_GLOBAL_SETUP`). Under version 3.x, the params delivered with `PF_Cmd_DO_DIALOG` were not valid. That has changed; plug-ins are now able to reach non-layer parameters, check parameters out at other times, and refresh the UI throughout `PF_Cmd_DO_DIALOG`. Altering the parameter's values is still off limits to them.
