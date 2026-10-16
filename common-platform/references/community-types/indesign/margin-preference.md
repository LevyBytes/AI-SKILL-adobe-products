# MarginPreference

Community declaration reference: InDesign/2023.

Preferences for margins.

```typescript
declare class MarginPreference extends Preference {
    /**
    - MarginPreference bottom edge.
      */
      bottom: number | string
    /**

    - Number of columns placed on the page.
      */
      columnCount: number
    /**

    - Text direction within the column.
      */
      columnDirection: HorizontalOrVertical
    /**

    - Distance between columns.
      */
      columnGutter: number | string
    /**

    - Distance from the left margin for each column guide, formatted as [guide1, guide2, guide3].
      */
      columnsPositions: (number | string)[]
    /**

    - When false, columns use even spacing; when true, custom column widths are allowed.
      */
      readonly customColumns: boolean
    /**

    - MarginPreference left edge.
      */
      left: number | string
    /**

    - MarginPreference right edge.
      */
      right: number | string
    /**

    - MarginPreference top edge.
      */
      top: number | string
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
