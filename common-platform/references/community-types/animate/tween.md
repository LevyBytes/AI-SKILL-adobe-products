# Tween

Community declaration reference: Animate/22.0.

Use Tween to read interpolated tween properties; accessing those properties on a non-tween frame raises errors.

```typescript
declare class Tween {
    /**
    - Tween span duration, expressed as its frame count.
      */
      duration: number
    /**
    - Tween start frame.
      */
      startFrame: number
    /**
    - Tween type, such as "motion" or "shape".
      */
      tweenType: string
    /**
    - Reads color-transform data between frames.
    - @param frameIndex Offset index for the interpolated frame;
      */
      getGeometricTransform(frameIndex: number): TweenColor
    /**
    - Gets filter data for a selected frame in a tween span.
    - @returns Array of Filter objects.
    - @param frameIndex Frame index whose filter data should be retrieved.
      */
      getFilters(frameIndex: number): Filter[]
    /**
    - Returns the Matrix object for a tween's geometric transform over a user-defined range, from the offset through the selected frame.
    - @returns Matrix object for geometric transforms at the frame offset.
    - @param frameIndex Offset index for the frame whose geometric transforms should be retrieved.
      */
      getGeometricTransform(frameIndex: number): Matrix
    /**
    - Gets the interpolated shape for a selected frame in a tween span.
    - @returns Shape coordinates at the frame offset.
    - @param frameIndex Offset index for the frame whose shape data should be retrieved.
      */
      getShape(frameIndex: number): Shape | SimpleShape
}
```

Source: [Animate/22.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Animate/22.0/index.d.ts).
