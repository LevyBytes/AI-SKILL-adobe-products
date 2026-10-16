# AudioClipEvent

Community declaration reference: Audition/2018.

Fired when one or more document-related events occur.

```typescript
declare class AudioClipEvent {
    /**
    - Fired after a clip has been added to a multitrack document.
      */
      static readonly EVENT_ADDED: string
    /**

    - Fired after a clip has moved within a multitrack document.
      */
      static readonly EVENT_MOVED: string
    /**

    - Fired after a clip has been removed from a multitrack document.
      */
      static readonly EVENT_REMOVED: string
    /**

    - Clip unique ID.
      */
      readonly clipID: string
    /**

    - Document unique ID.
      */
      readonly documentID: string
    /**

    - Document file path.
      */
      readonly path: string
    /**

    - Track unique ID.
      */
      readonly trackID: number
    /**

    - Track name.
      */
      readonly trackName: string
    /**

    - */
      static __(): any
}
```

Source: [Audition/2018/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Audition/2018/index.d.ts).
