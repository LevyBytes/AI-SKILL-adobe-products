# CEPHtmlEngine Logs

CEPHtmlEngine creates logs in CEP 6.1 and later. Each CEPHtmlEngine instance usually writes two log files: one for the browser process and one for the renderer process.
CEPHtmlEngine log names use these patterns:

- Browser process: `CEPHtmlEngine<versionNumber>-<HostID>-<HostVersion>-<ExtensionID>.log`
- Renderer process: `CEPHtmlEngine<versionNumber>-<HostID>-<HostVersion>-<ExtensionID>-renderer.log`

For example:

- CEPHtmlEngine8-PHXS-18.1.1-com.adobe.DesignLibraries.angular.log
- CEPHtmlEngine8-PHXS-18.1.1-com.adobe.DesignLibraries.angular-renderer.log

The PlugPlug log level controls these logs too.
