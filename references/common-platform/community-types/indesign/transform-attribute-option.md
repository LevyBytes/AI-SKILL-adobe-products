# TransformAttributeOption

Community declaration reference: InDesign/2023.

Layout-attribute options for any page item.

```typescript
declare class TransformAttributeOption extends Preference {
    /**
    - Object-style-defined height value.
      */
      transformAttrHeight: number | string
    /**

    - Reference point used when setting the object style X attribute.
      */
      transformAttrLeftReference: TransformPositionReference
    /**

    - Specifies which anchor point the style uses to anchor the object while applying the position.
      */
      transformAttrRefAnchorPoint: AnchorPoint
    /**

    - Reference point used when setting the object style Y attribute.
      */
      transformAttrTopReference: TransformPositionReference
    /**

    - Object-style-defined width value.
      */
      transformAttrWidth: number | string
    /**

    - Object-style-defined left position.
      */
      transformAttrX: number | string
    /**

    - Object-style-defined top position.
      */
      transformAttrY: number | string
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
