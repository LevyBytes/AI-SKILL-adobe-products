# PageReferences collection iteration

Community declaration reference: InDesign/2023.

```typescript
declare class PageReferences {
    /**
    - Retrieves an arbitrary PageReference from this collection.
      */
      anyItem(): PageReference
    /**
    - Retrieves all PageReference entries from this collection.
      */
      everyItem(): PageReference[]
    /**
    - Retrieves the initial PageReference from this collection.
      */
      firstItem(): PageReference
    /**
    - Retrieves the final PageReference from this collection.
      */
      lastItem(): PageReference
    /**
    - Retrieves the center PageReference from this collection.
      */
      middleItem(): PageReference
    /**
    - Retrieves the PageReference immediately after the supplied PageReference in this collection.
    - @param obj PageReference positioned immediately before the target PageReference.
      */
      nextItem(obj: PageReference): PageReference
    /**
    - Retrieves the PageReference immediately before the supplied index.
    - @param obj Index belonging to the PageReference immediately after the target PageReference.
      */
      previousItem(obj: PageReference): PageReference
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
