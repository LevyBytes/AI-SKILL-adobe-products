# V2 behavior

V2 routes every job-status lookup through `/v2/status/{jobId}`, no matter which operation submitted the work. The response carries a `status` value (`pending`, `running`, `succeeded`, `failed`), an `outputs` array with status and destination URL details per output, and structured `errors` entries.
