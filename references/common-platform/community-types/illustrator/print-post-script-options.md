# PrintPostScriptOptions

Community declaration reference: Illustrator/2022.

Specifies the PostScript options.

```typescript
declare class PrintPostScriptOptions {
    /**
    - Controls whether to print in binary mode.
      */
      static binaryPrinting: boolean
    /**

    - Uses PostScript level 1-compatible output for gradients and gradient mesh printing.
      */
      static compatibleShading: boolean
    /**

    - Controls whether to force continuous tone.
      */
      static forceContinuousTone: boolean
    /**

    - Specifies the image compression type.
      */
      static imageCompression: PostScriptImageCompressionType
    /**

    - Controls whether to print in negative mode.
      */
      static negativePrinting: boolean
    /**

    - Specifies the PostScript language level.
      */
      static postScriptLevel: PrinterPostScriptLevelEnum
    /**

    - Specifies the shading resolution.
      */
      static shadingResolution: number
}
```

Source: [Illustrator/2022/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Illustrator/2022/index.d.ts).
