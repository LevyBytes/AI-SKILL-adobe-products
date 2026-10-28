# XMLElement.applyCellStyle

Community declaration reference: InDesign/2023.

Assigns a cell style to table cells linked with the XMLElement.
@param using Cell style that should be assigned.
@param clearingOverrides When true, local formatting is removed before the cell style is assigned.

```typescript
declare class XMLElement extends XMLItem {
    applyCellStyle(using: string | CellStyle, clearingOverrides?: boolean): void
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
