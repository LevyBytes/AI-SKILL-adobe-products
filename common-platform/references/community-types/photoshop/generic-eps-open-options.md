# GenericEPSOpenOptions

Community declaration reference: Photoshop/2015.5.

Options accepted when opening a generic EPS document.

```typescript
declare class GenericEPSOpenOptions extends OpenOptions {
    /**
    - When true, anti-aliasing is enabled.
      */
      antiAlias: boolean
    /**

    - When true, image proportions are constrained.
      */
      constrainProportions: boolean
    /**

    - Image height.
      */
      height: UnitValue | number
    /**

    - Document mode setting.
      */
      mode: OpenDocumentMode
    /**

    - Document resolution, in pixels per inch.
      */
      resolution: number
    /**

    - Width value for the image.
      */
      width: UnitValue | number
}
```

Source: [Photoshop/2015.5/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Photoshop/2015.5/index.d.ts).
