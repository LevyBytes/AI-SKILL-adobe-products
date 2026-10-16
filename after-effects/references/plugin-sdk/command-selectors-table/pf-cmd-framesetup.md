# PF_Cmd_FRAME_SETUP

`PF_Cmd_FRAME_SETUP`

Reserve any data tied to a single frame. It shows up right before each frame renders so per-frame setup data can be prepared. Should your effect alter how big its output buffer is, declare the fresh output height, width, and relative origin. Every parameter other than the input layer holds a valid value. After Effects disregards your reply to the next `PF_Cmd_RENDER` if you zero out both width and height. NOTE: with `PF_Outflag_I_EXPAND_BUFFER` set, this selector (along with `PF_Cmd_FRAME_SETDOWN`) reaches you twice, the first pair without any `PF_Cmd_RENDER` separating them. That tells us if the layer in question is going to be visible at all. Frame data harks back to an era when a machine might carry 8MB of RAM. With the calling order shown above, allocating inside `PF_Cmd_RENDER` instead is far more efficient.
