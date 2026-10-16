# ColorDestination

Community declaration reference: Illustrator/2022.

Destination profile for PDF output.

```typescript
declare enum ColorDestination {
    /**
    - Changes all colors into the profile chosen for Destination.
      */
      COLORDESTINATIONDOCCMYK = 1,
    /**

    - Keeps untagged content color numbers when they share the destination profile color space. Unavailable when CMS is off.
      */
      COLORDESTINATIONDOCRGB = 3,
    /**

    - Keeps untagged content color numbers when they share the destination profile color space. Unavailable when CMS is off.
      */
      COLORDESTINATIONPROFILE = 5,
    /**

    - Keeps untagged content color numbers when they share the destination profile color space. Unavailable when CMS is off.
      */
      COLORDESTINATIONWORKINGCMYK = 2,
    /**

    - Keeps untagged content color numbers when they share the destination profile color space. Unavailable when CMS is off.
      */
      COLORDESTINATIONWORKINGRGB = 4,
    /**

    - N/A.
      */
      None = 0,
}
```

Source: [Illustrator/2022/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Illustrator/2022/index.d.ts).
