# Shape

Community declaration reference: AfterEffects/26.0.

Shape carries the data describing a shape-layer path or a Mask outline path.

```typescript
declare class Shape {
    /** True when the shape forms a closed curve. */
    closed: boolean
    /* Shape anchor-point coordinates. */
    vertices: [number, number][]
    /* Tangent vectors entering the shape vertices. */
    inTangents: [number, number][]
    /* Tangent vectors leaving the shape vertices. */
    outTangents: [number, number][]
    /* Mask path segment sections between vertices that contain each feather point. */
    featherSegLocs: number[]
    /* Relative location of each feather point on its mask path segment. */
    featherRelSegLocs: number[]
    /* Feather radius amount for each feather point. */
    featherRadii: number[]
    /* Feather-radius interpolation type for each feather point. */
    featherInterps: number[]
    /* Feather tension value at every feather point. */
    featherTensions: number[]
    /* Inner or outer direction for each feather point. */
    featherTypes: number[]
    /* Relative angle between the two normals beside a curved outer feather-boundary corner on a mask path. */
    featherRelCornerAngles: number[]
}
```

Source: [AfterEffects/26.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/AfterEffects/26.0/index.d.ts).
