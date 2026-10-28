# Document.setFilterProperty

Community declaration reference: Animate/22.0.

Sets a filter property on the currently selected objects, assuming the object supports that filter.
@param property String naming the property to set. Allowed values: "blurX", "blurY", "quality", angle", "distance", "strength", "knockout", "inner", "bevelType", "color", "shadowColor", and "highlightColor".
@param filterIndex Integer identifying the filter's zero-based position in the Filters list.
@param value Number or string used as the specified filter property value. Acceptable values vary by property and filter.

```typescript
declare class Document {
    setFilterProperty(property: string, filterIndex: number, value: number | string): void
}
```

Source: [Animate/22.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Animate/22.0/index.d.ts).
