# PathItems.rectangle

Community declaration reference: Illustrator/2022.

Creates a rectangular path item; this is not for accessing path items.
@param top Top coordinate for the rectangle bounds.
@param left Left coordinate for the rectangle bounds.
@param width Rectangle width.
@param height Rectangle height.
@param reversed Reversed state for the rectangle path.

```typescript
declare class PathItems extends Array<PathItem> {
    rectangle(top: number, left: number, width: number, height: number, reversed?: boolean): PathItem
}
```

Source: [Illustrator/2022/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Illustrator/2022/index.d.ts).
