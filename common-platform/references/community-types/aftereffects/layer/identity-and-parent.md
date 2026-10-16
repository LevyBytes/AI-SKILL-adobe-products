# Layer identity and parent

Community declaration reference: AfterEffects/26.0.

```typescript
declare class Layer extends PropertyGroup {
    /* Persistent unique identification number. */
    readonly id: number
    /* Layer index position. */
    readonly index: number
    /* Layer name. */
    name: string
    /* Parent layer, if one is assigned. */
    parent: Layer | null
}
```

Source: [AfterEffects/26.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/AfterEffects/26.0/index.d.ts).
