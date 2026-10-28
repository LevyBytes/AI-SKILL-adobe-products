# AutoKernType

Community declaration reference: Photoshop/2015.5.

Selects the kerning method for characters.

```typescript
declare enum AutoKernType {
    /**
    - Permits manual kerning.
      */
      MANUAL = 1,
    /**

    - Applies kern pairs containing spacing data for particular letter pairs.
      */
      METRICS = 2,
    /**

    - Spaces adjacent characters according to their shapes.
      */
      OPTICAL = 3,
}
```

Source: [Photoshop/2015.5/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Photoshop/2015.5/index.d.ts).
