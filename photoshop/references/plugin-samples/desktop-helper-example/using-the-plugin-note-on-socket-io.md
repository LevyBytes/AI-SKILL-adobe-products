# Using the Plugin — Note On socket.io

At present, this sample connects to the socket server through `127.0.0.1` so it works across platforms.

On Windows, switching that value to `localhost` does not cause errors.

On Mac, update the socket connection in both `uxp/src/index.js` and `helper/src/components/SocketContext.jsx` so the client 'polling' phase is skipped:

```javascript
let socket = io('http://localhost:4040', { transports: ['websocket'] });
```

This lets UXP connect to the socket server through `localhost`.
