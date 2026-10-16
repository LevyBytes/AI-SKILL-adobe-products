# Status Migration

> Adobe Photoshop reference. Original prose; identifiers preserved verbatim.

Use this migration note when moving v1 status checks to the consolidated `/v2/status/{jobId}` endpoint.

In v1, status lookup URLs were split by service. V2 puts job status checking behind one endpoint no matter which operation produced the job.

**V1 Endpoints:**

- `/lrService/status/{jobId}` - Lightroom operation status
- `/pie/psdService/status/{jobId}` - Photoshop operation status

**V2 Endpoint:**

- `/v2/status/{jobId}` - Status checks for every operation
