# CompiledClipInstance.filters

Community declaration reference: Animate/22.0.

Array of Filter objects. Filter object properties inside the filters array can be read, but cannot be written by direct access through the filters array. To change filter object properties, retrieve the array, modify the properties, and set the array back to filters.

```typescript
declare class CompiledClipInstance extends Instance {
    filters: Filter[]
}
```

Source: [Animate/22.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Animate/22.0/index.d.ts).
