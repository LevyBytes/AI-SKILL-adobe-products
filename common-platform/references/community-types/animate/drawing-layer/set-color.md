# DrawingLayer.setColor

Community declaration reference: Animate/22.0.

Sets the color used by subsequently drawn data. This affects persistent data only. To use it, pass true to drawingLayer.beginDraw(). Extensible tools are the usual callers for this method. See drawingLayer.beginDraw().
@param color Color for subsequently drawn data. Accepted encodings:
- String: "#RRGGBB" or "#RRGGBBAA"
- Hexadecimal number: 0xRRGGBB
- Integer equal to the decimal value of a hexadecimal number

```typescript
declare class DrawingLayer {
    setColor(color: string | number): void
}
```

Source: [Animate/22.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Animate/22.0/index.d.ts).
