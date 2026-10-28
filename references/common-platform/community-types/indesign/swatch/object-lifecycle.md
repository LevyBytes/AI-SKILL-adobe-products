# Swatch object lifecycle

Community declaration reference: InDesign/2023.

```typescript
declare class Swatch {
    /**
    - Creates a duplicate Swatch.
      */
      duplicate(): Swatch
    /**
    - Deletes this swatch.
    - @param replacingWith Swatch applied where the deleted swatch had been used.
      */
      remove(replacingWith: Swatch): void
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
