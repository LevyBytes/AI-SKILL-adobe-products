# Polygons.add

Community declaration reference: InDesign/2023.

Creates one Polygon..
@param layer Layer where the Polygon is created.
@param numberOfSides Side count assigned to the Polygon. (Range: 3 to 100)
@param insetPercentage Star inset percentage used on the Polygon.
@param at Insertion location for the Polygon, relative to a reference object or inside the container object.
@param reference Reference object; required when at is before or after.
@param withProperties Property values applied during Polygon creation

```typescript
declare class Polygons {
    add(layer: Layer, numberOfSides: number, insetPercentage: number, at?: LocationOptions, reference?: Document | Spread | MasterSpread | Page | Layer | PageItem, withProperties?: object): Polygon
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
