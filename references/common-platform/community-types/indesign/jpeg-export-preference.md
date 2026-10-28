# JPEGExportPreference

Community declaration reference: InDesign/2023.

Preferences controlling JPEG export.

```typescript
declare class JPEGExportPreference extends Preference {
    /**
    - When true, exported text and vectors use anti-aliasing.
      */
      antiAlias: boolean
    /**

    - True embeds the color profile; false leaves it out.
      */
      embedColorProfile: boolean
    /**

    - Export resolution given as a real number rather than an integer. (Range: 1.0 to 2400.0)
      */
      exportResolution: number
    /**

    - When true, each spread exports as one JPEG file. When false, facing pages export as separate files whose names receive sequential suffixes.
      */
      exportingSpread: boolean
    /**

    - One of RGB, CMYK or Gray
      */
      jpegColorSpace: JpegColorSpaceEnum
    /**

    - Page range selected for export.
      */
      jpegExportRange: ExportRangeOrAllPages
    /**

    - Compression quality setting.
      */
      jpegQuality: JPEGOptionsQuality
    /**

    - Rendering style setting.
      */
      jpegRenderingStyle: JPEGOptionsFormat
    /**

    - Page or pages to export, supplied as a page number or an array of page numbers. Note: Applies when JPEG export range is not all.
      */
      pageString: string
    /**

    - When true, spot and process color overprint effects are simulated as they would be during printing.
      */
      simulateOverprint: boolean
    /**

    - When true, exported JPEG output uses the document's bleed settings.
      */
      useDocumentBleeds: boolean
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
