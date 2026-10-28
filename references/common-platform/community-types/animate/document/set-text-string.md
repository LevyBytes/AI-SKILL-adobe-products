# Document.setTextString

Community declaration reference: Animate/22.0.

Inserts text. Without optional parameters, the existing text selection is replaced; if the Text object is not currently being edited, the entire text string is replaced. With only startIndex, the supplied string is inserted at that position. With startIndex and endIndex, the supplied string replaces text from startIndex through, but not including, endIndex.
@returns true when at least one text string is set; otherwise false.
@param text String of characters to insert in the text field.
@param startIndex Integer identifying the first character to replace. Character positions start at 0 (zero). Optional.
@param endIndex Integer identifying the last character to replace. Optional.

```typescript
declare class Document {
    setTextString(text: string, startIndex?: number, endIndex?: number): boolean
}
```

Source: [Animate/22.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Animate/22.0/index.d.ts).
