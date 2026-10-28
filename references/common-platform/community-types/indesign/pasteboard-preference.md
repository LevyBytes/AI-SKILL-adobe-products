# PasteboardPreference

Community declaration reference: InDesign/2023.

Preferences for the pasteboard.

```typescript
declare class PasteboardPreference extends Preference {
    /**
    - Color for bleed guides; supply a UI color or an R, G, and B array of three doubles, each in the range 0 to 255.
      */
      bleedGuideColor: [number, number, number] | UIColors
    /**

    - When true, Preview Background uses Theme Color; otherwise it uses the value selected in the Preview Background color drop down.
      */
      matchPreviewBackgroundToThemeColor: boolean
    /**

    - Pasteboard margin minimums for horizontal and vertical sides. A horizontal margin of -1 represents one document page width.
      */
      pasteboardMargins: (number | string)[]
    /**

    - Color for the preview background; supply a UI color or an R, G, and B array of three doubles, each in the range 0 to 255.
      */
      previewBackgroundColor: [number, number, number] | UIColors
    /**

    - Color for slug guides; supply a UI color or an R, G, and B array of three doubles, each in the range 0 to 255.
      */
      slugGuideColor: [number, number, number] | UIColors
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
