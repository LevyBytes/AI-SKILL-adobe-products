# XMLViewPreference

Community declaration reference: InDesign/2023.

Preferences for XML view

```typescript
declare class XMLViewPreference extends Preference {
    /**
    - When true, the structure view shows attributes along with elements. Note: Applies only when show structure is true.
      */
      showAttributes: boolean
    /**

    - When true, the structure view is displayed.
      */
      showStructure: boolean
    /**

    - When true, XML tags are displayed.
      */
      showTagMarkers: boolean
    /**

    - When true, tagging an item whose parent is not tagged shows the tag options dialog.
      */
      readonly showTagOptions: boolean
    /**

    - When true, tagged frames display XML tags.
      */
      showTaggedFrames: boolean
    /**

    - When true, text snippets from element content appear in the structure view. Note: Applies only when show structure is true.
      */
      showTextSnippets: boolean
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
