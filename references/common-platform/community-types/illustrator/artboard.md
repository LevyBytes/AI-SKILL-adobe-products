# Artboard

Community declaration reference: Illustrator/2022.

Artboard object representation.

```typescript
declare class Artboard {
    /**
    - Artboard size and position.
      */
      artboardRect: Rect
    /**

    - Artboard name.
      */
      name: string
    /**

    - Containing object for this object.
      */
      readonly parent: object
    /**

    - Artboard ruler origin, measured from the Artboard's left-bottom corner.
      */
      rulerOrigin: Point | [number, number]
    /**

    - Pixel aspect ratio used by ruler visualization when units are pixels.
      */
      rulerPAR: number
    /**

    - Displays the center mark.
      */
      showCenter: boolean
    /**

    - Displays cross hairs.
      */
      showCrossHairs: boolean
    /**

    - Displays title and action safe areas (for video).
      */
      showSafeAreas: boolean
    /**

    - Object class identifier.
      */
      readonly typename: string
    /**

    - Removes this object.
      */
      remove(): void
    /**

    - Clears every element.
      */
      removeAll(): void
}
```

Source: [Illustrator/2022/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Illustrator/2022/index.d.ts).
