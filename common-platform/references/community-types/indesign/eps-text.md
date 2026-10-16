# EPSText

Community declaration reference: InDesign/2023.

EPSText object.

```typescript
declare class EPSText extends PageItem {
    /**
    - Anchored object settings.
      */
      readonly anchoredObjectSettings: AnchoredObjectSetting
    /**

    - Text path collection.
      */
      readonly textPaths: TextPaths
    /**

    - Moves the EPSText one level forward in its layer.
      */
      bringForward(): void
    /**

    - Moves the EPSText to the layer front or before a specified item.
    - @param reference Reference object to place this object in front of; it must share the same parent
      */
      bringToFront(reference: PageItem): void
    /**

    - Moves the EPSText one level backward in its layer.
      */
      sendBackward(): void
    /**

    - Moves the EPSText to the layer back or behind a specified item that has the same parent.
    - @param reference Reference object to place this object behind
      */
      sendToBack(reference: PageItem): void
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
