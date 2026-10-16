# Key structural changes from V1

| V1 Field              | V2 Field             | Notes                                        |
| --------------------- | -------------------- | -------------------------------------------- |
| `created`             | `createdTime`        | ISO-8601 datetime format                     |
| `modified`            | `modifiedTime`       | ISO-8601 datetime format                     |
| `_links.self.href`    | _removed_            | No hypermedia links in V2                    |
| `outputs` (top-level) | `result.outputs`     | Nested inside result object                  |
| `outputs[].status`    | `status` (job-level) | Single status for entire job, not per-output |
| `outputs[]._links`    | _removed_            | No per-output hypermedia links               |
| `outputs[].input`     | _removed_            | No input echo in outputs                     |

**Status Values:** `"pending"`, `"running"`, `"succeeded"`, `"failed"`
