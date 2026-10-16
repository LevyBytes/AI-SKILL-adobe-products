# AudioTrackCollection

Community declaration reference: Audition/2018.

Audio tracks for the associated multitrack document.

```typescript
declare class AudioTrackCollection {
    /**
    - Returns an audio track for the supplied index.
      */
      readonly index: AudioTrack
    /**

    - Audio track count.
      */
      readonly length: number
    /**

    -
    - @param layout Adds a new track.
      */
      add(layout: AudioChannelLayout): AudioTrack
    /**

    -
    - @param name Returns the audio track with this name.
      */
      getAudioTrack(name: string): AudioTrack
    /**

    -
    - @param track Removes a track.
      */
      remove(track: AudioTrack): boolean
}
```

Source: [Audition/2018/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Audition/2018/index.d.ts).
