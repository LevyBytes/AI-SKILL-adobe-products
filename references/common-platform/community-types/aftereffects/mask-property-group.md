# MaskPropertyGroup

Community declaration reference: AfterEffects/26.0.

MaskPropertyGroup wraps mask attributes for a layer.

```typescript
declare class MaskPropertyGroup extends PropertyGroup {
    /** Mask mode. */
    maskMode: MaskMode
    /* True when this mask is inverted. */
    inverted: boolean
    /* True when this mask shape is RotoBezier. */
    rotoBezier: boolean
    /* Motion-blur behavior for this mask. */
    maskMotionBlur: MaskMotionBlur
    /* True when this mask is locked. */
    locked: boolean
    /* Color used for drawing the mask outline in the user interface. */
    color: ThreeDColorValue
    /* Mask shape. */
    maskShape: ShapeProperty
    /* Mask path. */
    maskPath: ShapeProperty
    /* Mask feather amount. */
    maskFeather: TwoDProperty
    /* Feather-falloff mode for this mask. */
    maskFeatherFalloff: MaskFeatherFalloff
    /* Mask opacity. */
    maskOpacity: OneDProperty
    /* Mask expansion amount. */
    maskExpansion: OneDProperty
}
```

Source: [AfterEffects/26.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/AfterEffects/26.0/index.d.ts).
