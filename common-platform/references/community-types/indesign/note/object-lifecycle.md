# Note object lifecycle

Community declaration reference: InDesign/2023.

```typescript
declare class Note {
    /**
    - Moves the note to a supplied location.
    - @param to New location relative to the reference object or within the parent object.
    - @param reference Reference object. Note: Needed when to requests placement before or after.
      */
      move(to: LocationOptions, reference: Text | Story): Note
    /**
    - Removes this Note object.
      */
      remove(): void
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
