# BuildingBlocks collection iteration

Community declaration reference: InDesign/2023.

```typescript
declare class BuildingBlocks {
    /**
    - Gets any BuildingBlock from the collection.
      */
      anyItem(): BuildingBlock
    /**
    - Gets all BuildingBlock entries in the collection.
      */
      everyItem(): BuildingBlock[]
    /**
    - Gets the collection's first BuildingBlock.
      */
      firstItem(): BuildingBlock
    /**
    - Gets the collection's final BuildingBlock.
      */
      lastItem(): BuildingBlock
    /**
    - Gets the collection's midpoint BuildingBlock.
      */
      middleItem(): BuildingBlock
    /**
    - Retrieves the BuildingBlock immediately after the supplied BuildingBlock in this collection.
    - @param obj BuildingBlock positioned immediately before the target BuildingBlock.
      */
      nextItem(obj: BuildingBlock): BuildingBlock
    /**
    - Retrieves the BuildingBlock immediately before the supplied index.
    - @param obj Index belonging to the BuildingBlock immediately after the target BuildingBlock.
      */
      previousItem(obj: BuildingBlock): BuildingBlock
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
