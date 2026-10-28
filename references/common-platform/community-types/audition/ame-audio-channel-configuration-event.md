# AMEAudioChannelConfigurationEvent

Community declaration reference: Audition/2018.

Event carrying the audio channel configuration for a preset.

```typescript
declare class AMEAudioChannelConfigurationEvent {
    /**
    - Propagates when an audio channel configuration request fails.
    - Request audio channel configuration failed event type
      */
      static readonly EVENT_REQUESTAUDIOCHANNELCONFIGURATION_ERROR: string
    /**

    - Propagates when an audio channel configuration request succeeds.
    - Request audio channel configuration succeeded event type
      */
      static readonly EVENT_REQUESTAUDIOCHANNELCONFIGURATION_SUCCESS: string
    /**

    - Audio channel configuration for this preset; call requestAudioChannelConfiguration first to obtain it.
      */
      readonly audioChannelConfiguration: string
    /**

    - */
      static __(): any
}
```

Source: [Audition/2018/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Audition/2018/index.d.ts).
