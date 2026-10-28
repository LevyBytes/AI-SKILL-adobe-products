# Page.resize

Community declaration reference: InDesign/2023.

Resizes the page item.
@param in_ Bounding box to resize. Accepts CoordinateSpaces, BoundingBoxLimits, or an ordered array containing coordinateSpace:CoordinateSpaces enumerator and boundsKind:BoundingBoxLimits enumerator.
@param from Transform origin. Legal specifications include bounding-box-relative anchor | {anchor | {x,y}, bounds kind [, coordinate space]}; coordinate-space-relative {x,y} | {{x,y}[, coordinate space]}; and layout-window-ruler-relative {{x,y}, page index | bounds kind}. Accepts an Array of 2 Reals, an AnchorPoint enumerator, or arrays/enumerators using CoordinateSpaces, AnchorPoint, BoundingBoxLimits, or Long Integers.
@param by Rule describing how the supplied values affect current dimensions.
@param values Width and height inputs. Accepted dimension forms are {x, y [, coordinate space]}, {x, resize constraint [, coordinate space]}, or {resize constraint, y [, coordinate space]}; x and y are real numbers, and coordinate space controls only the length unit for x and y; for the 'current dimensions times' resize method, coordinate space is ignored.
@param resizeIndividually When false and several page items are targeted, the new dimensions are reached by moving individual items instead of resizing them.
@param consideringRulerUnits When true, ruler locations use ruler units instead of points. False is the default. This only applies to page-relative reference points.

```typescript
declare class Page {
    resize(in_: any, from: any, by: ResizeMethods, values: number[] | ResizeConstraints | CoordinateSpaces, resizeIndividually?: boolean, consideringRulerUnits?: boolean): void
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
