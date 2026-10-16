# AMEAddMultitrackDocumentToQueueEvent

Community declaration reference: Audition/2018.

Event reporting success or failure for adding a multitrack document to the queue.

```typescript
declare class AMEAddMultitrackDocumentToQueueEvent {
    /**
    - Propagates when adding a multitrack document to the Adobe Media Encoder queue fails.
    - Add to queue failed event type
      */
      static readonly EVENT_ADDMULTITRACKDOCUMENTTOQUEUE_ERROR: string
    /**

    - Propagates when adding a multitrack document to the Adobe Media Encoder queue succeeds.
    - Add to queue succeeded event type
      */
      static readonly EVENT_ADDMULTITRACKDOCUMENTTOQUEUE_SUCCESS: string
    /**

    - Supplies extra event details, especially when an error occurred.
      */
      readonly message: string
    /**

    - */
      static __(): any
}
```

Source: [Audition/2018/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Audition/2018/index.d.ts).
