# PatternColor

Community declaration reference: Illustrator/2022.

Pattern color value specification.

```typescript
declare class PatternColor extends Color {
    /**
    - Extra transformation produced by path manipulation.
      */
      matrix: Matrix
    /**

    - */
      pattern: Pattern
    /**

    - Whether the prototype is reflected before filling.
      */
      reflect: boolean
    /**

    - Axis around which to reflect.
      */
      reflectAngle: number
    /**

    - Angle to rotate the before filling.
      */
      rotation: number
    /**

    - Fraction to scale the prototype before filling.
      */
      scaleFactor: Point | [number, number]
    /**

    - Angle to slant the shear by.
      */
      shearAngle: number
    /**

    - Axis to shear with respect to.
      */
      shearAxis: number
    /**

    - Angle to translate the (unscaled) prototype before filling.
      */
      shiftAngle: number
    /**

    - Distance to translate the (unscaled) prototype before filling.
      */
      shiftDistance: number
}
```

Source: [Illustrator/2022/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Illustrator/2022/index.d.ts).
