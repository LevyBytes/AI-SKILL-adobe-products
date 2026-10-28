# Item.addData

Community declaration reference: Animate/22.0.

Adds data to a library item.
@param name String naming the data.
@param type String identifying the data type. Valid types are "integer", "integerArray", "double", "doubleArray", "string", and "byteArray".
@param data Data to attach to the specified library item. The data type follows the type parameter value; for example, type "integer" requires data to contain an integer.

```typescript
declare class Item {
    addData(name: string, type: string, data: any): void
}
```

Source: [Animate/22.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Animate/22.0/index.d.ts).
