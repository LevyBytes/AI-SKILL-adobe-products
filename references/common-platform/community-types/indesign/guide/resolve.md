# Guide.resolve

Community declaration reference: InDesign/2023.

Converts the requested location into coordinates in the specified coordinate system.
@param location Requested location. Valid forms include Long Integers, AnchorPoint enumerators, CoordinateSpaces enumerators, BoundingBoxLimits enumerators, Array of 2 Reals, or Array of Arrays of 2 Reals.
@param in_ Coordinate space to use.
@param consideringRulerUnits When true, ruler locations are interpreted in ruler units instead of points. The default value is false. This applies only when the reference point is page-relative.

```typescript
declare class Guide {
    resolve(location: any, in_: CoordinateSpaces, consideringRulerUnits?: boolean): any
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
