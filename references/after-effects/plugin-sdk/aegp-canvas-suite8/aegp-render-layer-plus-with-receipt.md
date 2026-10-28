# AEGP_RenderLayerPlusWithReceipt

`AEGP_RenderLayerPlusWithReceipt`

This improves on AEGP_RenderLayerPlus by also returning an AEGP_RenderReceiptH for caching.

Suite argument declaration (not a standalone call):

```cpp
AEGP_RenderLayerPlusWithReceipt(
  PR_RenderContextH render_contextH,
  AEGP_LayerH layerH,
  AEGP_RenderLayerContextH layer_contextH,
  AEGP_RenderHints render_hints,
  AEGP_RenderReceiptH *render_receiptPH,
  AEGP_WorldH *render_bufferPH);
```
