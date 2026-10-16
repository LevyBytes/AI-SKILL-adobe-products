# Document.setFillColor

Community declaration reference: Animate/22.0.

Changes the selection and Tools panel to the specified fill color. For Tools panel and Property inspector fill-color changes, see document.setCustomFill().
@param color Fill color in one of these forms:
- A "#RRGGBB" or "#RRGGBBAA" string
- A hexadecimal 0xRRGGBB number
- An integer matching the decimal value of a hexadecimal number
If null, no fill color is set, matching the user interface Fill color swatch set to no fill.

```typescript
declare class Document {
    setFillColor(color: string | number): void
}
```

Source: [Animate/22.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Animate/22.0/index.d.ts).
