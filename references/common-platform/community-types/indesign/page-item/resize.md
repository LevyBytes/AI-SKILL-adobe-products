# PageItem.resize

Community declaration reference: InDesign/2023.

Resizes the page item.
@param in_ Bounding box being resized. Accepted forms include a CoordinateSpaces enumerator, a BoundingBoxLimits enumerator, or an Ordered array whose entries are coordinateSpace:CoordinateSpaces enumerator and boundsKind:BoundingBoxLimits enumerator.
@param from Transform origin; valid forms are, for bounding-box-relative input, anchor | {anchor | {x,y}, bounds kind [, coordinate space]}; for coordinate-space-relative input, {x,y} | {{x,y}[, coordinate space]}; for layout-window-ruler input, {{x,y}, page index | bounds kind}. Accepted forms include Array of 2 Reals, AnchorPoint enumerator or Array of Arrays of 2 Reals, CoordinateSpaces enumerators, AnchorPoint enumerators, BoundingBoxLimits enumerators or Long Integers.
@param by How the supplied values affect current dimensions.
@param values Width and height inputs. Valid dimension forms are {x, y [, coordinate space]}, {x, resize constraint [, coordinate space]}, or {resize constraint, y [, coordinate space]}; x and y are real numbers, and coordinate space only selects measurement units for x and y; it is not used for the 'current dimensions times' resize method).
@param resizeIndividually When false and multiple page items are targeted, new dimensions are achieved by moving individual items instead of resizing them.
@param consideringRulerUnits When true, a ruler location is read in ruler units instead of points. The default value is false. This option matters only when the reference point is page-relative.

```typescript
declare class PageItem {
    resize(in_: any, from: any, by: ResizeMethods, values: number[] | ResizeConstraints | CoordinateSpaces, resizeIndividually?: boolean, consideringRulerUnits?: boolean): void
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
