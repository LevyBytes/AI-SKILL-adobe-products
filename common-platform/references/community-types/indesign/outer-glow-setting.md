# OuterGlowSetting

Community declaration reference: InDesign/2023.

Settings for outer glow effects.

```typescript
declare class OuterGlowSetting extends Preference {
    /**
    - When true, the outer glow effect is active.
      */
      applied: boolean
    /**

    - BlendMode used by the outer glow effect.
      */
      blendMode: BlendMode
    /**

    - Outer glow color. Use either an array of color values or a swatch such as color, gradient, tint, or mixed ink. Interpret array entries by color mode: RGB uses [R,G,B] with 3 entries from 0 to 255; CMYK uses [C,M,Y,K] with 4 percentage entries from 0 to 100; LAB uses [L,A,B], where L is 0 to 100 and A and B are -128 to 127.
      */
      effectColor: Swatch
    /**

    - Noise added to the outer glow, as a percentage. (Range: 0 to 100)
      */
      noise: number
    /**

    - Outer glow opacity expressed as a percentage. (Range: 0 to 100)
      */
      opacity: number
    /**

    - Size value for the outer glow.
      */
      size: number | string
    /**

    - Spread amount, as a percentage of outer glow size. (Range: 0 to 100)
      */
      spread: number
    /**

    - Technique used by the outer glow.
      */
      technique: GlowTechnique
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
