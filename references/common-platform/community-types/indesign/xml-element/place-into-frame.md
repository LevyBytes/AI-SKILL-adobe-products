# XMLElement.placeIntoFrame

Community declaration reference: InDesign/2023.

Puts the XML element into a new rectangular page item. An already-associated page item is deleted.
@param on Page or spread where the new page item is created.
@param geometricBounds Bounds array [y1, x1, y2, x2] for the page item, not including stroke width.

```typescript
declare class XMLElement extends XMLItem {
    placeIntoFrame(on: Spread | Page | MasterSpread, geometricBounds: (number | string)[]): PageItem
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
