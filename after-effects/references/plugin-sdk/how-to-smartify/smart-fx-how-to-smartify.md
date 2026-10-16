# SmartFX — How To Smartify

An effect that sets `PF_OutFlag2_SUPPORTS_SMART_RENDER` (from `PF_OutFlags`) is handed the SmartFX calls `PF_Cmd_SMART_PRE_RENDER` and `PF_Cmd_SMART_RENDER` (from Frame Selectors) in place of the older `PF_Cmd_FRAME_SETUP` / `PF_Cmd_RENDER` / `PF_Cmd_FRAME_SETDOWN` run. So that you stay compatible with hosts that aren't smartified, it may be wise to keep supporting those older commands as well.
