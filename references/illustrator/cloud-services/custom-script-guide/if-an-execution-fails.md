# If an execution fails

For a failed custom script run, the status API response reports `"status": "failed"` and includes the associated error information.

**Sample failure response**

```json
{
  "jobId": "<jobId>",
  "timestamp": "<date-time>",
  "status": "failed",
  "errors": [
    {
      "error_code": "<error-code>",
      "message": "<error-message>"
    }
  ]
}
```

| Field | Description |
| --- | --- |
| `jobId` | Job's unique identifier. |
| `timestamp` | Completion time for the job. |
| `status` | Current job state. `failed` means script execution did not succeed. |
| `errors` | Array of error objects; each item includes `error_code` and a failure `message`. |
