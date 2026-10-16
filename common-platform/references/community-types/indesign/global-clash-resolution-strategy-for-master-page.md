# GlobalClashResolutionStrategyForMasterPage

Community declaration reference: InDesign/2023.

Conflict-resolution choices for loaded master pages whose names match existing masterpages.

```typescript
declare enum GlobalClashResolutionStrategyForMasterPage {
    /**
    - Replaces the matching master page already present.
      */
      LOAD_ALL_WITH_OVERWRITE = 1279350607,
    /**

    - Gives the incoming master page a new name.
      */
      LOAD_ALL_WITH_RENAME = 1279350610,
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
