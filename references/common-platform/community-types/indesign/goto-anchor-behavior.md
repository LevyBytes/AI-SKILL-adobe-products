# GotoAnchorBehavior

Community declaration reference: InDesign/2023.

Behavior object used to jump to an anchor.

```typescript
declare class GotoAnchorBehavior extends Behavior {
    /**
    - Anchor target, accepted as a bookmark, hyperlink text destination, or hyperlink page destination.
      */
      anchorItem: Bookmark | HyperlinkTextDestination | HyperlinkPageDestination
    /**

    - Anchor name value.
      */
      readonly anchorName: string
    /**

    - File path value; Mac OS uses colon delimiters.
      */
      filePath: string | File
    /**

    - Zoom option applied during navigation.
      */
      zoomSetting: GoToZoomOptions
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
