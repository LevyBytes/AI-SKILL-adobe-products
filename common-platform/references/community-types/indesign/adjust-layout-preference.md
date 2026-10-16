# AdjustLayoutPreference

Community declaration reference: InDesign/2023.

Adjust layout configuration.

```typescript
declare class AdjustLayoutPreference extends Preference {
    /**
    - When true, font sizes and leading may adjust.
      */
      allowFontSizeAndLeadingAdjustment: boolean
    /**

    - When true, locked objects or items on locked layers may be adjusted.
      */
      allowLockedObjectsToAdjust: boolean
    /**

    - When true, adjust layout is turned on.
      */
      enableAdjustLayout: boolean
    /**

    - When true, margins adjust automatically after page size changes.
      */
      enableAutoAdjustMargins: boolean
    /**

    - When true, the font size restriction is imposed during adjustment.
      */
      imposeFontSizeRestriction: boolean
    /**

    - Maximum font size, in points, after adjustment.
      */
      maximumFontSize: number
    /**

    - Minimum font size, in points, after adjustment.
      */
      minimumFontSize: number
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
