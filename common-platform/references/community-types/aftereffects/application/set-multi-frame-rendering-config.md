# Application.setMultiFrameRenderingConfig

Community declaration reference: AfterEffects/26.0.

Configures Multi-Frame Rendering for the next render.
@param use_mfr Pass `true` to turn on Multi-Frame Rendering.
@param max_cpu_perc CPU ceiling for Multi-Frame Rendering, from 1-100 percent. When mfr_on is `false`, use 100.

```typescript
declare class Application {
    setMultiFrameRenderingConfig(use_mfr: boolean, max_cpu_percent: number): void
}
```

Source: [AfterEffects/26.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/AfterEffects/26.0/index.d.ts).
