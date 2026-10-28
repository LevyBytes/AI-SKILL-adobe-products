# ForcedColors

Community declaration reference: Photoshop/2015.5.

Colors to force into the color table.

```typescript
declare enum ForcedColors {
    /**
    - Restricts the table to pure black and pure white.
      */
      BLACKWHITE = 2,
    /**

    - Uses no forced colors.
      */
      NONE = 1,
    /**

    - Adds red, green, blue, cyan, magenta, yellow, black, and white.
      */
      PRIMARIES = 3,
    /**

    - Includes the 216 web-safe colors.
      */
      WEB = 4,
}
```

Source: [Photoshop/2015.5/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Photoshop/2015.5/index.d.ts).
