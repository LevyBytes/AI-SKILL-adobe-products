# XMLAttributes collection iteration

Community declaration reference: InDesign/2023.

```typescript
declare class XMLAttributes {
    /**
    - Gets an arbitrary XMLAttribute from the collection.
      */
      anyItem(): XMLAttribute
    /**
    - Gets all XMLAttribute objects in the collection.
      */
      everyItem(): XMLAttribute[]
    /**
    - Gets the collection's initial XMLAttribute.
      */
      firstItem(): XMLAttribute
    /**
    - Gets the collection's final XMLAttribute.
      */
      lastItem(): XMLAttribute
    /**
    - Gets the XMLAttribute located at the collection midpoint.
      */
      middleItem(): XMLAttribute
    /**
    - Gets the XMLAttribute positioned after the supplied XMLAttribute.
    - @param obj XMLAttribute immediately before the one wanted.
      */
      nextItem(obj: XMLAttribute): XMLAttribute
    /**
    - Gets the XMLAttribute positioned before the supplied index.
    - @param obj Index for the XMLAttribute immediately after the one wanted.
      */
      previousItem(obj: XMLAttribute): XMLAttribute
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
