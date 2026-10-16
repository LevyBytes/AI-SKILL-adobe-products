# ExecuteAsModalOptions

| Name | Type | Min Version | Description |
| --- | --- | --- | --- |
| commandName | _string_ | 22.5 | Command label; if the operation lasts long enough, the progress bar displays it. |
| descriptor | _object_ | 22.5 | Object literal supplied as the second parameter of `targetFunction` after an [executeAsModal](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/ps-reference/objects/executeasmodal.md) call. Functions cannot be included. |
| interactive | _boolean_ | 23.3 | Optional mode that permits UI interaction during executeAsModal. Use it when invoked dialogs or workspaces need user input. See [Modal Execution](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/ps-reference/objects/executeasmodal.md). |
| timeOut | _number_ | 25.10 | When execution finds an existing modal state, the request keeps retrying until this many seconds elapse. |
