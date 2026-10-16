# SubPathItems

Community declaration reference: Photoshop/2015.5.

Path point info objects describing straight or curved path segments are exposed through this array. Do not create sub paths through the sub path item object; use it to read details about an existing sub path. For creation, use sub path info instead.

```typescript
declare class SubPathItems {
    /**
    - Element count for this collection.
      */
      readonly length: number
    /**

    - Container that owns this object.
      */
      readonly parent: object
    /**

    - Object class name.
      */
      readonly typename: string
    /**

    - Returns the collection element at the supplied index.
    - @param index
      */
      [index: number]: SubPathItem
    /**

    - Returns the first collection element matching the supplied name.
    - @param name
      */
      getByName(name: string): SubPathItem
}
```

Source: [Photoshop/2015.5/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Photoshop/2015.5/index.d.ts).
