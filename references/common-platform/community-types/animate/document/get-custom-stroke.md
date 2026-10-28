# Document.getCustomStroke

Community declaration reference: Animate/22.0.

Returns the stroke object from the selected shape or, when requested, from the Tools panel and Property inspector.
@returns Stroke object identified by locationOfStroke when successful; otherwise undefined.
@param locationOfStroke String identifying the stroke source. Valid values:
- "toolbar", when set, gets the stroke object from the Tools panel and Property inspector.
- "selection", when set, gets the stroke object from the selection.
When omitted, "selection" is used. With no selection, the method returns undefined. Optional.

```typescript
declare class Document {
    getCustomStroke(locationOfStroke?: string): Stroke | undefined
}
```

Source: [Animate/22.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Animate/22.0/index.d.ts).
