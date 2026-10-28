# SyncConflictResolution

Community declaration reference: InDesign/2023.

Conflict-resolution choices used during Version Cue synchronization.

```typescript
declare enum SyncConflictResolution {
    /**
    - Prompts the user for conflict-resolution choices.
      */
      ASK_ABOUT_CONFLICTS = 1986216769,
    /**

    - Selects the local version.
      */
      PREFER_LOCAL = 1986216780,
    /**

    - Selects the project version.
      */
      PREFER_PROJECT = 1986216784,
    /**

    - Skips files with conflicts.
      */
      SKIP_CONFLICTS = 1986216787,
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
