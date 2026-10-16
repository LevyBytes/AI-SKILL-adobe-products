# Path

Community declaration reference: Animate/22.0.

A Path object stores a sequence of straight line segments, curved segments, or both, and is commonly used by extensible tools. This example obtains a Path instance through fl.drawingLayer:
path = fl.drawingLayer.newPath();
Related: drawingLayer object.

```typescript
declare class Path {
    /**
    - Integer count of points in the path. A newly created path contains 0 points.
      */
      readonly nPts: number
    /**
    - Adds a cubic Bezier curve segment to the path.
    - @param xAnchor Floating-point x coordinate for control point 1.
    - @param yAnchor Floating-point y coordinate for control point 1.
    - @param x2 Floating-point x coordinate for control point 2.
    - @param y2 Floating-point y coordinate for control point 2.
    - @param x3 Floating-point x coordinate for control point 3.
    - @param y3 Floating-point y coordinate for control point 3.
    - @param x4 Floating-point x coordinate for control point 4.
    - @param y4 Floating-point y coordinate for control point 4.
      */
      addCubicCurve(
      xAnchor: number,
      yAnchor: number,
      x2: number,
      y2: number,
      x3: number,
      y3: number,
      x4: number,
      y4: number,
      ): void
    /**
    - Adds a quadratic Bezier segment to the path.
    - @param xAnchor Floating-point x coordinate for control point 1.
    - @param yAnchor Floating-point y coordinate for control point 1.
    - @param x2 Floating-point x coordinate for control point 2.
    - @param y2 Floating-point y coordinate for control point 2.
    - @param x3 Floating-point x coordinate for control point 3.
    - @param y3 Floating-point y coordinate for control point 3.
      */
      addCurve(xAnchor: number, yAnchor: number, x2: number, y2: number, x3: number, y3: number): void
    /**
    - Inserts a point into the path.
    - @param x Floating-point x position for the point.
    - @param y Floating-point y position for the point.
      */
      addPoint(x: number, y: number): void
    /**
    - Deletes every point from the path.
      */
      clear(): void
    /**
    - Closes the path by appending a point at the first point's location and extending the path to it. With an empty path, no points are inserted.
      */
      close(): void
    /**
    - Builds a shape on the Stage from the current stroke and fill settings, then clears the path. Two optional parameters let you suppress fill and stroke on the resulting shape object. When either parameter is omitted or false, the current fill or stroke value is used.
    - @param bSuppressFill Boolean value that suppresses the shape fill when true. The default value is false. Optional.
    - @param bSuppressStroke Boolean value that suppresses the shape stroke when true. The default value is false. Optional.
      */
      makeShape(bSuppressFill?: boolean, bSuppressStroke?: boolean): void
    /**
    - Begins a fresh contour in the path.
      */
      newContour(): void
}
```

Source: [Animate/22.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Animate/22.0/index.d.ts).
