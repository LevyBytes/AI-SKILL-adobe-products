# PathItems.ellipse

Community declaration reference: Illustrator/2022.

Creates an elliptical path item.
@param top Bounds value for the ellipse.
@param left Bounds value for the ellipse.
@param width Bounds value for the ellipse.
@param height Ellipse height.
@param reversed Reversed state for the ellipse path.
@param inscribed Inscribed state for the ellipse path.

```typescript
declare class PathItems extends Array<PathItem> {
    ellipse(
      top?: number,
      left?: number,
      width?: number,
      height?: number,
      reversed?: boolean,
      inscribed?: boolean,
      ): PathItem
}
```

Source: [Illustrator/2022/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Illustrator/2022/index.d.ts).
