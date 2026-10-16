# PrintFlattenerOptions

Community declaration reference: Illustrator/2022.

Specifies the transparency flattening options.

```typescript
declare class PrintFlattenerOptions {
    /**
    - Controls whether to clip complex regions.
      */
      static clipComplexRegions: boolean
    /**

    - Controls whether to convert all strokes to outlines.
      */
      static convertStrokesToOutlines: boolean
    /**

    - Controls whether to convert all text to outlines.
      */
      static convertTextToOutlines: boolean
    /**

    - Specifies the flattening balance.
      */
      static flatteningBalance: number
    /**

    - Specifies the gradient resolution.
      */
      static gradientResolution: number
    /**

    - Overprint setting.
      */
      static overprint: PDFOverprint
    /**

    - Specifies the rasterization resolution.
      */
      static rasterizationResolution: number
}
```

Source: [Illustrator/2022/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Illustrator/2022/index.d.ts).
