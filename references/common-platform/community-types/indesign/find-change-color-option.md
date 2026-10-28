# FindChangeColorOption

Community declaration reference: InDesign/2023.

Options controlling find/change color behavior.

```typescript
declare class FindChangeColorOption extends Preference {
    /**
    - When true, footnotes are included in the find/change query.
      */
      includeFootnotes: boolean
    /**

    - When true, hidden layers are included in the find/change query.
      */
      includeHiddenLayers: boolean
    /**

    - When true, locked layers are included in the find query.
      */
      includeLockedLayersForFind: boolean
    /**

    - When true, locked stories are included in the find query.
      */
      includeLockedStoriesForFind: boolean
    /**

    - When true, master pages are included in the find/change query.
      */
      includeMasterPages: boolean
    /**

    - ObjectTypes value.
      */
      objectType: ObjectTypes
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
