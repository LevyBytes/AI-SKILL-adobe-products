# BlendMode.SCREEN

Community declaration reference: Photoshop/2015.5.

Reads each channel's color data and multiplies the inverse values of the blend and base colors, so the result color is always lighter. Screening with black leaves color unchanged, while screening with white gives white. The effect resembles stacking multiple projected photographic slides.

```typescript
declare enum BlendMode {
    SCREEN = 9
}
```

Source: [Photoshop/2015.5/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Photoshop/2015.5/index.d.ts).
