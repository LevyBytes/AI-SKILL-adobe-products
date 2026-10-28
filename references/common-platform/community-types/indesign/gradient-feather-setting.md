# GradientFeatherSetting

Community declaration reference: InDesign/2023.

Settings for gradient feather effects.

```typescript
declare class GradientFeatherSetting extends Preference {
    /**
    - Gradient feather angle.
      */
      angle: number
    /**

    - When true, the gradient feather effect is active.
      */
      applied: boolean
    /**

    - For the fill, page-coordinate [x, y] location used as the radial-gradient center or the linear-gradient start point.
      */
      gradientStart: (number | string)[]
    /**

    - Hilite angle for the radial gradient feather.
      */
      hiliteAngle: number
    /**

    - Hilite length for the radial gradient feather.
      */
      hiliteLength: number | string
    /**

    - Axial gradient length, or radial gradient radius.
      */
      length: number | string
    /**

    - Collection containing opacity gradient stops.
      */
      readonly opacityGradientStops: OpacityGradientStops
    /**

    - Gradient type.
      */
      type: GradientType
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
