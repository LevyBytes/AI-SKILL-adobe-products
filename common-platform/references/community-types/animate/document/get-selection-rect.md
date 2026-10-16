# Document.getSelectionRect

Community declaration reference: Animate/22.0.

Returns the bounding rectangle for the current selection. For non-rectangular selections, the result is the smallest rectangle enclosing the whole selection. Coordinates use document space; in edit mode they use the symbol-being-edited registration point, also called the origin point or zero point.
@returns Current selection bounding rectangle, or 0 when nothing is selected. For the return-value format, see document.addNewRectangle().

```typescript
declare class Document {
    getSelectionRect(): SimpleShape
}
```

Source: [Animate/22.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Animate/22.0/index.d.ts).
