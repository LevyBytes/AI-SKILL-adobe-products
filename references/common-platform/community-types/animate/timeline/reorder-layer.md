# Timeline.reorderLayer

Community declaration reference: Animate/22.0.

Moves one specified layer to a position before or after another specified layer.
@param layerToMove Zero-based index identifying the layer to move.
@param layerToPutItBy Zero-based index identifying the layer that should sit next to the moved layer. For example, with 1 as layerToMove and 0 as layerToPutItBy, the second layer is positioned next to the first layer.
@param bAddBefore Optional value specifying whether the move places the layer before or after layerToPutItBy. Passing false moves the layer after layerToPutItBy; true is the default.

```typescript
declare class Timeline {
    reorderLayer(layerToMove: number, layerToPutItBy: number, bAddBefore?: boolean): void
}
```

Source: [Animate/22.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Animate/22.0/index.d.ts).
