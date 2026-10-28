# DrawingLayer.curveTo

Community declaration reference: Animate/22.0.

Adds a quadratic curve segment from the current drawing position to the requested endpoint. Extensible tools are the usual callers for this method.
@param xCtl Floating-point x position for the control point.
@param yCtl Floating-point y position for the control point.
@param xEnd Floating-point x coordinate at the endpoint.
@param yEnd Floating-point y coordinate at the endpoint.

```typescript
declare class DrawingLayer {
    curveTo(xCtl: number, yCtl: number, xEnd: number, yEnd: number): void
}
```

Source: [Animate/22.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Animate/22.0/index.d.ts).
