# MasterSpread object lifecycle

Community declaration reference: InDesign/2023.

```typescript
declare class MasterSpread {
    /**
    - Creates a duplicate of the spread.
    - @param to Position for the spread, either against a reference object or inside the document.
    - @param reference Reference object; needed only when to requests before or after placement.
      */
      duplicate(to?: LocationOptions, reference?: MasterSpread | Document): any
    /**
    - Removes this MasterSpread.
      */
      remove(): void
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
