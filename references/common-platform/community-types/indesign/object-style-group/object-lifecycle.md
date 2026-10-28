# ObjectStyleGroup object lifecycle

Community declaration reference: InDesign/2023.

```typescript
declare class ObjectStyleGroup {
    /**
    - Creates a duplicate of the ObjectStyleGroup.
      */
      duplicate(): ObjectStyleGroup
    /**
    - Moves the ObjectStyleGroup into the specified location.
    - @param to New location inside the container object, or relative to the reference object.
    - @param reference Reference object. Note: needed for LocationOptions before/after placements.
      */
      move(to: LocationOptions, reference: ObjectStyle | ObjectStyleGroup | Document | Application): ObjectStyleGroup
    /**
    - Removes the ObjectStyleGroup.
    - @param replacingWith ObjectStyleGroup used instead of the deleted ObjectStyleGroup.
      */
      remove(replacingWith: ObjectStyle): void
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
