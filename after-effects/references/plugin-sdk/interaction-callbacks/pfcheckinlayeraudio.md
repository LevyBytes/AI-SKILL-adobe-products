# PF_CHECKIN_LAYER_AUDIO

`PF_CHECKIN_LAYER_AUDIO`

Balance all calls to PF_CHECKOUT_LAYER_AUDIO, regardless of error conditions, with matching calls to PF_CHECKIN_LAYER_AUDIO.

```cpp
PF_Err PF_CHECKIN_LAYER_AUDIO (
  PF_InData      *in_data,
  PF_LayerAudio  audio );
```
