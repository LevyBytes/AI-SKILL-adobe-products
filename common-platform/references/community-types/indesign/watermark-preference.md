# WatermarkPreference

Community declaration reference: InDesign/2023.

Watermark preferences

```typescript
declare class WatermarkPreference extends Preference {
    /**
    - Document watermark print flag
      */
      watermarkDoPrint: boolean
    /**

    - Document watermark draw-in-back flag
      */
      watermarkDrawInBack: boolean
    /**

    - Document watermark font color.
      */
      watermarkFontColor: [number, number, number] | UIColors
    /**

    - Display name for the watermark font family
      */
      watermarkFontFamily: string
    /**

    - Document watermark font point size
      */
      watermarkFontPointSize: number
    /**

    - Watermark font style name
      */
      watermarkFontStyle: string
    /**

    - Document watermark horizontal offset
      */
      watermarkHorizontalOffset: number | string
    /**

    - Document watermark horizontal position enum
      */
      watermarkHorizontalPosition: WatermarkHorizontalPositionEnum
    /**

    - Watermark opacity percentage. (Range: 0 to 100)
      */
      watermarkOpacity: number
    /**

    - Document watermark rotation
      */
      watermarkRotation: number
    /**

    - Document watermark text
      */
      watermarkText: string
    /**

    - Document watermark vertical offset
      */
      watermarkVerticalOffset: number | string
    /**

    - Document watermark vertical position enum
      */
      watermarkVerticalPosition: WatermarkVerticalPositionEnum
    /**

    - Document watermark visibility flag
      */
      watermarkVisibility: boolean
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
