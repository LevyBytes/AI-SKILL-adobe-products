# XMLElement.applyParagraphStyle

Community declaration reference: InDesign/2023.

Assigns the chosen paragraph style to the XMLElement text content.
@param using Paragraph style that should be assigned.
@param clearingOverrides When true, attributes are cleared before the style is assigned.

```typescript
declare class XMLElement extends XMLItem {
    applyParagraphStyle(using: string | ParagraphStyle, clearingOverrides?: boolean): void
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
