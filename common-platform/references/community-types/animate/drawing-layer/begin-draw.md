# DrawingLayer.beginDraw

Community declaration reference: Animate/22.0.

Switches Flash into drawing mode, the temporary drawing state used while the mouse button is held down. Extensible tools are the usual callers for this method.
@param persistentDraw Optional Boolean value. When true, drawing from the previous frame stays on the Stage until a later beginDraw() or beginFrame() call. Here, frame means the drawing start/end interval, not timeline frames. For instance, a rectangle tool can show an outline while the user drags the mouse; set persistentDraw to true if that preview shape should remain after mouse release.

```typescript
declare class DrawingLayer {
    beginDraw(persistentDraw?: boolean): void
}
```

Source: [Animate/22.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Animate/22.0/index.d.ts).
