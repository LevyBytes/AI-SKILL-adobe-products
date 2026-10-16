# StripedStrokeStyle

Community declaration reference: InDesign/2023.

Striped stroke style object.

```typescript
declare class StripedStrokeStyle extends StrokeStyle {
    /**
    - For a striped stroke pattern, width and position data for stripes. Stripe entries are encoded as [start1, end1, start2, end2] start-end pairs; values represent stroke-weight percentages. Each entry must be greater than the one before it. (Range: 0 to 100).
      */
      stripeArray: number[]
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
