# Document.addNewScene

Community declaration reference: Animate/22.0.

Adds a scene (Timeline object) immediately after the selected scene and selects the new scene. If the requested scene name already exists, no scene is added and the method returns an error.
@returns true when the scene is added successfully; otherwise false.
@param name Name for the scene. If omitted, a generated scene name is used.

```typescript
declare class Document {
    addNewScene(name?: string): boolean
}
```

Source: [Animate/22.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Animate/22.0/index.d.ts).
