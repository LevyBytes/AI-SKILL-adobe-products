# Hyperlinks collection iteration

Community declaration reference: InDesign/2023.

```typescript
declare class Hyperlinks {
    /**
    - Gets any Hyperlink from the collection.
      */
      anyItem(): Hyperlink
    /**
    - Gets every Hyperlink in the collection.
      */
      everyItem(): Hyperlink[]
    /**
    - Gets the first Hyperlink in the collection.
      */
      firstItem(): Hyperlink
    /**
    - Gets the last Hyperlink in the collection.
      */
      lastItem(): Hyperlink
    /**
    - Gets the middle Hyperlink in the collection.
      */
      middleItem(): Hyperlink
    /**
    - Gets the Hyperlink whose index comes after the supplied Hyperlink.
    - @param obj Hyperlink immediately before the desired Hyperlink.
      */
      nextItem(obj: Hyperlink): Hyperlink
    /**
    - Gets the Hyperlink whose index comes before the supplied index.
    - @param obj Index of the Hyperlink immediately after the desired Hyperlink.
      */
      previousItem(obj: Hyperlink): Hyperlink
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
