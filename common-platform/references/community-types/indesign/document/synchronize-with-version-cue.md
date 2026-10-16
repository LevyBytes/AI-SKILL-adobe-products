# Document.synchronizeWithVersionCue

Community declaration reference: InDesign/2023.

Synchronizes the file with the Version Cue project.
@param syncConflictResolution Conflict resolution method used during synchronization.
@param versionComments Comments describing the version.

```typescript
declare class Document {
    synchronizeWithVersionCue(syncConflictResolution?: SyncConflictResolution, versionComments?: string): VersionCueSyncStatus
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
