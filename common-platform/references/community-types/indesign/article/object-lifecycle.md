# Article object lifecycle

Community declaration reference: InDesign/2023.

```typescript
declare class Article {
    /**
    - Relocates the Article to the requested location.
    - @param to Location relative to a reference object or inside the containing object.
    - @param reference Reference object; required when to is before or after.
      */
      move(to: LocationOptions, reference: Article): Article
    /**
    - Removes the Article.
      */
      remove(): void
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
