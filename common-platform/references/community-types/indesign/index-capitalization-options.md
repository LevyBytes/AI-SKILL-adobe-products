# IndexCapitalizationOptions

Community declaration reference: InDesign/2023.

Capitalization choices for index entries.

```typescript
declare enum IndexCapitalizationOptions {
    /**
    - Capitalizes every index entry. Note: Only topics created before this capitalization statement in the script are affected.
      */
      ALL_ENTRIES = 1097624645,
    /**

    - Capitalizes every level 1 entry. Note: Only topics created before this capitalization statement in the script are affected.
      */
      ALL_LEVEL_1_ENTRIES = 1095517556,
    /**

    - Capitalizes the specified topic together with its nested topics. Valid only for the topic capitalize method parameter; it cannot be supplied to the index capitalize method. Note: Run this after creating the selected topic and its nested subtopics.
      */
      INCLUDE_SUBENTRIES = 1767072325,
    /**

    - Capitalizes the specified topic while leaving its nested topics unchanged. Valid only for the topic capitalize method parameter; it cannot be supplied to the index capitalize method. Note: Run this after creating the specified topic and its nested topics.
      */
      SELECTED_ENTRY = 1398042725,
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
