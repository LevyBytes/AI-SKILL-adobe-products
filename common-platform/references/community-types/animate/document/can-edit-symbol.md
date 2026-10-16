# Document.canEditSymbol

Community declaration reference: Animate/22.0.

Reports whether the Edit Symbols menu and feature are enabled. This is separate from whether the current selection is editable. Do not use it to test whether fl.getDocumentDOM().enterEditMode() is allowed.
@returns true when the Edit Symbols menu and feature are available; otherwise false.

```typescript
declare class Document {
    canEditSymbol(): boolean
}
```

Source: [Animate/22.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Animate/22.0/index.d.ts).
