# PNGExportPreference

Community declaration reference: InDesign/2023.

Preferences controlling PNG export.

```typescript
declare class PNGExportPreference extends Preference {
    /**
    - When true, exported text and vectors use anti-aliasing.
      */
      antiAlias: boolean
    /**

    - Export resolution given as a real number rather than an integer. (Range: 1.0 to 2400.0)
      */
      exportResolution: number
    /**

    - When true, each spread exports as one PNG file. When false, facing pages export as separate files and sequential numbers are appended to each file name.
      */
      exportingSpread: boolean
    /**

    - Page or pages selected for export, supplied as one page number or an array of page numbers. Note: Used unless PNG export range is all.
      */
      pageString: string
    /**

    - RGB or Gray
      */
      pngColorSpace: PNGColorSpaceEnum
    /**

    - Page range selected for export.
      */
      pngExportRange: PNGExportRangeEnum
    /**

    - Compression quality setting.
      */
      pngQuality: PNGQualityEnum
    /**

    - When true, spot and process color overprint effects are simulated as they would be during printing.
      */
      simulateOverprint: boolean
    /**

    - When true, the exported PNG uses a transparent background.
      */
      transparentBackground: boolean
    /**

    - When true, exported PNG output uses the document's bleed settings.
      */
      useDocumentBleeds: boolean
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
