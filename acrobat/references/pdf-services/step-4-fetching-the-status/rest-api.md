# REST API

```bash
curl --location -g --request GET 'https://pdf-services.adobe.io/operation/extractpdf/{{Placeholder for job id}}/status' \
--header 'Authorization: Bearer {{Placeholder for token}}' \
--header 'x-api-key: {{Placeholder for client id}}'
```

Rather than repeatedly calling the status API, you can opt to be notified when the job finishes by using a Webhook. The [documentation](../webhook-notification.md) covers this in more detail.

### REST API

```bash
curl --location -g --request GET 'https://pdf-services.adobe.io/operation/compresspdf/{{Placeholder for job id}}/status' \
--header 'Authorization: Bearer {{Placeholder for token}}' \
--header 'x-api-key: {{Placeholder for client id}}'
```

Rather than polling the status API to track the job, you can instead have completion notifications pushed to you over a Webhook. The [documentation](../webhook-notification.md) covers this in more depth.
