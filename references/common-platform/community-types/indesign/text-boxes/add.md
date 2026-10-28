# TextBoxes.add

Community declaration reference: InDesign/2023.

Creates a new TextBox.
@param layer Layer where the TextBox is created.
@param at Insertion position for the TextBox, relative to the reference object or inside the container object.
@param reference Reference object; required when at is before or after.
@param withProperties Property values applied during creation.

```typescript
declare class TextBoxes {
    add(layer: Layer, at?: LocationOptions, reference?: Document | Spread | MasterSpread | Page | Layer | PageItem, withProperties?: object): TextBox
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
