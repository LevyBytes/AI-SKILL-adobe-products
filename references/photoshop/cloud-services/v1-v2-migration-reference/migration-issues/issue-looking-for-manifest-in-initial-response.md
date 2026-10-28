# Issue: Looking for manifest in initial response

**Problem:** The client expects manifest data in the immediate response.

**Solution:** Query the status endpoint after submitting the job.

The following command outlines omit authentication headers and the generation request body. Submit the job, then poll its returned identifier. A completed response supplies URL-based or embedded output destinations.

```shell
# Submit the generation job (supply headers and request body).
curl -X POST https://photoshop-api.adobe.io/v2/generate-manifest ...
# Poll the returned jobId (supply authentication headers).
curl -X GET https://photoshop-api.adobe.io/v2/status/{jobId} ...
```
