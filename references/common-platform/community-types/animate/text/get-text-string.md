# Text.getTextString

Community declaration reference: Animate/22.0.

Returns text from the requested range. Without startIndex and endIndex, it returns the entire text string. With only startIndex, it returns text from that index through the end of the field. With both startIndex and endIndex, it returns text from startIndex up to, but not including, endIndex.
@returns A string containing text from the requested range.
@param startIndex Zero-based index of the first character. This parameter is optional.
@param endIndex Optional end position for the text range that begins at startIndex and stops before endIndex.

```typescript
declare class Text extends Element {
    getTextString(startIndex?: number, endIndex?: number): string
}
```

Source: [Animate/22.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Animate/22.0/index.d.ts).
