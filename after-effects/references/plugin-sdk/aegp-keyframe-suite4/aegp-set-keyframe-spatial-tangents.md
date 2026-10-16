# AEGP_SetKeyframeSpatialTangents

`AEGP_SetKeyframeSpatialTangents`

Names the tangential AEGP_StreamValue2s to apply to the stream's value at the keyframe's time.

After Effects does not take ownership of the in and out tangent AEGP_StreamValue2s you pass, so you must dispose of them with AEGP_DisposeStreamValue.

This `AEGP_StreamValue2` contract is for `AEGP_KeyframeSuite4`; `AEGP_KeyframeSuite3` uses `AEGP_StreamValue`.

Suite argument declaration (not a standalone call):

```cpp
AEGP_SetKeyframeSpatialTangents(
  AEGP_StreamRefH          streamH,
  AEGP_KeyframeIndex       key_index,
  const AEGP_StreamValue2  *in_tP0,
  const AEGP_StreamValue2  *out_tP0);
```

NOTE: Through `AEGP_KeyframeSuite2` and earlier, this function gave back incorrect values for an effect point control stream or an anchor point, because it skipped multiplying them by the layer size. That multiplication now happens.
