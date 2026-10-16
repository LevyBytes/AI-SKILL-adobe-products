# Timeline.cutLayers

Community declaration reference: Animate/22.0.

Cuts either the layers selected in the Timeline or the layers in the supplied range. Optional arguments identify one layer or a layer span to cut.
@param startFrameIndex Optional. Zero-based index for the first layer in the range to cut. If startLayerIndex is omitted, Flash uses the current selection.
@param endFrameIndex Optional. Zero-based index for the layer where cutting stops. The cut layer range runs through and includes endLayerIndex. If only startLayerIndex is supplied, endLayerIndex takes the startLayerIndex value.

```typescript
declare class Timeline {
    cutLayers(startFrameIndex?: number, endFrameIndex?: number): void
}
```

Source: [Animate/22.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Animate/22.0/index.d.ts).
