# DrawingLayer.beginFrame

Community declaration reference: Animate/22.0.

Clears earlier drawingLayer output and prepares for the next drawing commands. Call it after drawingLayer.beginDraw(). Content drawn between drawingLayer.beginFrame() and drawingLayer.endFrame() stays visible on the Stage until the next beginFrame() and endFrame() pair. In this context, frame describes the drawing command span rather than timeline frames. Extensible tools are the usual callers for this method. See drawingLayer.beginDraw().

```typescript
declare class DrawingLayer {
    beginFrame(): void
}
```

Source: [Animate/22.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Animate/22.0/index.d.ts).
