# VersionCueSyncStatus

Community declaration reference: InDesign/2023.

Version Cue synchronization-status values for the file.

```typescript
declare enum VersionCueSyncStatus {
    /**
    - Downloaded the project version of the file into the local workspace.
      */
      FILE_DOWNLOADED = 1986220868,
    /**

    - Synchronization made no change because local and project versions matched.
      */
      FILE_NO_CHANGE = 1986220878,
    /**

    - The file was skipped during synchronization.
      */
      FILE_SKIPPED = 1986220875,
    /**

    - The file was unlocked locally.
      */
      FILE_UNLOCKED = 1986220876,
    /**

    - Uploaded the local file version to the project.
      */
      FILE_UPLOADED = 1986220885,
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
