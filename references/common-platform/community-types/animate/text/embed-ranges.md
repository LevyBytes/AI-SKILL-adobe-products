# Text.embedRanges

Community declaration reference: Animate/22.0.

Contains delimited integers matching selectable items in the Character Embedding dialog box. It works only with dynamic or input text and is ignored for static text.
The values correspond to the XML file in the Configuration/Font Embedding folder.
Note: Starting with Flash Professional CS5, font embedding moved to document-level font items instead of text objects. Use fontItem.embedRanges on page 311 instead of text.embedRanges.

```typescript
declare class Text extends Element {
    embedRanges: string
}
```

Source: [Animate/22.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Animate/22.0/index.d.ts).
