# PageReferences.add

Community declaration reference: InDesign/2023.

Creates a PageReference object.
@param source Text or insertion point targeted by the page reference.
@param pageReferenceType Page number for an index page reference, or final page for an index page reference range.
@param pageReferenceLimit Paragraph style or paragraph/page count that sets the final page in a range. Valid only when page reference type requests the next use of a paragraph style or a paragraph/page count. .
@param pageNumberStyleOverride Style override applied to the page number.
@param withProperties Initial property values for the new PageReference.

```typescript
declare class PageReferences {
    add(source: Text, pageReferenceType?: PageReferenceType, pageReferenceLimit?: ParagraphStyle | number, pageNumberStyleOverride?: CharacterStyle, withProperties?: object): PageReference
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
