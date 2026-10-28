# 11. Status response changes

V2 changes the status response shape significantly compared with V1:

|  | V1 | V2 | Notes |
| --- | --- | --- | --- |
| **Status location** | `outputs[n].status` | `status` (top-level) | Breaking |
| **Status values** | `succeeded`, `failed`, `pending` | `pending`, `running`, `succeeded`, `failed` | Adds `running` |
| **Timestamps** | `outputs[n].created`, `outputs[n].modified` | `createdTime`, `modifiedTime` (top-level) | Breaking |
| **Output URL** | `outputs[n]._links.renditions[m].href` | `result.outputs[n].destination.url` | Breaking |
| **Outputs location** | `outputs[]` (top-level) | `result.outputs[]` | Breaking |
| **Input echo** | `outputs[n].input[m].href` | Not returned | Removed |
| **Error structure** | `outputs[n].errors.code` (number) | `errorDetails[n].errorCode` (string) | Breaking |
| **Hypermedia links** | `_links.self.href` | Not present | Removed |

See [Status Migration](../status-migration/reference-index.md) for the full status response reference.
