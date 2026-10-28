# GradientStop

Community declaration reference: Illustrator/2022.

Gradient stop object.

```typescript
declare class GradientStop {
    /**
    - Color associated with this gradient stop.
      */
      color: Color
    /**

    - Midpoint key expressed as a percent value.
      */
      midPoint: number
    /**

    - Gradient stop opacity value, between 0.0 and 100.0.
      */
      opacity: number
    /**

    - Owning container for this object.
      */
      readonly parent: object
    /**

    - Color location within the blend, in percent.
      */
      rampPoint: number
    /**

    - Object class name.
      */
      readonly typename: string
    /**

    - Remove this object.
      */
      remove(): void
    /**

    - Remove every element.
      */
      removeAll(): void
}
```

Source: [Illustrator/2022/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Illustrator/2022/index.d.ts).
