# ArtLayer.applyDeInterlace

Community declaration reference: Photoshop/2015.5.

Runs the de-interlace filter.
@param eliminateFields Identifies which fields are removed.
@param createFields Replacement strategy for the removed fields.

```typescript
declare class ArtLayer extends Layer {
    applyDeInterlace(eliminateFields: EliminateFields, createFields: CreateFields): void
}
```

Source: [Photoshop/2015.5/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Photoshop/2015.5/index.d.ts).
