# HiddenTexts collection iteration

Community declaration reference: InDesign/2023.

```typescript
declare class HiddenTexts {
    /**
    - Returns an arbitrary HiddenText from the collection.
      */
      anyItem(): HiddenText
    /**
    - Returns all HiddenText entries from the collection.
      */
      everyItem(): HiddenText[]
    /**
    - Gets the first HiddenText from the collection.
      */
      firstItem(): HiddenText
    /**
    - Gets the last HiddenText from the collection.
      */
      lastItem(): HiddenText
    /**
    - Gets the middle HiddenText from the collection.
      */
      middleItem(): HiddenText
    /**
    - Returns the HiddenText immediately after the supplied HiddenText in the collection.
    - @param obj HiddenText whose index precedes the desired HiddenText.
      */
      nextItem(obj: HiddenText): HiddenText
    /**
    - Returns the HiddenText immediately before the supplied index.
    - @param obj Index for the HiddenText immediately after the desired HiddenText.
      */
      previousItem(obj: HiddenText): HiddenText
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
