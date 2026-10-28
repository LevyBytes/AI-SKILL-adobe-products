# Rate limits

Adobe limits API call volume, frequency, and concurrency for Firefly APIs to keep peak performance equitable, and it monitors usage so risks can be addressed proactively.

If usage goes beyond these limits, an HTTP 429 "Too Many Requests" error may be returned. Use the 'retry-after' header to find the wait time in seconds before sending another request.

The limits cover **your entire organization**.

API usage limits are:
