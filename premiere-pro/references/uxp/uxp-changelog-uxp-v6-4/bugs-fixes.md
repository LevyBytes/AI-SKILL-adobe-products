# Bugs Fixes

- PluginManifest parsing / Load Plugin errors were not logged in UDT.
- UDT APP logs showed an error on Plugin UnLoad.
- UXP script : file session tokens were not being created.
- When reject("error string") ran in script, both the error message and stack were empty.
- [Win only]-Volume muted automatically for the 3rd video in the tutorial while that video opened in Theatre mode.
- After theatre mode closed, videos overlapped while scrolling up and down in DP.
- An API was needed to programmatically close dialog in pop-out/theatre mode.
- Plugin Data folder should not be created for scripts.
- Crash on exit.
- script.setResult("kSuccess") did not work.
- Resource Leaks in Window Dialog on UWP.
- Privilege plugin failed to add in XD in certain cases.
- Mouse/keyboard events within Webview in XD v55 and Win 10 were fixed.
