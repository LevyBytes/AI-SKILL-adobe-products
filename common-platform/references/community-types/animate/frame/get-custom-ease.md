# Frame.getCustomEase

Community declaration reference: Animate/22.0.

Provides objects describing the control points for the cubic Bezier curve that defines the ease curve.
@returns Array of JavaScript objects, with each object carrying x and y properties.
@param property Optional string naming the property whose custom ease value should be returned. Allowed strings are "all", "position", "rotation", "scale", "color", and "filters" . When omitted, the default is "all".

```typescript
declare class Frame {
    getCustomEase(property?: string): Point[]
}
```

Source: [Animate/22.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Animate/22.0/index.d.ts).
