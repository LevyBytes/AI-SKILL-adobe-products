# ListBoxes.add

Community declaration reference: InDesign/2023.

Creates a ListBox instance
@param layer Layer where the ListBox is created.
@param at Placement for inserting the ListBox relative to a reference object or inside the container.
@param reference Reference object; required when at is before or after.
@param withProperties Starting property values for this ListBox instance

```typescript
declare class ListBoxes {
    add(layer: Layer, at?: LocationOptions, reference?: Document | Spread | MasterSpread | Page | Layer | PageItem, withProperties?: object): ListBox
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
