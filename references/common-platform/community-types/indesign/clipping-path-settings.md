# ClippingPathSettings

Community declaration reference: InDesign/2023.

Settings for clipping paths.

```typescript
declare class ClippingPathSettings extends Preference {
    /**
    - Alpha channels stored in the graphic.
      */
      readonly alphaChannelPathNames: string[]
    /**

    - Photoshop path or alpha channel name used as the clipping path.
      */
      appliedPathName: string
    /**

    - Clipping path type.
      */
      clippingType: ClippingPathType
    /**

    - When true, creates interior clipping paths inside the enclosing clipping path. Applies only if clipping type is alpha channel or detect edges.
      */
      includeInsideEdges: boolean
    /**

    - Moves the clipping boundary inward by the given amount. Unit controls accepted values: points: -10000 to 10000; picas: -833p4 to 833p4; inches: -138.8889 to 138.8889; mm: -3527.778 to 3527.778; cm: -352.7778 to 352.7778; ciceros: -781c11.889 to 781c11.889)
      */
      insetFrame: number | string
    /**

    - When true, the clipping path is inverted.
      */
      invertPath: boolean
    /**

    - Paths collection.
      */
      readonly paths: Paths
    /**

    - Clipping paths stored in the graphic.
      */
      readonly photoshopPathNames: string[]
    /**

    - When true, clips the path at the edge of the graphic frame. Applies only if clipping type is alpha channel or detect edges.
      */
      restrictToFrame: boolean
    /**

    - Minimum allowed dark pixel value. Pixels lighter than this threshold are clipped and hidden. (Range: 0 to 255) Applies only if clipping type is detect edges or alpha channel.
      */
      threshold: number
    /**

    - Controls how close pixel intensity may be to the threshold before the clipping path hides that pixel. (Range: 0 to 10) Applies only if clipping type is detect edges or alpha channel.
      */
      tolerance: number
    /**

    - With true, high-resolution graphic data creates the clipping path. With false, the clipping-path calculation uses screen-display resolution. Applies only if clipping type is detect edges.
      */
      useHighResolutionImage: boolean
    /**

    - Changes the clipping path into a frame.
      */
      convertToFrame(): PageItem
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
