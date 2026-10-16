# ColorProfileType

Community declaration reference: Photoshop/2015.5.

Color model type defining the document's working space.

```typescript
declare enum ColorProfileType {
    /**
    - Uses a custom color profile for this document's color management.
      */
      CUSTOM = 3,
    /**

    - Leaves the document unmanaged for color.
      */
      NONE = 1,
    /**

    - Uses the working color profile for this document's color management.
      */
      WORKING = 2,
}
```

Source: [Photoshop/2015.5/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Photoshop/2015.5/index.d.ts).
