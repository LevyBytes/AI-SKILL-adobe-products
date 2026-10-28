# Sequence.performCutDetectionOnSelection

Community declaration reference: Premiere/24.0.

@param action Either 'ApplyCuts' or 'CreateMarkers'.
@param applyCutsToLinkedAudio Whether linked audio is included.
@param sensitivity 'LowSensitivity', 'MediumSensitivity', or 'HighSensitivity'.

```typescript
declare class Sequence {
    performCutDetectionOnSelection(
      action: String,
      applyCutsToLinkedAudio: Boolean,
      sensitivity: String,
      ): void
}
```

Source: [Premiere/24.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Premiere/24.0/index.d.ts).
