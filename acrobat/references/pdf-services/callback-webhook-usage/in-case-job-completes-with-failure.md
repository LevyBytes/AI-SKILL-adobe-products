# In case Job completes with Failure

Should the job end in failure, this **callback payload** goes to the callback url instead:

```json
{
  "jobID": "<JOB ID>",
  "statusResponse": {
    "status": "failed",
    "error": {
      "code": "<ERROR CODE>",
      "message": "<ERROR MESSAGE>",
      "status": 400
    }
  }
}
```
