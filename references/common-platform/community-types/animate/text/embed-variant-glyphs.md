# Text.embedVariantGlyphs

Community declaration reference: Animate/22.0.

Enables embedding of variant glyphs when true and disables it when false. It works only with dynamic or input text, is ignored for static text, and defaults to false.
Note: Starting with Flash Professional CS5, font embedding moved to document-level font items instead of text objects. Use fontItem.embedVariantGlyphs on page 311 instead of text.embedVariantGlyphs. In Flash Professional CS5, text.embedVariantGlyphs has no effect: Flash embeds variant glyphs for TLF text unconditionally and does not embed them for Classic text.

```typescript
declare class Text extends Element {
    embedVariantGlyphs: boolean
}
```

Source: [Animate/22.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Animate/22.0/index.d.ts).
