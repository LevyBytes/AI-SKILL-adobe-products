# Watching your plugin

With bundlers or frameworks, a build step commonly watches plugin files for changes. The developer tool is unaware of that build process, so automatic reloads after detected edits require this setup:

- Run the `watch` build process in a terminal
- Use **••• > Watch** on the desired plugin from the Developer Tool

When the `watch` build process notices a change, it rebuilds the plugin. The resulting build output is what the Developer Tool detects, causing it to reload the plugin in the host.
