# ViewPreference

Community declaration reference: InDesign/2023.

Preferences for the view.

```typescript
declare class ViewPreference extends Preference {
    /**
    - Arrow-key movement distance for a specified object. Ranges by unit: points range 0.001 to 100; picas range 0p0.001 to 8p4; mm range 0 to 35.278; cm range 0 to 3.5278; inches range 0 to 1.3889; ciceros range 0c0.001 to 7c9.839.
      */
      cursorKeyIncrement: number | string
    /**

    - Guide snapping zone in pixels. (Range: 1 to 36) Note: snapping happens only while guides are shown.
      */
      guideSnaptoZone: number
    /**

    - Point distance between major tick marks on the horizontal ruler. (Range: 4 to 256) Applies only when horizontal measurement units is custom.
      */
      horizontalCustomPoints: number
    /**

    - Measurement unit for the horizontal ruler and other horizontal measurements, including grid columns, horizontal offsets, column gutters, or others.
      */
      horizontalMeasurementUnits: MeasurementUnits
    /**

    - Points per inch value, typically 72. (Range: 60 to 80)
      */
      pointsPerInch: number
    /**

    - Measurement unit used by the print dialog.
      */
      printDialogMeasurementUnits: MeasurementUnits
    /**

    - Default zero point where the vertical and horizontal rulers intersect, plus the horizontal ruler scope.
      */
      rulerOrigin: RulerOrigin
    /**

    - When true, unselected frame borders and diagonal lines in empty unselected frames are shown.
      */
      showFrameEdges: boolean
    /**

    - When true, notes are shown.
      */
      showNotes: boolean
    /**

    - When true, the horizontal and vertical rulers are shown.
      */
      showRulers: boolean
    /**

    - Measurement unit used for stroke measurements.
      */
      strokeMeasurementUnits: MeasurementUnits
    /**

    - Measurement unit used for text-size measurements.
      */
      textSizeMeasurementUnits: MeasurementUnits
    /**

    - Measurement units used for typography.
      */
      typographicMeasurementUnits: MeasurementUnits
    /**

    - Point distance between major tick marks on the vertical ruler. (Range: 4 to 256) Applies only when vertical measurement units is custom.
      */
      verticalCustomPoints: number
    /**

    - Measurement unit for the vertical ruler and other vertical measurements, including grid rows, vertical offsets, row heights, or others.
      */
      verticalMeasurementUnits: MeasurementUnits
}
```

Source: [InDesign/2023/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/InDesign/2023/index.d.ts).
