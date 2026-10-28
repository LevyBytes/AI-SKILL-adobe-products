# PF_CHECKOUT_LAYER_AUDIO

`PF_CHECKOUT_LAYER_AUDIO`

Given an index, start_time, duration, time_scale, rate, bytes_per_sample, num_channels, and fmt_signed, After Effects will return a corresponding PF_LayerAudio.

After Effects will perform any necessary resampling.

```cpp
PF_Err PF_CHECKOUT_LAYER_AUDIO (
  PF_InData      *in_data,
  PF_ParamIndex  index,
  A_long         start_time,
  A_long         duration,
  A_u_long       time_scale,
  PF_UFixed      rate,
  A_long         bytes_per_sample,
  A_long         num_channels,
  A_long         fmt_signed,
  PF_LayerAudio  *audio);
```
