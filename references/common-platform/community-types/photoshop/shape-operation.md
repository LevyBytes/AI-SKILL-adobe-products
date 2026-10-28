# ShapeOperation

Community declaration reference: Photoshop/2015.5.

Specifies how shapes combine when the destination image already contains a selection.

```typescript
declare enum ShapeOperation {
    /**
    - Adds the shapes.
      */
      SHAPEADD = 1,
    /**

    - Creates the overlapping area of the two shapes.
      */
      SHAPEINTERSECT = 3,
    /**

    - Removes the loaded shape from the destination image selection.
      */
      SHAPESUBTRACT = 4,
    /**

    - Uses the loaded selection instead of the destination image shape.
      */
      SHAPEXOR = 2,
}
```

Source: [Photoshop/2015.5/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Photoshop/2015.5/index.d.ts).
