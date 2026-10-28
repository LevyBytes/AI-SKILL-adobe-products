# Timeline.clearFrames

Community declaration reference: Animate/22.0.

Removes all contents from one frame, or from a frame range, on the current layer.
@param startFrameIndex Zero-based index for the first frame in the range to clear. If startFrameIndex is omitted, Flash uses the current selection. This parameter is optional.
@param endFrameIndex Optional zero-based index where the clear range ends. The range includes frames before endFrameIndex, not endFrameIndex itself. With only startFrameIndex supplied, endFrameIndex uses that same value.

```typescript
declare class Timeline {
    clearFrames(startFrameIndex?: number, endFrameIndex?: number): void
}
```

Source: [Animate/22.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Animate/22.0/index.d.ts).
