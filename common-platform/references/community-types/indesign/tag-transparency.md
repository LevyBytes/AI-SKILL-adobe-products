# TagTransparency

Community declaration reference: InDesign/2023.

Choices for controlling how tranparencies appear.

```typescript
declare enum TagTransparency {
    /**
    - Selects the default setting. For details, refer to display performance preferences.
      */
      DEFAULT_VALUE = 1147563124,
    /**

    - Uses 144 dpi rendering for drop shadows and feathers, plus CMYK mattes and spread isolation.
      */
      HIGH_QUALITY = 1346922866,
    /**

    - Shows basic transparency (opacity and blend modes) and approximates transparency effects such as drop shadow and feathering at low resolution. Note: Page content is not isolated from the background. Objects using blend modes other than Normal may look different in other applications and output.
      */
      LOW_QUALITY = 1481666146,
    /**

    - Shows drop shadows and feathering at low resolution.
      */
      MEDIUM_QUALITY = 1481663597,
    /**

    - Disables on-screen transparency display. Note: Transparency remains active when printing or exporting the file.
      */
      OFF = 1330005536,
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
