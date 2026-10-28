# CEPHtmlEngine Logs

CEPHtmlEngine writes logs in CEP 6.1 and later. A CEPHtmlEngine instance usually creates two log files: one for the browser process and another for the renderer process.
The naming conventions are:

- Browser process: `CEPHtmlEngine<versionNumber>-<HostID>-<HostVersion>-<ExtensionID>.log`
- Renderer process: `CEPHtmlEngine<versionNumber>-<HostID>-<HostVersion>-<ExtensionID>-renderer.log`

For example:

- CEPHtmlEngine8-PHXS-18.1.1-com.adobe.DesignLibraries.angular.log
- CEPHtmlEngine8-PHXS-18.1.1-com.adobe.DesignLibraries.angular-renderer.log

The PlugPlug log level controls these logs as well.
