# Complete polling example

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
