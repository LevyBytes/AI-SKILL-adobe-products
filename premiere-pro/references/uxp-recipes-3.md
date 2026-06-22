# Network, Recipe Template

> Adobe Premiere Pro reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Network Operations; Topic Heading.

## Network Operations

Connect a UXP plugin to the web.

UXP includes network APIs for plugins that need to **fetch data**, **access online services**, or **communicate in real time** while still relying on a permission model designed to protect users. This guide explains `fetch`, `XMLHttpRequest`, and `WebSocket` usage in UXP, how network permissions should be declared, and how to manage failures.

### Network Security

Internet access is blocked for UXP plugins unless you opt in, which prevents unexpected or hidden network behavior. When a plugin must fetch data, retrieve images, or work with WebSockets, declare the needed [network permissions](uxp-manifest.md).

Inside the plugin's `manifest.json`, configure [`requiredPermissions.network`](uxp-manifest.md) with the domain list the plugin may reach.

```json
{
  "requiredPermissions": {
    "network": {
      "domains": ["https://api.example.com", "https://*.adobe.io"]
    }
  }
}
```

Domain patterns can include wildcards, for example `"https://api.*.example.com"` for dev, staging, and production environments. Requests to domains outside the list fail with a permission error.

HTTP and HTTPS are both available to the APIs, but macOS blocks `http://` for security. Prefer `https://`.

### Choose the right Network API

UXP offers three main APIs for network communication:

| API | Best For | Supported Features |
| --- | --- | --- |
| fetch | Modern, promise-based HTTP requests | JSON, text, binary data, streaming |
| XMLHttpRequest | Legacy compatibility | Progress events, upload tracking |
| WebSocket | Real-time communication | Persistent bidirectional data flow |

These network APIs are globally available in UXP, so imports are unnecessary. The sections below cover each option.

### Using fetch()

[`fetch()`](uxp-data-transfers.md) is the most direct and flexible option for network requests. It is asynchronous, modern, and already present in the UXP global scope, so `require()` is not needed.

### index.js

```js
// Get weather forecast for San Jose â˜€ï¸
async function getForecast() {
  try {
    const response = await fetch("https://api.weather.gov/gridpoints/MTR/99,82/forecast");

    if (!response.ok) {
      throw new Error(`HTTP error ${response.status}: ${response.statusText}`);
    }
    const data = await response.json(); // ðŸ‘ˆ parse the response as JSON
    console.log(`Forecast: ${data.properties.periods[0].detailedForecast}`);
  } catch (err) {
    console.error("âŒ Failed to fetch forecast:", err);
  }
}
```

### manifest.json

```json
{
  // ...
  "requiredPermissions": {
    "network": {
      "domains": ["https://api.weather.gov"]
    }
  }
  // ...
}
```

After receiving a `response`, call `json()`, `text()`, or `blob()` to read the matching data type. Use `await` to obtain the result because each method gives back a [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).

### Example: Fetching an Image Dynamically

Network data can also feed directly into the UI.

### index.html

```html
<img src="https://picsum.photos/300/200" alt="A random image" />
```

### manifest.json

```json
{
  // ...
  "requiredPermissions": {
    "network": {
      "domains": ["https://picsum.photos/"]
    }
  }
  // ...
}
```

In UXP, the `<img>` tag works without issue when the remote domain is on the allow-list.

### Example: POST Requests and JSON Payloads

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

As the earlier [UXP is not a browser](uxp-changelog-premiere-pro-v26-2-0.md) note explains, some familiar browser features are unavailable. For stream-reading examples, `TextDecoder` is not available.

```js
async function fetchStreamedData() {
  const response = await fetch("https://api.example.com/stream");
  const reader = response.body.getReader();
  const decoder = new TextDecoder(); // âŒ decoder is undefined here!!
  // ...
}
```

### Using XMLHttpRequest (XHR)

The older `XMLHttpRequest` interface is event-driven. It remains useful when a plugin needs progress reporting or upload status.

### index.js

```js
function getForecastWithXHR() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://api.weather.gov/gridpoints/MTR/99,82/forecast");
  xhr.responseType = "json";

  xhr.onload = () => {
    if (xhr.status === 200) {
      console.log(`Forecast: ${xhr.response.properties.periods[0].detailedForecast}`);
    } else {
      console.error(`XHR failed with status ${xhr.status}`);
    }
  };

  xhr.onerror = () => console.error("Network error occurred");
  xhr.send();
}
```

### manifest.json

```json
{
  // ...
  "requiredPermissions": {
    "network": {
      "domains": ["https://api.weather.gov"]
    }
  }
  // ...
}
```

### Using WebSocket

WebSockets keep a plugin connected to a server, which fits apps that require real-time updates.

### index.js

```js
let socket;

async function connectToServer() {
  try {
    if (socket) {
      console.log("ðŸ”Œ Disconnecting existing socket...");
      socket.close();
      socket = null;
      return;
    }

    socket = new WebSocket("wss://javascript.info/article/websocket/demo/hello");

    socket.onopen = () => {
      console.log("âœ… WebSocket connection established");
      socket.send("Hello from Premiere plugin!");
    };

    socket.onmessage = (event) => {
      console.log(`ðŸ“© Message from server: ${event.data}`);
    };

    socket.onerror = (err) => {
      console.error("âš ï¸ WebSocket error:", err);
    };

    socket.onclose = () => {
      console.log("Connection closed");
      socket = null;
    };
  } catch (e) {
    console.error("Failed to connect via WebSocket:", e);
  }
}
```

### manifest.json

```json
{
  // ...
  "requiredPermissions": {
    "network": {
      "domains": ["wss://javascript.info"]
    }
  }
  // ...
}
```

UXP supports WebSocket clients only

Plugins may open connections to WebSocket servers, but they cannot host or accept inbound connections.

### Handling Errors and Timeouts

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

### Troubleshoot Common Issues

| Symptom | Likely Cause | Solution |
| --- | --- | --- |
| TypeError: Failed to fetch | Domain not allow-listed | Add the domain under `requiredPermissions.network.domains` |
| Connection fails only on macOS | HTTPS required | Premiere disallows http:// URLs on macOS |
| Request blocked by CORS | Remote server missing CORS headers | Ensure your server allows requests from UXP (check Access-Control-Allow-Origin) |
| WebSocket connection closed unexpectedly | Server-side disconnect | Check for idle timeout or SSL misconfiguration |

### Reference Material

- [`fetch`](uxp-data-transfers.md) API Reference.
- [`XMLHttpRequest`](uxp-xml-http-request.md) Reference.
- [`WebSocket`](uxp-data-transfers.md) Reference.
- [Manifest Permissions](uxp-manifest.md).
- [Network Permission Details](uxp-manifest.md).

### Summary

1. **Network Security Model**: UXP blocks plugin internet access until the plugin names allowed hosts. To permit network calls, add approved domains under `requiredPermissions` in `manifest.json`, which helps prevent unexpected traffic.
   - Put each allowed host in the `domains` array (e.g., `"https://api.example.com"`).
   - For pattern-based host coverage, use wildcards (e.g., `"https://*.adobe.io"`),
   - Requests sent to any domain not listed there fail with a permission error,
   - On macOS, security restrictions apply to `http://` URLs; use `https://` instead.
2. **Three Network APIs**: Pick the interface that fits the task:
   - **`fetch()`**: Promise-based, modern HTTP API; handles JSON, text, binary payloads, and streaming; suitable for most requests.
   - **`XMLHttpRequest`**: Older event-driven interface; useful when progress events or upload tracking matter; also helps older code patterns keep working.
   - **`WebSocket`**: Bidirectional real-time channel; keeps server connections open; client-only, because plugins cannot run WebSocket servers.

## Topic Heading

### Example

### HTML

```html

```

### JavaScript

```js
async function foo() {
  // do something
}
```

### manifest

```json

```

Include an output screenshot when applicable

### Reference material

-
