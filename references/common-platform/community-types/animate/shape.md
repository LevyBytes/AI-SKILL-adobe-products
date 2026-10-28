# Shape

Community declaration reference: Animate/22.0.

Shape extends Element. Compared with the drawing APIs, Shape gives scripts finer control while creating or editing Stage geometry, which is needed for useful effects and other drawing commands (see Element object).
Any Shape method or property that modifies a shape or one of its child parts must run between shape.beginEdit() and shape.endEdit() calls.

```typescript
declare class Shape extends Element {
    /**
    - Contour objects that belong to the shape (see Contour object).
      */
      readonly contours: Contour[]
    /**
    - Edge objects for the shape (see Edge object).
      */
      readonly edges: Edge[]
    /**
    - True indicates that the shape is a drawing object.
      */
      readonly isDrawingObject: boolean
    /**
    - True indicates that the shape floats above the shape in the parent frame or group. In that state, the shape has its own matrix, similar to a drawing object.
      */
      readonly isFloating: boolean
    /**
    - True indicates that the shape is a group. A group may include elements such as text elements and symbols, but the group itself is still treated as a shape, so shape.isGroup can be used regardless of the contained element types.
      */
      readonly isGroup: boolean
    /**
    - True indicates that the shape is a primitive Oval object created with the Oval Primitive tool.
      */
      readonly isOvalObject: boolean
    /**
    - True indicates that the shape is a primitive Rectangle object created with the Rectangle Primitive tool.
      */
      readonly isRectangleObject: boolean
    /**
    - Objects in the selected group. This property is available only when shape.isGroup is true. Raw shapes inside the group are excluded from shape.members.
    - For example, a group with three drawing objects and three raw shapes gives shape.members three entries, one for each drawing object. A group containing only raw shapes returns an empty array.
      */
      members: any[]
    /**
    - Number of cubic segments in the shape.
      */
      readonly numCubicSegments: number
    /**
    - Vertex objects for the shape (see Vertex object).
      */
      readonly vertices: Vertex[]
    /**
    - Returns points defining a cubic curve.
    - @returns Points defining the cubic curve for the Edge object that matches the specified cubicSegmentIndex (see edge.cubicSegmentIndex).
    - @param cubicSegmentIndex Integer selecting the cubic segment whose points should be returned.
      */
      getCubicSegmentPoints(cubicSegmentIndex: number): Point[]
    /**
    - Starts an edit session. Call this method before any commands that modify the Shape object or its subordinate parts.
      */
      beginEdit(): void
    /**
    - Removes the specified edge. Call shape.beginEdit() before invoking this method.
    - @param index Zero-based index of the edge to remove from shape.edges. Calling this method changes shape.edges.length.
      */
      deleteEdge(index: number): void
    /**
    - Ends the shape edit session. Changes made to the Shape object or its subordinate parts are then applied to the shape. Call this method after commands that modify the Shape object or any subordinate part.
      */
      endEdit(): void
}
```

Source: [Animate/22.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Animate/22.0/index.d.ts).
