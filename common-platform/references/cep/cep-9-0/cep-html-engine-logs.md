# CEPHtmlEngine Logs

CEPHtmlEngine writes logs in CEP 6.1 and later. A typical CEPHtmlEngine instance writes two files: one for the browser process and one for the renderer process.
The naming scheme is:

- Browser process: `CEPHtmlEngine<versionNumber>-<HostID>-<HostVersion>-<ExtensionID>.log`
- Renderer process: `CEPHtmlEngine<versionNumber>-<HostID>-<HostVersion>-<ExtensionID>-renderer.log`

For example:

- CEPHtmlEngine8-PHXS-18.1.1-com.adobe.DesignLibraries.angular.log
- CEPHtmlEngine8-PHXS-18.1.1-com.adobe.DesignLibraries.angular-renderer.log

The PlugPlug log level controls those files too.
