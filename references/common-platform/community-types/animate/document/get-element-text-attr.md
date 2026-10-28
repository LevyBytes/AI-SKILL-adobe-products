# Document.getElementTextAttr

Community declaration reference: Animate/22.0.

Reads a TextAttrs property from selected Text objects. Selected non-text fields are ignored. The Property summary table for the TextAttrs object lists property names and expected values. See also document.setElementTextAttr().
@returns For one selected text field, returns the property when the text uses a single value, and undefined when several values occur inside that field. For several selected text fields, returns the value when all text alignment values match, or undefined when they differ. Without optional arguments, these rules apply to the selected text range or the whole text field when text is not being edited. With only startIndex, the property of the character to the right of that index is returned if all selected Text objects match. With startIndex and endIndex, the return value reflects characters from startIndex through, but not including, endIndex.
@param attrName String naming the TextAttrs property to return. The Property summary table for the TextAttrs object lists property names and expected values.
@param startIndex Integer index of first character, with 0 (zero) as the first position. Optional.
@param endIndex Integer index of last character. Optional.

```typescript
declare class Document {
    getElementTextAttr(attrName: string, startIndex?: number, endIndex?: number): any | undefined
}
```

Source: [Animate/22.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Animate/22.0/index.d.ts).
