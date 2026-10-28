# Timeline.reverseFrames

Community declaration reference: Animate/22.0.

Reverses a frame range.
@param startFrameIndex Zero-based index for the first frame where reversal begins. If startFrameIndex is omitted, Flash uses the current selection. This parameter is optional.
@param endFrameIndex Zero-based index for the first frame where reversal stops; the frame range includes frames before endFrameIndex, not endFrameIndex itself. If only startFrameIndex is supplied, endFrameIndex takes the startFrameIndex value. This parameter is optional.

```typescript
declare class Timeline {
    reverseFrames(startFrameIndex?: number, endFrameIndex?: number): void
}
```

Source: [Animate/22.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Animate/22.0/index.d.ts).
