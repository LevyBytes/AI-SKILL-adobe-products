# ExportForWebPreference

Community declaration reference: InDesign/2023.

Preferences for export for web.

```typescript
declare class ExportForWebPreference extends Preference {
    /**
    - When true, formatted images are copied into the images subfolder.
      */
      copyFormattedImages: boolean
    /**

    - When true, optimized images are copied into the images subfolder.
      */
      copyOptimizedImages: boolean
    /**

    - When true, original images are copied into the images subfolder.
      */
      copyOriginalImages: boolean
    /**

    - When true, interlaced GIFs are generated. Note: Not validwhen image conversion is JPEG.
      */
      gifOptionsInterlaced: boolean
    /**

    - GIF conversion color palette. Note: Not valid when image conversion is JPEG.
      */
      gifOptionsPalette: GIFOptionsPalette
    /**

    - File format selected for converted images. Restriction: copy optimized images and/or copy formatted images must be true.
      */
      imageConversion: ImageConversion
    /**

    - Formatting method for converted JPEG images. Restriction: unavailable when image conversion is GIF.
      */
      jpegOptionsFormat: JPEGOptionsFormat
    /**

    - Quality setting for converted JPEG images. Restriction: unavailable when image conversion is GIF.
      */
      jpegOptionsQuality: JPEGOptionsQuality
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
