# Timeline.showLayerMasking

Community declaration reference: Animate/22.0.

Shows layer masking while authoring by locking the mask and masked layers. If no layer is specified, the current layer is used. Calling this on a layer whose type is not Mask or Masked makes Flash display an error in the Output panel.
@param layerIndex Zero-based index for a mask or masked layer whose masking should be shown while authoring. This parameter is optional.

```typescript
declare class Timeline {
    showLayerMasking(layerIndex?: number): void
}
```

Source: [Animate/22.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Animate/22.0/index.d.ts).
