# AMEExporterSettingsSummaryEvent

Community declaration reference: Audition/2018.

Event carrying the exporter settings summary for a preset.

```typescript
declare class AMEExporterSettingsSummaryEvent {
    /**
    - Propagates when an exporter settings summary request fails.
    - Request exporter settings summary failed event type
      */
      static readonly EVENT_REQUESTEXPORTERSETTINGSSUMMARY_ERROR: string
    /**

    - Propagates when an exporter settings summary request succeeds.
    - Request exporter settings summary succeeded event type
      */
      static readonly EVENT_REQUESTEXPORTERSETTINGSSUMMARY_SUCCESS: string
    /**

    - Exporter settings summary for this preset.
      */
      readonly exporterSettingsSummary: string
    /**

    - */
      static __(): any
}
```

Source: [Audition/2018/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Audition/2018/index.d.ts).
