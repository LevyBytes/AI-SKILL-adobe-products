# Watching your plugin

Bundler or framework workflows usually include a build step that watches your plugin for changes. Because the developer tool does not know about those build steps, automatic reload after changes requires both actions:

- Start the plugin's `watch` build process from a terminal
- In the Developer Tool, choose **••• > Watch** for the desired plugin

When the `watch` build process detects a change, it rebuilds the plugin. The Developer Tool then sees the generated build changes and reloads the plugin in the host.
