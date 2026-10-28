# PathItem.fillPath

Community declaration reference: Photoshop/2015.5.

Fills the region enclosed by the path.
@param fillColor Fill color for this path.
@param mode Fill blending mode for this path.
@param opacity Path-fill opacity percentage. Range: 0.0 to 100.0.
@param preserveTransparency When true, keeps transparency intact.
@param feather Feather amount in pixels. Range: 0.0 to 250.0.
@param antiAlias When true, anti-aliasing is used for the selection.
@param wholePath When true, uses every subpath.

```typescript
declare class PathItem {
    fillPath(
      fillColor?: any,
      mode?: ColorBlendMode,
      opacity?: number,
      preserveTransparency?: boolean,
      feather?: number,
      antiAlias?: boolean,
      wholePath?: boolean,
      ): void
}
```

Source: [Photoshop/2015.5/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Photoshop/2015.5/index.d.ts).
