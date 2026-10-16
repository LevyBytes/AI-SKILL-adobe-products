# Sections collection iteration

Community declaration reference: InDesign/2023.

```typescript
declare class Sections {
    /**
    - Provides any Section from the collection.
      */
      anyItem(): Section
    /**
    - Provides all Section entries in the collection.
      */
      everyItem(): Section[]
    /**
    - Provides the collection's first Section.
      */
      firstItem(): Section
    /**
    - Provides the collection's final Section.
      */
      lastItem(): Section
    /**
    - Provides the Section positioned in the middle of the collection.
      */
      middleItem(): Section
    /**
    - Provides the Section immediately after the specified Section in collection order.
    - @param obj Section that precedes the requested Section.
      */
      nextItem(obj: Section): Section
    /**
    - Provides the Section positioned before the specified index.
    - @param obj Index for the Section that follows the requested Section.
      */
      previousItem(obj: Section): Section
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
