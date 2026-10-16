# Global, Sequence, & Frame Data — Resizing Sequence Data

Under `PF_Cmd_SEQUENCE_SETUP`, set aside a handle for whatever data is unique to this instance of your effect.

The sequence data's contents are open to change during any selector, though its size is not.

Resizing the sequence data handle is permitted only within these selectors:

- `PF_Cmd_AUDIO_SETUP`
- `PF_Cmd_AUDIO_SETDOWN`
- `PF_Cmd_FRAME_SETUP`
- `PF_Cmd_FRAME_SETDOWN`
- `PF_Cmd_AUDIO_RENDER`
- `PF_Cmd_RENDER`
- `PF_Cmd_SEQUENCE_SETUP`
- `PF_Cmd_SEQUENCE_SETDOWN`
- `PF_Cmd_SEQUENCE_FLATTEN`
- `PF_Cmd_SEQUENCE_RESETUP`
- `PF_Cmd_DO_DIALOG`
