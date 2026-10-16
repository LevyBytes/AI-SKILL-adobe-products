# Appendix: Common error codes

| Error Code | Description | Common Cause | Solution |
| --- | --- | --- | --- |
| 400400 | Invalid JSON in request payload | Malformed JSON | Validate JSON syntax |
| 400401 | Invalid value provided | Wrong parameter value/type | Check parameter documentation |
| 400410 | Required fields missing | Missing required field | Add required fields (e.g., outputs array) |
| 400411 | Request blocked by content filters | Inappropriate content | Review content policies |
| 400420 | Required fields missing on API request | Missing critical parameter | Check all required fields present |
| 403401 | User not authorized | Invalid/expired token | Refresh access token |
| 403421 | Quota exhausted | API limits exceeded | Check quota, upgrade plan |
| 404 | Job not found | Invalid jobId | Verify jobId is correct |
| 422404 | Unable to process outputs | Output destination issue | Check output URLs, storage permissions |
| 500600 | Internal server error | Server-side issue | Retry request, contact support if persists |
