# Sequence.insertClip

Community declaration reference: Premiere/24.0.

Inserts a clip, represented by `trackItem`, into the sequence.
@param projectItem Project item to insert.
@param time Insertion time.
@param vidTrackOffset Video-track distance from the first track to the target.
@param audTrackOffset Audio-track distance from the first track to the target.

```typescript
declare class Sequence {
    insertClip(
      projectItem: ProjectItem,
      time: Time,
      vidTrackOffset: number,
      audTrackOffset: number,
      ): TrackItem
}
```

Source: [Premiere/24.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Premiere/24.0/index.d.ts).
