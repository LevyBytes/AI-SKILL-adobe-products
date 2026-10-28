# Library.addItemToDocument

Community declaration reference: Animate/22.0.

Places the current item, or the named item, onto the Stage at the supplied position.
@returns Boolean result: true means the item was added to the document; false means it was not.
@param position Point giving the x,y coordinates for the item's center on the Stage.
@param namePath String naming the item. For an item inside a folder, include the folder path with slash notation. When namePath is omitted, the current Library selection supplies the item. Optional.

```typescript
declare class Library {
    addItemToDocument(position: Point, namePath?: string): boolean
}
```

Source: [Animate/22.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Animate/22.0/index.d.ts).
