# Sequence.importMGT

Community declaration reference: Premiere/24.0.

Adds a .mogrt Motion Graphics Template asset to the sequence.
@param pathToMOGRT Full .mogrt path.
@param timeInTicks Tick-based insertion time.
@param videoTrackOffset Video track offset from first track to target.
@param audioTrackOffset Audio track offset from first track to target.
@returns new `trackItem` for the inserted .mogrt.

```typescript
declare class Sequence {
    importMGT(
      pathToMOGRT: String,
      timeInTicks: String,
      videoTrackOffset: number,
      audioTrackOffset: number,
      ): TrackItem
}
```

Source: [Premiere/24.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Premiere/24.0/index.d.ts).
