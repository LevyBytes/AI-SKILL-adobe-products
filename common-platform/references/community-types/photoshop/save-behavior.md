# SaveBehavior

Community declaration reference: Photoshop/2015.5.

Application behavior for image previews and file extensions when a save method runs.

```typescript
declare enum SaveBehavior {
    /**
    - Always saves the item with the file.
      */
      ALWAYSSAVE = 2,
    /**

    - Asks the user whether the item should be saved with the file.
      */
      ASKWHENSAVING = 3,
    /**

    - Never saves the item with the file.
      */
      NEVERSAVE = 1,
}
```

Source: [Photoshop/2015.5/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Photoshop/2015.5/index.d.ts).
