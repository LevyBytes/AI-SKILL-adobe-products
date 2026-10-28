# PF_Cmd_RENDER

`PF_Cmd_RENDER`

Produce the effect in the output using the input frame plus whatever the parameters say. Only 8-bit or 16-bit per channel rendering is supported by this render call. Anything at 32-bit per channel has to go through `PF_Cmd_SMART_RENDER`. Each field of `PF_InData` is valid. Should something interrupt your reply to this selector — an error code returned by your `PF_ABORT` or `PF_PROGRESS` calls — your output gets discarded. frame_data cannot be freed during this selector; hold off until `PF_Cmd_FRAME_SETDOWN`.
