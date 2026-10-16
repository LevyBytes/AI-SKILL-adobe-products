# Matrix

Community declaration reference: Animate/22.0.

Matrix represents a transformation matrix.

```typescript
declare class Matrix {
    /**
    - Floating-point value for the transformation matrix element at (0,0). This value gives the object's x-axis scale factor.
    - In a matrix, the a and d properties represent scaling.
      */
      a: number
    /**
    - Floating-point value for the matrix element at (0,1). This value gives vertical skew for a shape by moving its right edge along the vertical axis.
    - In a matrix, matrix.b and matrix.c represent skewing (see matrix.c).
      */
      b: number
    /**
    - Floating-point value for the matrix element at (1,0). This value skews the object by shifting its bottom edge on a horizontal axis.
    - In a matrix, matrix.b and matrix.c represent skewing.
      */
      c: number
    /**
    - Floating-point value for the transformation matrix element at (1,1). This value gives the object's y-axis scale factor.
      */
      d: number
    /**
    - Floating-point value for the x-axis location of a symbol's registration point, also called the origin point or zero point, or for a shape's center. It defines the transformation's x translation.
    - Move an object by setting matrix.tx and matrix.ty (see matrix.ty).
      */
      tx: number
    /**
    - Floating-point value for the y-axis location of a symbol's registration point or a shape's center. It defines the transformation's y translation.
    - Move an object by setting matrix.tx and matrix.ty.
      */
      ty: number
}
```

Source: [Animate/22.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Animate/22.0/index.d.ts).
