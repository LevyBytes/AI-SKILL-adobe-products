# XMLElement.placeIntoInlineCopy

Community declaration reference: InDesign/2023.

Links an existing page item to the XML element and inserts it as an inline frame.
@param copyItem Page item to copy.
@param retainExistingFrame When true, the existing page item is moved. When false, a copy of the page item is moved.

```typescript
declare class XMLElement extends XMLItem {
    placeIntoInlineCopy(copyItem: PageItem, retainExistingFrame?: boolean): PageItem
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
