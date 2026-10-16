# Viewer

Community declaration reference: AfterEffects/26.0.

Viewer represents a Composition, Layer, or Footage panel.

```typescript
declare class Viewer {
    /** Viewer content type. */
    readonly type: ViewerType
    /* True when the viewer has focus. */
    readonly active: boolean
    readonly views: View[]
    activeViewIndex: number
    /* True when the viewer is maximized. */
    maximized: boolean
    /* Brings the viewer forward and focuses it. */
    setActive(): boolean
}
```

Source: [AfterEffects/26.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/AfterEffects/26.0/index.d.ts).
