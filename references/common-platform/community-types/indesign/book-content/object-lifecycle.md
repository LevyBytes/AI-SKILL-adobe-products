# BookContent object lifecycle

Community declaration reference: InDesign/2023.

```typescript
declare class BookContent {
    /**
    - Relocates this book content object.
    - @param to Location relative to the reference object or inside the book.
    - @param reference Reference object; required when to indicates before or after.
      */
      move(to?: LocationOptions, reference?: BookContent): BookContent
    /**
    - Deletes this BookContent.
      */
      remove(): void
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
