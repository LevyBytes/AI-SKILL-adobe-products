# ResolveStyleClash

Community declaration reference: InDesign/2023.

Choices for resolving clashes caused by matching style names.

```typescript
declare enum ResolveStyleClash {
    /**
    - Renames the incoming style automatically.
      */
      RESOLVE_CLASH_AUTO_RENAME = 2001879873,
    /**

    - Selects the existing style.
      */
      RESOLVE_CLASH_USE_EXISTING = 2001879877,
    /**

    - Selects the new style.
      */
      RESOLVE_CLASH_USE_NEW = 2001879886,
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
