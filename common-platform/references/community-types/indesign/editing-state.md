# EditingState

Community declaration reference: InDesign/2023.

Version Cue editing-state values for the file.

```typescript
declare enum EditingState {
    /**
    - Local or remote changes were made while the file was locked, so two versions exist.
      */
      EDITING_CONFLICT = 1986217283,
    /**

    - The file has local modifications and is not locked.
      */
      EDITING_LOCALLY = 1986217292,
    /**

    - The file has a local lock and may be modified.
      */
      EDITING_LOCALLY_LOCKED = 1986217291,
    /**

    - The file is neither in use nor locked.
      */
      EDITING_NOWHERE = 1986217294,
    /**

    - Lock is held but unavailable.
      */
      EDITING_REMOTELY = 1986217298,
    /**

    - The editing status is unknown.
      */
      EDITING_UNKNOWN = 1986217301,
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
