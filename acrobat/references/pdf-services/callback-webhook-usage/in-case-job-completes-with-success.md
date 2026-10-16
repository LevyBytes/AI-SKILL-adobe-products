# In case Job completes with Success

When a job finishes without error, the callback url receives this **callback payload**:

```json
{
  "jobID": "<JOB ID>",
  "statusResponse": {
    "status": "done",
    "asset": {
      "metadata": {
        "type": "application/pdf",
        "size": 318974
      },
      "downloadUri": "<DOWNLOAD URI",
      "assetID": "<ASSET ID>"
    }
  }
}
```
