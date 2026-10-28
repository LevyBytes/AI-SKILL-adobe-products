# ViewZoomStyle

Community declaration reference: InDesign/2023.

Choices for view zoom style.

```typescript
declare enum ViewZoomStyle {
    /**
    - Shows the page at 100% magnification.
      */
      ACTUAL_SIZE = 2053206906,
    /**

    - Fits the whole page in the window.
      */
      FIT_PAGE = 2053534832,
    /**

    - Scales the page text area to the window width; page margins and the lower page area may be hidden.
      */
      FIT_VISIBLE = 1212437334,
    /**

    - Scales the page to the window width; the lower page area may be hidden.
      */
      FIT_WIDTH = 1212437335,
    /**

    - Uses the page to fill the screen, hiding the toolbar, command bar, menu bar, and window controls.
      */
      FULL_SCREEN = 1987733107,
    /**

    - Lays out pages as a continuous vertical column one page wide.
      */
      ONE_COLUMN = 1987735395,
    /**

    - Shows one page at a time in the document pane.
      */
      SINGLE_PAGE = 1987736432,
    /**

    - Lays out pages side by side in a continuous vertical column two pages wide.
      */
      TWO_COLUMN = 1987736675,
    /**

    - Raises magnification to the next preset percentage.
      */
      ZOOM_IN = 2053990766,
    /**

    - Lowers magnification to the previous preset percentage.
      */
      ZOOM_OUT = 2054124916,
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
