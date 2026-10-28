# Timeline.insertKeyframe

Community declaration reference: Animate/22.0.

Adds a keyframe at the specified frame. If the argument is omitted, the playhead or selection location determines the insertion point.
@param frameNumIndex Optional zero-based frame index where the keyframe should be inserted in the current layer. If frameNumIndex is omitted, Flash uses the current playhead frame number or the selected frame number.

```typescript
declare class Timeline {
    insertKeyframe(frameNumIndex?: number): void
}
```

Source: [Animate/22.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Animate/22.0/index.d.ts).
