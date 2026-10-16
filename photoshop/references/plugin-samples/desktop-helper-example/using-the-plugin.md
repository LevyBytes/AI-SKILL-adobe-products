# Using the Plugin

The Electron helper app and UXP talk through an embedded websocket server in this plugin.

Server files and Electron configuration live in `helper/public`; build output uses them as Electron entrypoints.

When both parts are running, each side should show the `'Connected'` status. If either side drops off, the other side should detect the disconnect too, and both displays should change to `'Disconnected'`.

[Figure: Plugin Screenshot](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop-plugin-samples/main/desktop-helper-sample/images/connection.png)

Because the server is embedded, it runs only on `localhost` and brokers communication for one helper-app instance with one UXP plugin instance. The websocket server defaults to port `4040`, while the Electron helper app is served from port `3000`.

Besides maintaining the connection, the two components can exchange text strings, which appear in the `Received data from the helper` and `Received data from UXP` sections.
