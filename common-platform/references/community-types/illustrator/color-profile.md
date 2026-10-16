# ColorProfile

Community declaration reference: Illustrator/2022.

Inclusion setting for PDF ICC profiles.

```typescript
declare enum ColorProfile {
    /**
    - Tags everything (embedProfile == true)
      */
      INCLUDEALLPROFILE = 1,
    /**

    - Tags everything with the destination profile.
      */
      INCLUDEDESTPROFILE = 4,
    /**

    - Tags every RGB item while leaving CMYK unchanged.
      */
      INCLUDERGBPROFILE = 3,
    /**

    - Keeps tagged items tagged and untagged items untagged.
      */
      LEAVEPROFILEUNCHANGED = 2,
    /**

    - Removes all profiles (embedProfile == false)
      */
      None = 0,
}
```

Source: [Illustrator/2022/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Illustrator/2022/index.d.ts).
