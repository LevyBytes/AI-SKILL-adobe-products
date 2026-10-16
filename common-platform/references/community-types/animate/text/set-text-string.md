# Text.setTextString

Community declaration reference: Animate/22.0.

Replaces or inserts text within this Text object. If both optional parameters are omitted, the whole Text object is replaced. If only startIndex is supplied, the specified string is inserted at startIndex. If both startIndex and endIndex are supplied, the specified string replaces text from startIndex up to, but not including, endIndex.
@param text Characters to insert into this Text object.
@param startIndex Zero-based index in the string where insertion occurs. This parameter is optional.
@param endIndex Optional end-point index in the selected text string. The new text overwrites content from startIndex through the character before endIndex.

```typescript
declare class Text extends Element {
    setTextString(text: string, startIndex?: number, endIndex?: number): void
}
```

Source: [Animate/22.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Animate/22.0/index.d.ts).
