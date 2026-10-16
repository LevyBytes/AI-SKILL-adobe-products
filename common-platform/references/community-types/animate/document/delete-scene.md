# Document.deleteScene

Community declaration reference: Animate/22.0.

Deletes the current scene (Timeline object). If the removed scene was not last, the next scene becomes the current Timeline object; if it was last, the first object becomes current. With only one Timeline object (scene), the method returns false.
@returns true when the scene is deleted successfully; otherwise false.

```typescript
declare class Document {
    deleteScene(): boolean
}
```

Source: [Animate/22.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Animate/22.0/index.d.ts).
