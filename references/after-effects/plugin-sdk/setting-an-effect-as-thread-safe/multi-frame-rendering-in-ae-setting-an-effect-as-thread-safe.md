# Multi-Frame Rendering in AE - Setting an Effect as Thread-safe

- In GlobalSetup, set the `PF_OutFlag2_SUPPORTS_THREADED_RENDERING` flag; this is how you signal Thread-Safety and Multi-Frame Rendering support for your effect to the host.
- Where needed, add the `PF_OutFlag2_MUTABLE_RENDER_SEQUENCE_DATA_SLOWER` so that sequence_data can be written during the Render stage.
- Refresh the `AE_Effect_Global_OutFlags_2` magic number. The first time, start AE with your effect while leaving the magic number alone, apply the effect, and AE will report back the correct number for you to enter.
- Should you be using the `PF_OutFlag_SEQUENCE_DATA_NEEDS_FLATTENING` flag, don't forget to set the `PF_OutFlag2_SUPPORTS_GET_FLATTENED_SEQUENCE_DATA` flag as well.
