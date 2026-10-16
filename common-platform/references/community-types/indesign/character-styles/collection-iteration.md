# CharacterStyles collection iteration

Community declaration reference: InDesign/2023.

```typescript
declare class CharacterStyles {
    /**
    - Retrieves any CharacterStyle from the collection.
      */
      anyItem(): CharacterStyle
    /**
    - Retrieves all CharacterStyle objects in the collection.
      */
      everyItem(): CharacterStyle[]
    /**
    - Retrieves the first CharacterStyle in the collection.
      */
      firstItem(): CharacterStyle
    /**
    - Retrieves the final CharacterStyle in the collection.
      */
      lastItem(): CharacterStyle
    /**
    - Retrieves the middle CharacterStyle in the collection.
      */
      middleItem(): CharacterStyle
    /**
    - Retrieves the CharacterStyle after the supplied CharacterStyle.
    - @param obj CharacterStyle whose index precedes the requested CharacterStyle.
      */
      nextItem(obj: CharacterStyle): CharacterStyle
    /**
    - Retrieves the CharacterStyle before the supplied index.
    - @param obj Index of the CharacterStyle following the requested CharacterStyle.
      */
      previousItem(obj: CharacterStyle): CharacterStyle
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
