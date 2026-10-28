# Application.aATAddItem

Community declaration reference: Illustrator/2022.

Adds the specified to the sequencer.
@param sessionIndex Session index for the top-most sequence that owns the item being added.
@param destinationSequenceID UID of the owning sequence.
@param destinationIndex Item UID insertion point.
@param srcItemIDData Item ID used to construct the item.
@param type Source used to construct the item.

```typescript
declare class Application {
    aATAddItem(
      sessionIndex: number,
      destinationSequenceID: number,
      destinationIndex: number,
      srcItemIDData: string,
      type: string,
      ): string
}
```

Source: [Illustrator/2022/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Illustrator/2022/index.d.ts).
