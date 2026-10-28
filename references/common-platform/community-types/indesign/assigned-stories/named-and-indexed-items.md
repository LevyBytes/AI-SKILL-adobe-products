# AssignedStories named and indexed items

Community declaration reference: InDesign/2023.

```typescript
declare class AssignedStories {
    /**
    - Returns an AssignedStory by index or name.
    - @param index Index or name value.
      */
      item(index: number | string): AssignedStory
    /**
    - Returns the AssignedStory matching the specified ID.
    - @param id ID value.
      */
      itemByID(id: number): AssignedStory
    /**
    - Returns the AssignedStory matching the specified name.
    - @param name Name value.
      */
      itemByName(name: string): AssignedStory
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
