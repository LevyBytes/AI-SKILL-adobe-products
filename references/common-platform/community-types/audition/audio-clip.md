# AudioClip

Community declaration reference: Audition/2018.

Object for one audio clip within a multitrack session.

```typescript
declare class AudioClip {
    /**
    - */
      readonly ancestor: any
    /**

    - Clip audio format: sample rate, bit depth, and channel layout.
      */
      readonly audioFormat: object
    /**

    - Clip end time in samples at the multitrack document's sample rate; exclusive.
      */
      readonly endTime: number
    /**

    - Unique ID for the clip.
      */
      readonly id: string
    /**

    - Document linked to this clip.
      */
      link: object
    /**

    - Clip name.
      */
      readonly name: string
    /**

    - Selection state for this audio clip.
      */
      readonly selected: boolean
    /**

    - Maps source channels to clip channels. The array stores source-channel indices routed to the corresponding clip channels. It must contain one source-channel index for each clip channel, and each source channel can route to exactly one clip channel.
      */
      sourceChannelRouting: any[]
    /**

    - Clip start time in samples at the multitrack document's sample rate.
      */
      startTime: number
}
```

Source: [Audition/2018/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Audition/2018/index.d.ts).
