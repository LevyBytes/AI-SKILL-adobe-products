# PF_OutFlag2_SUPPORTS_THREADED_RENDERING

`PF_OutFlag2_SUPPORTS_THREADED_RENDERING`

Present in the After Effects Beta builds from June 2020 onward, and in After Effects 2022. Set during `PF_Cmd_GLOBAL_SETUP`, this signals that the effect can render on several threads simultaneously. A layer may carry a single instance or several, and any of them can be told to render concurrently across threads. The flag declares that concurrent multi-threaded rendering is supported; whether one copy or many copies of the effect sit on a layer, all of them can be driven to render at the same moment on different threads. If the `PF_OutFlag_SEQUENCE_DATA_NEEDS_FLATTENING` flag is in play, be sure to raise `PF_OutFlag2_SUPPORTS_GET_FLATTENED_SEQUENCE_DATA` as well. See Sequence Data in Multi-Frame rendering for more information.

Note

Reserve this flag for plugins you've verified to be thread-safe once multi-frame rendering is switched on in AE.

To learn how this flag is meant to be used, refer to Multi-Frame Rendering in AE within Effect Details.
