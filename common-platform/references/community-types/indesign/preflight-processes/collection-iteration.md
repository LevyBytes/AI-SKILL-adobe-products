# PreflightProcesses collection iteration

Community declaration reference: InDesign/2023.

```typescript
declare class PreflightProcesses {
    /**
    - Gets an arbitrary PreflightProcess from the collection.
      */
      anyItem(): PreflightProcess
    /**
    - Gets all PreflightProcess objects from the collection.
      */
      everyItem(): PreflightProcess[]
    /**
    - Gets the first PreflightProcess from the collection.
      */
      firstItem(): PreflightProcess
    /**
    - Gets the last PreflightProcess from the collection.
      */
      lastItem(): PreflightProcess
    /**
    - Gets the middle PreflightProcess from the collection.
      */
      middleItem(): PreflightProcess
    /**
    - Gets the PreflightProcess positioned after the supplied PreflightProcess in the collection.
    - @param obj PreflightProcess positioned immediately before the requested PreflightProcess.
      */
      nextItem(obj: PreflightProcess): PreflightProcess
    /**
    - Gets the PreflightProcess positioned before the specified index.
    - @param obj Index for the PreflightProcess positioned after the requested PreflightProcess.
      */
      previousItem(obj: PreflightProcess): PreflightProcess
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
