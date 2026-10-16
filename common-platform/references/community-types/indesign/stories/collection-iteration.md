# Stories collection iteration

Community declaration reference: InDesign/2023.

```typescript
declare class Stories {
    /**
    - Gets an arbitrary Story from the collection.
      */
      anyItem(): Story
    /**
    - Gets every Story in this collection.
      */
      everyItem(): Story[]
    /**
    - Gets the collection's first Story.
      */
      firstItem(): Story
    /**
    - Gets the collection's final Story.
      */
      lastItem(): Story
    /**
    - Gets the collection's middle Story.
      */
      middleItem(): Story
    /**
    - Gets the Story after the supplied Story.
    - @param obj Story immediately before the desired Story.
      */
      nextItem(obj: Story): Story
    /**
    - Gets the Story before the supplied index.
    - @param obj Index immediately after the desired Story.
      */
      previousItem(obj: Story): Story
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
