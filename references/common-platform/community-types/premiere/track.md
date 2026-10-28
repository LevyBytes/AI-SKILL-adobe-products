# Track

Community declaration reference: Premiere/24.0.

```typescript
declare class Track {
    /**

    - */
      name: String
    /**

    - */
      readonly clips: TrackItemCollection
    /**

    - */
      readonly id: number
    /**

    - */
      readonly mediaType: string
    /**

    - */
      readonly transitions: TrackItemCollection
    /**

    - */
      bind(eventName: string, function_: any): void
    /**

    - Inserts a clip at a time offset from that track's final item.
      */
      insertClip(clipProjectItem: ProjectItem, time: number): boolean
    /**

    - */
      isMuted(): boolean
    /**

    - */
      isLocked(): boolean
    /**

    - Overwrites a clip at an absolute track time.
      */
      overwriteClip(clipProjectItem: ProjectItem, time: number | Time): boolean
    /**

    - */
      setMute(arg1?: number): void
    /**

    - */
      setLocked(arg1?: number): void
    /**

    - */
      setTimeout(eventName: string, function_: any, milliseconds: number): void
    /**

    - */
      isTargeted(): boolean
    /**

    - */
      setTargeted(isTargeted: boolean, shouldBroadcast: boolean): boolean
    /**

    - */
      unbind(eventName: string): void
}
```

Source: [Premiere/24.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Premiere/24.0/index.d.ts).
