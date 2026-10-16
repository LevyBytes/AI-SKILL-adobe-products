# Selection.stroke

Community declaration reference: Photoshop/2015.5.

Applies a stroke to the selection.
@param strokeColor Color used for the stroke.
@param width Stroke width.
@param location StrokeLocation for the stroke.
@param mode ColorBlendMode applied to the stroke.
@param opacity Percentage opacity for stroke color. Range: 1 to 100.
@param preserveTransparency When true, transparency is preserved.

```typescript
declare class Selection {
    stroke(
      strokeColor: any,
      width: number,
      location?: StrokeLocation,
      mode?: ColorBlendMode,
      opacity?: number,
      preserveTransparency?: boolean,
      ): void
}
```

Source: [Photoshop/2015.5/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Photoshop/2015.5/index.d.ts).
