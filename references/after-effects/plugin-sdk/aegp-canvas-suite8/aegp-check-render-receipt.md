# AEGP_CheckRenderReceipt

`AEGP_CheckRenderReceipt`

Queries After Effects' internal cache to determine whether the supplied AEGP_RenderReceiptH remains valid.

Suite argument declaration (not a standalone call):

```cpp
AEGP_CheckRenderReceipt(
  PR_RenderContextH            current_contextH,
  AEGP_RenderLayerContextH     current_lyr_ctxtH,
  AEGP_RenderReceiptH          old_receiptH,
  A_Boolean                    check_aceB,
  AEGP_NumEffectsToRenderType  num_effectsS,
  AEGP_RenderReceiptStatus     *receipt_statusP);
```
