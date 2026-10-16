# PDFExportPreference.subsetFontsBelow

Community declaration reference: InDesign/2023.

Threshold for fully embedding fonts, based on how many characters from each font are used in the document. If a font's used-character percentage is above the specified value, the full font is embedded; otherwise, a subset is embedded. (Range: 0 to 100) Notes: Full font embedding increases file size. Use 0 (zero) to embed every font completely.

```typescript
declare class PDFExportPreference extends Preference {
    subsetFontsBelow: number
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
