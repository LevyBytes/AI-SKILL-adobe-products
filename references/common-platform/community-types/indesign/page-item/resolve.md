# PageItem.resolve

Community declaration reference: InDesign/2023.

Resolves a requested location into coordinates within a chosen coordinate system.
@param location Requested location. Accepted forms include Array of 2 Reals, AnchorPoint enumerator or Array of Arrays of 2 Reals, CoordinateSpaces enumerators, AnchorPoint enumerators, BoundingBoxLimits enumerators or Long Integers.
@param in_ Coordinate space used for the result.
@param consideringRulerUnits When true, a ruler location is read in ruler units instead of points. The default value is false. This option matters only when the reference point is page-relative.

```typescript
declare class PageItem {
    resolve(location: any, in_: CoordinateSpaces, consideringRulerUnits?: boolean): any
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
