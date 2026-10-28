# Document.deletePublishProfile

Community declaration reference: Animate/22.0.

Deletes the active profile when more than one profile exists. At least one profile must remain.
@returns Integer index of the new current profile. When no replacement profile is available, the current profile stays unchanged and its index is returned.

```typescript
declare class Document {
    deletePublishProfile(): number
}
```

Source: [Animate/22.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Animate/22.0/index.d.ts).
