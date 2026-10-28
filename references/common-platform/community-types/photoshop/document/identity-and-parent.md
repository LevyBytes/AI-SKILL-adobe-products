# Document identity and parent

Community declaration reference: Photoshop/2015.5.

```typescript
declare class Document {
    /**
    - Unique numeric ID assigned to this Document.
      */
      readonly id: number
    /**
    - Name assigned to the Document.
      */
      readonly name: string
    /**
    - Container object for this object.
      */
      readonly parent: object
    /**
    - Object class name.
      */
      readonly typename: string
}
```

Source: [Photoshop/2015.5/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Photoshop/2015.5/index.d.ts).
