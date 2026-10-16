# `AEIO_ModuleFlags2`

Need those flags too...

| Flag | Purpose | I or O? |
| --- | --- | --- |
| `AEIO_MFlag2_AUDIO_OPTIONS` | The AEIO has an audio options dialog. | Output |
| `AEIO_MFlag2_SEND_ADDMARKER_BEFORE_ADDFRAME` | The AEIO wants to receive marker data before outputting video or audio (useful for MPEG streams). | Output |
| `AEIO_MFlag2_CAN_DO_MARKERS_2` | The AEIO supports combined markers; URL flips, chapters, and comments. | Output |
| `AEIO_MFlag2_CAN_DRAW_FLOAT` | The AEIO can draw into float (32-bpc) worlds. | Input |
| `AEIO_MFlag2_CAN_DO_AUDIO_32` | Supports 32-bit audio output. | Output |
| `AEIO_MFlag2_SUPPORTS_ICC_PROFILES` | Supports ICC profiles. | Both |
| `AEIO_MFlag2_CAN_DO_MARKERS_3` | The AEIO supports combined markers; URL flips, chapters, comments, and cue points. | Output |
| `AEIO_MFlag2_SEND_ADDMARKER_BEFORE_STARTADDING` | The AEIO wants to process markers before video during export. | Output |
| `AEIO_MFlag2_USES_QUICKTIME` | On MacOS, prior to the host calling `AEIO_AddFrame` or `AEIO_OutputFrame` from `AEIO_FunctionBlock4`, it will lock the global QuickTime mutex. | Output |
