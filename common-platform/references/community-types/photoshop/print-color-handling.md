# PrintColorHandling

Community declaration reference: Photoshop/2015.5.

Color-conversion handling used while printing.

```typescript
declare enum PrintColorHandling {
    /**
    - Photoshop handles color conversions.
      */
      PHOTOSHOPMANAGED = 2,
    /**

    - Printer handles color conversions.
      */
      PRINTERMANAGED = 1,
    /**

    - Prints channels one by one without color conversions.
      */
      SEPARATIONS = 3,
}
```

Source: [Photoshop/2015.5/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Photoshop/2015.5/index.d.ts).
