# DisplayPerformancePreference

Community declaration reference: InDesign/2023.

Application defaults for display performance.

```typescript
declare class DisplayPerformancePreference extends Preference {
    /**
    - Default object-level display performance settings. Note: These settings are not applied to graphics already placed in the document.
      */
      defaultDisplaySettings: ViewDisplaySettings
    /**

    - When true, application-level defaults override object-level default display performance settings and object-level settings cannot be set.
      */
      ignoreLocalSettings: boolean
    /**

    - When true, application-level preferences retain object-level display settings.
      */
      persistLocalSettings: boolean
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
