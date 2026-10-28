# Library.setItemProperty

Community declaration reference: Animate/22.0.

Assigns a property on all selected library items, ignoring folders.
@param property String containing the property name to set. For available properties, see the Property summary table for the Item object and the property summaries for its subclasses. For Item subclasses, consult page 14, "Summary of the DOM structure" (https://help.adobe.com/archive/en_US/flash/cs5/flash_cs5_extending.pdf).
@param value Value to assign to the named property.

```typescript
declare class Library {
    setItemProperty(property: string, value: any): void
}
```

Source: [Animate/22.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Animate/22.0/index.d.ts).
