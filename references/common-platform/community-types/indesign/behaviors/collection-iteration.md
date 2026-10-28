# Behaviors collection iteration

Community declaration reference: InDesign/2023.

```typescript
declare class Behaviors {
    /**
    - Gets any Behavior from the collection.
      */
      anyItem(): Behavior
    /**
    - Gets all Behavior objects in the collection.
      */
      everyItem(): Behavior[]
    /**
    - Gets the first Behavior in the collection.
      */
      firstItem(): Behavior
    /**
    - Gets the final Behavior in the collection.
      */
      lastItem(): Behavior
    /**
    - Retrieves the collection's middle Behavior.
      */
      middleItem(): Behavior
    /**
    - Retrieves the Behavior that comes immediately after the supplied Behavior in collection order.
    - @param obj Behavior positioned immediately before the requested Behavior.
      */
      nextItem(obj: Behavior): Behavior
    /**
    - Retrieves the Behavior immediately before the supplied index.
    - @param obj Index for the Behavior positioned immediately after the requested Behavior.
      */
      previousItem(obj: Behavior): Behavior
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
