# Timeline.setSelectedLayers

Community declaration reference: Animate/22.0.

Selects the specified layer and also makes it the current layer. Selecting a layer also selects all frames in that layer.
@param index Zero-based index for the layer to select.
@param bReplaceCurrentSelection Optional Boolean; true replaces the current selection, while false extends it. The default value is true.

```typescript
declare class Timeline {
    setSelectedLayers(index: number, bReplaceCurrentSelection?: boolean): void
}
```

Source: [Animate/22.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Animate/22.0/index.d.ts).
