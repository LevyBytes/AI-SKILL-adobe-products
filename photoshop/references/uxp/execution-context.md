# ExecutionContext

Callbacks passed to `core.executeAsModal` receive this object for modality-related APIs.

| Name | Type | Min Version | Description |
| --- | --- | --- | --- |
| hostControl | _object_ | 23.0 | Photoshop state controls live under this object. |
| hostControl.resumeHistory | (`params`: [_ResumeHistorySuspensionOptions_](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/objects/options/resumehistorysuspensionoptions.md), `commit?`: _boolean_) => _Promise_`<void>` | 23.0 | Resumes history on a target document. commit (optional): when false, Photoshop discards the current modified document state and restores the document to its `suspendHistory`-time state. |
| hostControl.suspendHistory | (`params`: [_HistoryStateInfo_](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/objects/options/historystateinfo.md)) => _Promise_<[*HistorySuspension*](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/d3cf17a4cf92132513faf8f8ad6f143f518ac9d6/src/pages/ps-reference/objects/returnobjects/historysuspension.md)> | 23.0 | Suspends history on a target document and returns the suspension ID that resumeHistory can use. |
| isCancelled | _boolean_ | 23.0 | True after the user cancels the modal interaction. |
| onCancel | _void_ | 23.0 | When assigned a method, it is called when the user cancels the modal interaction. |
| reportProgress | _void_ | 23.0 | Call it to customize the progress bar. |
