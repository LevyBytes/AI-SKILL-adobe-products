# DashedStrokeStyle

Community declaration reference: InDesign/2023.

Dashed stroke style object.

```typescript
declare class DashedStrokeStyle extends StrokeStyle {
    /**
    - Dash and gap pattern, using the format [dash length1, gap length1, dash length2, gap length2]. Up to ten values are supported.
      */
      dashArray: (number | string)[]
    /**

    - End shape for an open path.
      */
      endCap: EndCap
    /**

    - Corner adjustment used by the DashedStrokeStyle.
      */
      strokeCornerAdjustment: StrokeCornerAdjustment
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
