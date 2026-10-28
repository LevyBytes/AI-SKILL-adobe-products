# ArtLayer.applyCustomFilter

Community declaration reference: Photoshop/2015.5.

Runs the custom filter.
@param characteristics Custom-filter kernel data: 25 values ordered left-to-right, top-to-bottom to match the Custom dialog grid in the user interface (Filter > Other > Custom).
@param scale Divides the summed brightness values from the calculated pixels.
@param offset Adds this value after the scale calculation.

```typescript
declare class ArtLayer extends Layer {
    applyCustomFilter(characteristics: number[], scale: number, offset: number): void
}
```

Source: [Photoshop/2015.5/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Photoshop/2015.5/index.d.ts).
