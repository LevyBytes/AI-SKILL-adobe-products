# PublishExportPreference

Community declaration reference: InDesign/2023.

Publish export preference settings.

```typescript
declare class PublishExportPreference extends Preference {
    /**
    - File path for the epub cover image.
      */
      coverImageFile: string
    /**

    - Cover page setting.
      */
      coverPage: string
    /**

    - GIF conversion color palette. This applies only when image conversion is not JPEG.
      */
      gifOptionsPalette: GIFOptionsPalette
    /**

    - File format for converted images. Requires copy optimized images or copy formatted images to be true.
      */
      imageConversion: ImageConversion
    /**

    - Export resolution setting
      */
      imageExportResolution: ImageResolution
    /**

    - JPEG conversion quality. This setting is unavailable when image conversion is GIF.
      */
      jpegOptionsQuality: JPEGOptionsQuality
    /**

    - Publish cover option.
      */
      publishCover: PublishCoverEnum
    /**

    - Publish description.
      */
      publishDescription: string
    /**

    - File name.
      */
      publishFileName: string
    /**

    - Publish format setting.
      */
      publishFormat: PublishFormatEnum
    /**

    - Publish page range.
      */
      publishPageRange: string
    /**

    - Publish page range format.
      */
      publishPageRangeFormat: PageRangeFormat
    /**

    - Whether a PDF is uploaded during publishing.
      */
      publishPdf: boolean
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
