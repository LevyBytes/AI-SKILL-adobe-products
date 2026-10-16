# PathItems.roundedRectangle

Community declaration reference: Illustrator/2022.

Creates a rounded-corner rectangular path item; this is not for accessing path items.
@param top
@param left
@param width
@param height
@param horizontalRadius Corner radius in the horizontal direction.
@param verticalRadius Corner radius in the vertical direction.
@param reversed Reversed state for the rectangle path.

```typescript
declare class PathItems extends Array<PathItem> {
    roundedRectangle(
      top: number,
      left: number,
      width: number,
      height: number,
      horizontalRadius?: number,
      verticalRadius?: number,
      reversed?: boolean,
      ): PathItem
}
```

Source: [Illustrator/2022/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Illustrator/2022/index.d.ts).
