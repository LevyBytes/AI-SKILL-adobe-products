# Monitor encoding progress

During encoding, each item's state appears in the Status column of the encoding queue. Adobe Media Encoder can process multiple outputs from one source at the same time, although source files are handled one after another according to their queue order.

Work in the application can continue while encoding runs. Items may still be added, removed, or reordered in the queue or watch folder. Outputs that are already encoding, however, cannot be changed.

| Status | Definition |
| --- | --- |
| Ready | The item is waiting in the encoding queue and has not yet been encoded. A file can be removed while it is neither encoded nor currently encoding. |
| Done | Encoding completed successfully for the item. |
| Stopped | The encoding operation was canceled by the user while that item was in progress. |
| Failed | Adobe Media Encoder hit an error while trying to encode the specified item. |
| Skip | One or more selected files can be skipped by the user. Select the files, then choose Edit > Skip Selection. |
