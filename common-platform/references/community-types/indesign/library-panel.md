# LibraryPanel

Community declaration reference: InDesign/2023.

LibraryPanel panel.

```typescript
declare class LibraryPanel extends Panel {
    /**
    - Library shown by this LibraryPanel.
      */
      readonly associatedLibrary: Library
    /**

    - Currently selected object(s).
      */
      selection: object[] | object | NothingEnum
    /**

    - Asset sort order used by LibraryPanel.
      */
      sortOrder: SortAssets
    /**

    - View mode for LibraryPanel.
      */
      view: LibraryPanelViews
    /**

    - Selects the supplied object(s).
    - @param selectableItems Objects to select.
    - @param existingSelection How LibraryPanel selection state relates to earlier selected objects.
      */
      select(selectableItems: object | object[] | NothingEnum | SelectAll, existingSelection?: SelectionOptions): void
    /**

    - Show every asset.
      */
      showAll(): void
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
