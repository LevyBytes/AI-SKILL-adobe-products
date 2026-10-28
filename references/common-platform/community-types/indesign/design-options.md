# DesignOptions

Community declaration reference: InDesign/2023.

Animation design choices.

```typescript
declare enum DesignOptions {
    /**
    - Uses the current object's properties for the animation's starting appearance at runtime.
      */
      FROM_CURRENT_APPEARANCE = 1634551405,
    /**

    - Uses the current object's properties for the animation's ending appearance at runtime.
      */
      TO_CURRENT_APPEARANCE = 1634554991,
    /**

    - Uses current object properties as the start appearance and current position as the runtime end location.
      */
      TO_CURRENT_LOCATION = 1634553702,
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
