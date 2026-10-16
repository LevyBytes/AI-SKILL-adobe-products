# Timeline.convertToBlankKeyframes

Community declaration reference: Animate/22.0.

Changes frames on the current layer into blank keyframes.
@param startFrameIndex Zero-based index identifying the first frame to convert to keyframes. If startFrameIndex is omitted, Flash converts the frames currently selected. This parameter is optional.
@param endFrameIndex Optional zero-based index where conversion to keyframes stops. The conversion range includes frames before endFrameIndex, not endFrameIndex itself. With only startFrameIndex supplied, endFrameIndex uses that same value.

```typescript
declare class Timeline {
    convertToBlankKeyframes(startFrameIndex?: number, endFrameIndex?: number): void
}
```

Source: [Animate/22.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Animate/22.0/index.d.ts).
