# Parameter Supervision

The term supervision refers to driving one parameter's value off the values held by others, adjusting them on the fly. Mark a parameter for supervision by applying `PF_ParamFlag_SUPERVISE` while you add it under `PF_Cmd_PARAM_SETUP`. From then on, every change to it delivers a `PF_Cmd_USER_CHANGED_PARAM` to you. That changed parameter's index within the plug-in's parameter array travels along inside the `PF_UserChangedParamExtra` (extra) param. While `PF_Cmd_USER_CHANGED_PARAM` is in play, both the values and the look of any of your parameters are yours to adjust.
