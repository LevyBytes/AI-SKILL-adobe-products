# Multi-Frame Rendering Changes

1. For the `PF_OutFlag2_SUPPORTS_THREADED_RENDERING` flag, the final behavior has landed. Once you set this flag to signal Multi-Frame Rendering support, it also forces whatever lives in sequence_data to be const/read-only during Render time, and getting at sequence_data now goes through a suite, `PF_EffectSequenceDataSuite1`.
2. Should your plugin be impossible to update for the new sequence*data behavior, a fresh flag — `PF_OutFlag2_MUTABLE_RENDER_SEQUENCE_DATA_SLOWER` — can now be set next to `PF_OutFlag2_SUPPORTS_THREADED_RENDERING`. For effects carrying this flag, After Effects can't grant as much rendering concurrency and the performance gains that come with it (which is what the \_SLOWER part of the name signals).
3. The Compute Cache (once called the 3-way checkout cache) is a newly available suite. As either a stand-in for or an addition to sequence_data, it hands plugins a thread-safe cache so multiple render threads can compute and cache whatever data they need to render frames.

Because of all this, keeping Multi-Frame Rendering compatibility with AE Beta builds going forward means you have to move to the March 2021 SDK and compile against it. Beginning with AE 22.0x6 (which shipped on June 29th 2021), any plugin built against the June 2020 SDK will stop supporting Multi-Frame Rendering, regardless of whether `PF_OutFlag2_SUPPORTS_THREADED_RENDERING` is set.

Fuller detail lives in the Multi-Frame Rendering in AE section.
