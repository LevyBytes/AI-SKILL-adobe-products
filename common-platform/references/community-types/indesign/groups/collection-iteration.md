# Groups collection iteration

Community declaration reference: InDesign/2023.

```typescript
declare class Groups {
    /**
    - Gets any Group from the collection.
      */
      anyItem(): Group
    /**
    - Gets all Group entries in the collection.
      */
      everyItem(): Group[]
    /**
    - Gets the first Group from the collection.
      */
      firstItem(): Group
    /**
    - Gets the last Group from the collection.
      */
      lastItem(): Group
    /**
    - Gets the middle Group from the collection.
      */
      middleItem(): Group
    /**
    - Gets the Group positioned after the specified Group in the collection.
    - @param obj Group preceding the requested Group.
      */
      nextItem(obj: Group): Group
    /**
    - Gets the Group at the index before the specified index.
    - @param obj Index of the Group after the requested Group.
      */
      previousItem(obj: Group): Group
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
