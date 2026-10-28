# Text.fontRenderingMode

Community declaration reference: Animate/22.0.

Chooses the text rendering mode. The setting affects display on both the Stage and in Flash Player. Acceptable values are described below:
device => Uses device fonts to render the text.
bitmap => Draws aliased text as a bitmap, similar to a pixel font.
standard => Uses the standard Flash MX 2004 anti-aliasing approach. This setting works best for animated, very large, or skewed text.
advanced => Uses the advanced anti-aliasing font rendering technology introduced in Flash 8, producing better anti-aliasing and readability, especially at small sizes.
customThicknessSharpness => Allows custom sharpness and thickness settings while using the advanced anti-aliasing font rendering technology introduced in Flash 8.

```typescript
declare class Text extends Element {
    fontRenderingMode: string
}
```

Source: [Animate/22.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Animate/22.0/index.d.ts).
