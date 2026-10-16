# Document.setStrokeColor

Community declaration reference: Animate/22.0.

Changes the selected stroke to the specified color. For Tools panel and Property inspector stroke changes, see document.setCustomStroke().
@param color Stroke color in one of these forms:
- A "#RRGGBB" or "#RRGGBBAA" string
- A hexadecimal 0xRRGGBB number
- An integer matching the decimal value of a hexadecimal number

```typescript
declare class Document {
    setStrokeColor(color: string | number): void
}
```

Source: [Animate/22.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Animate/22.0/index.d.ts).
