# _SwatchValue

Community declaration reference: AfterEffects/26.0.

ExtendScript File object entry describing one swatch value.

```typescript
declare interface _SwatchValue {
    /** Color model tag: "RGB", "CMYK", "LAB", or "Gray" */
    type: "RGB" | "CMYK" | "LAB" | "Gray"
    /* For type = "RGB", values use [0.0..1.0]; 0, 0, 0 maps to Black. */
    r: number
    g: number
    b: number
    /* For type = "CMYK", values use [0.0..1.0]; 0, 0, 0, 0 maps to White. */
    c: number
    m: number
    y: number
    k: number
    /* For type = "LAB", L uses [0.0..1.0]; a and b use [-128.0..+128.0]; 0, 0, 0 maps to Black. */
    L: number
    a: number
    // b: number;

    /* For type = "Gray", the range is [0.0..1.0]; 0.0 maps to Black. */
    gray: number
    value: number
}
```

Source: [AfterEffects/26.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/AfterEffects/26.0/index.d.ts).
