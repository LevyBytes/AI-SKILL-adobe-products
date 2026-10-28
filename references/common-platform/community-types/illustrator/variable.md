# Variable

Community declaration reference: Illustrator/2022.

Data-driven graphics use this dynamic object.

```typescript
declare class Variable {
    /**
    - Type assigned to the variable.
      */
      kind: VariableKind
    /**

    - Name assigned to this variable.
      */
      name: string
    /**

    - Complete artwork collection for this document.
      */
      readonly pageItems: PageItems
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
