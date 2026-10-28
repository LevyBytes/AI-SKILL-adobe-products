# FlattenerPreset.convertAllTextToOutlines

Community declaration reference: InDesign/2023.

When true, text on spreads with transparency becomes outlines and type glyph data is discarded, preserving text stroke width during flattening. Note: small fonts can appear slightly heavier in Acrobat or on low-quality desktop printers, while high-resolution printers or imagesetters keep type quality unaffected.

```typescript
declare class FlattenerPreset {
    convertAllTextToOutlines: boolean
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
