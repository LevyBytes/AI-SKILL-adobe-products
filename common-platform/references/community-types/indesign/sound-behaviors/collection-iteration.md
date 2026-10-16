# SoundBehaviors collection iteration

Community declaration reference: InDesign/2023.

```typescript
declare class SoundBehaviors {
    /**
    - Selects an arbitrary SoundBehavior from the collection.
      */
      anyItem(): SoundBehavior
    /**
    - Expands the collection to all SoundBehavior entries.
      */
      everyItem(): SoundBehavior[]
    /**
    - Gets the leading SoundBehavior in the collection.
      */
      firstItem(): SoundBehavior
    /**
    - Gets the final SoundBehavior in the collection.
      */
      lastItem(): SoundBehavior
    /**
    - Gets the central SoundBehavior in the collection.
      */
      middleItem(): SoundBehavior
    /**
    - Gets the SoundBehavior whose index comes after the supplied SoundBehavior.
    - @param obj SoundBehavior before the desired entry.
      */
      nextItem(obj: SoundBehavior): SoundBehavior
    /**
    - Resolves the SoundBehavior positioned just before the supplied index.
    - @param obj Index for the SoundBehavior after the requested one.
      */
      previousItem(obj: SoundBehavior): SoundBehavior
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
