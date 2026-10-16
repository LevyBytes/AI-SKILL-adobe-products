# Page.placeXML

Community declaration reference: InDesign/2023.

Places an XML element on a page; if the point sits over an existing page item, the XML element goes into that item.
@param using XML element to place.
@param placePoint Placement point for the object, written as [x, y].
@param autoflowing When true, placed text autoflows.

```typescript
declare class Page {
    placeXML(using: XMLElement, placePoint: (number | string)[], autoflowing?: boolean): PageItem
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
