# Flash.selectElement

Community declaration reference: Animate/22.0.

Enables selection or editing for an element. This method is typically used on objects returned by fl.findObjectInDocByName() or fl.findObjectInDocByType().
@returns Boolean true when the element is selected successfully; otherwise false.
@param elementObject Element object to select.
@param editMode Boolean setting: true edits the element, and false only selects it.

```typescript
declare class Flash {
    selectElement(elementObject: Element, editMode: boolean): boolean
}
```

Source: [Animate/22.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Animate/22.0/index.d.ts).
