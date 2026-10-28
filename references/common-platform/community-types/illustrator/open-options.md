# OpenOptions

Community declaration reference: Illustrator/2022.

Configuration accepted when opening a file..

```typescript
declare class OpenOptions {
    /**
    - Adds this file to the list of recently opened files.
      */
      static addToRecentFiles: boolean
    /**

    - When a legacy document (pre-Illustrator CS4) opens in CS4 or later, converts crop areas into Artboard entries; false discards those crop areas.
      */
      static convertCropAreaToArtboard: boolean
    /**

    - When a legacy document (pre-Illustrator CS4) opens in CS4 or later, turns print tiles into Artboard entries.
      */
      static convertTilesToArtboard: boolean
    /**

    - When a legacy document (pre-Illustrator CS4) opens in CS4 or later, creates an Artboard using the artwork bounding-box dimensions.
      */
      static createArtboardWithArtworkBoundingBox: boolean
    /**

    - Opens the file as library.
      */
      static openAs: LibraryType
    /**

    - Keeps the pre-Illustrator CS4 Legacy Artboard during CS4-or-later opening.
      */
      static preserveLegacyArtboard: boolean
    /**

    - For legacy documents (pre-Illustrator CS3), controls preservation of spot colors in gradient mesh objects.
      */
      static updateLegacyGradientMesh: boolean
    /**

    - For documents saved with legacy texts (pre-Illustrator 11), controls whether all text objects are updated.
      */
      static updateLegacyText: boolean
}
```

Source: [Illustrator/2022/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Illustrator/2022/index.d.ts).
