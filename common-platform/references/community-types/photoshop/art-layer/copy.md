# ArtLayer.copy

Community declaration reference: Photoshop/2015.5.

Places the layer on the clipboard.
@param merge When true, the copy includes every visible layer. When false, it copies only from the current layer.

```typescript
declare class ArtLayer extends Layer {
    copy(merge?: boolean): void
}
```

Source: [Photoshop/2015.5/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Photoshop/2015.5/index.d.ts).
