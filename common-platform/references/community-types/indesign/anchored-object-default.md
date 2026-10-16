# AnchoredObjectDefault

Community declaration reference: InDesign/2023.

Default settings for anchored objects.

```typescript
declare class AnchoredObjectDefault extends Preference {
    /**
    - Starting frame type assigned to a new anchored object.
      */
      anchorContent: ContentType
    /**

    - Starting object style assigned to a new anchored object.
      */
      anchoredObjectStyle: ObjectStyle
    /**

    - Starting paragraph style assigned to a new anchored object. Restriction: anchor content must be text.
      */
      anchoredParagraphStyle: ParagraphStyle
    /**

    - Starting height assigned to a new anchored object.
      */
      initialAnchorHeight: number | string
    /**

    - Starting width assigned to a new anchored object.
      */
      initialAnchorWidth: number | string
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
