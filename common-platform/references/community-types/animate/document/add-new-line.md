# Document.addNewLine

Community declaration reference: Animate/22.0.

Creates a path between two points. The document's current stroke attributes are used, and the path is added on the current frame and current layer. This corresponds to drawing a line with the line tool.
@param startPoint Pair of floating-point numbers giving the line's starting x and y coordinates.
@param endpoint Pair of floating-point numbers giving the line's ending x and y coordinates.

```typescript
declare class Document {
    addNewLine(startPoint: Point, endpoint: Point): void
}
```

Source: [Animate/22.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Animate/22.0/index.d.ts).
