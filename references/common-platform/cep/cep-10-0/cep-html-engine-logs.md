# CEPHtmlEngine Logs

In CEP 6.1 and later releases, CEPHtmlEngine also writes logs. A CEPHtmlEngine instance normally produces two log files: one for the browser process and one for the renderer process.
The files follow these naming conventions:

- Browser process: `CEPHtmlEngine<versionNumber>-<HostID>-<HostVersion>-<ExtensionID>.log`
- Renderer process: `CEPHtmlEngine<versionNumber>-<HostID>-<HostVersion>-<ExtensionID>-renderer.log`

For example:

- CEPHtmlEngine8-PHXS-18.1.1-com.adobe.DesignLibraries.angular.log
- CEPHtmlEngine8-PHXS-18.1.1-com.adobe.DesignLibraries.angular-renderer.log

The PlugPlug log level controls these logs as well.
