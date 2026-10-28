# Parameter mapping

| PSDC Engine | V2 API | Notes |
| --- | --- | --- |
| `sensei:engine` | `/v2/create-composite` | Endpoint changes |
| `repo:id` (URN) | `creativeCloudFileId` | Asset identifier (URN ID) on ACP Storage, supplied as input |
| `repo:path` (input) | `creativeCloudPath` | Asset path in personal storage, or project-root-relative path when creativeCloudProjectId is used for input |
| `repo:path` (output) | `creativeCloudPath` | Asset path in personal storage, or project-root-relative path when creativeCloudProjectId is used for output |
| N/A | `creativeCloudProjectId` (input) | Project root ID (URN), optional for project-scoped input assets |
| N/A | `creativeCloudProjectId` (output) | Project root ID (URN), optional for project-scoped output assets |
| `sensei:repoType` | Not needed | Field type determines it |
| `dc:format` (input) | Auto-detected | V2 does not require this |
| `dcxucf:format` (output) | `mediaType` | Use `document/vnd.adobe.cpsd+dcxucf` or `document/vnd.adobe.cpsd+dcx` |
| `sensei:params.format` | `mediaType` in output | Simplified |
| `document/vnd.adobe.cpsd+dcx` | `document/vnd.adobe.cpsd+dcxucf` or `document/vnd.adobe.cpsd+dcx` | Cloud PSD format |
| Status: separate endpoint | `/v2/status/{jobId}` | Status is unified |

**Benefits:**

- JSON structure is simpler
- multipart/form-data complexity is removed
- Status is checked through one endpoint
- Authentication matches the other V2 endpoints
