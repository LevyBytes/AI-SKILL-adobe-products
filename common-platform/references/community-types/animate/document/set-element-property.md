# Document.setElementProperty

Community declaration reference: Animate/22.0.

Sets an Element property on selected objects in the document. With no selection, the method does nothing.
@param property String naming the Element property to set. For a full property and value list, see the Property summary table for the Element object.
The method cannot assign read-only properties, including element.elementType, element.top, or element.left.
@param value Integer value to set on the specified Element property.

```typescript
declare class Document {
    setElementProperty(property: string, value: number): void
}
```

Source: [Animate/22.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Animate/22.0/index.d.ts).
