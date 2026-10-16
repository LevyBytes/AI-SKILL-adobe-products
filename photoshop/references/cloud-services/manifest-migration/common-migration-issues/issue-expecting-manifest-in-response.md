# Issue: Expecting manifest in response

**Problem:** The client expects the manifest in the initial response

**Solution:** Poll status to find the manifest URL or embedded payload

```shell

## Step 2: Poll status

curl -X GET https://photoshop-api.adobe.io/v2/status/{jobId} ...
```
