# SplineItems named and indexed items

Community declaration reference: InDesign/2023.

```typescript
declare class SplineItems {
    /**
    - Finds a SplineItem by the supplied index or name.
    - @param index Index or name identifying the item.
      */
      item(index: number | string): SplineItem
    /**
    - Finds the SplineItem with the supplied ID.
    - @param id ID to locate.
      */
      itemByID(id: number): SplineItem
    /**
    - Finds the SplineItem identified by name.
    - @param name Name used to locate the item.
      */
      itemByName(name: string): SplineItem
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
