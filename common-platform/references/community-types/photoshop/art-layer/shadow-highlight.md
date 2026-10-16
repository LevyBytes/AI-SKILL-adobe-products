# ArtLayer.shadowHighlight

Community declaration reference: Photoshop/2015.5.

Changes tonal range for shadows and highlights.
@param shadowAmount Shadow amount as a percentage. Range: 0 to 100.
@param shadowWidth Shadow tonal-width percentage; 0 = narrow and 100 = broad. Range: 0 to 100.
@param shadowRaduis Shadow radius in pixels. Range: 0 to 2500.
@param highlightAmount Highlight amount as a percentage. Range: 0 to 100.
@param highlightWidth Highlight tonal width; 0 = narrow and 100 = broad. Range: 0 to 100.
@param highlightRaduis Highlight radius in pixels. Range: 0 to 2500.
@param colorCorrection Color-adjustment amount for the changed image region. Range: -100 to 100.
@param midtoneContrast Midtone-contrast amount. Range: -100 to 100.
@param blackClip White clipping fraction. Range: 0.000 to 50.000.
@param whiteClip Black clipping fraction. Range: 0.000 to 50.000.

```typescript
declare class ArtLayer extends Layer {
    shadowHighlight(
      shadowAmount?: number,
      shadowWidth?: number,
      shadowRaduis?: number,
      highlightAmount?: number,
      highlightWidth?: number,
      highlightRaduis?: number,
      colorCorrection?: number,
      midtoneContrast?: number,
      blackClip?: number,
      whiteClip?: number,
      ): void
}
```

Source: [Photoshop/2015.5/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Photoshop/2015.5/index.d.ts).
