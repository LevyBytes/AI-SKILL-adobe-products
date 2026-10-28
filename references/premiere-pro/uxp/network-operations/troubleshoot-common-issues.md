# Troubleshoot Common Issues

| Symptom | Likely Cause | Solution |
| --- | --- | --- |
| TypeError: Failed to fetch | Domain not allow-listed | Add the domain under `requiredPermissions.network.domains` |
| Connection fails only on macOS | HTTPS required | Premiere disallows http:// URLs on macOS |
| Request blocked by CORS | Remote server missing CORS headers | Ensure your server allows requests from UXP (check Access-Control-Allow-Origin) |
| WebSocket connection closed unexpectedly | Server-side disconnect | Check for idle timeout or SSL misconfiguration |
