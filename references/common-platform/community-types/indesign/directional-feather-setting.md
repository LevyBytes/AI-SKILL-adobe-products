# DirectionalFeatherSetting

Community declaration reference: InDesign/2023.

Settings for directional feather effects.

```typescript
declare class DirectionalFeatherSetting extends Preference {
    /**
    - Feather angle. (Range: 180 to -180)
      */
      angle: number
    /**

    - When true, the directional feather effect is active.
      */
      applied: boolean
    /**

    - Bottom-side feather width for the object DirectionalFeatherSetting, in pixels. (Range: .2 to 250)
      */
      bottomWidth: number | string
    /**

    - Amount used to choke the directional feather, as a percentage of feather width. (Range: 0 to 100)
      */
      chokeAmount: number
    /**

    - Shape-following algorithm used by the feather.
      */
      followShapeMode: FollowShapeModeOptions
    /**

    - Left-side feather width for the DirectionalFeatherSetting, in pixels.
      */
      leftWidth: number | string
    /**

    - Noise applied to the feather region, as a percentage. (Range: 0 to 100)
      */
      noise: number
    /**

    - Right-side feather width for the DirectionalFeatherSetting, in pixels. (Range: .2 to 250)
      */
      rightWidth: number | string
    /**

    - Top-side feather width for the object DirectionalFeatherSetting, in pixels. (Range: .2 to 250)
      */
      topWidth: number | string
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
