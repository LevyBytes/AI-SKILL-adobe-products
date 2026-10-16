# AEGP Suites — Masks

A layer can carry more than one mask, so you reach each mask with `AEGP_GetLayerMaskByIndex` from `AEGP_MaskSuite6`.

Unlike layers, masks have no streams of their own; they come with a dedicated enumeration instead. Get at their streams through `AEGP_GetNewMaskStream` from `AEGP_StreamSuite5`.
