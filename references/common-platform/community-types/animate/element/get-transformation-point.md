# Element.getTransformationPoint

Community declaration reference: Animate/22.0.

Retrieves the specified element's transformation point value.
Transformation point coordinates are relative to different origins depending on the selected item type. For more information, see element.setTransformationPoint().
@returns Point such as {x:10, y:20}, where x and y are floating-point numbers, locating the transformation point, also called origin point or zero point, inside the element coordinate system.

```typescript
declare class Element {
    getTransformationPoint(): Point
}
```

Source: [Animate/22.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Animate/22.0/index.d.ts).
