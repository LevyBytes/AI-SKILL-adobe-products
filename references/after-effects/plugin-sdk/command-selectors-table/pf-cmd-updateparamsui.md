# PF_Cmd_UPDATE_PARAMS_UI

`PF_Cmd_UPDATE_PARAMS_UI`

A refresh of the effect controls palette (ECP) is required. That can happen once the ECP opens or once you move to a different time in the composition. Parameter characteristics can be altered (for instance, switching them on or off) via a call to `PF_UpdateParamUI`(). Replies to this command may only involve cosmetic changes. Hold off on changing parameter values while handling `PF_Cmd_UPDATE_PARAMS_UI`; handle that under `PF_Cmd_USER_CHANGED_PARAM` instead. For this command to arrive on a regular basis, `PF_OutFlag_SEND_UPDATE_PARAMS_UI` has to have been set in the PiPL and during `PF_Cmd_GLOBAL_SETUP`.

Note

Parameters should never be checked out during this selector. Recursive trouble is all but certain to follow.
