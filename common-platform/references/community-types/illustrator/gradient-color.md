# GradientColor

Community declaration reference: Illustrator/2022.

Gradient color value specification.

```typescript
declare class GradientColor extends Color {
    /**
    - Gradient vector angle.
      */
      angle: number
    /**

    - Reference note: reference to the object defining the gradient.
      */
      gradient: Gradient
    /**

    - Gradient hilite vector angle.
      */
      hiliteAngle: number
    /**

    - Gradient hilite vector length.
      */
      hiliteLength: number
    /**

    - Gradient vector length.
      */
      length: number
    /**

    - Extra transformation produced by path manipulation.
      */
      matrix: Matrix
    /**

    - Gradient vector origin.
      */
      origin: Point | [number, number]
}
```

Source: [Illustrator/2022/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Illustrator/2022/index.d.ts).
