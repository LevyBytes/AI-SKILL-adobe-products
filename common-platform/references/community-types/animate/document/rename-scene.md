# Document.renameScene

Community declaration reference: Animate/22.0.

Changes the selected scene name in the Scenes panel. The replacement name must be unique.
@returns true when the name is changed successfully; otherwise false. For example, a non-unique name makes the method return false.
@param name String containing the new scene name.

```typescript
declare class Document {
    renameScene(name: string): boolean
}
```

Source: [Animate/22.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Animate/22.0/index.d.ts).
