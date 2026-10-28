# FrameFittingOption

Community declaration reference: InDesign/2023.

Settings for fitting placed or pasted content inside a frame.

```typescript
declare class FrameFittingOption extends Preference {
    /**
    - When true, resizing a frame reapplies the last saved fitting options to its contents.
      */
      autoFit: boolean
    /**

    - Bottom-edge graphic crop amount, expressed in measurement units.
      */
      bottomCrop: number | string
    /**

    - Anchor point used to align the image empty while fitting inside a frame; see frame fitting options for details.
      */
      fittingAlignment: AnchorPoint
    /**

    - Empty-frame fitting choice for placed or pasted content; it can be set on a frame, object style, document, or application.
      */
      fittingOnEmptyFrame: EmptyFrameFittingOptions
    /**

    - Left-edge graphic crop amount, expressed in measurement units.
      */
      leftCrop: number | string
    /**

    - Right-edge graphic crop amount, expressed in measurement units.
      */
      rightCrop: number | string
    /**

    - Top-edge graphic crop amount, expressed in measurement units.
      */
      topCrop: number | string
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
