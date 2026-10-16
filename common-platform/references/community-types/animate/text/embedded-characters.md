# Text.embeddedCharacters

Community declaration reference: Animate/22.0.

Lists characters to embed, matching content entered through the Character Embedding dialog box.
Only dynamic or input text supports this property; other text types generate a warning.
Note: Starting with Flash Professional CS5, font embedding moved to document-level font items instead of text objects. Use fontItem.embeddedCharacters on page 310 instead of text.embeddedCharacters.

```typescript
declare class Text extends Element {
    embeddedCharacters: string
}
```

Source: [Animate/22.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Animate/22.0/index.d.ts).
