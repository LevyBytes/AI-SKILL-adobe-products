# LanguagesWithVendors collection iteration

Community declaration reference: InDesign/2023.

```typescript
declare class LanguagesWithVendors {
    /**
    - Gets an arbitrary LanguageWithVendors from the collection.
      */
      anyItem(): LanguageWithVendors
    /**
    - Gets all LanguageWithVendors objects from the collection.
      */
      everyItem(): LanguageWithVendors[]
    /**
    - Gets the first LanguageWithVendors in collection order.
      */
      firstItem(): LanguageWithVendors
    /**
    - Gets the final LanguageWithVendors in collection order.
      */
      lastItem(): LanguageWithVendors
    /**
    - Gets the middle LanguageWithVendors from the collection.
      */
      middleItem(): LanguageWithVendors
    /**
    - Gets the LanguageWithVendors immediately after the supplied LanguageWithVendors in collection order.
    - @param obj LanguageWithVendors positioned before the requested LanguageWithVendors.
      */
      nextItem(obj: LanguageWithVendors): LanguageWithVendors
    /**
    - Gets the LanguageWithVendors immediately before the supplied index.
    - @param obj Index of the LanguageWithVendors positioned after the requested LanguageWithVendors.
      */
      previousItem(obj: LanguageWithVendors): LanguageWithVendors
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
