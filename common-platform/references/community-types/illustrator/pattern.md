# Pattern

Community declaration reference: Illustrator/2022.

Pattern object.

```typescript
declare class Pattern {
    /**
    - Name assigned to the pattern.
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
