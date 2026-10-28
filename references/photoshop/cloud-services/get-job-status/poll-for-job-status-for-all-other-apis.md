# Poll for job status for all other APIs

When processing finishes successfully, the response body reports the job status for every requested output.

**Example response**

```json
{
  "jobId": "de2415fb-82c6-47fc-b102-04ad651c5ed4",
  "outputs": [
    {
      "input": "<SIGNED_GET_URL>",
      "status": "succeeded",
      "created": "2018-01-04T12:57:15.12345:Z",
      "modified": "2018-01-04T12:58:36.12345:Z",
      "_links": {
        "renditions": [
          {
            "href": "<SIGNED_GET_URL>",
            "width": 512,
            "storage": "<storage>",
            "type": "image/jpeg"
          },
          {
            "href": "<SIGNED_GET_URL>",
            "storage": "<storage>",
            "type": "image/png"
          }
        ]
      }
    }
  ],
  "_links": {
    "self": {
      "href": "https://image.adobe.io/pie/psdService/status/de2415fb-82c6-47fc-b102-04ad651c5ed4"
    }
  }
}
```
