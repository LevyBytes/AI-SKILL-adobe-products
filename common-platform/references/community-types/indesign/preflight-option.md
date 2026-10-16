# PreflightOption

Community declaration reference: InDesign/2023.

Options for preflight.

```typescript
declare class PreflightOption extends Preference {
    /**
    - When true, the working profile is embedded while creating a new document.
      */
      preflightEmbedWorkingProfile: boolean
    /**

    - When true, preflight includes objects that do not print.
      */
      preflightIncludeNonprintingObjects: boolean
    /**

    - When true, preflight includes objects on pasteboard.
      */
      preflightIncludeObjectsOnPasteboard: boolean
    /**

    - When true, preflight is disabled for every document or for the current document.
      */
      preflightOff: boolean
    /**

    - Rule applied on document or book open that chooses between an embedded profile and another profile when preflight is enabled.
      */
      preflightProfilePolicy: PreflightProfileOptions
    /**

    - Pages or documents selected for preflight, supplied either as an enumeration or a string. Use a hyphen (-) in the string for ranges, and use a comma (,) for separate pages.
      */
      preflightScope: PreflightScopeOptions | string
    /**

    - Layers selected for preflight.
      */
      preflightWhichLayers: PreflightLayerOptions
    /**

    - Active preflight profile.
      */
      preflightWorkingProfile: PreflightProfile | string
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
