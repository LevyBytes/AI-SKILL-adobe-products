# SelectionOptions

Community declaration reference: InDesign/2023.

Selection-state choices relative to objects that were already selected.

```typescript
declare enum SelectionOptions {
    /**
    - Adds the object to the current selection; if nothing was selected before, the object becomes the sole selection.
      */
      ADD_TO = 1633969202,
    /**

    - Removes the object from the selection.
      */
      REMOVE_FROM = 1919249734,
    /**

    - Selects this object while clearing any previous selection.
      */
      REPLACE_WITH = 1919250519,
    /**

    - Marks the key object. At least 2 objects must be selected, and the named key object must be among them.
      */
      SET_KEY = 1936028779,
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
