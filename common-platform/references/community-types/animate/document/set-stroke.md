# Document.setStroke

Community declaration reference: Animate/22.0.

Sets selected-stroke color, width, and style. For Tools panel and Property inspector stroke changes, see document.setCustomStroke().
@param color Stroke color in one of these forms:
- A "#RRGGBB" or "#RRGGBBAA" string
- A hexadecimal 0xRRGGBB number
- An integer matching the decimal value of a hexadecimal number
@param size Floating-point value giving the new stroke size for the selection.
@param strokeType String giving the selection's new stroke type. Allowed values: "hairline", "solid", "dashed", "dotted", "ragged", "stipple", and "hatched".

```typescript
declare class Document {
    setStroke(color: string | number, size: number, strokeType: string): void
}
```

Source: [Animate/22.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Animate/22.0/index.d.ts).
