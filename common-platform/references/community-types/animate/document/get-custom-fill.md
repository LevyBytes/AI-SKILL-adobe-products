# Document.getCustomFill

Community declaration reference: Animate/22.0.

Retrieves the fill object from the selected shape or, when requested, from the Tools panel and Property inspector.
@returns Fill object identified by objectToFill when successful; otherwise undefined.
@param objectToFill String identifying the fill source. Valid values:
- "toolbar" gets the fill object from the Tools panel and Property inspector.
- "selection" gets the fill object from the selection.
When omitted, "selection" is used. With no selection, the method returns undefined. Optional.

```typescript
declare class Document {
    getCustomFill(objectToFill?: string): Fill | undefined
}
```

Source: [Animate/22.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Animate/22.0/index.d.ts).
