# About retries

Every API call is covered by a retry mechanism intended to improve reliability and stability:

- The service retries `429`, `502`, `503`, and `504` status codes three times.
- Retry client requests only when a 5xx response code is returned, since that class signals a server-side processing problem. Do not retry requests for other response codes.
- Use an exponential back-off strategy with three retry attempts.
