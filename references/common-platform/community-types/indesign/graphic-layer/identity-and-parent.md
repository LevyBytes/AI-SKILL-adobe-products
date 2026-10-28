# GraphicLayer identity and parent

Community declaration reference: InDesign/2023.

```typescript
declare class GraphicLayer {
    /**
    - Unique ID for the GraphicLayer.
      */
      readonly id: number
    /**
    - Position of the GraphicLayer inside its containing object.
      */
      readonly index: number
    /**
    - Returns true when the object specifier resolves to valid objects.
      */
      readonly isValid: boolean
    /**
    - GraphicLayer name.
      */
      readonly name: string
    /**
    - Parent of the GraphicLayer, either a GraphicLayerOption or GraphicLayer.
      */
      readonly parent: any
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
