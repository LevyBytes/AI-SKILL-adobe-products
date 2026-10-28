# OpenOptionsPhotoshop

Community declaration reference: Illustrator/2022.

Options used when a Photoshop file is opened or placed.

```typescript
declare class OpenOptionsPhotoshop {
    /**
    - Uses the specified LayerComp.
      */
      layerComp: string
    /**

    - Containing object for this object.
      */
      readonly parent: object
    /**

    - Whether hidden layers stay preserved during document conversion (default: false).
      */
      preserveHiddenLayers: boolean
    /**

    - Whether image maps stay preserved during document conversion (default: true).
      */
      preserveImageMaps: boolean
    /**

    - Whether layers stay preserved during document conversion (default: true).
      */
      preserveLayers: boolean
    /**

    - Whether slices stay preserved during document conversion (default: true).
      */
      preserveSlices: boolean
    /**

    - Object class identifier.
      */
      readonly typename: string
}
```

Source: [Illustrator/2022/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Illustrator/2022/index.d.ts).
