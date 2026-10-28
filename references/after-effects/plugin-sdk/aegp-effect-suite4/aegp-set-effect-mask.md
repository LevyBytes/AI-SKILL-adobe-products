# AEGP_SetEffectMask

`AEGP_SetEffectMask`

New in CC 2014. Place an effect mask onto an index that already exists.

The effect ref's local stream comes back, which is handy when you intend to add keyframes.

Caller must dispose of AEGP_StreamRefH when finished.

Undoable.

Suite argument declaration (not a standalone call):

```cpp
AEGP_SetEffectMask(
  AEGP_EffectRefH  effect_refH,
  A_u_long         mask_indexL,
  AEGP_MaskIDVal   id_val,
  AEGP_StreamRefH  *streamPH0);
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
|  |  |
|  |  |
|  |  |
|  |  |
|  |  |
|  |  |
|  |  |
|  |  |
|  |  |
|  |  |
|  |  |
|  |  |
|  |  |
