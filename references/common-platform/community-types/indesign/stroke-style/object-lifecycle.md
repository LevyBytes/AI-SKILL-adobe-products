# StrokeStyle object lifecycle

Community declaration reference: InDesign/2023.

```typescript
declare class StrokeStyle {
    /**
    - Creates a duplicate of this StrokeStyle.
      */
      duplicate(): StrokeStyle
    /**
    - Deletes this stroke style.
    - @param replacingWith Stroke style to use as the replacement for the removed style. .
      */
      remove(replacingWith: StrokeStyle | string): void
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
