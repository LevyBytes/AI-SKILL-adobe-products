# HyperlinkDestinationPageSetting

Community declaration reference: InDesign/2023.

Choices for displaying a hyperlink destination page.

```typescript
declare enum HyperlinkDestinationPageSetting {
    /**
    - Scales the destination page to the window height; the right side of the page can be hidden. Note: Vertical window resizing updates the magnification automatically.
      */
      FIT_HEIGHT = 1212437352,
    /**

    - Uses the visible portion of the destination page as the destination view.
      */
      FIT_VIEW = 1212437366,
    /**

    - Scales the destination page's text area to the window width; page margins are hidden and the lower page area can be obscured. Note: Horizontal window resizing updates the magnification automatically.
      */
      FIT_VISIBLE = 1212437334,
    /**

    - Scales the destination page to the window width; the lower page area can be hidden. Note: Horizontal window resizing updates the magnification automatically.
      */
      FIT_WIDTH = 1212437335,
    /**

    - Scales the entire destination page into the document window. Note: Resizing the window updates magnification automatically.
      */
      FIT_WINDOW = 1212437367,
    /**

    - Shows the destination page inside the specified rectangle. For rectangle size and position details, see the view bounds entry.
      */
      FIXED = 1212437350,
    /**

    - Displays the destination page at the same zoom percentage as the previous page. Note: Resizing the window updates magnification automatically.
      */
      INHERIT_ZOOM = 1212437370,
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
