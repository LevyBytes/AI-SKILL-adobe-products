# Spread.transform

Community declaration reference: InDesign/2023.

Applies a transformation to the page item.
@param in_ Coordinate space used for the operation.
@param from Temporary origin for the transform. Accepts an Array of 2 Reals, an AnchorPoint enumerator, or arrays/enumerators using CoordinateSpaces, AnchorPoint, BoundingBoxLimits, or Long Integers.
@param withMatrix Matrix used for the transformation.
@param replacingCurrent Transform components to replace; with this optional value, the target receives new values.Without it, the matrix is concatenated with the target's current transform so both effects combine.
@param consideringRulerUnits When true, a ruler-based origin uses ruler units rather than points. False is the default. This only applies to page-relative reference points.

```typescript
declare class Spread {
    transform(in_: CoordinateSpaces, from: any, withMatrix: [number, number, number, number, number, number] | TransformationMatrix, replacingCurrent: MatrixContent | MatrixContent[] | number, consideringRulerUnits?: boolean): void
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
