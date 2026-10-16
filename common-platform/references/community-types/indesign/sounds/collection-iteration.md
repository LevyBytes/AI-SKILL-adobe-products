# Sounds collection iteration

Community declaration reference: InDesign/2023.

```typescript
declare class Sounds {
    /**
    - Gets any Sound from the collection.
      */
      anyItem(): Sound
    /**
    - Gets all Sound objects in the collection.
      */
      everyItem(): Sound[]
    /**
    - Gets the first Sound in the collection.
      */
      firstItem(): Sound
    /**
    - Gets the final Sound in the collection.
      */
      lastItem(): Sound
    /**
    - Gets the middle Sound in the collection.
      */
      middleItem(): Sound
    /**
    - Gets the Sound positioned after the supplied Sound.
    - @param obj Sound positioned immediately before the desired Sound.
      */
      nextItem(obj: Sound): Sound
    /**
    - Gets the Sound whose index comes before the supplied index.
    - @param obj Index belonging to the Sound after the desired Sound.
      */
      previousItem(obj: Sound): Sound
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
