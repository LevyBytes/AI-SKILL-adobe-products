# Frame.tweenType

Community declaration reference: Animate/22.0.

String choosing the tween type. Use "motion", "shape", or "none"; "none" removes the motion tween. Use timeline.createMotionTween() to create a motion tween.
With "motion", the frame object must be a symbol, text field, or grouped object, and Flash tweens it from its current keyframe location to the following keyframe's location.
With "shape", the frame object must be a shape, and Flash blends it from the current keyframe's shape into the following keyframe's shape.

```typescript
declare class Frame {
    tweenType: string
}
```

Source: [Animate/22.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Animate/22.0/index.d.ts).
