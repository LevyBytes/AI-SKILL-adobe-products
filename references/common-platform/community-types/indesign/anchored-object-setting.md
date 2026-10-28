# AnchoredObjectSetting

Community declaration reference: InDesign/2023.

Settings used by an anchored object.

```typescript
declare class AnchoredObjectSetting extends Preference {
    /**
    - Point on the anchored object used for positioning.
      */
      anchorPoint: AnchorPoint
    /**

    - Space placed above an above-line anchored object.
      */
      anchorSpaceAbove: number | string
    /**

    - Horizontal (x) offset applied to the anchored object.
      */
      anchorXoffset: number | string
    /**

    - Vertical (y) offset applied to the anchored object. For above line positioning, this maps to the space after property.
      */
      anchorYoffset: number | string
    /**

    - Anchored object placement relative to its anchor.
      */
      anchoredPosition: AnchorPosition
    /**

    - With anchored position set to above line, placement is measured relative to the text area. With anchored position set to custom, horizontal reference point controls horizontal alignment. Note: Not valid when anchored position is inline.
      */
      horizontalAlignment: HorizontalAlignment
    /**

    - Horizontal page reference point. Valid only when anchored position is custom.
      */
      horizontalReferencePoint: AnchoredRelativeTo
    /**

    - When true, manual repositioning of the anchored object is prevented.
      */
      lockPosition: boolean
    /**

    - When true, the anchored object is pinned within the text frame top and bottom.
      */
      pinPosition: boolean
    /**

    - When true, anchored object position is measured relative to the page or spread binding spine.
      */
      spineRelative: boolean
    /**

    - Vertical alignment between the anchored object reference point and the page vertical reference point. Notes: Valid only when anchored position is custom.
      */
      verticalAlignment: VerticalAlignment
    /**

    - Vertical page reference point. Use when anchored position is custom.
      */
      verticalReferencePoint: VerticallyRelativeTo
    /**

    - Inserts the anchored object into the specified story.
    - @param storyOffset Story location, expressed as an insertion point.
    - @param anchoredPosition Anchored object position relative to the anchor.
      */
      insertAnchoredObject(storyOffset: InsertionPoint, anchoredPosition: AnchorPosition): void
    /**

    - Detaches the anchored object from its associated text.
      */
      releaseAnchoredObject(): void
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
