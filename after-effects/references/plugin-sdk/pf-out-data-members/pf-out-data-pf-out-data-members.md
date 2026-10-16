# `PF_OutData` — `PF_OutData` Members

| Field | Description |
| --- | --- |
| my_version | Use the `PF_VERSION` macro to set this flag to the version of your plug-in's code. After Effects reads it to settle which among duplicate effects to load. |
| name | Unused. |
| global_data | A handle that comes back to you inside `PF_InData` on every call. Allocate it with After Effects' memory functions. |
| num_params | After Effects measures this field against how many `PF_ADD_PARAM` calls were made, plus the implicit input layer. |
| sequence_data | Allocatable once `PF_Cmd_SEQUENCE_SETUP` arrives, this handle is handed back to you in `PF_InData` on every call thereafter. |
| flat_sdata_size | Unused — After Effects already knows the size, since its allocation functions are what gave you the memory to begin with. |
| frame_data | A handle you may have allocated under `PF_Cmd_FRAME_SETUP`. It's never written to disk; its job was carrying information from your `PF_Cmd_FRAME_SETUP` reply to your `PF_Cmd_RENDER` or `PF_Cmd_FRAME_SETDOWN` (which is required if you resize the output buffer). Apart from that, this memory rarely sees use. |
| width, height, origin | Set under `PF_Cmd_FRAME_SETUP` when the output image size is not the same as the input. width and height give the output buffer's size, and origin gives the point the input should land on within the output. For a 5-pixel drop shadow toward the upper left, make origin (5, 5). |
| out_flags | Pass messages to After Effects. OR several values together. |
| return_msg | Whatever C string you place here gets displayed by After Effects (it's checked and cleared following every command selector). |
| start_sampL, dur_sampL, dest_snd | For Audio commands only |
| out_flags2 | Pass messages to After Effects. OR several values together. |
