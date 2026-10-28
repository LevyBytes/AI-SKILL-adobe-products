# Element.setPersistentData

Community declaration reference: Animate/22.0.

Stores data on an element. The data remains available after reopening the FLA file containing that element. Persistent data is supported only by symbols and bitmaps.
@param name String used to associate a name with the data. That name is used later to retrieve the data.
@param type String defining the data type. Use one of "integer", "integerArray", "double", "doubleArray", "string", or "byteArray".
@param value Value to associate with the object. The value data type depends on the type parameter, and the specified value should match that parameter's data type.

```typescript
declare class Element {
    setPersistentData(name: string, type: string, value: any): void
}
```

Source: [Animate/22.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Animate/22.0/index.d.ts).
