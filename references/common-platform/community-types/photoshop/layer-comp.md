# LayerComp

Community declaration reference: Photoshop/2015.5.

Snapshot of document layer state, usable for viewing different page layouts or compositions.

```typescript
declare class LayerComp {
    /**
    - When true, layer appearance settings, including layer styles, are used.
      */
      appearance: boolean
    /**

    - Layer comp description.
      */
      comment: any
    /**

    - Layer comp name.
      */
      name: string
    /**

    - Container object.
      */
      readonly parent: object
    /**

    - When true, layer position is used.
      */
      position: boolean
    /**

    - When true, this layer comp is selected.
      */
      readonly selected: boolean
    /**

    - Object class name.
      */
      readonly typename: string
    /**

    - When true, this layer comp is visible.
      */
      visibility: boolean
    /**

    - Adds an element.
      */
      add(): LayerComp
    /**

    - Applies this layer comp to the document.
      */
      apply(): void
    /**

    - Captures the current layer state(s) again for this layer comp.
      */
      recapture(): void
    /**

    - Removes this object.
      */
      remove(): void
    /**

    - Removes every element.
      */
      removeAll(): void
    /**

    - Restores the layer comp state from the document state.
      */
      resetFromComp(): void
}
```

Source: [Photoshop/2015.5/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Photoshop/2015.5/index.d.ts).
