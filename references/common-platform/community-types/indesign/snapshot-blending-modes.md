# SnapshotBlendingModes

Community declaration reference: InDesign/2023.

Modes for blending nearby snapshots into the new layout according to size and shape.

```typescript
declare enum SnapshotBlendingModes {
    /**
    - Blends up to three nearest snapshots, including snapshots outside the new layout class.
      */
      FULL_SNAPSHOT_BLENDING = 1399735925,
    /**

    - Disables layout snapshot influence entirely.
      */
      IGNORE_LAYOUT_SNAPSHOTS = 1399736679,
    /**

    - Restricts blending to layout snapshots in the same class as the new layout.
      */
      LIMITED_SNAPSHOT_BLENDING = 1399737449,
    /**

    - Chooses the saved layout snapshot with the closest size and shape for the new layout.
      */
      USE_NEAREST_SNAPSHOT = 1399737957,
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
