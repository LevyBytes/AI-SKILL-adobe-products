# Error response structure

V2 standardizes the error payload format for every endpoint:

```json
{
  "errors": [
    {
      "code": "INPUT_EXCEEDS_MAX_SIZE",
      "message": "Input file exceeds maximum allowed size of 100MB"
    }
  ]
}
```

V1 services did not share one error schema.
