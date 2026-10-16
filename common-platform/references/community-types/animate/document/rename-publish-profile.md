# Document.renamePublishProfile

Community declaration reference: Animate/22.0.

Changes the current profile name.
@returns true when the name is changed successfully; otherwise false.
@param profileNewName Optional parameter giving the profile's new name. The new name must be unique. When omitted, a default name is supplied.

```typescript
declare class Document {
    renamePublishProfile(profileNewName?: string): boolean
}
```

Source: [Animate/22.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Animate/22.0/index.d.ts).
