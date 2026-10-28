# _Math

Community declaration reference: Animate/22.0.

fl.Math exposes the Math object as a read-only property of the flash object. Its methods handle common mathematical operations.

```typescript
declare class _Math {
    /**
    - Concatenates matrices and returns the result.
    - @returns A concatenated object matrix.
    - @params Matrix objects to concatenate (see Matrix object). Required fields: a, b, c, d, tx, ty.
      */
      concatMatrix(mat1: Matrix, mat2: Matrix): Matrix
    /**
    -
    - @param mat Matrix object to invert (see Matrix object). It must include fields a, b, c, d, tx, and ty.
      */
      invertMatrix(mat: Matrix): Matrix
    /**
    - Calculates how far apart two points are.
    - @returns Floating-point distance between the points.
    - @params Points whose distance is measured.
      */
      pointDistance(pt1: Point, pt2: Point): number
    /**
    - Transforms a point by applying a matrix.
    - @returns The transformed point.
    - @param matrix Matrix object applied to the point.
    - @param point Point receiving the matrix transform.
      */
      transformPoint(matrix: Matrix, point: Point): Point
}
```

Source: [Animate/22.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Animate/22.0/index.d.ts).
