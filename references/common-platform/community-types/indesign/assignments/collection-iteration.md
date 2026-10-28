# Assignments collection iteration

Community declaration reference: InDesign/2023.

```typescript
declare class Assignments {
    /**
    - Returns any Assignment from the collection.
      */
      anyItem(): Assignment
    /**
    - Gets every Assignment object.
      */
      everyItem(): Assignment[]
    /**
    - Gets the collection's first Assignment.
      */
      firstItem(): Assignment
    /**
    - Gets the collection's final Assignment.
      */
      lastItem(): Assignment
    /**
    - Gets the collection's middle Assignment.
      */
      middleItem(): Assignment
    /**
    - Returns the Assignment whose index is after the specified Assignment in the collection.
    - @param obj Assignment that immediately precedes the requested one.
      */
      nextItem(obj: Assignment): Assignment
    /**
    - Returns the Assignment with the index before the specified index.
    - @param obj Assignment index immediately after the requested one.
      */
      previousItem(obj: Assignment): Assignment
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
