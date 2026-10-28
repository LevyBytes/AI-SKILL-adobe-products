# RasterItem

Community declaration reference: Illustrator/2022.

Raster artwork item object.

```typescript
declare class RasterItem extends PageItem {
    /**
    - Bits-per-channel count.
      */
      readonly bitsPerChannel: number
    /**

    - Raster art object dimensions independent of transformations.
      */
      boundingBox: Rect
    /**

    - Number of image channels.
      */
      readonly channels: number
    /**

    - Colorant-name list.
      */
      readonly colorants: string[]
    /**

    - Whether the raster art is a colorized grayscale image.
      */
      readonly colorizedGrayscale: boolean
    /**

    - Content variable linked to this raster art object.
      */
      contentVariable: any
    /**

    - Whether the raster art is embedded inside the illustration.
      */
      embedded: boolean
    /**

    - File that contains the raster artwork.
      */
      readonly file: File
    /**

    - Raster image color space.
      */
      readonly imageColorSpace: ImageColorSpace
    /**

    - Transformation matrix for the raster art object.
      */
      matrix: Matrix
    /**

    - Whether the raster art overprints.
      */
      overprint: boolean
    /**

    - Linked-image status.
      */
      readonly status: RasterLinkState
    /**

    - Whether the raster art is transparent.
      */
      readonly transparent: boolean
    /**

    - Apply a CMYK or RGB Color to colorize the RasterItem.
    - @param rasterColor CMYK or RGB Color applied to the TIFF image.
      */
      colorize(rasterColor: Color): void
    /**

    - Run a default trace on this raster object, then reorder this raster to the source art.
      */
      trace(): PluginItem
}
```

Source: [Illustrator/2022/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Illustrator/2022/index.d.ts).
