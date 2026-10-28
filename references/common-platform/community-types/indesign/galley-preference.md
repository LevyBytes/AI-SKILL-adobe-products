# GalleyPreference

Community declaration reference: InDesign/2023.

Preference set for galley display.

```typescript
declare class GalleyPreference extends Preference {
    /**
    - Text anti-aliasing mode used in story and galley views.
      */
      antiAliasType: AntiAliasType
    /**

    - Background color: either an InCopy UI color or an array of three doubles for R, G, and B, each 0 to 255. .
      */
      backgroundColor: [number, number, number] | InCopyUIColors
    /**

    - When true, the cursor uses blinking.
      */
      blinkCursor: boolean
    /**

    - Cursor style used by galley and story views.
      */
      cursorType: CursorTypes
    /**

    - Font family name used when displaying text.
      */
      displayFont: string
    /**

    - Text display size value.
      */
      displayFontSize: number | string
    /**

    - Width of the Info column.
      */
      infoColumnWidth: number | string
    /**

    - Spacing amount used between text lines.
      */
      lineSpacingValue: LineSpacingType
    /**

    - When true, the depth ruler is shown.
      */
      showDepthRuler: boolean
    /**

    - When true, the Info column is visible.
      */
      showInfoColumn: boolean
    /**

    - When true, paragraph break marks are shown.
      */
      showParagraphBreakMarks: boolean
    /**

    - When true, paragraph style names are shown.
      */
      showParagraphStyleNames: boolean
    /**

    - When true, galley text renders with anti-aliasing.
      */
      smoothText: boolean
    /**

    - Text color: either an InCopy UI color or an array of three doubles for R, G, and B, each 0 to 255.
      */
      textColor: [number, number, number] | InCopyUIColors
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
