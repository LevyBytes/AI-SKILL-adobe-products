# CharacterStyleGroups collection iteration

Community declaration reference: InDesign/2023.

```typescript
declare class CharacterStyleGroups {
    /**
    - Chooses an arbitrary CharacterStyleGroup from this collection.
      */
      anyItem(): CharacterStyleGroup
    /**
    - Provides all CharacterStyleGroup objects from this collection.
      */
      everyItem(): CharacterStyleGroup[]
    /**
    - Provides the collection's initial CharacterStyleGroup.
      */
      firstItem(): CharacterStyleGroup
    /**
    - Provides the final CharacterStyleGroup in this collection.
      */
      lastItem(): CharacterStyleGroup
    /**
    - Provides the center CharacterStyleGroup from this collection.
      */
      middleItem(): CharacterStyleGroup
    /**
    - Provides the CharacterStyleGroup positioned immediately after the supplied CharacterStyleGroup.
    - @param obj CharacterStyleGroup that precedes the requested one.
      */
      nextItem(obj: CharacterStyleGroup): CharacterStyleGroup
    /**
    - Provides the CharacterStyleGroup positioned immediately before the supplied index.
    - @param obj Index belonging to the CharacterStyleGroup after the requested one.
      */
      previousItem(obj: CharacterStyleGroup): CharacterStyleGroup
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
