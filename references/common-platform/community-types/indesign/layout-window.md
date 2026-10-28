# LayoutWindow

Community declaration reference: InDesign/2023.

Layout-oriented window.

```typescript
declare class LayoutWindow extends Window {
    /**
    - Currently selected layer.
      */
      activeLayer: Layer | string
    /**

    - Page currently displayed in front.
      */
      activePage: Page
    /**

    - Spread currently displayed in front.
      */
      activeSpread: Spread | MasterSpread
    /**

    - When true, the view previews overprinting.
      */
      overprintPreview: boolean
    /**

    - When true, color numbers stay unchanged for CMYK content lacking embedded profiles and for native artwork, including line art or type. Note: images with profiles unlike the simulated device profile are converted. Valid only when proofing type is custom.
      */
      preserveColorNumbers: boolean
    /**

    - Profile used when proofing colors.
      */
      proofingProfile: string
    /**

    - Proofing-color method.
      */
      proofingType: ProofingType
    /**

    - Layout-view screen mode.
      */
      screenMode: ScreenModeOptions
    /**

    - When true, the proofing profile is used to mimic the dark gray many printers output instead of solid black. Note: Valid only when proofing type is custom.
      */
      simulateInkBlack: boolean
    /**

    - When true, the proofing profile is used to mimic real paper's dull white. Note: Valid only when proofing type is custom.
      */
      simulatePaperWhite: boolean
    /**

    - Default anchor point used as the pivot for object transformations.
      */
      transformReferencePoint: AnchorPoint | [number | string, number | string]
    /**

    - View-specific override for display performance preferences.
      */
      viewDisplaySetting: ViewDisplaySettings
    /**

    - Document-view scaling percentage for enlarging or reducing what is shown. (Range: 5 to 4000)
      */
      zoomPercentage: number
    /**

    - Changes the window magnification to the requested display size.
    - @param given Requested display size.
      */
      zoom(given: ZoomOptions): void
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
