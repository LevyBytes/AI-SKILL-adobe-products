# Document.getBlendMode

Community declaration reference: Animate/22.0.

Returns the blending mode string for the selected objects.
@returns String giving the selected objects' blending mode. If multiple selected objects use different blending modes, the returned string reflects the object at the highest depth.
Note: Expect unpredictable output when the selection includes objects that do not support blending modes, or objects whose blending mode value is "normal".

```typescript
declare class Document {
    getBlendMode(): string
}
```

Source: [Animate/22.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Animate/22.0/index.d.ts).
