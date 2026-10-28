# Polling request examples

Run these templates in Bash with the Adobe client ID, access token and job ID. Prefer the exact `location` received on job submission. Each endpoint below belongs to its named operation.

## Electronic seal

```bash
curl --location -g --request GET 'https://pdf-services.adobe.io/operation/electronicseal/{{Placeholder for job id}}/status' \
--header 'Authorization: Bearer {{Placeholder for token}}' \
--header 'x-api-key: {{Placeholder for client id}}'
```

An HTTP `200` response still needs its `status` checked. Continue polling for `in progress`; inspect errors for `failed`. For job-completion callbacks, use [webhook notifications](../webhook-notification.md).
