# ParaStyleMappings collection iteration

Community declaration reference: InDesign/2023.

```typescript
declare class ParaStyleMappings {
    /**
    - Gets any ParaStyleMapping from the collection.
      */
      anyItem(): ParaStyleMapping
    /**
    - Gets every ParaStyleMapping in the collection.
      */
      everyItem(): ParaStyleMapping[]
    /**
    - Gets the first ParaStyleMapping in the collection.
      */
      firstItem(): ParaStyleMapping
    /**
    - Gets the last ParaStyleMapping in the collection.
      */
      lastItem(): ParaStyleMapping
    /**
    - Gets the middle ParaStyleMapping in the collection.
      */
      middleItem(): ParaStyleMapping
    /**
    - Gets the collection item after the specified ParaStyleMapping.
    - @param obj ParaStyleMapping positioned before the desired ParaStyleMapping.
      */
      nextItem(obj: ParaStyleMapping): ParaStyleMapping
    /**
    - Gets the ParaStyleMapping before the specified index.
    - @param obj Index of the ParaStyleMapping after the desired ParaStyleMapping.
      */
      previousItem(obj: ParaStyleMapping): ParaStyleMapping
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
