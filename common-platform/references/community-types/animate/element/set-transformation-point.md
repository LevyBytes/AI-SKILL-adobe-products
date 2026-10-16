# Element.setTransformationPoint

Community declaration reference: Animate/22.0.

Sets the element's transformation point position. This method is nearly the same as document.setTransformationPoint(), with one difference: it can set transformation points for elements without selecting them first. It moves the transformation point only; element.transformX and element.transformY move the element itself.
@param transformationPoint Point such as {x:10, y:20}, where x and y are floating-point numbers, for an element or group's transformation point.
- Shapes: use document coordinates; (0,0) is the Stage upper-left corner.
- Symbols: use the symbol registration point; (0,0) is located at the registration point.
- Text: use text-field coordinates; (0,0) is the text field upper-left corner. - Bitmaps/videos: use bitmap/video coordinates; (0,0) is the bitmap or video upper-left corner.
- Drawing objects, primitive objects, and groups: use coordinates relative to the stage.

```typescript
declare class Element {
    setTransformationPoint(transformationPoint: Point): void
}
```

Source: [Animate/22.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Animate/22.0/index.d.ts).
