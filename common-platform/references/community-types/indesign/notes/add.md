# Notes.add

Community declaration reference: InDesign/2023.

Adds a Note.
@param at Placement relative to the reference object or inside the owning container.
@param reference Reference object. Required when at is before or after.
@param withProperties Starting property values for the Note being created.

```typescript
declare class Notes {
    add(at?: LocationOptions, reference?: Note | InsertionPoint, withProperties?: object): Note
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
