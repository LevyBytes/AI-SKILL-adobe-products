# Timeline.createMotionTween

Community declaration reference: Animate/22.0.

For each selected keyframe on the current layer, sets frame.tweenType to motion and, when needed, changes each frame's contents into one symbol instance. In the Flash authoring tool, this corresponds to the Create Motion Tween menu item.
@param startFrameIndex Zero-based index for the first frame where the motion tween should be created. If startFrameIndex is omitted, Flash uses the current selection. This parameter is optional.
@param endFrameIndex Optional zero-based index where the motion tween stops. The frame range includes frames before endFrameIndex, not endFrameIndex itself. With only startFrameIndex supplied, endFrameIndex uses that same value.

```typescript
declare class Timeline {
    createMotionTween(startFrameIndex?: number, endFrameIndex?: number): void
}
```

Source: [Animate/22.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Animate/22.0/index.d.ts).
