# AudioClipCollection

Community declaration reference: Audition/2018.

Audio clips for the associated audio track.

```typescript
declare class AudioClipCollection {
    /**
    - Returns an audio clip for the supplied index.
      */
      readonly index: AudioClipCollection
    /**

    - Audio clip count.
      */
      readonly length: number
    /**

    -
    - @param AudioClip
    - @param sourceChannelRouting Adds a new clip to the track from the passed document, or moves the supplied clip into this track.
      */
      add(AudioClip: any, sourceChannelRouting: any): object
    /**

    -
    - @param AudioClipCollection Removes a clip from this track.
      */
      remove(AudioClipCollection: any): boolean
}
```

Source: [Audition/2018/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Audition/2018/index.d.ts).
