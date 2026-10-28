# Clip

Community declaration reference: Audition/2018.

Represents one clip inside a multitrack session.

```typescript
declare class Clip {
    /**
    - */
      readonly ancestor: any
    /**

    - Clip end time, in samples, exclusive, using the multitrack document sample rate.
      */
      readonly endTime: number
    /**

    - Unique identifier for the clip.
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

    - Whether this audio clip is selected.
      */
      readonly selected: boolean
    /**

    - Clip start time in samples, using the multitrack document sample rate.
      */
      readonly startTime: number
}
```

Source: [Audition/2018/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Audition/2018/index.d.ts).
