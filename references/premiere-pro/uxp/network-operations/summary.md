# Summary

1. **Network Security Model**: UXP blocks plugin internet access until the plugin names allowed hosts. To permit network calls, add approved domains under `requiredPermissions` in `manifest.json`, which helps prevent unexpected traffic.
   - Put each allowed host in the `domains` array (e.g., `"https://api.example.com"`).
   - For pattern-based host coverage, use wildcards (e.g., `"https://*.adobe.io"`),
   - Requests sent to any domain not listed there fail with a permission error,
   - On macOS, security restrictions apply to `http://` URLs; use `https://` instead.
2. **Three Network APIs**: Pick the interface that fits the task:
   - **`fetch()`**: Promise-based, modern HTTP API; handles JSON, text, binary payloads, and streaming; suitable for most requests.
   - **`XMLHttpRequest`**: Older event-driven interface; useful when progress events or upload tracking matter; also helps older code patterns keep working.
   - **`WebSocket`**: Bidirectional real-time channel; keeps server connections open; client-only, because plugins cannot run WebSocket servers.
