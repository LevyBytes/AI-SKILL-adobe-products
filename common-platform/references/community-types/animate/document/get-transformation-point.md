# Document.getTransformationPoint

Community declaration reference: Animate/22.0.

Gets where the current selection's transformation point is located. That point can support commutations such as rotate and skew. Note: the selected item type determines which coordinate space a transformation point uses. For more information, see document.setTransformationPoint().
@returns Point, for example {x:10, y:20}, whose x and y floating-point numbers locate the transformation point, also origin point or zero point, in the selected element's coordinate system.

```typescript
declare class Document {
    getTransformationPoint(): Point
}
```

Source: [Animate/22.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Animate/22.0/index.d.ts).
