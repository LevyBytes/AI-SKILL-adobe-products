# Guide object lifecycle

Community declaration reference: InDesign/2023.

```typescript
declare class Guide {
    /**
    - Creates a duplicate Guide.
      */
      duplicate(): Guide
    /**
    - Moves the guide elsewhere. Note: Either to or by is required; when both are supplied, to takes precedence.
    - @param to New guide coordinates as [x, y].
    - @param by Offset from the current guide coordinates as [x, y].
      */
      move(to: (number | string)[], by: (number | string)[]): void
    /**
    - Deletes this Guide.
      */
      remove(): void
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
