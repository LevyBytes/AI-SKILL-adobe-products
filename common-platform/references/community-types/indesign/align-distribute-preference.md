# AlignDistributePreference

Community declaration reference: InDesign/2023.

Alignment and distribution preference settings.

```typescript
declare class AlignDistributePreference extends Preference {
    /**
    - Bounds used as the reference for page-item alignment or distribution.
      */
      alignDistributeBounds: AlignDistributeBounds
    /**

    - When true, page-item spacing is distributed while the bounds setting is ignored.
      */
      distributeAbsolute: boolean
    /**

    - Distance applied while distributing page items.
      */
      distributeAbsoluteMeasurement: number | string
    /**

    - When true, page-item spacing is distributed while the bounds setting is ignored.
      */
      distributeSpaceAbsolute: boolean
    /**

    - Distance applied while distributing page items.
      */
      distributeSpaceAbsoluteMeasurement: number | string
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
