# LockStateValues

Community declaration reference: InDesign/2023.

Lock state choices.

```typescript
declare enum LockStateValues {
    /**
    - Story status is checked in.
      */
      CHECKED_IN_STORY = 1112695657,
    /**

    - Story status is checked out.
      */
      CHECKED_OUT_STORY = 1112695663,
    /**

    - Story status is embedded.
      */
      EMBEDDED_STORY = 1112696173,
    /**

    - Story status is locked.
      */
      LOCKED_STORY = 1112697963,
    /**

    - Story file status is missing.
      */
      MISSING_LOCK_STATE = 1112698227,
    /**

    - The stories have mixed lock states.
      */
      MIXED_LOCK_STATE = 1112698232,
    /**

    - No lock state.
      */
      NONE = 1852796517,
    /**

    - Story status is unmanaged.
      */
      UNMANAGED_STORY = 1112700269,
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
