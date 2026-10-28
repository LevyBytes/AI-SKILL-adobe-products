# Library.getItemType

Community declaration reference: Animate/22.0.

Reports the type of the current selection or of the item identified by a library path.
@returns String describing the object type. For possible return values, see item.itemType.
@param namePath String naming the item. For an item inside a folder, provide its name and path with slash notation. When namePath is omitted, Flash returns the type of the current selection. If multiple items are selected and no namePath is supplied, Flash ignores the command. This parameter is optional.

```typescript
declare class Library {
    getItemType(namePath?: string): string
}
```

Source: [Animate/22.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Animate/22.0/index.d.ts).
