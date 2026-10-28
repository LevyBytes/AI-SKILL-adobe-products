# MasterSpread.contentPlace

Community declaration reference: InDesign/2023.

Copies an object into the destination and places it there.
@param pageItems Page items that should be placed or loaded.
@param linkPageItems Link pageItems in the content placer; true takes precedence over the story-link setting.
@param linkStories Link stories in the content placer; applies to one story, while multiple items also create pageItem links.
@param mapStyles Apply style mapping while content is placed.
@param placePoint Placement point to use.
@param destinationLayer Layer receiving the placed content.
@param showingOptions Open link-options controls during placement.

```typescript
declare class MasterSpread {
    contentPlace(pageItems: PageItem[], linkPageItems?: boolean, linkStories?: boolean, mapStyles?: boolean, placePoint?: (number | string)[], destinationLayer?: Layer, showingOptions?: boolean): any[]
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
