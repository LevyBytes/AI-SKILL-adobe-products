# OMCollection

Community declaration reference: AfterEffects/26.0.

OMCollection is the render queue's output-module collection. It exposes OutputModule objects, adds no extra operations, and uses index position 1 for the first OutputModule.

```typescript
declare class OMCollection extends Collection {
    /** Looks up an OutputModule object by collection index; indexing starts at 1. */
    readonly [index: number]: OutputModule
}
```

Source: [AfterEffects/26.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/AfterEffects/26.0/index.d.ts).
