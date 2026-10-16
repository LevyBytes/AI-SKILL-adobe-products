# SplineItem.makeCompoundPath

Community declaration reference: InDesign/2023.

Builds a compound path by combining the SplineItem path or paths with paths from other objects.
@param with_ Other objects whose paths should be included in the compound path.

```typescript
declare class SplineItem extends PageItem {
    makeCompoundPath(with_: PageItem[]): PageItem
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
