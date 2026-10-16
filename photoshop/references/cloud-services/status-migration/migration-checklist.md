# Migration checklist

- [ ] Change the base URL from `image.adobe.io` to `photoshop-api.adobe.io`
- [ ] Move the status path to `/v2/status/{jobId}`
- [ ] Revise status handling for pending, running, succeeded, and failed
- [ ] Support the new error response structure
- [ ] Tune polling logic with appropriate intervals
- [ ] Cover external, hosted, and embedded output types
- [ ] Adjust error-code handling for the new code set
- [ ] Test every operation type you use, including edit, actions, and composite
