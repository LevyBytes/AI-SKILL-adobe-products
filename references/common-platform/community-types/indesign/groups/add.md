# Groups.add

Community declaration reference: InDesign/2023.

Creates one Group..
@param groupItems Objects that will be grouped.
@param layer Layer where the Group is created.
@param at Insertion location for the Group, relative to a reference object or inside the container object.
@param reference Reference object; required when at is before or after.
@param withProperties Property values applied during Group creation

```typescript
declare class Groups {
    add(groupItems: PageItem[], layer: Layer, at?: LocationOptions, reference?: Document | Spread | MasterSpread | Page | Layer | PageItem, withProperties?: object): Group
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
