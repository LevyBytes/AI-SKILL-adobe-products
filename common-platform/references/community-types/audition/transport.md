# Transport

Community declaration reference: Audition/2018.

Transport exposes Audition transport-layer controls.

```typescript
declare class Transport {
    /**
    - true when playback or recording is paused
      */
      readonly isPaused: boolean
    /**

    - true when playing is enabled
      */
      readonly isPlayEnabled: boolean
    /**

    - true while audio is playing
      */
      readonly isPlaying: boolean
    /**

    - true when recording is enabled
      */
      readonly isRecordEnabled: boolean
    /**

    - true while audio is being recorded
      */
      readonly isRecording: boolean
    /**

    - enable|disable looping
      */
      loop: boolean
    /**

    - pause|unpause audio playback or recording
      */
      pause(): boolean
    /**

    - start|continue current audio playback
      */
      play(): boolean
    /**

    - start|continue audio recording
      */
      record(): boolean
    /**

    - stop audio playback or recording
      */
      stop(): boolean
}
```

Source: [Audition/2018/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Audition/2018/index.d.ts).
