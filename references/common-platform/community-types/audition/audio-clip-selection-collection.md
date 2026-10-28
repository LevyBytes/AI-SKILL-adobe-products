# AudioClipSelectionCollection

Community declaration reference: Audition/2018.

Selected audio clip collection.

```typescript
declare class AudioClipSelectionCollection {
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
    - @param AudioClip Adds a clip to the selection.
      */
      add(AudioClip: any): object
    /**

    - Clears the selection.
      */
      clear(): boolean
    /**

    -
    - @param AudioClipSelectionCollection Removes a clip from the selection.
      */
      remove(AudioClipSelectionCollection: any): boolean
}
```

Source: [Audition/2018/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Audition/2018/index.d.ts).
