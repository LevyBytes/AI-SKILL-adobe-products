# Data Types - Data Types Requiring Disposal

| Data Type | Disposal Function |
| --- | --- |
| `AEGP_Collection2H` | `AEGP_DisposeCollection`, from `AEGP_CollectionSuite2` |
| `AEGP_FootageH` | `AEGP_DisposeFootage`, from `AEGP_FootageSuite5` |
| `AEGP_WorldH` | `AEGP_Dispose`, from `AEGP_WorldSuite3` (Or `AEGP_DisposeTexture`, from `AEGP_CanvasSuite8`, if layer texture created using `AEGP_RenderTexture`) |
| `AEGP_EffectRefH` | `AEGP_DisposeEffect`, from `AEGP_EffectSuite4` |
| `AEGP_MaskRefH` | `AEGP_DisposeMask`, from `AEGP_MaskSuite6` |
| `AEGP_RenderOptionsH` | `AEGP_Dispose`, from `AEGP_RenderQueueMonitorSuite1` |
| `AEGP_LayerRenderOptionsH` | `AEGP_Dispose`, from `AEGP_LayerRenderOptionsSuite1` |
| `AEGP_RenderReceiptH` | `AEGP_DisposeRenderReceipt`, from `AEGP_CanvasSuite8` |
