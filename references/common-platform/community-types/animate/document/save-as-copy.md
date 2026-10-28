# Document.saveAsCopy

Community declaration reference: Animate/22.0.

Saves a new FLA file from the existing document object, optionally saving only the current Stage selection.
@returns Boolean; true is saved, false otherwise.
@param URI String: URI destination for the new FLA file. It must point to a local file. Example: file:///c|/tests/myTest.fla.
@param selectionOnly Optional. Boolean choosing whether the new FLA file contains only the current Stage selection.

```typescript
declare class Document {
    saveAsCopy(URI: string, selectionOnly?: boolean): boolean
}
```

Source: [Animate/22.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Animate/22.0/index.d.ts).
