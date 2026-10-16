# AssignedStories collection iteration

Community declaration reference: InDesign/2023.

```typescript
declare class AssignedStories {
    /**
    - Returns any AssignedStory from the collection.
      */
      anyItem(): AssignedStory
    /**
    - Gets every AssignedStory object.
      */
      everyItem(): AssignedStory[]
    /**
    - Gets the collection's first AssignedStory.
      */
      firstItem(): AssignedStory
    /**
    - Gets the collection's final AssignedStory.
      */
      lastItem(): AssignedStory
    /**
    - Gets the collection's middle AssignedStory.
      */
      middleItem(): AssignedStory
    /**
    - Returns the AssignedStory whose index is after the specified AssignedStory in the collection.
    - @param obj AssignedStory that immediately precedes the requested one.
      */
      nextItem(obj: AssignedStory): AssignedStory
    /**
    - Returns the AssignedStory with the index before the specified index.
    - @param obj AssignedStory index immediately after the requested one.
      */
      previousItem(obj: AssignedStory): AssignedStory
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
