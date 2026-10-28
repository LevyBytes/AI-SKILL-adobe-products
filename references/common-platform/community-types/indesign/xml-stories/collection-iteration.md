# XmlStories collection iteration

Community declaration reference: InDesign/2023.

```typescript
declare class XmlStories {
    /**
    - Yields an arbitrary XmlStory from this collection.
      */
      anyItem(): XmlStory
    /**
    - Yields all XmlStory entries in this collection.
      */
      everyItem(): XmlStory[]
    /**
    - Yields the leading XmlStory in this collection.
      */
      firstItem(): XmlStory
    /**
    - Yields the final XmlStory in this collection.
      */
      lastItem(): XmlStory
    /**
    - Yields the central XmlStory in this collection.
      */
      middleItem(): XmlStory
    /**
    - Yields the XmlStory positioned after the supplied XmlStory.
    - @param obj XmlStory immediately before the requested XmlStory.
      */
      nextItem(obj: XmlStory): XmlStory
    /**
    - Yields the XmlStory positioned before the supplied index.
    - @param obj Index belonging to the XmlStory after the requested XmlStory.
      */
      previousItem(obj: XmlStory): XmlStory
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
