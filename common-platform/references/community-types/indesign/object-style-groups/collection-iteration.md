# ObjectStyleGroups collection iteration

Community declaration reference: InDesign/2023.

```typescript
declare class ObjectStyleGroups {
    /**
    - Returns an arbitrary ObjectStyleGroup from the collection.
      */
      anyItem(): ObjectStyleGroup
    /**
    - Returns all ObjectStyleGroup entries from the collection.
      */
      everyItem(): ObjectStyleGroup[]
    /**
    - Gets the first ObjectStyleGroup from the collection.
      */
      firstItem(): ObjectStyleGroup
    /**
    - Gets the last ObjectStyleGroup from the collection.
      */
      lastItem(): ObjectStyleGroup
    /**
    - Gets the middle ObjectStyleGroup from the collection.
      */
      middleItem(): ObjectStyleGroup
    /**
    - Returns the ObjectStyleGroup immediately after the supplied ObjectStyleGroup in the collection.
    - @param obj ObjectStyleGroup whose index precedes the desired ObjectStyleGroup.
      */
      nextItem(obj: ObjectStyleGroup): ObjectStyleGroup
    /**
    - Returns the ObjectStyleGroup immediately before the supplied index.
    - @param obj Index for the ObjectStyleGroup immediately after the desired ObjectStyleGroup.
      */
      previousItem(obj: ObjectStyleGroup): ObjectStyleGroup
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
