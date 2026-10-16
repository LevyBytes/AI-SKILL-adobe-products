# Sample Notifier Object

```json
{
  "assetID": "<ASSET ID>",
  "notifiers": [
    {
      "type": "CALLBACK",
      "data": {
        "url": "https://dummy.callback.org/",
        "headers": {
          "x-api-key": "dummykey",
          "access-token": "dummytoken"
        }
      }
    }
  ]
}
```

This excerpt shows the notifier structure only. Add the required fields for the chosen REST operation; replace the asset ID and notification placeholders. Callback URL and header strings shown here are illustrative, not real credentials.
