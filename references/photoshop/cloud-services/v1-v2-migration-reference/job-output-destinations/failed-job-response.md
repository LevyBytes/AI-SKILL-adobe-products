# Failed job response

For a failed job, the response does not include `result`:

```json
{
  "jobId": "550e8400-e29b-41d4-a716-446655440000",
  "createdTime": "2025-11-11T10:00:00.000Z",
  "modifiedTime": "2025-11-11T10:05:35.000Z",
  "status": "failed",
  "errorDetails": [
    {
      "errorCode": "400401",
      "message": "The value provided is not valid."
    },
    {
      "errorCode": "400420",
      "message": "Required fields missing on the API request."
    }
  ]
}
```

**Pattern:** For failed jobs, the payload uses `errorDetails` instead of a `result` object.
