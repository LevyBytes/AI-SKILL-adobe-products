# HistoryState

Community declaration reference: Photoshop/2015.5.

Automatically stored document version, also added to the history states collection that records state whenever the document changes.

```typescript
declare class HistoryState {
    /**
    - History-state name.
      */
      readonly name: string
    /**

    - Container object.
      */
      readonly parent: object
    /**

    - When true, this history state is a snapshot.
      */
      readonly snapshot: boolean
    /**

    - Object class name.
      */
      readonly typename: string
}
```

Source: [Photoshop/2015.5/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Photoshop/2015.5/index.d.ts).
