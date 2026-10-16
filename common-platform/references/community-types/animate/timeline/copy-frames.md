# Timeline.copyFrames

Community declaration reference: Animate/22.0.

Places a frame range from the current layer onto the clipboard.
@param startFrameIndex Zero-based index for the first frame in the range to copy. If startFrameIndex is omitted, Flash uses the current selection. This parameter is optional.
@param endFrameIndex Optional zero-based index where copying stops. The copied range includes frames before endFrameIndex, not endFrameIndex itself. With only startFrameIndex supplied, endFrameIndex uses that same value.

```typescript
declare class Timeline {
    copyFrames(startFrameIndex?: number, endFrameIndex?: number): void
}
```

Source: [Animate/22.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Animate/22.0/index.d.ts).
