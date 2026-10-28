# EventListeners collection iteration

Community declaration reference: InDesign/2023.

```typescript
declare class EventListeners {
    /**
    - Retrieves an arbitrary EventListener from this collection.
      */
      anyItem(): EventListener
    /**
    - Retrieves all EventListener entries from this collection.
      */
      everyItem(): EventListener[]
    /**
    - Retrieves the first EventListener from this collection.
      */
      firstItem(): EventListener
    /**
    - Retrieves the last EventListener from this collection.
      */
      lastItem(): EventListener
    /**
    - Retrieves the middle EventListener from this collection.
      */
      middleItem(): EventListener
    /**
    - Retrieves the EventListener indexed immediately after the supplied EventListener in this collection.
    - @param obj EventListener positioned immediately before the desired EventListener.
      */
      nextItem(obj: EventListener): EventListener
    /**
    - Retrieves the EventListener indexed immediately before the supplied index.
    - @param obj Index for the EventListener immediately after the desired EventListener.
      */
      previousItem(obj: EventListener): EventListener
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
