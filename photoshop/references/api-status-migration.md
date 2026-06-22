# Status Migration

> Adobe Photoshop reference. Original prose; identifiers preserved verbatim.

Use this migration note when moving v1 status checks to the consolidated `/v2/status/{jobId}` endpoint.

## Overview

In v1, status lookup URLs were split by service. V2 puts job status checking behind one endpoint no matter which operation produced the job.

**V1 Endpoints:**

- `/lrService/status/{jobId}` - Lightroom operation status
- `/pie/psdService/status/{jobId}` - Photoshop operation status

**V2 Endpoint:**

- `/v2/status/{jobId}` - Status checks for every operation

## Benefits of the unified endpoint

- **Single Integration Point:** Use one endpoint across all job types
- **Consistent Response Format:** Every operation returns the same status shape
- **Simplified Code:** Clients no longer need to remember which service created the job
- **Better Error Details:** Error reporting uses a richer structure

## Basic migration example

**Key differences**

**Base URL:**

- V1: `https://image.adobe.io`; V2: `https://photoshop-api.adobe.io`

**Endpoint:**

- V1: Service-specific paths; V2: unified `/v2/status/{jobId}`

**Response Structure:**

- V1: Service-dependent structures; V2: consistent structure
- V1: Basic error details; V2: richer error information

### V1 approach

**Lightroom Status:**

```shell
curl -X GET \
  https://image.adobe.io/lrService/status/550e8400-e29b-41d4-a716-446655440000 \
  -H "Authorization: Bearer $token" \
  -H "x-api-key: $apiKey"
```

**Photoshop Status:**

```shell
curl -X GET \
  https://image.adobe.io/pie/psdService/status/550e8400-e29b-41d4-a716-446655440000 \
  -H "Authorization: Bearer $token" \
  -H "x-api-key: $apiKey"
```

### V2 approach

**Unified Status (all operations):**

```shell
curl -X GET \
  https://photoshop-api.adobe.io/v2/status/550e8400-e29b-41d4-a716-446655440000 \
  -H "Authorization: Bearer $token" \
  -H "x-api-key: $apiKey"
```

## Response format

### Job status values

**Possible Status Values:**

- `pending` - The job is waiting in the queue and has not started
- `running` - Processing is underway
- `succeeded` - The job finished successfully
- `failed` - The job ended with errors

### Successful job response

```json
{
  "jobId": "550e8400-e29b-41d4-a716-446655440000",
  "status": "succeeded",
  "createdTime": "2025-01-15T10:30:00.000Z",
  "modifiedTime": "2025-01-15T10:30:45.000Z",
  "result": {
    "outputs": [
      {
        "url": "https://storage.example.com/output.jpg",
        "mediaType": "image/jpeg"
      }
    ]
  }
}
```

### Failed job response

```json
{
  "jobId": "550e8400-e29b-41d4-a716-446655440000",
  "status": "failed",
  "createdTime": "2025-01-15T10:30:00.000Z",
  "modifiedTime": "2025-01-15T10:30:45.000Z",
  "errorDetails": [
    {
      "errorCode": "400401",
      "message": "The value provided is not valid."
    }
  ]
}
```

### Running job response

```json
{
  "jobId": "550e8400-e29b-41d4-a716-446655440000",
  "status": "running",
  "createdTime": "2025-01-15T10:30:00.000Z",
  "modifiedTime": "2025-01-15T10:30:15.000Z"
}
```

## Polling pattern

### Suggested polling loop

```javascript
async function pollJobStatus(jobId, maxAttempts = 60, intervalMs = 5000) {
  for (let attempt = 0; attempt < maxAttempts; attempt++) {
    const response = await fetch(`https://photoshop-api.adobe.io/v2/status/${jobId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "x-api-key": apiKey,
      },
    });

    const status = await response.json();

    if (status.status === "succeeded") {
      return status.result;
    }

    if (status.status === "failed") {
      throw new Error(`Job failed: ${JSON.stringify(status.errorDetails)}`);
    }

    // Status is 'pending' or 'running', wait and retry
    await new Promise((resolve) => setTimeout(resolve, intervalMs));
  }

  throw new Error("Job polling timeout");
}
```

**Best Practices:**

- Begin with a 5-second polling interval
- Add exponential backoff when jobs may take longer
- Define a sensible upper bound for total polling time
- Cover every status value: pending, running, succeeded, failed

### Polling with exponential backoff

```javascript
async function pollWithBackoff(jobId, maxAttempts = 20) {
  let interval = 2000; // Start with 2 seconds
  const maxInterval = 30000; // Cap at 30 seconds

  for (let attempt = 0; attempt < maxAttempts; attempt++) {
    const response = await fetch(`https://photoshop-api.adobe.io/v2/status/${jobId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "x-api-key": apiKey,
      },
    });

    const status = await response.json();

    if (status.status === "succeeded" || status.status === "failed") {
      return status;
    }

    await new Promise((resolve) => setTimeout(resolve, interval));
    interval = Math.min(interval * 1.5, maxInterval);
  }

  throw new Error("Job polling timeout");
}
```

## Output handling

### External storage outputs

For external storage, the response points to URLs that can be fetched for result files:

```json
{
  "result": {
    "outputs": [
      {
        "url": "https://storage.example.com/output.jpg",
        "mediaType": "image/jpeg"
      }
    ]
  }
}
```

**Downloading Outputs:**

```shell
curl -X GET "https://storage.example.com/output.jpg" -o output.jpg
```

### Hosted storage outputs

For hosted storage, the response includes temporary URLs managed by Adobe:

```json
{
  "result": {
    "outputs": [
      {
        "url": "https://adobe-hosted-storage.example.com/temp/output.jpg?expires=...",
        "mediaType": "image/jpeg"
      }
    ]
  }
}
```

Hosted storage URLs expire according to the `validityPeriod` in the request; retrieve results before they expire.

### Embedded storage outputs

For embedded storage, the returned payload carries the output data directly:

```json
{
  "result": {
    "outputs": [
      {
        "destination": {
          "embedded": "base64",
          "content": "iVBORw0KGgoAAAANSUhEUgAA..."
        },
        "mediaType": "image/jpeg"
      }
    ]
  }
}
```

For JSON outputs:

```json
{
  "result": {
    "outputs": [
      {
        "destination": {
          "embedded": "json",
          "content": {
            "document": {...},
            "layers": [...]
          }
        },
        "mediaType": "application/json"
      }
    ]
  }
}
```

## Error handling

### Error response structure

```json
{
  "jobId": "550e8400-e29b-41d4-a716-446655440000",
  "status": "failed",
  "createdTime": "2025-01-15T10:30:00.000Z",
  "modifiedTime": "2025-01-15T10:30:45.000Z",
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

### Common error codes

| Error Code | Description |
| --- | --- |
| 400400 | Request payload contains invalid JSON |
| 400401 | Value supplied is invalid |
| 400410 | Required fields are absent |
| 400411 | Request is blocked by content filters |
| 403401 | User lacks authorization |
| 403421 | Quota has been exhausted |
| 404 | Job cannot be found |
| 422404 | Outputs cannot be processed |
| 500600 | Internal server error |

### Error handling example

```javascript
async function handleJobStatus(jobId) {
  try {
    const status = await pollJobStatus(jobId);

    if (status.status === "failed") {
      console.error("Job failed with errors:");
      status.errorDetails.forEach((error) => {
        console.error(`- ${error.errorCode}: ${error.message}`);
      });
      throw new Error("Job processing failed");
    }

    return status.result.outputs;
  } catch (error) {
    if (error.response?.status === 404) {
      throw new Error("Job not found. Invalid job ID.");
    }
    throw error;
  }
}
```

## HTTP status codes

The status endpoint can itself respond with several HTTP status codes:

| HTTP Status | Meaning |
| --- | --- |
| 200 | Status lookup succeeded |
| 400 | Job ID format is invalid |
| 401 | Access token is missing or invalid |
| 404 | No job matched the ID |
| 500 | Internal server error |

## Job lifecycle

Lifecycle order is useful when choosing status-handling branches:

```text
1. Job Submitted
   |
2. pending -> queued; start has not begun
   |
3. running -> processing is active
   |
4. succeeded -> completed without errors
   OR
4. failed -> errors stopped the job
```

**Typical Timing:**

- Simple operations (auto tone, auto straighten): generally complete in 5-15 seconds
- Complex operations (actions, composites): often take 15-60 seconds
- Large files or multiple operations: may run for 60+ seconds

## Complete polling example

```javascript
// Complete example with proper error handling
async function processJob(jobId) {
  const maxAttempts = 60;
  const pollInterval = 5000;

  console.log(`Starting to poll job ${jobId}`);

  for (let attempt = 0; attempt < maxAttempts; attempt++) {
    try {
      const response = await fetch(`https://photoshop-api.adobe.io/v2/status/${jobId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          "x-api-key": apiKey,
        },
      });

      if (!response.ok) {
        if (response.status === 404) {
          throw new Error(`Job ${jobId} not found`);
        }
        throw new Error(`Status check failed: ${response.statusText}`);
      }

      const status = await response.json();
      console.log(`Job status: ${status.status} (attempt ${attempt + 1})`);

      switch (status.status) {
        case "succeeded":
          console.log("Job completed successfully");
          return status.result.outputs;

        case "failed":
          console.error("Job failed:", status.errorDetails);
          throw new Error(`Job failed: ${status.errorDetails.map((e) => e.message).join(", ")}`);

        case "pending":
        case "running":
          // Continue polling
          await new Promise((resolve) => setTimeout(resolve, pollInterval));
          break;

        default:
          throw new Error(`Unknown job status: ${status.status}`);
      }
    } catch (error) {
      console.error(`Error polling job status:`, error);
      throw error;
    }
  }

  throw new Error(`Job polling timeout after ${(maxAttempts * pollInterval) / 1000} seconds`);
}

// Usage
try {
  const outputs = await processJob(jobId);
  console.log("Outputs:", outputs);
} catch (error) {
  console.error("Job processing failed:", error);
}
```

## Migration checklist

- [ ] Change the base URL from `image.adobe.io` to `photoshop-api.adobe.io`
- [ ] Move the status path to `/v2/status/{jobId}`
- [ ] Revise status handling for pending, running, succeeded, and failed
- [ ] Support the new error response structure
- [ ] Tune polling logic with appropriate intervals
- [ ] Cover external, hosted, and embedded output types
- [ ] Adjust error-code handling for the new code set
- [ ] Test every operation type you use, including edit, actions, and composite

## Common migration issues

### Issue: Using service-specific endpoint

**Problem:** The implementation still calls separate service endpoints

```javascript
// Wrong
const url = `https://image.adobe.io/lrService/status/${jobId}`;
```

**Solution:** Point status checks at the unified endpoint

```javascript
// Correct
const url = `https://photoshop-api.adobe.io/v2/status/${jobId}`;
```

### Issue: Incorrect status value handling

**Problem:** The code checks only for "success" and "failure"

**Solution:** Branch on every status value

```javascript
if (status.status === 'succeeded') { ... }
else if (status.status === 'failed') { ... }
else if (status.status === 'running' || status.status === 'pending') {
  // Continue polling
}
```

### Issue: Not handling error details array

**Problem:** The code expects one error message

**Solution:** Iterate through the error array

```javascript
if (status.errorDetails) {
  status.errorDetails.forEach((error) => {
    console.error(`${error.errorCode}: ${error.message}`);
  });
}
```

## Next steps

- Read the migration guides for the job types you use
- Update polling code to follow the new error structure
- Validate status checks against development endpoints
- Add production monitoring for failed jobs
