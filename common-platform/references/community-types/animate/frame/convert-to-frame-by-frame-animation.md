# Frame.convertToFrameByFrameAnimation

Community declaration reference: Animate/22.0.

Changes the current frame into Frame-by-Frame Animation.
@returns boolean. true is returned when the frame holds animation that can become frame by frame animation. Motion Tween frame and Classic Tween frame are examples that return true; other frame types, such as static, return false.

```typescript
declare class Frame {
    convertToFrameByFrameAnimation(): boolean
}
```

Source: [Animate/22.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Animate/22.0/index.d.ts).
