# NumberingLists collection iteration

Community declaration reference: InDesign/2023.

```typescript
declare class NumberingLists {
    /**
    - Returns an arbitrary NumberingList from the collection.
      */
      anyItem(): NumberingList
    /**
    - Returns all NumberingList entries from the collection.
      */
      everyItem(): NumberingList[]
    /**
    - Gets the first NumberingList from the collection.
      */
      firstItem(): NumberingList
    /**
    - Gets the last NumberingList from the collection.
      */
      lastItem(): NumberingList
    /**
    - Gets the middle NumberingList from the collection.
      */
      middleItem(): NumberingList
    /**
    - Returns the NumberingList immediately after the supplied NumberingList in the collection.
    - @param obj NumberingList whose index precedes the desired NumberingList.
      */
      nextItem(obj: NumberingList): NumberingList
    /**
    - Returns the NumberingList immediately before the supplied index.
    - @param obj Index for the NumberingList immediately after the desired NumberingList.
      */
      previousItem(obj: NumberingList): NumberingList
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
