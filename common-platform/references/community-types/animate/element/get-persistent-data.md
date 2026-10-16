# Element.getPersistentData

Community declaration reference: Animate/22.0.

Retrieves the data value identified by the name parameter.
The stored data's own type determines the returned data type (see element.setPersistentData()).
Persistent data is supported only by symbols and bitmaps.
@returns Data identified by the name parameter, or 0 when that data is absent.
@param name String identifying which data should be returned.

```typescript
declare class Element {
    getPersistentData(name: string): any | number
}
```

Source: [Animate/22.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Animate/22.0/index.d.ts).
