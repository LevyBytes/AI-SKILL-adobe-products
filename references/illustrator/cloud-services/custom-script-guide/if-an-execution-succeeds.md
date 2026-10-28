# If an execution succeeds

For a successful custom script run, the status API response reports `"status": "succeeded"`. That response also carries job metadata, any data the script returned, and pre-signed URLs for output assets.

**Sample success response**

```json
{
  "jobId": "<jobid>",
  "timestamp": "<timestamp>",
  "status": "succeeded",
  "data": {
    "conversionDetails": {
      "inputFile": "<Illustrator target document>",
      "outputFolder": "<outputFolderName>",
      "success": true
    }
  },
  "outputs": [
    {
      "destination": {
        "url": "<Pre-signed URL for the output asset>"
      },
      "source": "<outputFolderName>\\debug.log"
    },
    {
      "destination": {
        "url": "<Pre-signed URL for the output asset>"
      },
      "source": "<outputFolderName>\\outputResult.ai"
    }
  ]
}
```
