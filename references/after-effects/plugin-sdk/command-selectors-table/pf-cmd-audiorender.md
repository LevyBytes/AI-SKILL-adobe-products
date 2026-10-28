# PF_Cmd_AUDIO_RENDER

`PF_Cmd_AUDIO_RENDER`

Fill `PF_OutData`.dest_snd with the processed audio. Each field of `PF_InData` is valid. If your reply to this selector gets interrupted — your `PF_ABORT` or `PF_PROGRESS` calls hand back an error code — the output you made is not used.
