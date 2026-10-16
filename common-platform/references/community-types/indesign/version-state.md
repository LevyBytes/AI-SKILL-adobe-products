# VersionState

Community declaration reference: InDesign/2023.

Version Cue state values for the file.

```typescript
declare enum VersionState {
    /**
    - Local modifications make the version newer than the project.
      */
      LOCAL_NEWER = 1986221644,
    /**

    - The version matches the project exactly.
      */
      LOCAL_PROJECT_MATCH = 1986221645,
    /**

    - Indicates no resource and no local file.
      */
      NO_RESOURCE = 1986221646,
    /**

    - The project contains a newer file.
      */
      PROJECT_FILE_NEWER = 1986221648,
    /**

    - Local edits exist while the project file is newer.
      */
      VERSION_CONFLICT = 1986221635,
    /**

    - The version is unknown.
      */
      VERSION_UNKNOWN = 1986221653,
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
