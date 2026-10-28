# Receive events

For background on webhook events and application setup, first read [using webhooks and events](../photoshop-api-webhooks-and-adobe-i-o-events.md).

To get Photoshop events delivered to the webhook application, include the IMS ORG ID as a header on the API call that starts the job:

```shell
-H 'x-gw-ims-org-id: <YOUR_IMS_ORG_ID>'
```
