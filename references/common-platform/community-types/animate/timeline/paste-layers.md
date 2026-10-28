# Timeline.pasteLayers

Community declaration reference: Animate/22.0.

Pastes layers that were previously cut or copied above the selected layer, or above the supplied layer index. If the supplied layer is a folder layer, the layers are inserted into that folder. The method returns the lowest layer index among the pasted layers. This action leaves the system clipboard unchanged.
@returns Integer for the lowest layer index among the layers pasted.
@param layerIndex Optional. Zero-based index for the layer above which the clipboard layers should be pasted. If layerIndex is omitted, Flash uses the current selection.

```typescript
declare class Timeline {
    pasteLayers(layerIndex?: number): number
}
```

Source: [Animate/22.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Animate/22.0/index.d.ts).
