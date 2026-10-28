# PageItem.transform

Community declaration reference: InDesign/2023.

Applies a transform to the page item.
@param in_ Coordinate space used for the operation.
@param from Temporary transformation origin. Accepted forms include Array of 2 Reals, AnchorPoint enumerator or Array of Arrays of 2 Reals, CoordinateSpaces enumerators, AnchorPoint enumerators, BoundingBoxLimits enumerators or Long Integers.
@param withMatrix Transformation matrix.
@param replacingCurrent Components of the transform to consider. Supplying this optional parameter replaces the target's current transform components with new values.Without this parameter, the supplied matrix is concatenated with the target's existing transform so both effects combine.
@param consideringRulerUnits When true, a ruler based origin is read in ruler units instead of points. The default value is false. This option matters only when the reference point is page-relative.

```typescript
declare class PageItem {
    transform(in_: CoordinateSpaces, from: any, withMatrix: [number, number, number, number, number, number] | TransformationMatrix, replacingCurrent: MatrixContent | MatrixContent[] | number, consideringRulerUnits?: boolean): void
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
