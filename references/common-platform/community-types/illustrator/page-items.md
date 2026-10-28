# PageItems

Community declaration reference: Illustrator/2022.

Collection containing PageItem objects.

```typescript
declare class PageItems extends Array<PageItem> {
    /**
    - Count of items held by this collection.
      */
      readonly length: number
    /**

    - Container object for this object.
      */
      readonly parent: object
    /**

    - Class-name string for this object.
      */
      readonly typename: string
    /**

    - Returns the first collection item that has the supplied name.
    - @param name
      */
      getByName(name: string): PageItem
}
```

Source: [Illustrator/2022/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Illustrator/2022/index.d.ts).
