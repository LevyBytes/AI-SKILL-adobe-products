# Application.putCustomOptions

Community declaration reference: Photoshop/2015.5.

Stores user objects in the Photoshop registry.
@param key Unique string ID for the user object.
@param customObject User-created custom object to store in the registry.
@param persistent When true, the object remains after script completion.

```typescript
declare class Application {
    putCustomOptions(key: string, customObject: ActionDescriptor, persistent?: boolean): void
}
```

Source: [Photoshop/2015.5/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Photoshop/2015.5/index.d.ts).
