# Events

Community declaration reference: InDesign/2023.

Collection containing events.

```typescript
declare class Events {
    /**
    - Object count for this collection.
      */
      readonly length: number
    /**

    - Retrieves the Event at the requested index.
    - @param index Index value.
      */
      [index: number]: Event
    /**

    - Retrieves an arbitrary Event from this collection.
      */
      anyItem(): Event
    /**

    - Reports how many elements the Event contains.
      */
      count(): number
    /**

    - Retrieves all Event entries from this collection.
      */
      everyItem(): Event[]
    /**

    - Retrieves the first Event from this collection.
      */
      firstItem(): Event
    /**

    - Retrieves the Event matching the requested index or name.
    - @param index Index or name value.
      */
      item(index: number | string): Event
    /**

    - Retrieves the Event matching the requested ID.
    - @param id ID value.
      */
      itemByID(id: number): Event
    /**

    - Retrieves the Events from the requested range.
    - @param from Range-start Event, index, or name.
    - @param to Range-end Event, index, or name.
      */
      itemByRange(from: Event | number | string, to: Event | number | string): Event[]
    /**

    - Retrieves the last Event from this collection.
      */
      lastItem(): Event
    /**

    - Retrieves the middle Event from this collection.
      */
      middleItem(): Event
    /**

    - Retrieves the Event indexed immediately after the supplied Event in this collection.
    - @param obj Event positioned immediately before the desired Event.
      */
      nextItem(obj: Event): Event
    /**

    - Retrieves the Event indexed immediately before the supplied index.
    - @param obj Index for the Event immediately after the desired Event.
      */
      previousItem(obj: Event): Event
    /**

    - Builds executable source text that resolves back to the Event.
      */
      toSource(): string
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
