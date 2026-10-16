# PreflightProfiles collection iteration

Community declaration reference: InDesign/2023.

```typescript
declare class PreflightProfiles {
    /**
    - Gets an arbitrary PreflightProfile from the collection.
      */
      anyItem(): PreflightProfile
    /**
    - Gets all PreflightProfile objects from the collection.
      */
      everyItem(): PreflightProfile[]
    /**
    - Gets the first PreflightProfile from the collection.
      */
      firstItem(): PreflightProfile
    /**
    - Gets the last PreflightProfile from the collection.
      */
      lastItem(): PreflightProfile
    /**
    - Gets the middle PreflightProfile from the collection.
      */
      middleItem(): PreflightProfile
    /**
    - Gets the PreflightProfile positioned after the supplied PreflightProfile in the collection.
    - @param obj PreflightProfile positioned immediately before the requested PreflightProfile.
      */
      nextItem(obj: PreflightProfile): PreflightProfile
    /**
    - Gets the PreflightProfile positioned before the specified index.
    - @param obj Index for the PreflightProfile positioned after the requested PreflightProfile.
      */
      previousItem(obj: PreflightProfile): PreflightProfile
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
