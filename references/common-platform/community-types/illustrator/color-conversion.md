# ColorConversion

Community declaration reference: Illustrator/2022.

PDF color conversion policy.

```typescript
declare enum ColorConversion {
    /**
    - Keeps untagged content color numbers when they share the destination profile color space. Unavailable when CMS is off.
      */
      COLORCONVERSIONREPURPOSE = 2,
    /**

    - Changes all colors into the profile chosen for Destination.
      */
      COLORCONVERSIONTODEST = 1,
    /**

    - Leaves color data unchanged.
      */
      None = 0,
}
```

Source: [Illustrator/2022/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Illustrator/2022/index.d.ts).
