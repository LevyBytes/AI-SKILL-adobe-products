# AudioTrackEvent

Community declaration reference: Audition/2018.

Fires when one or more document-related events occur.

```typescript
declare class AudioTrackEvent {
    /**
    - Fires after a track has been added to a multitrack document.
      */
      static readonly EVENT_ADDED: string
    /**

    - Fires after a track has been removed from a multitrack document.
      */
      static readonly EVENT_REMOVED: string
    /**

    - Unique document identifier.
      */
      readonly documentID: string
    /**

    - Name assigned to the track.
      */
      readonly name: string
    /**

    - File path for the document.
      */
      readonly path: string
    /**

    - Unique track identifier.
      */
      readonly trackID: number
    /**

    - */
      static __(): any
}
```

Source: [Audition/2018/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Audition/2018/index.d.ts).
