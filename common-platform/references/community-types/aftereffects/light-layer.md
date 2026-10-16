# LightLayer

Community declaration reference: AfterEffects/26.0.

LightLayer models a composition light layer; create it with the LayerCollection object's addLight method.

```typescript
declare class LightLayer extends Layer {
    /** Convenience property aliases */
    readonly lightOption: _LightOptionsGroup
    /* For light layers, the layer used as a light source when lightType is LightType.ENVIRONMENT. */
    lightSource: AVLayer | null
    /* Light type for light layers. */
    lightType: LightType
}
```

Source: [AfterEffects/26.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/AfterEffects/26.0/index.d.ts).
