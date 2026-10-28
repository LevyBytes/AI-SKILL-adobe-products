# Movies.add

Community declaration reference: InDesign/2023.

Creates a new Movie.
@param layer Layer where the Movie is created.
@param at Insertion position for the Movie, relative to the reference object or inside the container object.
@param reference Reference object; required when at is before or after.
@param withProperties Property values applied during creation.

```typescript
declare class Movies {
    add(layer: Layer, at?: LocationOptions, reference?: Document | Spread | MasterSpread | Page | Layer | PageItem, withProperties?: object): Movie
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
