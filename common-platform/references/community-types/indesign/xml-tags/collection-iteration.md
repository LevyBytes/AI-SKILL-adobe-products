# XMLTags collection iteration

Community declaration reference: InDesign/2023.

```typescript
declare class XMLTags {
    /**
    - Gets an arbitrary XMLTag from the collection.
      */
      anyItem(): XMLTag
    /**
    - Gets all XMLTag objects in the collection.
      */
      everyItem(): XMLTag[]
    /**
    - Gets the collection's initial XMLTag.
      */
      firstItem(): XMLTag
    /**
    - Gets the collection's final XMLTag.
      */
      lastItem(): XMLTag
    /**
    - Gets the XMLTag located at the collection midpoint.
      */
      middleItem(): XMLTag
    /**
    - Gets the XMLTag positioned after the supplied XMLTag.
    - @param obj XMLTag immediately before the one wanted.
      */
      nextItem(obj: XMLTag): XMLTag
    /**
    - Gets the XMLTag positioned before the supplied index.
    - @param obj Index for the XMLTag immediately after the one wanted.
      */
      previousItem(obj: XMLTag): XMLTag
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
