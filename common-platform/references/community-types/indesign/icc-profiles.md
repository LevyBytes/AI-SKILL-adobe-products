# ICCProfiles

Community declaration reference: InDesign/2023.

ICC profile inclusion choices for the PDF document.

```typescript
declare enum ICCProfiles {
    /**
    - Includes every ICC profile.
      */
      INCLUDE_ALL = 1229144929,
    /**

    - Excludes ICC profiles.
      */
      INCLUDE_NONE = 1229144942,
    /**

    - Includes RGB profiles and tagged source CMYK profiles.
      */
      INCLUDE_RGB_AND_TAGGED = 1229144946,
    /**

    - Includes profiles from tagged sources.
      */
      INCLUDE_TAGGED = 1229144948,
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
