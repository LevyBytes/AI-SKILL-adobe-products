# ArtStyle

Community declaration reference: Illustrator/2022.

Art style object.

```typescript
declare class ArtStyle {
    /**
    - Name assigned to the art style.
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

    - Use this brush or art style on object(s).
    - @param artItem Page item(s) to receive it.
      */
      applyTo(artItem: any): void
    /**

    - Merge an art style into the current style(s) for object(s).
    - @param artItem Page item(s) receiving the merge.
      */
      mergeTo(artItem: any): void
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
