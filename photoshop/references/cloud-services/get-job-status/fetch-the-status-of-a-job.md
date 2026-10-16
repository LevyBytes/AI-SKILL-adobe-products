# Fetch the status of a job

Invoking any Photoshop API endpoint starts an asynchronous job and returns a response body with the URL for polling that job's status.

After a successful API call returns the job ID, poll the corresponding `href` value to retrieve the job status:

```shell
curl -X GET \
  https://image.adobe.io/pie/psdService/status/<JOB_ID> \
  -H "Authorization: Bearer $token"  \
  -H "x-api-key: $apiKey" \
  -H "Content-Type: application/json"
```
