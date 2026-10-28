# 3. Programmatic Panel Control

Use `pluginManager` to inspect loaded plugins, including the related tutorial at [here](../plugin-management/reference-index.md). After locating the current plugin by the stored `PLUGIN_ID`, `showPanel()` can be called to display the second panel by code:

```javascript
const me = [...pluginManager.plugins].find((plugin) => plugin.id === PLUGIN_ID);
me?.showPanel("uxp-second-panel"); // Opens the panel by entrypoint ID
```

The API supports programmatic panel opening, but not programmatic closing. Closing still has to be done by the user in the Premiere UI.
