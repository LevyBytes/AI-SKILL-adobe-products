# HalfEdge

Community declaration reference: Animate/22.0.

HalfEdge is the directed side of an edge on a Shape object. Each edge has two half edges. Scripts can traverse a shape's contours by walking through these half edges; for example, starting from one half edge, a script can follow every half edge around a contour and arrive back at the starting half edge.
Half edges have an order. One half edge covers one side of the edge, and the other covers the opposite side.

```typescript
declare class HalfEdge {
    /**
    - Unique integer identifier for the HalfEdge object.
      */
      readonly id: number
    /**
    - Returns the Edge object for this HalfEdge object. See Edge object.
      */
      getEdge(): Edge
    /**
    - Returns the next half edge on the current contour.
    - Note: Half edges carry direction and sequence order, but edges do not.
      */
      getNext(): HalfEdge
    /**
    - Returns the HalfEdge object on the edge's opposite side.
      */
      getOppositeHalfEdge(): HalfEdge
    /**
    - Returns the preceding HalfEdge object on the current contour.
    - Note: Half edges carry direction and sequence order, but edges do not.
      */
      getPrev(): HalfEdge
    /**
    - Returns the Vertex object at this HalfEdge object's head. See Vertex object.
      */
      getVertex(): Vertex
}
```

Source: [Animate/22.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Animate/22.0/index.d.ts).
