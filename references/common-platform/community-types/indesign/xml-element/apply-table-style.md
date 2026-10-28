# XMLElement.applyTableStyle

Community declaration reference: InDesign/2023.

Assigns a table style to the table linked with the XMLElement.
@param using Table style that should be assigned.
@param clearingOverrides When true, local formatting is removed before the table style is assigned.

```typescript
declare class XMLElement extends XMLItem {
    applyTableStyle(using: string | TableStyle, clearingOverrides?: boolean): void
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
