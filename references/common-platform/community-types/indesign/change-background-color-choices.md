# ChangeBackgroundColorChoices

Community declaration reference: InDesign/2023.

Background color choices for changed text.

```typescript
declare enum ChangeBackgroundColorChoices {
    /**
    - Changed text uses the background color configured in track changes preferences. Related topics: background color for added text, background color for deleted text, or background color for moved text.
      */
      CHANGE_BACKGROUND_USES_CHANGE_PREF_COLOR = 1700098146,
    /**

    - Changed text uses the same background color as the galley.
      */
      CHANGE_BACKGROUND_USES_GALLEY_BACKGROUND_COLOR = 1700095842,
    /**

    - Changed text uses the color assigned to the current user for its background.
      */
      CHANGE_BACKGROUND_USES_USER_COLOR = 1700099426,
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
