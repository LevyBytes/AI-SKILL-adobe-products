# EPSImportPreference

Community declaration reference: InDesign/2023.

Preferences for EPS import.

```typescript
declare class EPSImportPreference extends Preference {
    /**
    - When true, clipping paths stored in the EPS file are applied.
      */
      epsFrames: boolean
    /**

    - Specifies when preview images are created.
      */
      epsProxy: CreateProxy
    /**

    - When true, OPI image links in the imported EPS file are read. When false, OPI links remain preserved but are not read.
      */
      opiComments: boolean
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
