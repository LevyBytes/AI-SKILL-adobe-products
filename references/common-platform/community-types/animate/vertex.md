# Vertex

Community declaration reference: Animate/22.0.

Vertex is the part of the shape data structure that stores coordinate data.

```typescript
declare class Vertex {
    /**
    - Vertex x location, measured in pixels.
      */
      readonly x: number
    /**
    - Vertex y location, measured in pixels.
      */
      readonly y: number
    /**
    - Returns a HalfEdge object that shares this vertex.
      */
      getHalfEdge(): HalfEdge
    /**
    - Sets the vertex location. Call shape.beginEdit() before invoking this method.
    - @param x Floating-point x coordinate for the vertex position, in pixels.
    - @param y Floating-point y coordinate for the vertex position, in pixels.
      */
      setLocation(x: number, y: number): void
}
```

Source: [Animate/22.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Animate/22.0/index.d.ts).
