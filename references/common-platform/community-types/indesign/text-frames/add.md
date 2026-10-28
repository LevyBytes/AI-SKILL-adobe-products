# TextFrames.add

Community declaration reference: InDesign/2023.

Creates a TextFrame.
@param layer Layer where the TextFrame is created.
@param at Insertion location for the TextFrame, relative to the reference object or inside the container object.
@param reference Reference object. Note: Required when at is before or after.
@param withProperties Starting property map for the TextFrame being created.

```typescript
declare class TextFrames {
    add(layer: Layer, at?: LocationOptions, reference?: Document | Spread | MasterSpread | Page | Layer | PageItem, withProperties?: object): TextFrame
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
