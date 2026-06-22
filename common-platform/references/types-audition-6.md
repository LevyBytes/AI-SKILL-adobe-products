# Audition (part 6)

> Adobe Common Platform reference. Original prose; identifiers preserved verbatim.

/\*\*

-
- @param multitrackDocument
- @param trackRouting
- @param preset
- @param temporaryFilesDir
- @param outputFile Add selected tracks from a multitrack document to the AME queue. Routing arrives as an array of tracks; the first array entry maps to the first channels in the output file. Insert null into the "trackRouting" array to leave a channel unassigned. In addition to the final output file, provide a directory for temporary wave files and the temporary project file. AME deletes the temporary files after export completion. AMEAddMultitrackDocumentToQueueEvent.`EVENT_ADDMULTITRACKDOCUMENTTOQUEUE_SUCCESS` or AMEAddMultitrackDocumentToQueueEvent.`EVENT_ADDMULTITRACKDOCUMENTTOQUEUE_ERROR` reports the outcome. Queue the selected multitrack-document tracks in AME.
  \*/
  addMultitrackDocumentAndRoutingToQueue(
  multitrackDocument: Document,
  trackRouting: any[],
  preset: AMEPreset,
  temporaryFilesDir: string,
  outputFile: string,
  ): boolean

/\*\*

- Connect to AME. DynamicLinkConnectionEvent.`EVENT_CONNECTION` reports the outcome.
- Open the AME connection.
  \*/
  connect(): boolean

/\*\*

- Close the AME connection.
  \*/
  disconnect(): boolean

/\*\*

- \*/
  static dispatchEvent(): any

/\*\*

- \*/
  static removeEventListener(): any

/\*\*

- Ask AME for the available formats. AMEFormatsEvent.`EVENT_REQUESTFORMATS_SUCCESS` or AMEFormatsEvent.`EVENT_REQUESTFORMATS_ERROR` reports the outcome.
- Request AME's available formats.
  \*/
  requestFormats(): boolean
  }

/\*\*

- AMEPreset represents one Adobe Media Encoder preset.
  \*/
  declare class AMEPreset {
  /\*\*
  - Name of this preset.
    \*/
    readonly name: string

/\*\*

- Ask AME for this preset's audio channel configuration. AMEAudioChannelConfigurationEvent.`EVENT_R`equestAudioChannelConfigurationSuccess or AMEAudioChannelConfigurationEvent.`EVENT_R`equestAudioChannelConfigurationError reports the outcome.
- Request this preset's audio channel configuration from AME.
  \*/
  requestAudioChannelConfiguration(): boolean

/\*\*

- Ask AME for this preset's exporter settings summary. AMEExporterSettingsSummaryEvent.`EVENT_R`equestExporterSettingsSummarySuccess or AMEExporterSettingsSummaryEvent.`EVENT_R`equestExporterSettingsSummaryError reports the outcome.
  \*/
  requestExporterSettingsSummary(): boolean
  }

/\*\*

- Event reporting user, match source, and system presets available for a format.
  \*/
  declare class AMEPresetsEvent {
  /\*\*
  - Propagates when an Adobe Media Encoder preset request fails.
  - Request Adobe Media Encoder presets failed event type
    \*/
    static readonly `EVENT_REQUESTPRESETS_ERROR`: string

/\*\*

- Propagates when an Adobe Media Encoder preset request succeeds.
- Request Adobe Media Encoder presets succeeded event type
  \*/
  static readonly `EVENT_REQUESTPRESETS_SUCCESS`: string

/\*\*

- Match source presets available for this format.
  \*/
  readonly matchSourcePresets: any[]

/\*\*

- System presets available for this format.
  \*/
  readonly systemPresets: any[]

/\*\*

- User presets available for this format.
  \*/
  readonly userPresets: any[]

/\*\*

- \*/
  static \_\_(): any
  }
