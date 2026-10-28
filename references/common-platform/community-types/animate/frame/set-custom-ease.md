# Frame.setCustomEase

Community declaration reference: Animate/22.0.

Supplies an array of control point and tangent endpoint coordinates defining a cubic Bezier curve for use as a custom ease curve. The array is built from the horizontal position of the control points and tangent endpoints, ordered left to right.
@param property String naming the property that should use the ease curve. Acceptable values are "all", "position", "rotation", "scale", "color", and "filters".
@param easeCurve Array of objects defining the ease curve. Every entry is a JavaScript object carrying properties named x and y.

```typescript
declare class Frame {
    setCustomEase(property: string, easeCurve: Point[]): void
}
```

Source: [Animate/22.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Animate/22.0/index.d.ts).
