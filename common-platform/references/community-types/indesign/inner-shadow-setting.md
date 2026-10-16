# InnerShadowSetting

Community declaration reference: InDesign/2023.

Settings for inner shadow effects.

```typescript
declare class InnerShadowSetting extends Preference {
    /**
    - Angle used to cast the inner shadow. (Range: -360 to 360)
      */
      angle: number
    /**

    - When true, the inner shadow effect is active.
      */
      applied: boolean
    /**

    - BlendMode used by the inner shadow effect.
      */
      blendMode: BlendMode
    /**

    - Inner shadow choke, measured as a percent of shadow size. (Range: 0 to 100)
      */
      chokeAmount: number
    /**

    - Distance separating the InnerShadowSetting from the shadow.
      */
      distance: number | string
    /**

    - Inner shadow color. Use either an array of color values or a swatch such as color, gradient, tint, or mixed ink. Interpret array entries by color mode: RGB uses [R,G,B] with 3 entries from 0 to 255; CMYK uses [C,M,Y,K] with 4 percentage entries from 0 to 100; LAB uses [L,A,B], where L is 0 to 100 and A and B are -128 to 127.
      */
      effectColor: Swatch
    /**

    - Noise amount added to the shadow, as a percentage. (Range: 0 to 100)
      */
      noise: number
    /**

    - Inner shadow opacity expressed as a percentage. (Range: 0 to 100)
      */
      opacity: number
    /**

    - Size value for the inner shadow.
      */
      size: number | string
    /**

    - When true, the global light angle is used.
      */
      useGlobalLight: boolean
    /**

    - Horizontal shadow offset
      */
      xOffset: number | string
    /**

    - Vertical shadow offset
      */
      yOffset: number | string
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
