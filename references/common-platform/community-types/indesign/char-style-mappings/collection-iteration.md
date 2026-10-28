# CharStyleMappings collection iteration

Community declaration reference: InDesign/2023.

```typescript
declare class CharStyleMappings {
    /**
    - Gets any CharStyleMapping from the collection.
      */
      anyItem(): CharStyleMapping
    /**
    - Gets every CharStyleMapping in the collection.
      */
      everyItem(): CharStyleMapping[]
    /**
    - Gets the first CharStyleMapping in the collection.
      */
      firstItem(): CharStyleMapping
    /**
    - Gets the last CharStyleMapping in the collection.
      */
      lastItem(): CharStyleMapping
    /**
    - Gets the middle CharStyleMapping in the collection.
      */
      middleItem(): CharStyleMapping
    /**
    - Gets the collection item after the specified CharStyleMapping.
    - @param obj CharStyleMapping positioned before the desired CharStyleMapping.
      */
      nextItem(obj: CharStyleMapping): CharStyleMapping
    /**
    - Gets the CharStyleMapping before the specified index.
    - @param obj Index of the CharStyleMapping after the desired CharStyleMapping.
      */
      previousItem(obj: CharStyleMapping): CharStyleMapping
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
