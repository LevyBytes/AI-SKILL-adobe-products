# Document.viewMatrix

Community declaration reference: Animate/22.0.

Matrix object used by viewMatrix to convert object space into document space while the document is in edit mode. Tool mouse locations are relative to the object currently being edited. See Matrix object.
For example, after creating a symbol, double-clicking to edit it, and drawing with the PolyStar tool, point (0,0) is the symbol registration point. The drawingLayer object expects document-space values, so a drawingLayer line from (0,0) begins at the Stage's upper-left corner. viewMatrix supplies the conversion from the edited object's space into document space.

```typescript
declare class Document {
    readonly viewMatrix: Matrix
}
```

Source: [Animate/22.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Animate/22.0/index.d.ts).
