# ArtLayer.kind

Community declaration reference: Photoshop/2015.5.

Assigns the kind for an empty layer, such as 'text layer'. It is valid only for an empty layer when 'is background layer ' is false. The 'kind ' property can turn a background layer into a normal layer; creating a background layer requires setting 'is background layer' to true.

```typescript
declare class ArtLayer extends Layer {
    kind: LayerKind
}
```

Source: [Photoshop/2015.5/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Photoshop/2015.5/index.d.ts).
