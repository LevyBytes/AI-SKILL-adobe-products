# Library.findItemIndex

Community declaration reference: Animate/22.0.

Provides the library item's zero-based index. The library index is flat, so folders count in the main index; folder paths can identify nested items.
@returns Integer value containing the item's zero-based index.
@param namePath String naming the item. If the item is in a folder, include its name and path with slash notation.

```typescript
declare class Library {
    findItemIndex(namePath: string): number
}
```

Source: [Animate/22.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Animate/22.0/index.d.ts).
