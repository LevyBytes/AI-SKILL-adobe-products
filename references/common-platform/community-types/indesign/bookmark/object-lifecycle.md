# Bookmark object lifecycle

Community declaration reference: InDesign/2023.

```typescript
declare class Bookmark {
    /**
    - Moves the bookmark to a specified location.
    - @param to Bookmark location relative to the reference object or inside the containing object.
    - @param reference Reference object; supply it when to names before or after.
      */
      move(to?: LocationOptions, reference?: Bookmark | Document): Bookmark
    /**
    - Removes the Bookmark.
      */
      remove(): void
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
