# BitmapInstance

Community declaration reference: Animate/22.0.

BitmapInstance is an Instance subclass for a frame bitmap (see Instance object).

```typescript
declare class BitmapInstance extends Instance {
    /**
    - Enables bitmap effects by reading bitmap bits, modifying them, and writing them back to Flash.
    - @returns Object containing width, height, depth, bits, and, when the bitmap has a color table, cTab properties. bits is an array of bytes. cTab is an array of color values in "#RRGGBB" form. The array length matches the color table length. The byte array matters only to DLL or shared-library consumers. Typical use is limited to extensible tools or effects. For information on creating DLLs for use with Flash JavaScript.
      */
      getBits(): BitMap
    /**
    - Writes bits into an existing bitmap element. This enables bitmap effects by reading bitmap bits, modifying them, and returning the bitmap to Flash.
    - @param bitmap Object containing height, width, depth, bits, and cTab properties. height, width, and depth propertiesare integers. bits is a byte array. cTab applies only to bitmaps whose bit depth is 8 or less, and it is a string representing a color value in "#RRGGBB" form. Note: The byte array matters only to external-library consumers. Typical use is limited to extensible tools or effects.
      */
      setBits(bitmap: BitMap): void
    /**
    - Integer width of the bitmap, meaning the number of pixels in the horizontal dimension.
      */
      readonly hPixels: number
    /**
    - Integer height of the bitmap, meaning the number of pixels in the vertical dimension.
      */
      readonly vPixels: number
}
```

Source: [Animate/22.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Animate/22.0/index.d.ts).
