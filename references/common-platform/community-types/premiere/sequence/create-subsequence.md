# Sequence.createSubsequence

Community declaration reference: Premiere/24.0.

Creates a new sequence from the source sequence's in and out points.
@param ignoreMapping When True, the current selection controls which clips go into the new sequence instead of track targeting.
With no selection present, track targeting decides which clips are added to the new sequence.

```typescript
declare class Sequence {
    createSubsequence(ignoreMapping: Boolean): Sequence
}
```

Source: [Premiere/24.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Premiere/24.0/index.d.ts).
