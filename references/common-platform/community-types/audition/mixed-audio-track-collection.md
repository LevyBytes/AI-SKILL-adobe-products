# MixedAudioTrackCollection

Community declaration reference: Audition/2018.

Mixed collection for every audio track in the corresponding multitrack document, including audio clip tracks, audio bus tracks, and the master track. Index access starts with audio clip tracks, continues with audio bus tracks, and uses the master track as the final entry.

```typescript
declare class MixedAudioTrackCollection {
    /**
    - Audio bus track collection for the multitrack document.
      */
      readonly audioBusTracks: AudioTrackCollection
    /**

    - Audio clip track collection for the multitrack document.
      */
      readonly audioClipTracks: AudioTrackCollection
    /**

    - Gets an audio track using its index.
      */
      readonly index: AudioTrack
    /**

    - Count of audio tracks.
      */
      readonly length: number
    /**

    - Master track for the multitrack document.
      */
      readonly masterTrack: AudioTrack
    /**

    -
    - @param layout
    - @param trackType Add a track.
      */
      add(layout: AudioChannelLayout, trackType: number): AudioTrack
    /**

    -
    - @param name Return an audio track using its name.
      */
      getAudioTrack(name: string): AudioTrack
    /**

    -
    - @param track Remove a track.
      */
      remove(track: AudioTrack): boolean
}
```

Source: [Audition/2018/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Audition/2018/index.d.ts).
