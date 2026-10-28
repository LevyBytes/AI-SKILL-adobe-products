# ContourOption

Community declaration reference: InDesign/2023.

Contour option settings.

```typescript
declare class ContourOption extends Preference {
    /**
    - Names of alpha channels stored in the graphic.
      */
      readonly alphaChannelPathNames: string[]
    /**

    - Photoshop path or alpha channel used by this contour option; valid only for photoshop path or alpha channel contour options.
      */
      contourPathName: string
    /**

    - Contour type.
      */
      contourType: ContourOptionsTypes
    /**

    - When true, adds interior clipping paths inside the surrounding clipping path. Note: Valid only for alpha channel or detect edges clipping type.
      */
      includeInsideEdges: boolean
    /**

    - Names of clipping paths stored in the graphic.
      */
      readonly photoshopPathNames: string[]
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
