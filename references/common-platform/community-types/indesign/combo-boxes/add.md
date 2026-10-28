# ComboBoxes.add

Community declaration reference: InDesign/2023.

Creates a ComboBox instance
@param layer Layer where the ComboBox is created.
@param at Placement for inserting the ComboBox relative to a reference object or inside the container.
@param reference Reference object; required when at is before or after.
@param withProperties Starting property values for this ComboBox instance

```typescript
declare class ComboBoxes {
    add(layer: Layer, at?: LocationOptions, reference?: Document | Spread | MasterSpread | Page | Layer | PageItem, withProperties?: object): ComboBox
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
