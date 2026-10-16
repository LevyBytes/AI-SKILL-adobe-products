# Example: POST Requests and JSON Payloads

Many web APIs require [POST requests](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Methods/POST) that carry JSON bodies. Send that data like this.

```js
async function postUserData(user) {
  try {
    const response = await fetch("https://api.example.com/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    });

    if (!response.ok) throw new Error(`Server error: ${response.status}`);
    const result = await response.json();
    console.log("âœ… User created:", result);
  } catch (err) {
    console.error("Failed to post user data:", err);
  }
}

// Example usage
postUserData({ name: "Jamie", role: "Editor" });
```

UXP is not a browser environment

As the earlier [UXP is not a browser](../premiere-the-unified-extensibility-platform/uxp-is-not-a-browser.md) note explains, some familiar browser features are unavailable. For stream-reading examples, `TextDecoder` is not available.

```js
async function fetchStreamedData() {
  const response = await fetch("https://api.example.com/stream");
  const reader = response.body.getReader();
  const decoder = new TextDecoder(); // âŒ decoder is undefined here!!
  // ...
}
```
