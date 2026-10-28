# NonNativeItems

Community declaration reference: Illustrator/2022.

Collection holding NonNativeItems.

```typescript
declare class NonNativeItems extends Array<NonNativeItem> {
    /**
    - Element count for this collection.
      */
      readonly length: number
    /**

    - Container that owns this object.
      */
      readonly parent: object
    /**

    - Class-name string for this object.
      */
      readonly typename: string
    /**

    - Returns the first collection entry matching the supplied name.
    - @param name
      */
      getByName(name: string): NonNativeItem
}
```

Source: [Illustrator/2022/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Illustrator/2022/index.d.ts).
