# Layer identity and parent

Community declaration reference: Photoshop/2015.5.

```typescript
declare class Layer {
    /**
    - Unique ID for this layer.
      */
      readonly id: number
    /**
    - Layer name.
      */
      name: string
    /**
    - Container object.
      */
      readonly parent: object
    /**
    - Object class name.
      */
      readonly typename: string
}
```

Source: [Photoshop/2015.5/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Photoshop/2015.5/index.d.ts).
