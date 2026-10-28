# XMLElements collection iteration

Community declaration reference: InDesign/2023.

```typescript
declare class XMLElements {
    /**
    - Gets an arbitrary XMLElement from the collection.
      */
      anyItem(): XMLElement
    /**
    - Gets all XMLElement objects in the collection.
      */
      everyItem(): XMLElement[]
    /**
    - Gets the collection's initial XMLElement.
      */
      firstItem(): XMLElement
    /**
    - Gets the collection's final XMLElement.
      */
      lastItem(): XMLElement
    /**
    - Gets the XMLElement located at the collection midpoint.
      */
      middleItem(): XMLElement
    /**
    - Gets the XMLElement positioned after the supplied XMLElement.
    - @param obj XMLElement immediately before the one wanted.
      */
      nextItem(obj: XMLElement): XMLElement
    /**
    - Gets the XMLElement positioned before the supplied index.
    - @param obj Index for the XMLElement immediately after the one wanted.
      */
      previousItem(obj: XMLElement): XMLElement
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
