# Tag

Community declaration reference: Illustrator/2022.

Tag linked to a piece of artwork.

```typescript
declare class Tag {
    /**
    - Name assigned to the tag.
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

    - Data held by this tag.
      */
      value: string
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
