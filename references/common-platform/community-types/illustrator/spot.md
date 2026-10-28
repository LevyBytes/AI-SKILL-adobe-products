# Spot

Community declaration reference: Illustrator/2022.

Custom color object.

```typescript
declare class Spot {
    /**
    - */
      color: Color
    /**

    - Custom color type.
      */
      colorType: ColorModel
    /**

    - Name assigned to the custom color.
      */
      name: string
    /**

    - Owning container for this object.
      */
      readonly parent: object
    /**

    - Spot color kind, i.e. RGB, CMYK or LAB, naming the color-kind category held in the spot.
      */
      readonly spotKind: SpotColorKind
    /**

    - Object class name.
      */
      readonly typename: string
    /**

    - Return the spot's internal color.
      */
      getInternalColor(): number[]
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
