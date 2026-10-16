# BitmapConversionOptions

Community declaration reference: Photoshop/2015.5.

Settings used when changing document mode to Bitmap.

```typescript
declare class BitmapConversionOptions extends DocumentConversionOptions {
    /**
    - Dot orientation angle, in degrees. Applies only when 'method' = halftone screen. Range: -180 to 180.
      */
      angle: number
    /**

    - Printer-dot density in dots per inch. Use with 'method' = halftone screen. Range: 1.0 to 999.99.
      */
      frequency: number
    /**

    - Method chosen for conversion.
      */
      method: BitmapConversionType
    /**

    - Pattern name to apply. Applies only when 'method' = custom.
      */
      patternName: string
    /**

    - Output resolution, measured in pixels per inch.
      */
      resolution: number
    /**

    - Dot shape choice. Applies only when 'method' = halftone screen.
      */
      shape: BitmapHalfToneType
}
```

Source: [Photoshop/2015.5/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Photoshop/2015.5/index.d.ts).
