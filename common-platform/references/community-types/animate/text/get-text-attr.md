# Text.getTextAttr

Community declaration reference: Animate/22.0.

Gets the attrName attribute for text selected by the optional startIndex and endIndex parameters. When the attribute differs within the requested range, Flash returns undefined. Omitting startIndex and endIndex uses the complete text range. Supplying only startIndex uses the single character at that position. Supplying both startIndex and endIndex uses the range from startIndex up to, but not including, endIndex.
@returns The value associated with attrName.
@param attrName Names the TextAttrs object property to retrieve. For possible attrName values, see the Property summary for the TextAttrs object.
@param startIndex Zero-based index of the first character. This parameter is optional.
@param endIndex Optional end position for the text range that begins at startIndex and stops before endIndex.

```typescript
declare class Text extends Element {
    getTextAttr(attrName: string, startIndex?: number, endIndex?: number): any | undefined
}
```

Source: [Animate/22.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Animate/22.0/index.d.ts).
