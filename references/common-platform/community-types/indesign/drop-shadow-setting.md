# DropShadowSetting

Community declaration reference: InDesign/2023.

Settings for drop shadow effects.

```typescript
declare class DropShadowSetting extends Preference {
    /**
    - Angle used to cast the shadow
      */
      angle: number
    /**

    - BlendMode used by the drop shadow effect.
      */
      blendMode: BlendMode
    /**

    - Distance separating the item from its shadow
      */
      distance: number | string
    /**

    - Drop shadow color. Use either an array of color values or a swatch such as color, gradient, tint, or mixed ink. Interpret array entries by color mode: RGB uses [R,G,B] with 3 entries from 0 to 255; CMYK uses [C,M,Y,K] with 4 percentage entries from 0 to 100; LAB uses [L,A,B], where L is 0 to 100 and A and B are -128 to 127.
      */
      effectColor: Swatch
    /**

    - When true, the drop shadow accounts for other non-shadow effects.
      */
      honorOtherEffects: boolean
    /**

    - When true, the layer knocks out the drop shadow.
      */
      knockedOut: boolean
    /**

    - Shadow mode value.
      */
      mode: ShadowMode
    /**

    - Noise added to the shadow, as a percentage. (Range: 0 to 100)
      */
      noise: number
    /**

    - Drop shadow opacity as a percentage. (Range: 0 to 100)
      */
      opacity: number
    /**

    - Blur radius for the drop shadow, in pixels. (Allowed range by unit: points 0 to 144; picas 0p0 to 12p0; inches 0 to 2; mm 0 to 50.08; cm 0 to 5.08; ciceros 0c0 to 11c3.128.)
      */
      size: number | string
    /**

    - Percentage of blur width used to expand the drop shadow footprint and shrink the blur radius. (Range: 0 to 100)
      */
      spread: number
    /**

    - When true, the global light angle is used.
      */
      useGlobalLight: boolean
    /**

    - Horizontal offset for the drop shadow. Unit-specific limits: points -1000 to 1000; picas -83p4 to 83p4; inches -13.8889 to 13.8889; mm -352.778 to 352.778; cm -35.277 to 35.277; ciceros -78c2.389 to 78c2.389.
      */
      xOffset: number | string
    /**

    - Vertical offset for the drop shadow. (Unit-specific limits: points -1000 to 1000; picas -83p4 to 83p4; inches -13.8889 to 13.8889; mm -352.778 to 352.778; cm -35.277 to 35.277; ciceros -78c2.389 to 78c2.389)
      */
      yOffset: number | string
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
