# Document.setTransformationPoint

Community declaration reference: Animate/22.0.

Sets the current selection's transformation point position.
@param transformationPoint Point, for example {x:10, y:20}, whose x and y floating-point numbers set the transformation point for these elements:
- Shapes: transformationPoint is relative to the document (0,0 is the Stage upper-left corner).
- Symbols: transformationPoint uses the symbol registration point as its reference (0,0 is at the registration point).
- Text: transformationPoint is relative to the text field (0,0 is the text field upper-left corner).
- Bitmaps/videos: transformationPoint uses bitmap/video coordinates; 0,0 is the bitmap or video's upper-left corner.
- Drawing objects, primitive ovals and rectangles, and groups: transformationPoint uses document coordinates; 0,0 is the Stage upper-left corner. Use element.setTransformationPoint() to place transformationPoint relative to an object's, primitive's, or group's center point.

```typescript
declare class Document {
    setTransformationPoint(transformationPoint: Point): void
}
```

Source: [Animate/22.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Animate/22.0/index.d.ts).
