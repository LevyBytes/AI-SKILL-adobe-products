# Debugging Tools

Two debugging routes are available. For many plugins, the easiest one is the UXP Developer Tool. Once the plugin is loaded there, use `Debug` from that plugin's Actions menu.

[Figure: Debugging Tools](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/guides/debugging/images/devtool-ellipsis-menu.png)

If the plugin was loaded with the command-line tools instead, use [Chrome DevTools](https://developers.google.com/web/tools/chrome-devtools/javascript) with this process:

Open a new Chrome window and go to `chrome://inspect`. Next to the Discover network targets checkbox, press Configure..., then add localhost:xxxx, where "xxxx" is the port declared in your debug.json file.

After the extension loads, its ID should appear on this page.

In the Chrome debugger, enable `Pause on caught exceptions` on the right side of the `Sources` tab.

The Chrome debugger may offer more capabilities than the UXP Developer Tool, but many of them do not apply to the UXP environment. The UXP Developer Tool's main advantage is the `Watch` action: choose it from the Actions menu, and the tool reloads the plugin automatically whenever JavaScript, HTML, or CSS files change. When you want a manual refresh instead, choose `Reload` from the Actions menu.
