# Document.optimizeCurves

Community declaration reference: Animate/22.0.

Optimizes smoothing for the current selection, optionally using multiple passes for best smoothing. This matches choosing Modify > Shape > Optimize.
@param smoothing Integer from 0 to 100, where 0 means no smoothing and 100 means maximum smoothing.
@param bUseMultiplePasses Boolean that requests multiple passes when true; that is slower but can improve the result. It corresponds to the Optimize Curves control named Use Multiple Passes.

```typescript
declare class Document {
    optimizeCurves(smoothing: number, bUseMultiplePasses: boolean): void
}
```

Source: [Animate/22.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Animate/22.0/index.d.ts).
