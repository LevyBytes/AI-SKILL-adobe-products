# REST API

```bash
curl --location -g --request GET 'https://pdf-services.adobe.io/operation/electronicseal/{{Placeholder for job id}}/status' \
--header 'Authorization: Bearer {{Placeholder for token}}' \
--header 'x-api-key: {{Placeholder for client id}}'
```

Rather than polling the status API, you can instead have job-completion notices delivered over a Webhook. See the [webhook documentation](../webhook-notification.md) for the details.
