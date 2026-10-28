# MultiStateObjects.add

Community declaration reference: InDesign/2023.

Creates a MultiStateObject instance
@param layer Layer where the MultiStateObject is created.
@param at Placement for inserting the MultiStateObject relative to a reference object or inside the container.
@param reference Reference object; required when at is before or after.
@param withProperties Starting property values for this MultiStateObject instance

```typescript
declare class MultiStateObjects {
    add(layer: Layer, at?: LocationOptions, reference?: Document | Spread | MasterSpread | Page | Layer | PageItem, withProperties?: object): MultiStateObject
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
