# TextVariableInstances collection iteration

Community declaration reference: InDesign/2023.

```typescript
declare class TextVariableInstances {
    /**
    - Chooses an arbitrary TextVariableInstance from this collection.
      */
      anyItem(): TextVariableInstance
    /**
    - Provides all TextVariableInstance objects from this collection.
      */
      everyItem(): TextVariableInstance[]
    /**
    - Provides the collection's initial TextVariableInstance.
      */
      firstItem(): TextVariableInstance
    /**
    - Provides the final TextVariableInstance in this collection.
      */
      lastItem(): TextVariableInstance
    /**
    - Provides the center TextVariableInstance from this collection.
      */
      middleItem(): TextVariableInstance
    /**
    - Provides the TextVariableInstance positioned immediately after the supplied TextVariableInstance.
    - @param obj TextVariableInstance that precedes the requested one.
      */
      nextItem(obj: TextVariableInstance): TextVariableInstance
    /**
    - Provides the TextVariableInstance positioned immediately before the supplied index.
    - @param obj Index belonging to the TextVariableInstance after the requested one.
      */
      previousItem(obj: TextVariableInstance): TextVariableInstance
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
