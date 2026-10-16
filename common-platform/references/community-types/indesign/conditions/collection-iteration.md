# Conditions collection iteration

Community declaration reference: InDesign/2023.

```typescript
declare class Conditions {
    /**
    - Returns an arbitrary Condition from the collection.
      */
      anyItem(): Condition
    /**
    - Returns all Condition entries from the collection.
      */
      everyItem(): Condition[]
    /**
    - Gets the first Condition from the collection.
      */
      firstItem(): Condition
    /**
    - Gets the last Condition from the collection.
      */
      lastItem(): Condition
    /**
    - Gets the middle Condition from the collection.
      */
      middleItem(): Condition
    /**
    - Returns the Condition immediately after the supplied Condition in the collection.
    - @param obj Condition whose index precedes the desired Condition.
      */
      nextItem(obj: Condition): Condition
    /**
    - Returns the Condition immediately before the supplied index.
    - @param obj Index for the Condition immediately after the desired Condition.
      */
      previousItem(obj: Condition): Condition
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
