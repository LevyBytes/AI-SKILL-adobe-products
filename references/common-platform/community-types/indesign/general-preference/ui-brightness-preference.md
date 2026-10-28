# GeneralPreference.uiBrightnessPreference

Community declaration reference: InDesign/2023.

Brightness setting for Application User Interface, from 0.0 to 1.0. Color theme presets use 0.0 for Dark, 0.50 for Medium Dark, 0.51 for Medium Bright, and 1.0 for Bright. Intermediate values map automatically to the nearest preset.

```typescript
declare class GeneralPreference extends Preference {
    uiBrightnessPreference: number
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
