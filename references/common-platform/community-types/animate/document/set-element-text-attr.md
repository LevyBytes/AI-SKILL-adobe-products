# Document.setElementTextAttr

Community declaration reference: Animate/22.0.

Sets the named textAttrs property on selected text items to the given value. For property names and allowed values, see the Property summary table for the TextAttrs object. Without optional parameters, the method applies to the selected text range, or to the whole text field when no text is selected. With only startIndex, it sets that character's attributes. With startIndex and endIndex, it sets attributes on characters from startIndex through, but not including, endIndex. When paragraph styles are specified, every paragraph in the range is affected.
@returns true when at least one text attribute property changes; otherwise false.
@param attrName String naming the TextAttrs property to change.
@param attrValue Value assigned to the TextAttrs property. The Property summary table for the TextAttrs object lists property names and expected values.
@param startIndex Integer index for the first affected character. Optional.
@param endIndex Integer index for the last affected character. May be omitted.

```typescript
declare class Document {
    setElementTextAttr(
        attrName: string,
        attrValue: any,
        startIndex?: number,
        endIndex?: number,
        ): boolean
}
```

Source: [Animate/22.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Animate/22.0/index.d.ts).
