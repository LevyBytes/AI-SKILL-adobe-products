# MeasurementLog

Community declaration reference: Photoshop/2015.5.

Measurement log.

```typescript
declare class MeasurementLog {
    /**
    - Container object.
      */
      readonly parent: object
    /**

    - Object class-name value.
      */
      readonly typename: string
    /**

    - Removes the chosen measurements.
    - @param range Measurement group to remove. Default: selected.
      */
      deleteMeasurements(range?: MeasurementRange): void
    /**

    - Writes out the chosen measurements.
    - @param file Destination file for export. When omitted, Photoshop opens a 'file save' dialog.
    - @param range Measurement group to write. Default: selected.
    - @param dataPoints Data-point identifier array to include in export. Export output keeps the array order. Default set is the data points shown in the Measurement Log palette.
      */
      exportMeasurements(file?: File, range?: MeasurementRange, dataPoints?: string[]): void
}
```

Source: [Photoshop/2015.5/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Photoshop/2015.5/index.d.ts).
