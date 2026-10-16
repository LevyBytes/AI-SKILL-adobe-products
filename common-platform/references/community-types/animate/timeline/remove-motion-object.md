# Timeline.removeMotionObject

Community declaration reference: Animate/22.0.

Deletes the motion object and changes the affected frame or frames back to static frames. Parameters are optional; when present, they set the timeline selection to the specified frames before the motion object is removed.
@param startFrameIndex First frame where motion-object removal should begin. If startFrameIndex is omitted, Flash uses the current selection; when no selection exists, all frames at the current playhead on every layer are removed. This parameter is optional.
@param endFrameIndex Optional frame where motion-object removal stops; the frame range includes frames before endFrameIndex, not endFrameIndex itself. With only startFrameIndex supplied, endFrameIndex uses that same value.

```typescript
declare class Timeline {
    removeMotionObject(startFrameIndex?: number, endFrameIndex?: number): void
}
```

Source: [Animate/22.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Animate/22.0/index.d.ts).
