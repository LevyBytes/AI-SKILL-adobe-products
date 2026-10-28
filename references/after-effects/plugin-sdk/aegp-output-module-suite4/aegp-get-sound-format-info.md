# AEGP_GetSoundFormatInfo

`AEGP_GetSoundFormatInfo`

Reads the audio-output enable state for outmodH, along with the settings to apply.

Suite argument declaration (not a standalone call):

```cpp
AEGP_GetSoundFormatInfo(
  AEGP_RQItemRefH        rq_itemH,
  AEGP_OutputModuleRefH  outmodH,
  AEGP_SoundDataFormat   *formatP,
  A_Boolean              *enabledPB);
```
