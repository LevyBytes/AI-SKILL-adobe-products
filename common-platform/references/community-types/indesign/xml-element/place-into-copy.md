# XMLElement.placeIntoCopy

Community declaration reference: InDesign/2023.

Links the XML element to a copied page item.
@param on Page or spread where the new page item is created.
@param placePoint Page coordinates for the page item's top left corner, in the format [y1, x1]
@param copyItem Page item to copy.
@param retainExistingFrame When true, the existing page item is moved into association with the XML element instead of creating a copy.

```typescript
declare class XMLElement extends XMLItem {
    placeIntoCopy(on: Spread | Page | MasterSpread, placePoint: (number | string)[], copyItem: PageItem, retainExistingFrame?: boolean): PageItem
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
