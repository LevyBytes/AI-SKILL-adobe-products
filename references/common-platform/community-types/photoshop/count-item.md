# CountItem

Community declaration reference: Photoshop/2015.5.

Document count item. Count-item support exists only in the Extended Version.

```typescript
declare class CountItem {
    /**
    - Container for this object.
      */
      readonly parent: object
    /**

    - Document position for the count item.
      */
      readonly position: UnitPoint
    /**

    - Object class-name value.
      */
      readonly typename: string
    /**

    - Creates an element.
      */
      add(): CountItem
    /**

    - Removes this object.
      */
      remove(): void
    /**

    - Removes every element.
      */
      removeAll(): void
}
```

Source: [Photoshop/2015.5/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Photoshop/2015.5/index.d.ts).
