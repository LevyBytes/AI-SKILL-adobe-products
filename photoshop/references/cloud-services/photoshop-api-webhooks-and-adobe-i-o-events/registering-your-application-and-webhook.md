# Registering your application and webhook

Adobe I/O Events supports event-driven applications built from Photoshop-originating events.
To listen for events, register a webhook URL for your application and specify the event types it should receive.
When a matching event triggers, the application receives an HTTP POST request at the webhook URL.

Event types correspond to individual APIs. The event provider includes two event types:

- `Photoshop API events`
- `Imaging API Events`

For deeper Adobe I/O Events background:

1. In Adobe's I/O Events documentation, follow [webhook application setup and first webhook registration](https://www.adobe.io/apis/experienceplatform/events/docs.html#!adobedocs/adobeio-events/master/intro/webhooks_intro.md).
2. Open the [webhook sample Node.js app](https://github.com/AdobeDocs/cis-photoshop-api-docs/tree/main/sample-code/webhook-sample-app).
3. You'll need a project on the Adobe I/O Console. Create one by following the [Getting Started](https://raw.githubusercontent.com/AdobeDocs/ffs-photoshop-API/6a5b7e759e09b595562aa4cb20a2e9b36437bb60/src/pages/getting-started/index.md) guide.

After successful registration, the selected event types start arriving for any submitted job that succeeds or fails. That removes the need to poll job status by job ID.

To apply the flow, continue with the [event-triggering API guide](https://raw.githubusercontent.com/AdobeDocs/ffs-photoshop-API/6a5b7e759e09b595562aa4cb20a2e9b36437bb60/src/pages/guides/triggering-an-event/index.md).

## See also

- [Getting Started](../authentication.md)
