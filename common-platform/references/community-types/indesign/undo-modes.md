# UndoModes

Community declaration reference: InDesign/2023.

Undo choices for script execution.

```typescript
declare enum UndoModes {
    /**
    - Automatically undoes the whole script as part of the previous step.
      */
      AUTO_UNDO = 1699963221,
    /**

    - Undoes the whole script as one step.
      */
      ENTIRE_SCRIPT = 1699963733,
    /**

    - Performs a fast undo of the whole script as one step.
      */
      FAST_ENTIRE_SCRIPT = 1699964501,
    /**

    - Undoes each script request as its own step.
      */
      SCRIPT_REQUEST = 1699967573,
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
