# AEGP_SetTrackMatte

`AEGP_SetTrackMatte`

New in 23.0. Assigns both the track matte layer and the track matte type for layerH.

Track Matte Types:

- AEGP_TrackMatte_NO_TRACK_MATTE

- AEGP_TrackMatte_ALPHA

- AEGP_TrackMatte_NOT_ALPHA

- AEGP_TrackMatte_LUMA

- AEGP_TrackMatte_NOT_LUMA

Passing AEGP_TrackMatte_NO_TRACK_MATTE as the track matte type strips the track matte away.

Suite argument declaration (not a standalone call):

```cpp
AEGP_SetTrackMatte(
  AEGP_LayerH                layerH,
  const AEGP_LayerH          track_matte_layerH0,
  const AEGP_TrackMatte      track_matte_type);
```
