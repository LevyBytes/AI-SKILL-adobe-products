# WhiteBalanceType

Community declaration reference: Photoshop/2015.5.

Sets lighting conditions that affect color balance.

```typescript
declare enum WhiteBalanceType {
    /**
    - Uses the camera-as-shot settings.
      */
      ASSHOT = 0,
    /**

    - Applies automatic white balance settings.
      */
      AUTO = 1,
    /**

    - Uses settings for a cloudy-day shot.
      */
      CLOUDY = 3,
    /**

    - Select custom values for the shot parameters.
      */
      CUSTOM = 8,
    /**

    - Apply the daylight capture preset.
      */
      DAYLIGHT = 2,
    /**

    - Apply settings for flash capture.
      */
      FLASH = 7,
    /**

    - Apply the fluorescent-light capture preset.
      */
      FLUORESCENT = 6,
    /**

    - Apply settings for shaded capture.
      */
      SHADE = 4,
    /**

    - Apply the tungsten-light capture preset.
      */
      TUNGSTEN = 5,
}
```

Source: [Photoshop/2015.5/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Photoshop/2015.5/index.d.ts).
