# Contour

Community declaration reference: Animate/22.0.

Contour represents a closed path made from half edges along a shape boundary.

```typescript
declare class Contour {
    /**
    - A Fill object.
      */
      fill: Fill
    /**
    - True means the contour encloses an area; false means it does not.
      */
      readonly interior: boolean
    /**
    - Indicates contour orientation. The integer is -1 for counterclockwise, 1 for clockwise, and 0 when the contour has no area.
      */
      readonly orientation: number
    /**
    - Returns a HalfEdge object on the selection's contour.
    - @returns A HalfEdge object
      */
      getHalfEdge(): HalfEdge
}
```

Source: [Animate/22.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Animate/22.0/index.d.ts).
