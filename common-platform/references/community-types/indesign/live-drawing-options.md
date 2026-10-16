# LiveDrawingOptions

Community declaration reference: InDesign/2023.

Live drawing choices for page-item screen updates during user mouse actions.

```typescript
declare enum LiveDrawingOptions {
    /**
    - Uses live screen drawing during mouse operations after a delay when the user pauses before moving the mouse.
      */
      DELAYED = 1347765349,
    /**

    - Uses live screen drawing throughout mouse operations.
      */
      IMMEDIATELY = 1347766637,
    /**

    - Avoids live screen drawing during mouse operations and uses sprite mode.
      */
      NEVER = 1347767926,
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
