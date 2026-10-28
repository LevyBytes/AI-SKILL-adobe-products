# AEGP_AddEffectMask

`AEGP_AddEffectMask`

New in CC 2014. Attach an effect mask, one you can build with the Mask Management.

The effect ref's local stream comes back, which is handy when you intend to add keyframes.

Caller must dispose of AEGP_StreamRefH when finished.

Undoable.

Suite argument declaration (not a standalone call):

```cpp
AEGP_AddEffectMask(
  AEGP_EffectRefH effect_refH,
  AEGP_MaskIDVal id_val,
  AEGP_StreamRefH *streamPH0);
```
