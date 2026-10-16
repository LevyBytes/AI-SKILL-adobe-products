# Layers

Community declaration reference: Photoshop/2015.5.

Layer objects held by the document, including art layer and layer set entries.

```typescript
declare class Layers {
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
      [index: number]: Layer
    /**

    - Returns the first collection element matching the supplied name.
    - @param name
      */
      getByName(name: string): Layer
    /**

    - Removes every element.
      */
      removeAll(): void
}
```

Source: [Photoshop/2015.5/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Photoshop/2015.5/index.d.ts).
