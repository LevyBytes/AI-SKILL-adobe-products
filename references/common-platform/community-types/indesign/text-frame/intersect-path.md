# TextFrame.intersectPath

Community declaration reference: InDesign/2023.

Intersects the TextFrame with other objects to create a page item. An error is returned when the objects do not intersect.
@param with_ Object(s) used for the intersection.

```typescript
declare class TextFrame extends PageItem {
    intersectPath(with_: PageItem[]): PageItem
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
