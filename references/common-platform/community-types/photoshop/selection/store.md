# Selection.store

Community declaration reference: Photoshop/2015.5.

Saves the selection into a channel.
@param into Channel receiving the stored selection.
@param combination Method for adding the selection to the channel's existing contents.

```typescript
declare class Selection {
    store(into: Channel, combination?: SelectionType): void
}
```

Source: [Photoshop/2015.5/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Photoshop/2015.5/index.d.ts).
