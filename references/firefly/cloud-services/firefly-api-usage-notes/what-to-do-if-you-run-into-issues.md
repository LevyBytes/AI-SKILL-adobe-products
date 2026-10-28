# What to do if you run into issues

When limits are exceeded, the API returns **HTTP 429 Too Many Requests**. To recover, use one or more of these approaches:

- Review usage patterns and remove requests that are not needed.
- Add retry behavior based on a [`retry-after` HTTP header](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Retry-After) or an [exponential backoff strategy](https://en.wikipedia.org/wiki/Exponential_backoff).
- Ask your account manager to enable higher usage rates.
