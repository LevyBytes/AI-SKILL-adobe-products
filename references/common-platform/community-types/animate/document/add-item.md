# Document.addItem

Community declaration reference: Animate/22.0.

Places an item from any open document or library into the specified Document object.
@returns true when the add succeeds; false when it does not.
@param position Point whose x and y coordinates define where the item is added. The method uses a symbol's center, or the upper-left corner of a bitmap or video.
@param item Item object identifying both the item and the library it comes from.

```typescript
declare class Document {
    addItem(position: Point, item: Item): boolean
}
```

Source: [Animate/22.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Animate/22.0/index.d.ts).
