# PF_Cmd_AUDIO_SETUP

`PF_Cmd_AUDIO_SETUP`

Comes ahead of each audio render. Ask for a stretch of input audio over time. Reserve and initialize whatever data is specific to the sequence. When your effect needs input drawn from a different time span than the output one, revise the startsampL and endsampL fields of `PF_OutData`.
