# Text.setTextAttr

Community declaration reference: Animate/22.0.

Sets the attrName attribute for text selected by startIndex and endIndex to attrValue. This can update attributes across TextRun elements (see TextRun object) or within parts of existing TextRun elements. It may change both positions and the count of TextRun elements in this object's text.textRuns array (see text.textRuns).
If the optional parameters are omitted, the method uses the full character range of the Text object. Supplying only startIndex targets the single character at that position. Supplying both startIndex and endIndex targets the range from startIndex up to, but not including, the character at endIndex.
@param attrName Names the TextAttrs object property to change.
@param attrValue Provides the new value for the TextAttrs object property.
For possible attrName and attrValue values, see the Property summary for the TextAttrs object.
@param startIndex Optional zero-based index of the first character in the array.
@param endIndex Optional end-point index in the selected text string, beginning at startIndex and stopping before endIndex.

```typescript
declare class Text extends Element {
    setTextAttr(attrName: string, attrValue: any, startIndex?: number, endIndex?: number): void
}
```

Source: [Animate/22.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Animate/22.0/index.d.ts).
