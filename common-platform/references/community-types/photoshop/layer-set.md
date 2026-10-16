# LayerSet

Community declaration reference: Photoshop/2015.5.

LayerSet groups art layer objects and nested layer set objects; commands can act on all layers in that LayerSet.

```typescript
declare class LayerSet extends Layer {
    /**
    - ArtLayers held by this LayerSet.
      */
      readonly artLayers: ArtLayers
    /**

    - Enabled channels for the LayerSet; the list must contain component channels.
      */
      enabledChannels: Channel[]
    /**

    - LayerSets contained inside this LayerSet.
      */
      readonly layerSets: LayerSets
    /**

    - Layers belonging to this LayerSet.
      */
      readonly layers: Layers
    /**

    - Adds a new element.
      */
      add(): LayerSet
    /**

    - Merges this LayerSet.
      */
      merge(): ArtLayer
}
```

Source: [Photoshop/2015.5/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Photoshop/2015.5/index.d.ts).
