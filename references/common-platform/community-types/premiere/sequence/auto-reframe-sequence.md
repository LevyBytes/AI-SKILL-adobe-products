# Sequence.autoReframeSequence

Community declaration reference: Premiere/24.0.

@param numerator Desired frame-aspect-ratio numerator.
@param denominator Desired frame-aspect-ratio denominator.
@param motionPreset Either "default", "faster" or "slower".
@param sequenceName Name assigned to the created sequence.
@param nest Nested-sequence flag.

```typescript
declare class Sequence {
    autoReframeSequence(
    numerator: Number,
    denominator: Number,
    motionPreset: String,
    sequenceName: String,
    nest: Boolean,
    ): Sequence
}
```

Source: [Premiere/24.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Premiere/24.0/index.d.ts).
