# AEGP_GenerateRenderReceipt

`AEGP_GenerateRenderReceipt`

Creates an AEGP_RenderReceiptH for a layer as though the first num_effectsS effects have already rendered.

Suite argument declaration (not a standalone call):

```cpp
AEGP_GenerateRenderReceipt(
  PR_RenderContextH            current_contextH,
  AEGP_RenderLayerContextH     current_lyr_contextH,
  AEGP_NumEffectsToRenderType  num_effectsS,
  AEGP_RenderReceiptH          *render_receiptPH);
```
