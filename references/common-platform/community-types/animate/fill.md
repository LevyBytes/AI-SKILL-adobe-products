# Fill

Community declaration reference: Animate/22.0.

Fill describes the Fill color setting from the Tools panel or from a selected shape. Call document.getCustomFill() to obtain a Fill object.

```typescript
declare class Fill {
    /**
    - For bitmap fills, true clips a shape that is larger than the bitmap and false repeats the bitmap. This member is available only when fill.style is "bitmap". When the shape is smaller than the bitmap, the value is false.
      */
      bitmapIsClipped: boolean
    /**
    - Library path and name for the bitmap fill. This member is available only when fill.style is "bitmap".
      */
      bitmapPath: string
    /**
    - Fill color. Supply it in any of these forms:
    - - a string formatted as "#RRGGBB" or "#RRGGBBAA"
    - - a hexadecimal number formatted as 0xRRGGBB
    - - an integer containing the decimal equivalent of a hexadecimal number
        */
        color: string | number
    /**
    - Gradient colors stored as an array of integers. This member is available only when fill.style is "radialGradient" or "linearGradient". See fill.style.
      */
      colorArray: number[] | string[]
    /**
    - Horizontal offset of the gradient focal point from the transformation point, expressed as an integer. For example, 10 positions the focal point at 10/255 of the distance between the transformation point and the gradient edge. With -255, the focal point lands on the gradient's left edge. Default: 0.
      */
      focalPoint: number
    /**
    - true renders the fill as a linear RGB gradient interpolation; false uses radial interpolation. The default value is false.
      */
      linearRGB: boolean
    /**
    - Matrix object controlling placement, orientation, and scale for gradient fills.
      */
      matrix: Matrix
    /**
    - Gradient overflow behavior string. Valid values are "extend", "repeat", and "reflect"; case is ignored for these strings. The default value is "extend".
      */
      overflow: string
    /**
    - Integer array, with each value from zero to 255, giving the matching color position. This member is available only when fill.style is "radialGradient" or "linearGradient".
      */
      posArray: number[]
    /**
    - Fill style string. Valid values are "bitmap", "solid", "linearGradient", "radialGradient", and "noFill".
    - When the value is "linearGradient" or "radialGradient", fill.colorArray and fill.posArray are also available. When the value is "bitmap", fill.bitmapIsClipped and fill.bitmapPath are also available.
      */
      style: string
}
```

Source: [Animate/22.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Animate/22.0/index.d.ts).
