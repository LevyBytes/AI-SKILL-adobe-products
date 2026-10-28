# PF_OutFlag2_OUTPUT_IS_WATERMARKED

`PF_OutFlag2_OUTPUT_IS_WATERMARKED`

New in CS6. Raise it during `PF_Cmd_GLOBAL_SETUP` when your output will carry a watermark of some sort that makes it unfit for final delivery — typically because the user is on an unlicensed demo build. It's fine to flip this state mid-session via `PF_Cmd_QUERY_DYNAMIC_FLAGS`, for instance when a floating license status shifts. Authors whose state really does change asynchronously have to ensure the next render matches the most recent state returned from `PF_Cmd_QUERY_DYNAMIC_FLAGS`, or race conditions may cache the wrong frames. (None of this matters if you only change it in response to `DO_DIALOG`.)
