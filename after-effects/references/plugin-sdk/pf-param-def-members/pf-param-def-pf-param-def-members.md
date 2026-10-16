# `PF_ParamDef` — `PF_ParamDef` Members

| Data Type | Name | Description |
| --- | --- | --- |
| A_long | id | This parameter's ID. Keep a parameter's ID consistent across versions and you can rearrange parameters in later releases of your plug-in without forcing users to re-apply your effect. |
| `PF_ChangeFlags` | change_flags | Gets set when you've altered a parameter value. Valid only during drag events — not clicks — at `PF_Cmd_USER_CHANGED_PARAM` or `PF_Cmd_UPDATE_PARAMS_UI`. |
| `PF_ParamUIFlags` | ui_flags | Declare a parameter's UI behavior before you add it; during event handling, only `PF_PUI_DISABLED` can be set. |
| A_short | ui_width | The width of the parameter's user interface (non-standard parameters only). |
| A_short | ui_height | The height of the parameter's user interface (non-standard parameters only). |
| `PF_ParamType` | param_type | Type of parameter. |
| A_char[32] | `PF_DEF_NAME` | The parameter's name. You can change it while handling events. And yes, people have asked for longer parameter names since After Effects 1.0 — treat fitting an adequate description of your world-altering effect into a mere 31 characters as a poetic constraint, rather like haiku. |
| `PF_ParamFlags` | flags | Declare a parameter's UI behavior before you add it; during event handling, only `PF_ParamFlag_COLLAPSE_TWIRLY` can be set. |
| `PF_ParamDefUnion` | u | A union spanning every possible Parameter Type. Only the member named by param_type holds meaningful data. |
