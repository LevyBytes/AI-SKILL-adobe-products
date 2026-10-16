# Document.getTextString

Community declaration reference: Animate/22.0.

Gets the selected text. Without optional parameters, the current text selection is used. If text is not open for editing, the entire text string is returned. With only startIndex, the returned string begins there and runs to the field end. With startIndex and endIndex, the string starts at startIndex and stops before endIndex.
If several text fields are selected, their strings are concatenated.
@returns String containing the selected text.
@param startIndex Integer index of the first character to get. Optional.
@param endIndex Integer index of the character after the last character to get. That index is excluded from the returned string. Optional.

```typescript
declare class Document {
    getTextString(startIndex?: number, endIndex?: number): string
}
```

Source: [Animate/22.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Animate/22.0/index.d.ts).
