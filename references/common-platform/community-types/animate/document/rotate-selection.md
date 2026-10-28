# Document.rotateSelection

Community declaration reference: Animate/22.0.

Rotates the selection by a specified degree value. The effect matches rotating an object with the Free Transform tool.
@param angle Floating-point value giving the rotation angle.
@param rotationPoint String selecting which bounding-box side to rotate around. Allowed values: "top right", "top left", "bottom right", "bottom left", "top center", "right center", "bottom center", and "left center". When omitted, the transformation point is used. Optional.

```typescript
declare class Document {
    rotateSelection(angle: number, rotationPoint?: string): void
}
```

Source: [Animate/22.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Animate/22.0/index.d.ts).
