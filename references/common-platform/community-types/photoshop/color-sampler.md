# ColorSampler

Community declaration reference: Photoshop/2015.5.

Color sampler object within a document.

```typescript
declare class ColorSampler {
    /**
    - Sampled color value.
      */
      readonly color: SolidColor
    /**

    - Container for this object.
      */
      readonly parent: object
    /**

    - Document position for the color sampler.
      */
      readonly position: UnitPoint
    /**

    - Object class-name value.
      */
      readonly typename: string
    /**

    - Creates an element.
      */
      add(): ColorSampler
    /**

    - Repositions the color sampler.
    - @param position Destination position expressed as a unit value.
      */
      move(position: UnitPoint): void
    /**

    - Removes this object.
      */
      remove(): void
    /**

    - Removes every element.
      */
      removeAll(): void
}
```

Source: [Photoshop/2015.5/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Photoshop/2015.5/index.d.ts).
