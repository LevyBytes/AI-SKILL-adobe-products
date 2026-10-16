# Bugs Fixes

- PluginManifest parsing / Load Plugin errors are now logged in UDT
- UDT APP logs no longer show an error on Plugin UnLoad
- UXP script : file session tokens are now created
- Error message and stack are populated when reject("error string") is executed in script
- [Win only]-Volume no longer mutes automatically for tutorial video 3 when that video opens in Theatre mode
- After theatre mode closes, videos no longer Overlap while scrolling up and down in DP
- API provided to programmatically close dialog in pop-out/theatre mode.
- Plugin Data folder is not created for scripts
- Crash on exit fixed
- script.setResult("kSuccess") now works
- Resource Leaks in Window Dialog on UWP fixed
- Privilege plugin add failure in XD fixed for certain cases
- Mouse/keyboard events within Webview fixed in XD v55 and Win 10.
