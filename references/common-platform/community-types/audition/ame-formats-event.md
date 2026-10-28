# AMEFormatsEvent

Community declaration reference: Audition/2018.

Event describing formats available for running an export.

```typescript
declare class AMEFormatsEvent {
    /**
    - Propagates when an Adobe Media Encoder format request fails.
    - Request formats failed event type
      */
      static readonly EVENT_REQUESTFORMATS_ERROR: string
    /**

    - Propagates when an Adobe Media Encoder format request succeeds.
    - Request formats succeeded event type
      */
      static readonly EVENT_REQUESTFORMATS_SUCCESS: string
    /**

    - Formats that can be used to run an export.
      */
      readonly formats: any[]
    /**

    - */
      static __(): any
}
```

Source: [Audition/2018/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Audition/2018/index.d.ts).
