# Debug your plugin

When a plugin misbehaves, click the **`{}`** link in the UDT window to debug it. UDT opens the UDT Debugger panel; its foundation is the [Chrome Developer Tool](../tech-stack-foundations/debugging.md), so most familiar capabilities are available.

[Figure: UDT - Debug](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/plugins/tutorials/udt-deep-dive/img/plugin-workflows-debug.png)

Inside the debugger, use the **Elements**, **Console**, **Sources**, and **Network** tabs for ordinary debugging work: setting breakpoints, stepping into and out of functions, moving through code, inspecting elements, and related tasks.

[Figure: UDT - Debugger](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/plugins/tutorials/udt-deep-dive/img/plugin-workflows-debugger.png)

Break on start can pause execution as the plugin loads. In UDT, use the plugin's **••• > Options...** menu, choose **Advanced**, then select **Break on start** in the next dialog.

[Figure: UDT - Break on start](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/plugins/tutorials/udt-deep-dive/img/plugin-workflows-break-on-start.png)

After troubleshooting is complete, close the debugger window.
