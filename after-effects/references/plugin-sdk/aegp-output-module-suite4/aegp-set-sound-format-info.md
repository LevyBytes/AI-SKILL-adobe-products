# AEGP_SetSoundFormatInfo

`AEGP_SetSoundFormatInfo`

Sets the audio-output enable state for outmodH, along with the settings to apply.

Suite argument declaration (not a standalone call):

```cpp
AEGP_SetSoundFormatInfo(
  AEGP_RQItemRefH        rq_itemH,
  AEGP_OutputModuleRefH  outmodH,
  AEGP_SoundDataFormat   format_info,
  A_Boolean              enabledB);
```
