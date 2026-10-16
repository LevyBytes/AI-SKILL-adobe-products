# BackgroundTasks collection iteration

Community declaration reference: InDesign/2023.

```typescript
declare class BackgroundTasks {
    /**
    - Retrieves any BackgroundTask from the collection.
      */
      anyItem(): BackgroundTask
    /**
    - Retrieves all BackgroundTask objects in the collection.
      */
      everyItem(): BackgroundTask[]
    /**
    - Retrieves the first BackgroundTask in the collection.
      */
      firstItem(): BackgroundTask
    /**
    - Retrieves the last BackgroundTask in the collection.
      */
      lastItem(): BackgroundTask
    /**
    - Retrieves the middle BackgroundTask in the collection.
      */
      middleItem(): BackgroundTask
    /**
    - Retrieves the BackgroundTask whose index comes after the specified BackgroundTask.
    - @param obj BackgroundTask before the desired BackgroundTask.
      */
      nextItem(obj: BackgroundTask): BackgroundTask
    /**
    - Retrieves the BackgroundTask whose index comes before the specified index.
    - @param obj Index of the BackgroundTask after the desired BackgroundTask.
      */
      previousItem(obj: BackgroundTask): BackgroundTask
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
