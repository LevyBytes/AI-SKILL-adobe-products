# Document.transformSelection

Community declaration reference: Animate/22.0.

Applies a general transformation to the current selection using the matrix values passed as arguments. For more information, see the element.matrix property.
@param a Floating-point number for the (0,0) transformation matrix element.
@param b Floating-point number for the (0,1) transformation matrix element.
@param c Floating-point number for the (1,0) transformation matrix element.
@param d Floating-point number for the (1,1) transformation matrix element.

```typescript
declare class Document {
    transformSelection(a: number, b: number, c: number, d: number): void
}
```

Source: [Animate/22.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Animate/22.0/index.d.ts).
