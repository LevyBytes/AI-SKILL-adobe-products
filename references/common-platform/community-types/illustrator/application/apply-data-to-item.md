# Application.applyDataToItem

Community declaration reference: Illustrator/2022.

Writes the item-editor data back onto the item.
@param sessionIndex Session index for the top-most sequence containing the item being edited.
@param item Specifies the item UID.
@param data XML data to apply.

```typescript
declare class Application {
    applyDataToItem(sessionIndex: number, item: string, data: string): string
}
```

Source: [Illustrator/2022/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Illustrator/2022/index.d.ts).
