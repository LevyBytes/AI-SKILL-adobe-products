# DisplaySettings

Community declaration reference: InDesign/2023.

Properties for display settings.

```typescript
declare class DisplaySettings {
    /**
    - Count of objects in the collection.
      */
      readonly length: number
    /**

    - Returns the DisplaySetting at the requested index.
    - @param index Index value.
      */
      [index: number]: DisplaySetting
    /**

    - Returns any DisplaySetting from the collection.
      */
      anyItem(): DisplaySetting
    /**

    - Shows the element count for the DisplaySetting.
      */
      count(): number
    /**

    - Fetches the collection's full set of DisplaySetting objects.
      */
      everyItem(): DisplaySetting[]
    /**

    - Fetches the collection's first DisplaySetting.
      */
      firstItem(): DisplaySetting
    /**

    - Returns the DisplaySetting identified by index or name.
    - @param index Index or name.
      */
      item(index: number | string): DisplaySetting
    /**

    - Returns DisplaySettings inside the requested range.
    - @param from DisplaySetting, index, or name at the range start.
    - @param to DisplaySetting, index, or name at the range end.
      */
      itemByRange(from: DisplaySetting | number | string, to: DisplaySetting | number | string): DisplaySetting[]
    /**

    - Fetches the collection's final DisplaySetting.
      */
      lastItem(): DisplaySetting
    /**

    - Fetches the collection's middle DisplaySetting.
      */
      middleItem(): DisplaySetting
    /**

    - Fetches the item after the supplied DisplaySetting.
    - @param obj DisplaySetting immediately before the one requested.
      */
      nextItem(obj: DisplaySetting): DisplaySetting
    /**

    - Fetches the item immediately before the supplied index.
    - @param obj Index after the requested DisplaySetting.
      */
      previousItem(obj: DisplaySetting): DisplaySetting
    /**

    - Creates a string which, when executed, returns the DisplaySetting.
      */
      toSource(): string
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
