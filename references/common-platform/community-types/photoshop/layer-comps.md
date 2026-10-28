# LayerComps

Community declaration reference: Photoshop/2015.5.

Layer comp objects tied to the document.

```typescript
declare class LayerComps {
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
      [index: number]: LayerComp
    /**

    - Adds a layer comp.
    - @param name Name assigned to the layer comp.
    - @param comment Description text for the layer comp.
    - @param appearance When true, the layer comp uses the layer appearance or style.
    - @param position When true, the layer comp uses the layer position.
    - @param visibility When true, the layer comp uses the layer visibility.
      */
      static add(
      name: string,
      comment?: string,
      appearance?: boolean,
      position?: boolean,
      visibility?: boolean,
      ): LayerComp
    /**

    - Returns the first collection element matching the supplied name.
    - @param name
      */
      getByName(name: string): LayerComp
}
```

Source: [Photoshop/2015.5/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Photoshop/2015.5/index.d.ts).
