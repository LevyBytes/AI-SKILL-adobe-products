# Error handling example

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
