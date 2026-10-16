# Timeline.findLayerIndex

Community declaration reference: Animate/22.0.

Searches for layers with the supplied name and returns their indexes. Layer indexes are flat, so folder layers are counted in the main index.
@returns Array of index values for the named layer. If Flash cannot find that layer, the return value is undefined.
@param name String containing the layer name to search for.

```typescript
declare class Timeline {
    findLayerIndex(name: string): number[] | undefined
}
```

Source: [Animate/22.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Animate/22.0/index.d.ts).
