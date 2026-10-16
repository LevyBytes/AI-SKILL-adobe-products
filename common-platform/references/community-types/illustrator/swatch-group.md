# SwatchGroup

Community declaration reference: Illustrator/2022.

SwatchGroup object.

```typescript
declare class SwatchGroup {
    /**
    - Swatch group name.
      */
      name: string
    /**

    - Owning container for this object.
      */
      readonly parent: object
    /**

    - Object class name.
      */
      readonly typename: string
    /**

    - Insert a spot swatch into the group.
    - @param spot Spot swatch added to the group.
      */
      addSpot(spot: Spot): void
    /**

    - Insert a swatch into the group.
    - @param swatch Swatch added to the group.
      */
      addSwatch(swatch: Swatch): void
    /**

    - Return every swatch from the swatch group.
      */
      getAllSwatches(): Swatch[]
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
