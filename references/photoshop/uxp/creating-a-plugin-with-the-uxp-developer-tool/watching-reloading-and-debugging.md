# Watching, Reloading, and Debugging

Choosing `Watch` from the Actions menu makes the Developer Tool monitor your on-disk code for changes.
When a project file changes, UDT reloads the plugin automatically. That creates a quick edit -> mistake -> fix -> reload loop.

Manual reload is also available by choosing `Reload` from the Actions menu. With `Watch` enabled, this usually is unnecessary, though some users still prefer the manual action.

To debug the plugin, choose `Debug` from the Actions menu. A window like this opens:

[Figure: Debug Window](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/guides/devtool/udt-walkthrough/images/udt-debugger.png)

This debugger resembles the Chrome debugger and supports viewing the console log, setting breakpoints, stepping into and out of functions, and similar tasks. To inspect logs without working through the full debugger, choose `Logs` from the Actions menu.
