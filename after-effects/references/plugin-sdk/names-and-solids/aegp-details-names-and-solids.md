# AEGP Details — Names And Solids

In the After Effects UI, solids have names, but those names are not present in their `PF_LayerDef` `PF_EffectWorld` / `PF_LayerDef`. Because of that, `AEGP_GetItemName` in `AEGP_ItemSuite9` and `AEGP_GetLayerName` in `AEGP_LayerSuite9` cannot retrieve them.

You can, however, use the associated ItemH to call `AEGP_GetItemName` from `AEGP_ItemSuite9`.
