# Suggested polling loop

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
