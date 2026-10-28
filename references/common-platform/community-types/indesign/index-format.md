# IndexFormat

Community declaration reference: InDesign/2023.

Formatting choices for level 2 and lower index topics.

```typescript
declare enum IndexFormat {
    /**
    - Puts nested topics on the following line, indented from the parent topic.
      */
      NESTED_FORMAT = 1316243814,
    /**

    - Keeps nested topics on the parent topic's line, divided by the specified separator.
      */
      RUNIN_FORMAT = 1382631782,
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
