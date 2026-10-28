# Timeline.deleteLayer

Community declaration reference: Animate/22.0.

Removes a layer. When the target layer is a folder, all layers inside that folder are removed too. Without a layer index, Flash removes the selected layers.
@param index Zero-based index for the layer to delete. If the timeline contains only one layer, this method makes no change. This parameter is optional.

```typescript
declare class Timeline {
    deleteLayer(index?: number): void
}
```

Source: [Animate/22.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Animate/22.0/index.d.ts).
