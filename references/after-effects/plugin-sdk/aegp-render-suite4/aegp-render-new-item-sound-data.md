# AEGP_RenderNewItemSoundData

`AEGP_RenderNewItemSoundData`

Pulls an AEGP_ItemH's audio at the stated time, for the stated duration, in the stated format.

The plug-in has to dispose of the AEGP_SoundDataH that comes back (it may be NULL when no audio exists). The optional cancellation callback and its refcon precede the output handle.

Suite argument declaration (not a standalone call):

```cpp
AEGP_RenderNewItemSoundData(
  AEGP_ItemH itemH,
  const A_Time *start_timePT,
  const A_Time *durationPT,
  const AEGP_SoundDataFormat *sound_formatP,
  AEGP_RenderSuiteCheckForCancel cancel_functionP0,
  AEGP_CancelRefcon cancel_function_refconP0,
  AEGP_SoundDataH *new_sound_dataPH);
```

NOTE: When invoked as part of `AEGP_ItemSuite2`, this function gives a render you can interrupt with mouse clicks, unlike the `AEGP_RenderSuite` version documented here.
