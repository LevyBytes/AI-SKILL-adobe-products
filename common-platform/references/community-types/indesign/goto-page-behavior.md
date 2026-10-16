# GotoPageBehavior

Community declaration reference: InDesign/2023.

Behavior object used to jump to a document page.

```typescript
declare class GotoPageBehavior extends Behavior {
    /**
    - Destination page number, expressed as an index where 1 identifies the first page.
      */
      pageNumber: number
    /**

    - Zoom option applied during navigation.
      */
      zoomSetting: GoToZoomOptions
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
