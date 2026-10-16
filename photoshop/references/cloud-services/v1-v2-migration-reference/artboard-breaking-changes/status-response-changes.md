# Status response changes

| V1 | V2 |
| --- | --- |
| `outputs[n].status` | `status` (top-level) |
| `outputs[n].created`/modified` | `createdTime`/modifiedTime` (top-level) |
| `outputs[n]._links.renditions[m].href` | `result.outputs[n].destination.url` |
| `outputs[n].errors.code` (number) | `errorDetails[n].errorCode` (string) |
