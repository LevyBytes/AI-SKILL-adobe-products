# ObjectStyle object lifecycle

Community declaration reference: InDesign/2023.

```typescript
declare class ObjectStyle {
    /**
    - Creates a duplicate ObjectStyle.
      */
      duplicate(): ObjectStyle
    /**
    - Moves the ObjectStyle into the requested placement.
    - @param to Destination placement inside the container or relative to another object.
    - @param reference Reference object used for before or after placements.
      */
      move(to: LocationOptions, reference: ObjectStyle | ObjectStyleGroup | Document | Application): ObjectStyle
    /**
    - Deletes this style.
    - @param replacingWith Style to use instead of the deleted style.
      */
      remove(replacingWith: ObjectStyle): void
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
