# Base response structure

Every V2 status payload follows this baseline shape, no matter which destination type was requested:

Partial JSON shape: comments mark content omitted by this excerpt. Supply the documented values before constructing a complete request or response; an omitted object or array does not mean it must be empty.

```jsonc
{
  "jobId": "550e8400-e29b-41d4-a716-446655440000",
  "createdTime": "2025-11-11T10:00:00.000Z",
  "modifiedTime": "2025-11-11T10:05:30.000Z",
  "status": "succeeded",
  "result": {
    "outputs": [/* additional content omitted */]  // Structure varies by destination type
  }
}
```
