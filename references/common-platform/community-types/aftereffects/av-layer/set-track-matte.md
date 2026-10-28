# AVLayer.setTrackMatte

Community declaration reference: AfterEffects/26.0.

Assigns this layer's track matte layer and TrackMatteType. Passing null for trackMatteLayer clears the matte; removeTrackMatte() is another removal path.

```typescript
declare class AVLayer extends Layer {
    setTrackMatte(trackMatteLayer: AVLayer | null, trackMatteType: TrackMatteType): void
}
```

Source: [AfterEffects/26.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/AfterEffects/26.0/index.d.ts).
