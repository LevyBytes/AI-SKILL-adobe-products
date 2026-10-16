# DrawingLayer.endFrame

Community declaration reference: Animate/22.0.

Marks the end of a drawing command group. That group is all content drawn between drawingLayer.beginFrame() and drawingLayer.endFrame(). The next drawingLayer.beginFrame() call removes whatever was produced by this group. Extensible tools are the usual callers for this method.

```typescript
declare class DrawingLayer {
    endFrame(): void
}
```

Source: [Animate/22.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Animate/22.0/index.d.ts).
