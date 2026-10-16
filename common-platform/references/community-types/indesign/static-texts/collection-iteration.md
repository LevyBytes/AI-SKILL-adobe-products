# StaticTexts collection iteration

Community declaration reference: InDesign/2023.

```typescript
declare class StaticTexts {
    /**
    - Selects an arbitrary StaticText from the collection.
      */
      anyItem(): StaticText
    /**
    - Provides every StaticText in the collection.
      */
      everyItem(): StaticText[]
    /**
    - Provides the first StaticText in the collection.
      */
      firstItem(): StaticText
    /**
    - Provides the final StaticText in the collection.
      */
      lastItem(): StaticText
    /**
    - Provides the middle StaticText in the collection.
      */
      middleItem(): StaticText
    /**
    - Provides the StaticText after obj in collection order.
    - @param obj StaticText positioned before the requested StaticText.
      */
      nextItem(obj: StaticText): StaticText
    /**
    - Provides the StaticText before obj in collection order.
    - @param obj Index positioned after the requested StaticText.
      */
      previousItem(obj: StaticText): StaticText
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
