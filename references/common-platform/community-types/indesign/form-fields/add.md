# FormFields.add

Community declaration reference: InDesign/2023.

Creates a FormField object.
@param layer Layer where the FormField is created.
@param at Placement position for the FormField, either relative to a reference object or inside the container object.
@param reference Reference object. Note: required when at is before or after.
@param withProperties Initial property values for the new FormField.

```typescript
declare class FormFields {
    add(layer: Layer, at?: LocationOptions, reference?: Document | Spread | MasterSpread | Page | Layer | PageItem, withProperties?: object): FormField
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
