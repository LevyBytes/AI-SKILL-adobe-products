# Story object lifecycle

Community declaration reference: InDesign/2023.

```typescript
declare class Story {
    /**
    - Duplicates the text at the specified location.
    - @param to Location relative to the reference object or inside the containing object.
    - @param reference Reference object. Note: Needed for relative placement values `before` and `after`; this supplies the anchor object.
      */
      duplicate(to: LocationOptions, reference: Text | Story | Cell | Row | Column | Table | PageItem): Text
    /**
    - Moves this text to the requested location.
    - @param to Location relative to reference, or within the containing object.
    - @param reference Reference object; needed for before or after placement values.
      */
      move(to: LocationOptions, reference: Text | Story | Cell | Row | Column | Table | PageItem): Text
    /**
    - Deletes this Story.
      */
      remove(): void
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
