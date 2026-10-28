# Swatch

Community declaration reference: Illustrator/2022.

Color swatch object.

```typescript
declare class Swatch {
    /**
    - Color data stored by the swatch.
      */
      color: Color
    /**

    - Name assigned to the swatch.
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
