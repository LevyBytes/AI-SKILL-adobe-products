# Document.setTextRectangle

Community declaration reference: Animate/22.0.

Changes the selected text item's bounding rectangle to the specified size. Text reflows in the new rectangle; the text item is not scaled or transformed. Values from boundingRectangle are interpreted this way:
- Horizontal static text uses only the width from boundingRectangle; the height is computed automatically to contain all text.
- Vertical static text uses only the height from boundingRectangle; the width is computed automatically to contain all text.
- Dynamic or input text uses both width and height from boundingRectangle, and the result may be larger than required to fit the text. If the requested rectangle is too small for all text, only the width from boundingRectangle is used and the height is computed automatically.
@returns true when at least one text field size changes; otherwise false.
@param boundingRectangle Rectangle giving the new area in which the text item should flow. For the boundingRectangle format, see document.addNewRectangle().

```typescript
declare class Document {
    setTextRectangle(boundingRectangle: SimpleShape): boolean
}
```

Source: [Animate/22.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Animate/22.0/index.d.ts).
