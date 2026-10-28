# PathItems.star

Community declaration reference: Illustrator/2022.

Creates a star-shaped path item; this is not for accessing path items.
@param centerX
@param centerY
@param radius Outside radius of the star points.
@param innerRadius Inside radius of the star points.
@param points Number of points on the star.
@param reversed Reversed state for the star path.

```typescript
declare class PathItems extends Array<PathItem> {
    star(
      centerX?: number,
      centerY?: number,
      radius?: number,
      innerRadius?: number,
      points?: number,
      reversed?: boolean,
      ): PathItem
}
```

Source: [Illustrator/2022/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Illustrator/2022/index.d.ts).
