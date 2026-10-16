# UserDictionaries

Community declaration reference: InDesign/2023.

Collection wrapper for user dictionaries.

```typescript
declare class UserDictionaries {
    /**
    - Object count in this collection.
      */
      readonly length: number
    /**

    - Looks up a UserDictionary by index.
    - @param index Index value.
      */
      [index: number]: UserDictionary
    /**

    - Selects an arbitrary UserDictionary from this collection.
      */
      anyItem(): UserDictionary
    /**

    - Counts elements on the UserDictionary collection.
      */
      count(): number
    /**

    - Gets all UserDictionary objects in this collection.
      */
      everyItem(): UserDictionary[]
    /**

    - Gets the initial UserDictionary in this collection.
      */
      firstItem(): UserDictionary
    /**

    - Finds a UserDictionary by index or name.
    - @param index Index or name selector.
      */
      item(index: number | string): UserDictionary
    /**

    - Finds a UserDictionary by name.
    - @param name Name value.
      */
      itemByName(name: string): UserDictionary
    /**

    - Gets UserDictionaries spanning the supplied range.
    - @param from UserDictionary, index, or name at the range start.
    - @param to UserDictionary, index, or name at the range end.
      */
      itemByRange(from: UserDictionary | number | string, to: UserDictionary | number | string): UserDictionary[]
    /**

    - Gets the final UserDictionary in this collection.
      */
      lastItem(): UserDictionary
    /**

    - Gets the central UserDictionary in this collection.
      */
      middleItem(): UserDictionary
    /**

    - Gets the UserDictionary positioned after the supplied UserDictionary.
    - @param obj UserDictionary that comes before the wanted UserDictionary.
      */
      nextItem(obj: UserDictionary): UserDictionary
    /**

    - Gets the UserDictionary positioned before the supplied index.
    - @param obj Index belonging to the UserDictionary after the wanted UserDictionary.
      */
      previousItem(obj: UserDictionary): UserDictionary
    /**

    - Builds source text that resolves back to the UserDictionary when run.
      */
      toSource(): string
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
