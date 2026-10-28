# AEGP_RenderTexture

`AEGP_RenderTexture`

Using the render context plus the layer, returns the layer texture.

Parameters ending in `0` are optional. The output parameter receives an `AEGP_WorldH`; dispose the acquired texture with `AEGP_DisposeTexture`.

Suite argument declaration (not a standalone call):

```cpp
AEGP_RenderTexture(
  PR_RenderContextH render_contextH,
  AEGP_RenderLayerContextH layer_contextH,
  AEGP_RenderHints render_hints,
  A_FloatPoint *suggested_scaleP0,
  A_FloatRect *suggested_src_rectP0,
  A_Matrix3 *src_matrixP0,
  AEGP_WorldH *dstPH);
```

`AEGP_RenderHints` contains one or more of the following: - `AEGP_RenderHints_NONE` - `AEGP_RenderHints_IGNORE_EXTENTS` - `AEGP_RenderHints_NO_TRANSFER_MODE` (prevents application of opacity & transfer mode; for use with RenderLayer calls.)
