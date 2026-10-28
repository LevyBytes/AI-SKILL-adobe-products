# Document.addNewPublishProfile

Community declaration reference: Animate/22.0.

Creates a publish profile and selects it as current.
@returns Integer index of the new profile in the profiles list. Returns -1 when a profile cannot be created.
@param profileName String containing the unique name for the new profile. When omitted, a default name is supplied. May be omitted.

```typescript
declare class Document {
    addNewPublishProfile(profileName?: string): number
}
```

Source: [Animate/22.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Animate/22.0/index.d.ts).
