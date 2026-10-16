# IdleTasks collection iteration

Community declaration reference: InDesign/2023.

```typescript
declare class IdleTasks {
    /**
    - Retrieves an arbitrary IdleTask from this collection.
      */
      anyItem(): IdleTask
    /**
    - Retrieves all IdleTask entries from this collection.
      */
      everyItem(): IdleTask[]
    /**
    - Retrieves the first IdleTask from this collection.
      */
      firstItem(): IdleTask
    /**
    - Retrieves the last IdleTask from this collection.
      */
      lastItem(): IdleTask
    /**
    - Retrieves the middle IdleTask from this collection.
      */
      middleItem(): IdleTask
    /**
    - Retrieves the IdleTask indexed immediately after the supplied IdleTask in this collection.
    - @param obj IdleTask positioned immediately before the desired IdleTask.
      */
      nextItem(obj: IdleTask): IdleTask
    /**
    - Retrieves the IdleTask indexed immediately before the supplied index.
    - @param obj Index for the IdleTask immediately after the desired IdleTask.
      */
      previousItem(obj: IdleTask): IdleTask
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
