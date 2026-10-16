# Document.setTextSelection

Community declaration reference: Animate/22.0.

Sets the selected text range in the currently selected text field using startIndex and endIndex. Text editing is activated if needed.
@returns true when the method can set the text selection successfully; otherwise false.
@param startIndex Integer position of the first selected character. Character positions start at 0 (zero).
@param endIndex Integer end position of the selection, up to but excluding endIndex. Character positions start at 0 (zero).

```typescript
declare class Document {
    setTextSelection(startIndex: number, endIndex: number): boolean
}
```

Source: [Animate/22.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Animate/22.0/index.d.ts).
