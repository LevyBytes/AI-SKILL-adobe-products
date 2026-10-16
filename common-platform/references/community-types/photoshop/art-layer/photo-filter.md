# ArtLayer.photoFilter

Community declaration reference: Photoshop/2015.5.

Adjusts layer color balance and temperature as though applying a color filter.
@param fillColor Fill color to use.
@param density Filter-effect density as a percentage. Range: 1 to 100.
@param preserveLuminosity When true, keeps luminosity unchanged.

```typescript
declare class ArtLayer extends Layer {
    photoFilter(fillColor?: SolidColor, density?: number, preserveLuminosity?: boolean): void
}
```

Source: [Photoshop/2015.5/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Photoshop/2015.5/index.d.ts).
