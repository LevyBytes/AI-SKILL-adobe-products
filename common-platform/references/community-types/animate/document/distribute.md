# Document.distribute

Community declaration reference: Animate/22.0.

Distributes the selection.
@param distributemode String indicating the distribution target for selected objects. Allowed values: "left edge", "horizontal center", "right edge", "top edge", "vertical center", and "bottom edge".
@param bUseDocumentBounds Boolean that distributes selected objects against document bounds when true. Otherwise, selected-object bounds are used. Defaults to false.

```typescript
declare class Document {
    distribute(distributemode: string, bUseDocumentBounds?: boolean): void
}
```

Source: [Animate/22.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Animate/22.0/index.d.ts).
