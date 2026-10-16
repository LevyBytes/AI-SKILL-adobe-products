# ColorBlendMode.MULTIPLY

Community declaration reference: Photoshop/2015.5.

Reads each channel's color data and multiplies the base color by the blend color, so the result color is always darker. Multiplying with black gives black, while multiplying with white leaves the color unchanged. When painting with a non-black and non-white color, repeated tool strokes make the colors progressively darker. The effect resembles drawing repeatedly over the image with marking pens.

```typescript
declare enum ColorBlendMode {
    MULTIPLY = 5
}
```

Source: [Photoshop/2015.5/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Photoshop/2015.5/index.d.ts).
