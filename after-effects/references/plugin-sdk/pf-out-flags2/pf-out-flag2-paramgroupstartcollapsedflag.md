# PF_OutFlag2_PARAM_GROUP_START_COLLAPSED_FLAG

`PF_OutFlag2_PARAM_GROUP_START_COLLAPSED_FLAG`

On its own, this bit does not decide whether the param-group twirlies open or close. Each group's starting collapse state comes from `PF_Cmd_PARAM_SETUP`, where you raise `PF_ParamFlag_START_COLLAPSED` in `PF_ParamFlags` — yet those per-group choices are ignored unless the effect also turns on this bit. Without it, every parameter group starts collapsed. Set this both in the PiPL and right here during `PF_Cmd_GLOBAL_SETUP`.
