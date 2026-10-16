# MultiStateObjects collection iteration

Community declaration reference: InDesign/2023.

```typescript
declare class MultiStateObjects {
    /**
    - Gets an arbitrary MultiStateObject from the collection.
      */
      anyItem(): MultiStateObject
    /**
    - Gets all MultiStateObject entries from the collection.
      */
      everyItem(): MultiStateObject[]
    /**
    - Gets the first MultiStateObject in the collection.
      */
      firstItem(): MultiStateObject
    /**
    - Gets the final MultiStateObject in the collection.
      */
      lastItem(): MultiStateObject
    /**
    - Gets the central MultiStateObject from the collection.
      */
      middleItem(): MultiStateObject
    /**
    - Gets the MultiStateObject positioned immediately after the specified MultiStateObject.
    - @param obj MultiStateObject that precedes the requested MultiStateObject.
      */
      nextItem(obj: MultiStateObject): MultiStateObject
    /**
    - Gets the MultiStateObject positioned immediately before the specified index.
    - @param obj Index of the MultiStateObject that comes after the requested MultiStateObject.
      */
      previousItem(obj: MultiStateObject): MultiStateObject
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
