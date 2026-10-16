# PreferencesHistory

History-logging related preferences.

### Properties

| Name | Type | Access | Min Version | Description |
| --- | --- | --- | --- | --- |
| createFirstSnapshot | _boolean_ | R W | 24.0 | When true, Photoshop creates the initial snapshot automatically for each new document. |
| editLogItems | [_EditLogItemsType_](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/modules/constants.md#editlogitemstype) | R W | 24.0 | Selects which edit log entries to capture; applying a value also flips `history.useHistoryLog = true`. |
| nonLinearHistory | _boolean_ | R W | 24.0 | When true, history can branch non-linearly. |
| numberOfHistoryStates | _number_ | R W | 24.0 | Whole-number count of history states to keep [1,1000]. |
| saveLogItems | [_SaveLogItemsType_](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/modules/constants.md#savelogitemstype) | R W | 24.0 | Controls whether history items are saved to metadata, to a file, or to both; setting it also flips `history.useHistoryLog = true`. |
| typename | _string_ | R | 24.0 | Referenced object class name: _"PreferencesHistory"_. |
| useHistoryLog | _boolean_ | R W | 24.0 | Switches history logging on or off. |
