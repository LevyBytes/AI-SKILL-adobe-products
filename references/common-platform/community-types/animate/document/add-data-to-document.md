# Document.addDataToDocument

Community declaration reference: Animate/22.0.

Saves specified data into a document. The data is written into the FLA file and is available to JavaScript after the file is reopened.
@param name String naming the data to add.
@param type String defining the data type. Acceptable values are "integer", "integerArray", "double", "doubleArray", "string", and "byteArray".
@param data Value to add. Valid types are determined by the type parameter.

```typescript
declare class Document {
    addDataToDocument(name: string, type: string, data: any): void
}
```

Source: [Animate/22.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Animate/22.0/index.d.ts).
