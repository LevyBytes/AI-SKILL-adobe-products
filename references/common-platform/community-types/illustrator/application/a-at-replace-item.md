# Application.aATReplaceItem

Community declaration reference: Illustrator/2022.

Replaces the specified sequencer item.
@param sessionIndex Session index for the top-most sequence that owns the item being added.
@param replaceThisID UID of the item to replace.
@param srcItemIDData Item ID used to construct the item.
@param type Source used to construct the item.

```typescript
declare class Application {
    aATReplaceItem(
      sessionIndex: number,
      replaceThisID: number,
      srcItemIDData: string,
      type: string,
      ): string
}
```

Source: [Illustrator/2022/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Illustrator/2022/index.d.ts).
