# DICOMOpenOptions

Community declaration reference: Photoshop/2015.5.

DICOM document opening options.

```typescript
declare class DICOMOpenOptions extends OpenOptions {
    /**
    - When true, patient information is anonymized.
      */
      anonymize: boolean
    /**

    - Column count in an n-up configuration.
      */
      columns: number
    /**

    - When true, the image is inverted.
      */
      reverse: boolean
    /**

    - Row count in an n-up configuration.
      */
      rows: number
    /**

    - When true, overlays are displayed when available.
      */
      showOverlays: boolean
    /**

    - Image contrast in Houndsfield units.
      */
      windowLevel: number
    /**

    - Brightness value measured in Houndsfield units.
      */
      windowWidth: number
}
```

Source: [Photoshop/2015.5/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Photoshop/2015.5/index.d.ts).
