# SatinSetting

Community declaration reference: InDesign/2023.

Settings for satin effects.

```typescript
declare class SatinSetting extends Preference {
    /**
    - Satin effect light angle. (Range: -360 to 360)
      */
      angle: number
    /**

    - When true, the satin effect is applied.
      */
      applied: boolean
    /**

    - BlendMode used by the satin effect.
      */
      blendMode: BlendMode
    /**

    - Pixel distance between SatinSetting and the satin effect.
      */
      distance: number | string
    /**

    - Satin effect color. Use an array of color values, a hex value, a color library color, or a swatch such as color, gradient, tint, or mixed ink. Interpret array entries by color mode: RGB uses [R,G,B] with 3 entries from 0 to 255; CMYK uses [C,M,Y,K] with 4 percentage entries from 0 to 100; LAB uses [L,A,B], where L is 0 to 100 and A and B are -128 to 127; HSB uses [H,S,B], where H is 0 to 360 and S and B are percentages from 0 to 100.
      */
      effectColor: Swatch
    /**

    - When true, the satin effect is inverted.
      */
      invertEffect: boolean
    /**

    - Satin effect opacity, expressed as a percentage. (Range: 0 to 100)
      */
      opacity: number
    /**

    - Satin effect width, in pixels.
      */
      size: number | string
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
