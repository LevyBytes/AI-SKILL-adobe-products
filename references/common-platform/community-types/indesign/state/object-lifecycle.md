# State object lifecycle

Community declaration reference: InDesign/2023.

```typescript
declare class State {
    /**
    - Repositions the state within its parent collection.
    - @param newPosition target index inside the parent collection for the state
      */
      move(newPosition: number): void
    /**
    - Removes the State.
      */
      remove(): void
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
