# Document.duplicatePublishProfile

Community declaration reference: Animate/22.0.

Copies the active profile and focuses the duplicate.
@returns Integer index for the new profile in the profile list. Returns -1 when the profile cannot be duplicated.
@param profileName String for the duplicated profile's unique name. When omitted, the default name is used. Optional.

```typescript
declare class Document {
    duplicatePublishProfile(profileName?: string): number
}
```

Source: [Animate/22.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Animate/22.0/index.d.ts).
