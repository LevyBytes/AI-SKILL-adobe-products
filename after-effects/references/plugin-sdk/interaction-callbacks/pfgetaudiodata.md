# PF_GET_AUDIO_DATA

`PF_GET_AUDIO_DATA`

Returns information about the PF_LayerAudio.

All the parameters after audio are optional; pass 0 for any value in which you aren't interested. rate0 is unsigned, and fmt_signed0 should be non-zero for signed, zero for unsigned.

This callback is for visual effects that read audio information. To alter audio, write an audio filter.

```cpp
PF_Err PF_GET_AUDIO_DATA (
  PF_InData        *in_data,
  PF_LayerAudio    audio,
  PF_SndSamplePtr  *data0,
  A_long           *num_samples0,
  PF_UFixed        *rate0,
  A_long           *bytes_per_sample0,
  A_long           *num_channels0,
  A_long           *fmt_signed0);
```

|  |  |
| --- | --- |
|  |  |
|  |  |
|  |  |
|  |  |
|  |  |
|  |  |
|  |  |
|  |  |
|  |  |
