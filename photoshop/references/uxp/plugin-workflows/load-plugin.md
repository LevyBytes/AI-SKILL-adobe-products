# Load plugin

Adding a plugin to the developer workspace does not automatically install it into the host application it supports. Launch the host application first, then ask the plugin to start in that host with **••• > Load**. That workflow lets you keep using the marketplace build when you are not actively developing, and switch to the development build when you need to make a new plugin version.

When loading succeeds, a small green notification at the bottom of the screen reports that the plugin loaded. When loading _fails_, a small red notification appears with a **Details** link. Selecting that link opens the application logs so you can diagnose why loading failed.

After the plugin is already running, **Reload** is the usual action for viewing behavior changes. If you changed the plugin's `manifest.json` file, use **Load** instead so the plugin starts again from scratch.

Photoshop can block the visible load result when it is in a "modal" state, such as showing a dialog or waiting for a tool change to be committed, for example after a crop operation. In that state, the plugin may seem not to load and no message appears. If no success or failure indication shows up right away, return to Photoshop and leave any modal state; the plugin will load after that. The same modal-state caution applies to every loading-related action.
