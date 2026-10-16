# Watch for changes

Most projects built around bundlers include a build command dedicated to watching source changes. UDT does not know about those build steps, so automatic plugin reloads after updates require two actions:

- Start the plugin's `watch` build process from a terminal
- From the Developer Tool, choose **Load & Watch** for the desired plugin

When the terminal `watch` process detects a change and rebuilds the plugin, UDT recognizes the updated build and reloads the plugin in the host environment.
