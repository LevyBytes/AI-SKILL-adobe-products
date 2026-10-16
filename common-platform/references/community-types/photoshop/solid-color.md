# SolidColor

Community declaration reference: Photoshop/2015.5.

Document color definition object.

```typescript
declare class SolidColor {
    /**
    - CMYK color model value.
      */
      static cmyk: CMYKColor
    /**

    - CMYK color model value.
      */
      cmyk: CMYKColor
    /**

    - Grayscale color model value.
      */
      static gray: GrayColor
    /**

    - Grayscale color model value.
      */
      gray: GrayColor
    /**

    - HSB color model value.
      */
      static hsb: HSBColor
    /**

    - HSB color model value.
      */
      hsb: HSBColor
    /**

    - Lab color model value.
      */
      static lab: LabColor
    /**

    - Lab color model value.
      */
      lab: LabColor
    /**

    - Current color model.
      */
      model: ColorModel
    /**

    - Current color model.
      */
      static model: ColorModel
    /**

    - Closest web-safe RGBColor to this color.
      */
      static readonly nearestWebColor: RGBColor
    /**

    - Closest web-safe RGBColor to this color.
      */
      readonly nearestWebColor: RGBColor
    /**

    - RGB color model value.
      */
      rgb: RGBColor
    /**

    - RGB color model value.
      */
      static rgb: RGBColor
    /**

    - Tests two SolidColor values for equality.
    - @param color Color to test against this one.
      */
      isEqual(color: SolidColor): boolean
}
```

Source: [Photoshop/2015.5/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Photoshop/2015.5/index.d.ts).
