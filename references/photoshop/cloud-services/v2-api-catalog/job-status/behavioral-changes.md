# Behavioral changes

| Behavior | V1 | V2 | Type |
| --- | --- | --- | --- |
| Endpoint per service | Separate endpoints for PS and LR | Single `/v2/status/{jobId}` | Breaking Change |
| Status field name | Varies by service | `status` (consistent) | Breaking Change |
| Output URLs in status response | Varies | `outputs[].destination.url` | Breaking Change |
| Error structure | Varies | Structured `errors[]` array | Breaking Change |
