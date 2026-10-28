# exportSequence

25.0

_boolean_

Exports a sequence. When both outputFile and presetFile are omitted, export uses the sequence's applied export settings or falls back to standard export rules.

### Parameters

| Name | Type | Description |
| --- | --- | --- |
| sequence | [_Sequence_](../sequence/reference-index.md) | - |
| exportType | [_Constants.ExportType_](../constants/export-type.md) | Constants.ExportType.IMMEDIATELY, Constants.ExportType.`QUEUE_TO_AME` etc.. |
| outputFile | _string_ | - |
| presetFile | _string_ | - |
| exportFull | _boolean_ | - |
