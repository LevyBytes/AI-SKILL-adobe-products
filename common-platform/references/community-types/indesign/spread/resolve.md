# Spread.resolve

Community declaration reference: InDesign/2023.

Resolves a location to coordinates in the requested coordinate system.
@param location Requested location. Accepts an Array of 2 Reals, an AnchorPoint enumerator, or arrays/enumerators using CoordinateSpaces, AnchorPoint, BoundingBoxLimits, or Long Integers.
@param in_ Coordinate space used for resolution.
@param consideringRulerUnits When true, ruler locations use ruler units instead of points. False is the default. This only applies to page-relative reference points.

```typescript
declare class Spread {
    resolve(location: any, in_: CoordinateSpaces, consideringRulerUnits?: boolean): any
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
