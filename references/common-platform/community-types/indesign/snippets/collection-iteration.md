# Snippets collection iteration

Community declaration reference: InDesign/2023.

```typescript
declare class Snippets {
    /**
    - Supplies any Snippet from this collection.
      */
      anyItem(): Snippet
    /**
    - Supplies all Snippet entries in this collection.
      */
      everyItem(): Snippet[]
    /**
    - Supplies the first Snippet in this collection.
      */
      firstItem(): Snippet
    /**
    - Supplies the last Snippet in this collection.
      */
      lastItem(): Snippet
    /**
    - Supplies the middle Snippet in this collection.
      */
      middleItem(): Snippet
    /**
    - Retrieves the Snippet positioned after the specified Snippet in this collection.
    - @param obj Snippet located before the target Snippet.
      */
      nextItem(obj: Snippet): Snippet
    /**
    - Retrieves the Snippet positioned before the specified index.
    - @param obj Index for the Snippet located after the target Snippet.
      */
      previousItem(obj: Snippet): Snippet
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
