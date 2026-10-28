# MojikumiUiPreference

Community declaration reference: InDesign/2023.

Mojikumi UI configuration.

```typescript
declare class MojikumiUiPreference extends Preference {
    /**
    - When true, every character uses full-width spacing.
      */
      lineEndAllOneEm: boolean
    /**

    - When true, every character uses half-width spacing.
      */
      lineEndAllOneHalfEm: boolean
    /**

    - When true, punctuation and the final character on the line use full-width spacing.
      */
      lineEndPeriodOneEm: boolean
    /**

    - When true, line end uke no float is used.
      */
      lineEndUkeNoFloat: boolean
    /**

    - When true, lines indent by one full space and no float is used for all characters.
      */
      oneEmIndentLineEndAllNoFloat: boolean
    /**

    - When true, lines indent one full space and all characters use full-width spacing.
      */
      oneEmIndentLineEndAllOneEm: boolean
    /**

    - When true, lines indent one full space and all characters use half-width spacing.
      */
      oneEmIndentLineEndAllOneHalfEm: boolean
    /**

    - When true, lines indent one space while punctuation and the line's final character use full-width spacing.
      */
      oneEmIndentLineEndPeriodOneEm: boolean
    /**

    - When true, lines indent by one full space and line end uke no float is used.
      */
      oneEmIndentLineEndUkeNoFloat: boolean
    /**

    - When true, lines indent one space and line end uke one half space is used.
      */
      oneEmIndentLineEndUkeOneHalfEm: boolean
    /**

    - When true, all characters except the line's last character use full-width spacing; the last character may use full- or half-width spacing.
      */
      oneOrOneHalfEmIndentLineEndAllOneEm: boolean
    /**

    - When true, lines indent by one or one-half space, and punctuation plus the line's final character use full-width spacing.
      */
      oneOrOneHalfEmIndentLineEndPeriodOneEm: boolean
    /**

    - When true, lines indent one half space or one full space and line end uke no float is used.
      */
      oneOrOneHalfEmIndentLineEndUkeNoFloat: boolean
    /**

    - When true, lines indent one full or half space and line end uke one half space is used.
      */
      oneOrOneHalfEmIndentLineEndUkeOneHalfEm: boolean
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
