# Handling Errors and Timeouts

Network operations can fail because the user is offline, the endpoint is unavailable, or the permission list is missing an entry.

Best practices:

- Put every network call inside a `try...catch` block.
- Check `response.ok` when detecting HTTP failures.
- Choose practical timeout limits for operations that may run long.
- Write useful diagnostics with `console.error()`.

```js
async function safeFetch(url, options = {}, timeoutMs = 8000) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), timeoutMs);

  try {
    const res = await fetch(url, { ...options, signal: controller.signal });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return await res.json();
  } catch (err) {
    console.error("Network request failed:", err);
    throw err;
  } finally {
    clearTimeout(timeout);
  }
}
```
