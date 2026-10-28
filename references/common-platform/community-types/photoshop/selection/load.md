# Selection.load

Community declaration reference: Photoshop/2015.5.

Reads a selection from the given channel.
@param from Channel used as the selection source.
@param combination Method for combining channel content with the current selection.
@param inverting When true, selects the inverse of the channel content.

```typescript
declare class Selection {
    load(from: Channel, combination?: SelectionType, inverting?: boolean): void
}
```

Source: [Photoshop/2015.5/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Photoshop/2015.5/index.d.ts).
