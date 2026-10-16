# Document.addDataToSelection

Community declaration reference: Animate/22.0.

Saves specified data with the selected objects. The data is written into the FLA file and remains available to JavaScript after reopening. Persistent data is supported only by symbols and bitmaps.
@param name String naming the persistent data.
@param type Data type definition. Acceptable values are "integer", "integerArray", "double", "doubleArray", "string", and "byteArray".
@param data Value to add. Valid types are determined by the type parameter.

```typescript
declare class Document {
    addDataToSelection(name: string, type: string, data: any): void
}
```

Source: [Animate/22.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Animate/22.0/index.d.ts).
