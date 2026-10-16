# Multi-Frame Rendering in AE — Multi-Frame Rendering Effect Updates with March 2021 SDK

New sequence_data behavior arrives with the March 2021 SDK, switched on as of AE beta builds 22.0x6 (released on June 29th 2021). To gain Multi-Frame Rendering support, any effect built with the June 2020 SDK has to be rebuilt against the March 2021 SDK. Such effects also have to tell AE they were compiled with version 13.25 at minimum, though leaning on the SDK constants `PF_AE_PLUG_IN_VERSION` and `PF_AE_PLUG_IN_SUBVERS` to set the associated SDK automatically is the recommended route.

What an effect must change to adopt the new behavior is laid out in the table that follows:

| MFR & Sequence Data Usage | Changes Needed with March 2021 SDK |
| --- | --- |
| Plugin does not set `PF_OutFlag2_SUPPORTS_THREADED_RENDERING` | No changes needed. Effect and sequence_data will continue to work as it did in the past. |
| Plugin sets `PF_OutFlag2_SUPPORTS_THREADED_RENDERING` but neither reads nor writes to sequence_data during Render | Recompile the plugin with the March 2021 SDK, no other code changes are required. If the plugin is not compiled with the March 2021 SDK, the plugin will stop utilizing MFR starting with AE 22.0x6. |
| Plugin sets `PF_OutFlag2_SUPPORTS_THREADED_RENDERING` but only reads sequence_data during Render | Recompile the plugin with the March 2021 SDK, update reading sequence_data via `PF_EffectSequenceDataSuite1` for thread-safe access. See Accessing sequence_data at Render Time with Multi-Frame Rendering for more information. |
| Plugin sets `PF_OutFlag2_SUPPORTS_THREADED_RENDERING` and reads and writes to sequence_data during Render | Recompile the plugin with the March 2021 SDK and modify the plugin to: 1. Utilize the Compute Cache API for thread-safe cache access instead of reading/writing to sequence*data directly. See Compute Cache For Multi-Frame Rendering for more information. AND / OR 2. Add the `PF_OutFlag2_MUTABLE_RENDER_SEQUENCE_DATA_SLOWER` to the effect to restore direct read/write access to sequence_data. |

Note

Effects compiled with the March 2021 SDK and using the `PF_OutFlag2_SUPPORTS_THREADED_RENDERING` flag and, optionally, the `PF_OutFlag2_MUTABLE_RENDER_SEQUENCE_DATA_SLOWER` flag will work with After Effects beta builds starting with 18.0 when the `PF_EffectSequeceDataSuite1` was introduced. Check for the presence of this suite if you need to support both sequence_data behaviors.
