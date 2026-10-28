# Windows collection iteration

Community declaration reference: InDesign/2023.

```typescript
declare class Windows {
    /**
    - Retrieves any Window from the collection.
      */
      anyItem(): Window
    /**
    - Retrieves every Window in the collection.
      */
      everyItem(): Window[]
    /**
    - Retrieves the first Window in the collection.
      */
      firstItem(): Window
    /**
    - Gets the final Window held by this collection.
      */
      lastItem(): Window
    /**
    - Gets the central Window from this collection.
      */
      middleItem(): Window
    /**
    - Gets the Window positioned after the supplied Window in this collection.
    - @param obj Window located just before the target Window.
      */
      nextItem(obj: Window): Window
    /**
    - Gets the Window positioned immediately before the supplied index.
    - @param obj Index for the Window that comes after the target Window.
      */
      previousItem(obj: Window): Window
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
