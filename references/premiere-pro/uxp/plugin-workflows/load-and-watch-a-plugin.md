# Load and Watch a plugin

Plugins listed in the developer workspace are not automatically added to their supported host application. After the host application starts, tell UDT manually to load the plugin. The choices are:

- **Load**: loads the plugin in the host application.
- **Load & Watch**: loads the plugin in the host application and monitors the plugin's source code for changes. Use this choice for normal development.

[Figure: UDT - Load Plugin](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/plugins/img/getting-started-udt-load-and-watch.png)

When a plugin loads successfully, UDT shows a small green notification at the bottom of its window.

[Figure: Load Successful](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/plugins/tutorials/udt-deep-dive/img/plugin-workflows-load-successful.png)

For a plugin that _fails_ to load, UDT shows a small red notification with a **Details** link; select it so the UDT Logs panel opens for error inspection.

[Figure: Load Failed](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/plugins/tutorials/udt-deep-dive/img/plugin-workflows-load-failed.png)

With **Load & Watch** selected, the plugin can also be reloaded from the UDT window by clicking **Reload**.

Manifest changes

Load & Watch reloads the plugin automatically after source-code edits, except for manifest updates. After editing `manifest.json`, you need to **Unload** the plugin and start it again with **Load & Watch** or **Load**.
