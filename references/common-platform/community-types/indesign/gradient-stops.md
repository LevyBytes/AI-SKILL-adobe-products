# GradientStops

Community declaration reference: InDesign/2023.

GradientStop objects grouped as a collection.

```typescript
declare class GradientStops {
    /**
    - Object count for this collection.
      */
      readonly length: number
    /**

    - Looks up a GradientStop by the supplied index.
    - @param index Index selector.
      */
      [index: number]: GradientStop
    /**

    - Constructs a GradientStop.
    - @param withProperties Starting property values for the GradientStop being created
      */
      add(withProperties: object): GradientStop
    /**

    - Chooses any GradientStop from the collection.
      */
      anyItem(): GradientStop
    /**

    - Reports how many GradientStop elements are present.
      */
      count(): number
    /**

    - Provides all GradientStop entries from the collection.
      */
      everyItem(): GradientStop[]
    /**

    - Provides the first GradientStop entry in this collection.
      */
      firstItem(): GradientStop
    /**

    - Finds a GradientStop by index or name.
    - @param index Index or name selector.
      */
      item(index: number | string): GradientStop
    /**

    - Provides GradientStops across the requested range.
    - @param from GradientStop, index, or name that starts the range.
    - @param to GradientStop, index, or name that ends the range.
      */
      itemByRange(from: GradientStop | number | string, to: GradientStop | number | string): GradientStop[]
    /**

    - Provides the final GradientStop entry in this collection.
      */
      lastItem(): GradientStop
    /**

    - Provides the central GradientStop entry in this collection.
      */
      middleItem(): GradientStop
    /**

    - Provides the GradientStop positioned after the supplied GradientStop.
    - @param obj GradientStop placed before the target GradientStop.
      */
      nextItem(obj: GradientStop): GradientStop
    /**

    - Provides the GradientStop positioned before the supplied index.
    - @param obj Index of the GradientStop placed after the target GradientStop.
      */
      previousItem(obj: GradientStop): GradientStop
    /**

    - Builds source text that evaluates back to the GradientStop.
      */
      toSource(): string
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
