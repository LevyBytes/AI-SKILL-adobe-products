# Parameter Supervision - Updating Parameter UI

Apply `PF_ParamFlag_SUPERVISE` to even a single parameter and After Effects responds by delivering `PF_Cmd_UPDATE_PARAMS_UI`, exactly as though `PF_OutFlag_SEND_UPDATE_PARAMS_UI` had been set.

Within `PF_Cmd_UPDATE_PARAMS_UI`, your reach is limited to the look and the enable state of parameters. Refresh the interface through `PF_UpdateParamUI`() out of `PF_ParamUtilSuite3`, handing it a copy of whichever parameter you intend to alter. Leave the original untouched. There's no need to apply `PF_OutFlag_REFRESH_UI`; that part is taken care of by `PF_UpdateParamUI`() on your behalf.

Note

For `PF_PUI_STD_CONTROL_ONLY` parameters, refreshing the UI through this path is the sole option.
