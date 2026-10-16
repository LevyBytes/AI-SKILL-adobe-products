# States collection iteration

Community declaration reference: InDesign/2023.

```typescript
declare class States {
    /**
    - Gets an arbitrary State from the collection.
      */
      anyItem(): State
    /**
    - Gets all State entries from the collection.
      */
      everyItem(): State[]
    /**
    - Gets the first State in the collection.
      */
      firstItem(): State
    /**
    - Gets the final State in the collection.
      */
      lastItem(): State
    /**
    - Gets the central State from the collection.
      */
      middleItem(): State
    /**
    - Gets the State positioned immediately after the specified State.
    - @param obj State that precedes the requested State.
      */
      nextItem(obj: State): State
    /**
    - Gets the State positioned immediately before the specified index.
    - @param obj Index of the State that comes after the requested State.
      */
      previousItem(obj: State): State
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
