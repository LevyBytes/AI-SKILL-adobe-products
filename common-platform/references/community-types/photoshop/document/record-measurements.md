# Document.recordMeasurements

Community declaration reference: Photoshop/2015.5.

Captures measurement data for the Document.
@param source MeasurementSource to record from.
@param dataPoints Identifier array for data points to record; entries unsuitable for the chosen source are skipped.

```typescript
declare class Document {
    recordMeasurements(source?: MeasurementSource, dataPoints?: string[]): void
}
```

Source: [Photoshop/2015.5/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Photoshop/2015.5/index.d.ts).
