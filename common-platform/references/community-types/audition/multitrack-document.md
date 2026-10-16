# MultitrackDocument

Community declaration reference: Audition/2018.

Object for one multitrack document.

```typescript
declare class MultitrackDocument {
    /**
    - All currently selected audio clips in this multitrack document.
      */
      readonly audioClipSelection: AudioClipSelectionCollection
    /**

    - All audio tracks in the multitrack document.
      */
      readonly audioTracks: MixedAudioTrackCollection
    /**

    - UI display name for the document. It is not necessarily the file name without its extension.
      */
      readonly displayName: string
    /**

    - Duration, in samples.
      */
      readonly duration: number
    /**

    - Unique ID for this document.
      */
      readonly id: string
    /**

    - Provides marker objects as an array. Each entry includes 'start', 'length', 'name', 'description', and 'type'.
      */
      readonly markers: any[]
    /**

    - Provides current document metadata as a plain Object. Each readonly property corresponds to one metadata entry.
      */
      readonly metadata: Metadata
    /**

    - Returns the document path on disk in platform-specific form, or an empty string when no path is currently assigned.
      */
      readonly path: string
    /**

    - Current playhead position, in samples.
      */
      playheadPosition: number
    /**

    - Current document audio sample rate (Hz).
      */
      readonly sampleRate: number
    /**

    - Brings the current document to the front as the active document.
      */
      activate(): boolean
    /**

    -
    - @param start
    - @param duration
    - @param name
    - @param type
    - @param description Creates a document marker. Marker type values: 'cue' 'track' 'cart' 'subclip'.
      */
      addMarker(
      start: number,
      duration: number,
      name: string,
      type: string,
      description: string,
      ): boolean
    /**

    - Closes the document. Returns false when current document operations prevent closing.
      */
      closeDocument(): boolean
}
```

Source: [Audition/2018/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Audition/2018/index.d.ts).
