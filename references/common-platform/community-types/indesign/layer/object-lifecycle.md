# Layer object lifecycle

Community declaration reference: InDesign/2023.

```typescript
declare class Layer {
    /**
    - Creates a duplicate Layer.
      */
      duplicate(): Layer
    /**
    - Moves the Layer to the requested location.
    - @param to Location relative to the reference object or inside the containing object.
    - @param reference Reference object. Note: required when to specifies before or after.
      */
      move(to: LocationOptions, reference: Layer): Layer
    /**
    - Deletes this Layer.
      */
      remove(): void
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
