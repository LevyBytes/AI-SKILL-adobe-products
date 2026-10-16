# SplineItem.intersectPath

Community declaration reference: InDesign/2023.

Creates a page item from the intersection of the SplineItem and other objects. An error is returned if the objects do not intersect.
@param with_ Object or objects to intersect with.

```typescript
declare class SplineItem extends PageItem {
    intersectPath(with_: PageItem[]): PageItem
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
