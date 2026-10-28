# PF_OutFlag_WIDE_TIME_INPUT

`PF_OutFlag_WIDE_TIME_INPUT`

The effect checks a parameter out at some time other than current*time. Set this flag if you draw on a parameter (layer parameters included) from another time. Without it, After Effects won't properly invalidate the cached frames your effect uses. Set during `PF_Cmd_GLOBAL_SETUP`. Where you set this flag, we strongly advise also setting `PF_OutFlag2_AUTOMATIC_WIDE_TIME_INPUT` for stronger performance.
