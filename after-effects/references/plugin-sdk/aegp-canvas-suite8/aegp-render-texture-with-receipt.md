# AEGP_RenderTextureWithReceipt

`AEGP_RenderTextureWithReceipt`

Renders a texture into an AEGP_WorldH and returns an AEGP_RenderReceiptH for that operation.

render_receiptPH returned from this call must be disposed with AEGP_DisposeRenderReceipt.

Suite argument declaration (not a standalone call):

```cpp
AEGP_RenderTextureWithReceipt(
  PR_RenderContextH render_contextH,
  AEGP_RenderLayerContextH layer_contextH,
  AEGP_RenderHints render_hints,
  AEGP_NumEffectsToRenderType num_effectsS,
  A_FloatPoint *suggested_scaleP0,
  A_FloatRect *suggested_src_rectP0,
  A_Matrix3 *src_matrixP0,
  AEGP_RenderReceiptH *render_receiptPH,
  AEGP_WorldH *dstPH);
```
