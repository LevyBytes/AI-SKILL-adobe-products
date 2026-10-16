# Receive the job's status on the webhook application

The `body` field value holds the job result.

**Response example:**

```json
{
  "event_id": "b412a90e-8bc0-4f0d-931e-9e9b8d24993d",
  "event": {
    "header": {
      "msgType": "JOB_COMPLETION_STATUS",
      "msgId": "8afa1a46-2733-406c-a646-e1c1acdee333",
      "imsOrgId": "<YOUR_IMS_ORG_ID>",
      "eventCode": "photoshop-job-status",
      "_pipelineMeta": {
        "pipelineMessageId": "1586288145511:631472:VA7_A1:142:0"
      },
      "_smarts": {
        "definitionId": "3ee6c9056a9d72fc40e09ddf5fdbb0af752e8e49",
        "runningSmartId": "psmart-yw6wosjksniuuathenny"
      },
      "_adobeio": {
        "imsOrgId": "<YOUR_IMS_ORG_ID>",
        "providerMetadata": "di_event_code",
        "eventCode": "photoshop-job-status"
      }
    },
    "body": {
      "jobId": "63c6e812-6cb8-43de-8a60-3681a9ec6feb",
      "outputs": [
        {
          "status": "succeeded",
          "layers": [
            {
              "id": 2,
              "index": 0,
              "type": "layer",
              "name": "Layer",
              "locked": false,
              "visible": true,
              "bounds": {
                "top": 0,
                "left": 0,
                "width": 100,
                "height": 100
              },
              "blendOptions": {
                "opacity": 100,
                "mode": "normal"
              }
            }
          ],
          "document": {
            "name": "test.psd",
            "width": 1000,
            "height": 1000,
            "bitDepth": 8,
            "imageMode": "rgb",
            "photoshopBuild": "Adobe Creative Imaging Service"
          }
        }
      ],
      "_links": {
        "self": {
          "href": "https://image.adobe.io/pie/psdService/status/8ec6e4f5-b580-41ac-b693-a72f150fec59"
        }
      }
    }
  }
}
```
