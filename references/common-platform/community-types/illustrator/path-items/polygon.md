# PathItems.polygon

Community declaration reference: Illustrator/2022.

Creates a regular polygon path item; this is not for accessing path items.
@param centerX
@param centerY
@param radius Radius of the polygon points.
@param sides Number of sides on the polygon.
@param reversed Reversed state for the polygon path.

```typescript
declare class PathItems extends Array<PathItem> {
    polygon(
      centerX?: number,
      centerY?: number,
      radius?: number,
      sides?: number,
      reversed?: boolean,
      ): PathItem
}
```

Source: [Illustrator/2022/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Illustrator/2022/index.d.ts).
