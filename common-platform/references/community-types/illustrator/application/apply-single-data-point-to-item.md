# Application.applySingleDataPointToItem

Community declaration reference: Illustrator/2022.

Applies data to the sequencer item addressed in the item editor.
@param sessionIndex Session index for the top-most sequence that owns the item being added.
@param item Specifies the item UID.
@param dataID XML data to apply.
@param data XML data to apply.

```typescript
declare class Application {
    applySingleDataPointToItem(
      sessionIndex: number,
      item: string,
      dataID: string,
      data: string,
      ): boolean
}
```

Source: [Illustrator/2022/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Illustrator/2022/index.d.ts).
