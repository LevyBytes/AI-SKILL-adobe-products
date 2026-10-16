# Buttons collection iteration

Community declaration reference: InDesign/2023.

```typescript
declare class Buttons {
    /**
    - Gets an arbitrary Button from the collection.
      */
      anyItem(): Button
    /**
    - Gets all Button entries from the collection.
      */
      everyItem(): Button[]
    /**
    - Gets the first Button in the collection.
      */
      firstItem(): Button
    /**
    - Gets the final Button in the collection.
      */
      lastItem(): Button
    /**
    - Gets the central Button from the collection.
      */
      middleItem(): Button
    /**
    - Gets the Button positioned immediately after the specified Button.
    - @param obj Button that precedes the requested Button.
      */
      nextItem(obj: Button): Button
    /**
    - Gets the Button positioned immediately before the specified index.
    - @param obj Index of the Button that comes after the requested Button.
      */
      previousItem(obj: Button): Button
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
