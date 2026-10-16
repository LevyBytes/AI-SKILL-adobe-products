# Document.getElementProperty

Community declaration reference: Animate/22.0.

Reads an Element property from the current selection. For accepted values, see the Property summary table for the Element object.
@returns Requested property value. Returns null for an indeterminate state, such as selected elements with different values. Returns undefined when the property is not valid for the selected element.
@param propertyName String naming the Element property whose value should be retrieved.

```typescript
declare class Document {
    getElementProperty(propertyName: string): any | null | undefined
}
```

Source: [Animate/22.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Animate/22.0/index.d.ts).
