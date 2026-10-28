# UXP v6.4 Integration

> #### New
>
> - [WebView](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/uxp-api/reference-js/global-members/html-elements/html-web-view-element.md) for panels
> - [Path Module APIs](https://raw.githubusercontent.com/AdobeDocs/uxp-photoshop/main/src/pages/uxp-api/reference-js/global-members/Path/index.md) support
> - Scripts can use fsapi with unrestricted localFileSystem access
>
> #### Bugs Fixes
>
> - PluginManifest parsing / Load Plugin errors not logged in UDT
> - Error shown in UDT APP logs on Plugin UnLoad
> - UXP script : file session tokens are not getting created
> - Error message and stack are empty in case of reject("error string") executed in script
> - [Win only]-Volume is being muted automatically for 3rd video in the tutorial while opening the video in Theatre mode
> - After closing the theatre mode, videos are overlapping while scrolling up and down in DP
> - Provide an API to programmatically close dialog in pop-out/theatre mode.
> - Plugin Data folder shouldn't be created for scripts
> - Crash on exit
> - script.setResult("kSuccess") not working
> - Resource Leaks in Window Dialog on UWP
> - Privilege plugin fail to add in XD in certain cases
> - Fixed mouse/keyboard events within Webview in XD v55 and Win 10.
