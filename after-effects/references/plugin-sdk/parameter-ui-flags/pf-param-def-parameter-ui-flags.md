# `PF_ParamDef` — Parameter UI Flags

Steer a parameter's user interface using these flags.

Keep UI flags distinct from behavior flags — they live in separate fields of your parameter's definition, and mixing them up leads to erratic behavior.

| Flag | Description |
| --- | --- |
| `PF_PUI_TOPIC` | Raise this flag when you handle `PF_Cmd_EVENTs` for the parameter's "topic." The "topic" is the slice of the param UI in the Effect Controls Window (ECW) that stays on screen once the twirly-arrow is twirled up for that param. Setting it obliges you to also set `PF_OutFlag_CUSTOM_UI` at `PF_Cmd_GLOBAL_SETUP` time. |
| `PF_PUI_CONTROL` | Raise this flag when you handle `PF_Cmd_EVENTs` for the control area — the region in the ECP that disappears once a parameter's spinner is twirled up. This too requires that `PF_OutFlag_CUSTOM_UI` be raised back at `PF_Cmd_GLOBAL_SETUP`. See Effect UI & Events for more details. |
| `PF_PUI_STD_CONTROL_ONLY` | Raise this flag when you want only the standard control — no data stream attaches to the parameter, so no keyframes turn up in the Timeline panel. Handy for driving something in your sequence data with a standard control, or your arb data, or custom UI in the comp window, or for setting several other controls as a group. This flag cannot be used with: - `PF_Param_CUSTOM` - `PF_Param_NO_DATA` - `PF_Param_LAYER` - `PF_Param_ARBITRARY_DATA` - `PF_Param_PATH` Setting it obliges you to also set `PF_ParamFlag_SUPERVISE` (otherwise value changes would never reach you, and the setting would do nothing). It does not require that `PF_OutFlag_CUSTOM_UI` be set. To give `PF_Param_ARBITRARY_DATA` a standard control, simply add one or more via `PF_PUI_STD_CONTROL_ONLY` with the supported param types, then revise your arb data while handling `PF_Cmd_USER_CHANGED_PARAM`. |
| `PF_PUI_NO_ECW_UI` | Raise this flag when you want nothing to show in the Effect Controls Window. It presumes the parameter's value gets set elsewhere — perhaps through comp-window custom UI, or as you process `PF_Cmd_USER_CHANGED_PARAM` for some other param carrying `PF_ParamFlag_SUPERVISE`. Under AE, timeline keyframe visibility is unaffected. Under PPro, the entire row vanishes, so no keyframes show. |
| `PF_PUI_ECW_SEPARATOR` | Unused in After Effects, but used in Premiere. Raise it when you want a thick line drawn above this parameter in the effect control window. It exists so parameters can be grouped visually when needed, without actually adding groups. You can change it at runtime via the `PF_UpdateParamUI`() method. |
| `PF_PUI_DISABLED` | Grays the parameter out, typically as a response to `PF_Cmd_USER_CHANGED_PARAM`. |
| `PF_PUI_DONT_ERASE_TOPIC` | Keeps After Effects from clearing the parameter's topic. |
| `PF_PUI_DONT_ERASE_CONTROL` | Keeps After Effects from clearing the parameter's control. |
| `PF_PUI_RADIO_BUTTON` | Unused in After Effects, but used in Premiere. Renders the parameter as a radio-button group. Valid only for `PF_Param_POPUP`. |
| `PF_PUI_INVISIBLE` | First available in Premiere, and now in After Effects CS6 and later. It conceals the parameter UI across both the Effect Controls and the Timeline. Premiere only: the flag is dynamic, so parameter visibility can be flipped during the `PF_UpdateParamUI` callback. |

On top of these flags, you can hide or show an effect parameter through `AEGP_GetDynamicStreamFlags`.
