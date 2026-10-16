# HtmlItems.add

Community declaration reference: InDesign/2023.

Creates another HtmlItem.
@param layer Layer that will receive the new HtmlItem.
@param at Insertion location for the HtmlItem, relative to the reference object or inside the container object.
@param reference Reference object; required when at is before or after.
@param withProperties Property values applied during HtmlItem creation.

```typescript
declare class HtmlItems {
    add(layer: Layer, at?: LocationOptions, reference?: Document | Spread | MasterSpread | Page | Layer | PageItem, withProperties?: object): HtmlItem
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
