# 1. `creative_upsampler_v1` header value rejected

Requests that pass `creative_upsampler_v1` in the `x-model-version` header now receive **422 Unprocessable Entity**:

```json
{
  "error_code": "validation_error",
  "message": "Invalid x-model-version: creative_upsampler_v1. Only 'precise_upsampler_v1' is supported."
}
```

**Action required:** Change the `x-model-version` header to the new value or omit it. The default is now `precise_upsampler_v1`.

```http
x-model-version: precise_upsampler_v1
```
