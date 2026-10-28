# Polling with exponential backoff

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
