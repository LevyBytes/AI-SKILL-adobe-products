# DataSet

Community declaration reference: Illustrator/2022.

Variable set with linked dynamic data used for dynamic publishing.

```typescript
declare class DataSet {
    /**
    - Name assigned to this dataset.
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

    - Show the dynamic data captured by the dataset.
      */
      display(): void
    /**

    - Remove this object.
      */
      remove(): void
    /**

    - Remove every element.
      */
      removeAll(): void
    /**

    - Apply the active dataset's dynamic data to the artboard again.
      */
      update(): void
}
```

Source: [Illustrator/2022/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Illustrator/2022/index.d.ts).
