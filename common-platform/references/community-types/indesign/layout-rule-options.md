# LayoutRuleOptions

Community declaration reference: InDesign/2023.

Choices for page layout-rule settings.

```typescript
declare enum LayoutRuleOptions {
    /**
    - Uses guide slicing while resizing objects with the page.
      */
      GUIDE_BASED = 1280329538,
    /**

    - Moves and resizes page objects while the page resizes.
      */
      OBJECT_BASED = 1280331586,
    /**

    - Leaves the resizing page without a layout rule.
      */
      OFF = 1330005536,
    /**

    - Keeps the page layout-rule setting already present; used when creating alternate layouts.
      */
      PRESERVE_EXISTING = 1280331890,
    /**

    - Recenters objects while the page resizes.
      */
      RECENTER = 1280332387,
    /**

    - Scales page objects while the page resizes.
      */
      SCALE = 1280332643,
    /**

    - Uses the layout rule from the page's applied master page.
      */
      USE_MASTER = 1280333133,
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
