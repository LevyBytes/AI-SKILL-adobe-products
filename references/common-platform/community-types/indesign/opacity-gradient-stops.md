# OpacityGradientStops

Community declaration reference: InDesign/2023.

OpacityGradientStop objects grouped as a collection.

```typescript
declare class OpacityGradientStops {
    /**
    - Object count for this collection.
      */
      readonly length: number
    /**

    - Looks up a OpacityGradientStop by the supplied index.
    - @param index Index selector.
      */
      [index: number]: OpacityGradientStop
    /**

    - Constructs a OpacityGradientStop.
    - @param withProperties Starting property values for the OpacityGradientStop being created
      */
      add(withProperties: object): OpacityGradientStop
    /**

    - Chooses any OpacityGradientStop from the collection.
      */
      anyItem(): OpacityGradientStop
    /**

    - Reports how many OpacityGradientStop elements are present.
      */
      count(): number
    /**

    - Provides all OpacityGradientStop entries from the collection.
      */
      everyItem(): OpacityGradientStop[]
    /**

    - Provides the first OpacityGradientStop entry in this collection.
      */
      firstItem(): OpacityGradientStop
    /**

    - Finds a OpacityGradientStop by index or name.
    - @param index Index or name selector.
      */
      item(index: number | string): OpacityGradientStop
    /**

    - Provides OpacityGradientStops across the requested range.
    - @param from OpacityGradientStop, index, or name that starts the range.
    - @param to OpacityGradientStop, index, or name that ends the range.
      */
      itemByRange(from: OpacityGradientStop | number | string, to: OpacityGradientStop | number | string): OpacityGradientStop[]
    /**

    - Provides the final OpacityGradientStop entry in this collection.
      */
      lastItem(): OpacityGradientStop
    /**

    - Provides the central OpacityGradientStop entry in this collection.
      */
      middleItem(): OpacityGradientStop
    /**

    - Provides the OpacityGradientStop positioned after the supplied OpacityGradientStop.
    - @param obj OpacityGradientStop placed before the target OpacityGradientStop.
      */
      nextItem(obj: OpacityGradientStop): OpacityGradientStop
    /**

    - Provides the OpacityGradientStop positioned before the supplied index.
    - @param obj Index of the OpacityGradientStop placed after the target OpacityGradientStop.
      */
      previousItem(obj: OpacityGradientStop): OpacityGradientStop
    /**

    - Builds source text that evaluates back to the OpacityGradientStop.
      */
      toSource(): string
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
