# OpenOptionsAutoCAD

Community declaration reference: Illustrator/2022.

Options available when an AutoCAD file is opened.

```typescript
declare class OpenOptionsAutoCAD {
    /**
    - Centers the generated artwork on the artboard (default: true).
      */
      centerArtwork: boolean
    /**

    - Scaling behavior for AutoCAD drawing import (default: Fit Artboard).
      */
      globalScaleOption: AutoCADGlobalScaleOption
    /**

    - Global percentage scaling for the AutoCAD drawing (default: 1.0).
      */
      globalScalePercent: number
    /**

    - Merges artwork layers (default: false).
      */
      mergeLayers: boolean
    /**

    - Containing object for this object.
      */
      readonly parent: object
    /**

    - Scales lineweights by the same amount as the rest of the drawing (default: false).
      */
      scaleLineweights: boolean
    /**

    - Layout name from the AutoCAD drawing to import.
      */
      selectedLayoutName: string
    /**

    - Object class identifier.
      */
      readonly typename: string
    /**

    - Units used for mapping (default: Millimeters).
      */
      unit: AutoCADUnit
    /**

    - Scaling ratio used while mapping units (default: 1.0).
      */
      unitScaleRatio: number
}
```

Source: [Illustrator/2022/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Illustrator/2022/index.d.ts).
