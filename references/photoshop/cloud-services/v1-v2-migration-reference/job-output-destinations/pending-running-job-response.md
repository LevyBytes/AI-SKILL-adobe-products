# Pending/running job response

During processing, `result` can be missing or partial:

```json
{
  "jobId": "550e8400-e29b-41d4-a716-446655440000",
  "createdTime": "2025-11-11T10:00:00.000Z",
  "modifiedTime": "2025-11-11T10:00:15.000Z",
  "status": "running"
}
```

**Pattern:** `result` appears only after completion. Poll until `status` is either `"succeeded"` or `"failed"`.

**Polling cadence recommendation:** every 5 seconds
