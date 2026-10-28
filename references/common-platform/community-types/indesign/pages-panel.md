# PagesPanel

Community declaration reference: InDesign/2023.

Pages panel object.

```typescript
declare class PagesPanel extends Panel {
    /**
    - Page icon size value.
      */
      iconSize: IconSizes
    /**

    - Master page icon size value.
      */
      masterIconSize: IconSizes
    /**

    - When true, master page icons sit vertically around the binding spine; when false, they use a horizontal layout.
      */
      masterVerticalView: boolean
    /**

    - When true, page thumbnails appear in the panel's master pages area.
      */
      mastersThumbnails: boolean
    /**

    - When true, the panel draws its pages area above the master pages area.
      */
      pagesOnTop: boolean
    /**

    - When true, thumbnails appear for pages in the panel's pages area.
      */
      pagesThumbnails: boolean
    /**

    - Controls page arrangement within the panel's page section.
      */
      pagesViewSetting: PageViewOptions
    /**

    - Controls how the document and master page panel areas respond during resizing.
      */
      resizeBehavior: PanelLayoutResize
    /**

    - When true, spreads using non-zero rotation show a rotation icon beside them.
      */
      rotationIcons: boolean
    /**

    - When true, spreads with page transitions show a page transitions icon beside them.
      */
      transitionsIcons: boolean
    /**

    - When true, spreads containing transparent elements show a transparency icon beside them.
      */
      transparencyIcons: boolean
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
