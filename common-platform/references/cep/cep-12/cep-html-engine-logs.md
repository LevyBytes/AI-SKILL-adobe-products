# CEPHtmlEngine Logs

CEPHtmlEngine writes logs in CEP 6.1 and later. Each CEPHtmlEngine instance usually creates two log files: one for the browser process and another for the renderer process.
The generated files follow these patterns:

- Browser process: `CEPHtmlEngine<versionNumber>-<HostID>-<HostVersion>-<ExtensionID>.log`
- Renderer process: `CEPHtmlEngine<versionNumber>-<HostID>-<HostVersion>-<ExtensionID>-renderer.log`

For example:

- CEPHtmlEngine8-PHXS-18.1.1-com.adobe.DesignLibraries.angular.log
- CEPHtmlEngine8-PHXS-18.1.1-com.adobe.DesignLibraries.angular-renderer.log

The PlugPlug log level also controls these files.
