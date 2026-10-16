# Path.entirePath

Community declaration reference: InDesign/2023.

Coordinates for every path point on the path, including anchor points and left- and right-direction points. To create a path with this property, provide either anchor coordinate pairs ([[x1, y1], [x2, y2], ...]) or anchor, left-direction, and right-direction coordinate triples ([[[x1, y1], [x2, y2], [x3, y3]], [[x4, y4], [x5, y5], [x6, y6]], ...]). Detail: Anchor-only input creates straight segments between path points; supplying left- and right-direction point positions defines curved segments. Can return: Array of Arrays of 2 Units.

```typescript
declare class Path {
    entirePath: any[]
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
