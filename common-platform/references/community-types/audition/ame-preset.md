# AMEPreset

Community declaration reference: Audition/2018.

AMEPreset represents one Adobe Media Encoder preset.

```typescript
declare class AMEPreset {
    /**
    - Name of this preset.
      */
      readonly name: string
    /**

    - Ask AME for this preset's audio channel configuration. AMEAudioChannelConfigurationEvent.EVENT_RequestAudioChannelConfigurationSuccess or AMEAudioChannelConfigurationEvent.EVENT_RequestAudioChannelConfigurationError reports the outcome.
    - Request this preset's audio channel configuration from AME.
      */
      requestAudioChannelConfiguration(): boolean
    /**

    - Ask AME for this preset's exporter settings summary. AMEExporterSettingsSummaryEvent.EVENT_RequestExporterSettingsSummarySuccess or AMEExporterSettingsSummaryEvent.EVENT_RequestExporterSettingsSummaryError reports the outcome.
      */
      requestExporterSettingsSummary(): boolean
}
```

Source: [Audition/2018/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Audition/2018/index.d.ts).
