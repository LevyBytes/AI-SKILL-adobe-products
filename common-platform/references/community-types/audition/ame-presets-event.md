# AMEPresetsEvent

Community declaration reference: Audition/2018.

Event reporting user, match source, and system presets available for a format.

```typescript
declare class AMEPresetsEvent {
    /**
    - Propagates when an Adobe Media Encoder preset request fails.
    - Request Adobe Media Encoder presets failed event type
      */
      static readonly EVENT_REQUESTPRESETS_ERROR: string
    /**

    - Propagates when an Adobe Media Encoder preset request succeeds.
    - Request Adobe Media Encoder presets succeeded event type
      */
      static readonly EVENT_REQUESTPRESETS_SUCCESS: string
    /**

    - Match source presets available for this format.
      */
      readonly matchSourcePresets: any[]
    /**

    - System presets available for this format.
      */
      readonly systemPresets: any[]
    /**

    - User presets available for this format.
      */
      readonly userPresets: any[]
    /**

    - */
      static __(): any
}
```

Source: [Audition/2018/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Audition/2018/index.d.ts).
