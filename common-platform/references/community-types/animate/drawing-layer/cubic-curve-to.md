# DrawingLayer.cubicCurveTo

Community declaration reference: Animate/22.0.

From the current pen location, draws a cubic curve using these parameters as the cubic segment coordinates. Extensible tools are the usual callers for this method.
@param x1Ctrl Floating-point x location for the first control point.
@param y1Ctrl Floating-point y location for the first control point.
@param x2Ctl Floating-point x position for the middle control point.
@param y2Ctl Floating-point y position for the middle control point.
@param xEnd Floating-point x coordinate at the endpoint.
@param yEnd Floating-point y coordinate at the endpoint.

```typescript
declare class DrawingLayer {
    cubicCurveTo(
        x1Ctrl: number,
        y1Ctrl: number,
        x2Ctl: number,
        y2Ctl: number,
        xEnd: number,
        yEnd: number,
        ): void
}
```

Source: [Animate/22.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Animate/22.0/index.d.ts).
