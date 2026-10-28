# TransportEvent

Community declaration reference: Audition/2018.

Carries Audition transport changes, such as playback starting.

```typescript
declare class TransportEvent {
    /**
    - Fires when looping turns on.
      */
      static readonly EVENT_LOOPSTARTED: string
    /**

    - Fires when looping turns off.
      */
      static readonly EVENT_LOOPSTOPPED: string
    /**

    - Fires when the active player enters pause.
      */
      static readonly EVENT_PAUSESTARTED: string
    /**

    - Fires when the active player resumes from pause.
      */
      static readonly EVENT_PAUSESTOPPED: string
    /**

    - Fires when the active player begins playback.
      */
      static readonly EVENT_PLAYERSTARTED: string
    /**

    - Fires when the active player stops playback.
      */
      static readonly EVENT_PLAYERSTOPPED: string
    /**

    - Fires when the active player begins recording.
      */
      static readonly EVENT_RECORDSTARTED: string
    /**

    - Fires when the active player stops recording.
      */
      static readonly EVENT_RECORDSTOPPED: string
    /**

    - */
      static __(): any
}
```

Source: [Audition/2018/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Audition/2018/index.d.ts).
