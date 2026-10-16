# Timeline.insertBlankKeyframe

Community declaration reference: Animate/22.0.

Adds a blank keyframe at the supplied frame index; when no index is supplied, the playhead/selection determines where the blank keyframe is added. See also timeline.insertKeyframe().
@param frameNumIndex Zero-based index for the frame where the keyframe should be inserted. If frameNumIndex is omitted, Flash uses the current playhead frame number. This parameter is optional.
For a specified or selected regular frame, the keyframe is placed on that frame. As an example, in a span of 10 frames numbered 1-10, selecting Frame 5 makes this method turn Frame 5 into a blank keyframe while keeping the span length at 10 frames. When Frame 5 is selected and is a keyframe followed by a regular frame, the new blank keyframe goes at Frame 6. When Frame 5 is a keyframe and the next frame is already a keyframe, the method inserts no keyframe and moves the playhead to Frame 6.

```typescript
declare class Timeline {
    insertBlankKeyframe(frameNumIndex?: number): void
}
```

Source: [Animate/22.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Animate/22.0/index.d.ts).
