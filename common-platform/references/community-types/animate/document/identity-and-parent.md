# Document identity and parent

Community declaration reference: Animate/22.0.

```typescript
declare class Document {
    /**
    - Automatically assigned unique integer for identifying a document during a Flash session. Pair it with fl.findDocumentDOM() to target a particular document in an action.
      */
      readonly id: number
    /**
    - Document name, meaning the FLA file name.
      */
      readonly name: string
}
```

Source: [Animate/22.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Animate/22.0/index.d.ts).
