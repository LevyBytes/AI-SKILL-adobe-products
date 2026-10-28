# SelectionType

Community declaration reference: Photoshop/2015.5.

Controls how a new selection combines with an existing one.

```typescript
declare enum SelectionType {
    /**
    - Removes the new selection area from the current selection.
      */
      DIMINISH = 3,
    /**

    - Adds the new selection area to the current selection.
      */
      EXTEND = 2,
    /**

    - Keeps only the area shared by the current selection and the new one.
      */
      INTERSECT = 4,
    /**

    - Replaces the current selected area.
      */
      REPLACE = 1,
}
```

Source: [Photoshop/2015.5/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Photoshop/2015.5/index.d.ts).
