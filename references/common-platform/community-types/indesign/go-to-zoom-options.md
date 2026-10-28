# GoToZoomOptions

Community declaration reference: InDesign/2023.

Zoom choices for the goto destination page.

```typescript
declare enum GoToZoomOptions {
    /**
    - Shows the page at 100% magnification.
      */
      ACTUAL_SIZE = 2053206906,
    /**

    - Scales the page text area to the window width; page margins and the lower page area may be hidden.
      */
      FIT_VISIBLE = 1212437334,
    /**

    - Scales the page to the window width; the lower page area may be hidden.
      */
      FIT_WIDTH = 1212437335,
    /**

    - Scales the page into the display window.
      */
      FIT_WINDOW = 1212437367,
    /**

    - Uses the zoom setting inherited from the previously displayed page.
      */
      INHERIT_ZOOM = 1212437370,
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
