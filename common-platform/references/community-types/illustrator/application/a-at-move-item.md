# Application.aATMoveItem

Community declaration reference: Illustrator/2022.

Moves the specified sequencer item.
@param sessionIndex Session index for the top-most sequence containing the item being moved.
@param moveThisID UID of the item to replace.
@param newSessionIndex Session index for the destination top-most sequence.
@param destinationSequenceID UID of the owning sequence.
@param destinationIndex Insertion index.

```typescript
declare class Application {
    aATMoveItem(
      sessionIndex: number,
      moveThisID: string,
      newSessionIndex: number,
      destinationSequenceID: string,
      destinationIndex: number,
      ): string
}
```

Source: [Illustrator/2022/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Illustrator/2022/index.d.ts).
