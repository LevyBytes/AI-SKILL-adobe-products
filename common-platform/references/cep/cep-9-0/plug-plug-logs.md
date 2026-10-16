# PlugPlug Logs

Each application that supports CEP extensions creates log files that help with debugging. The log files are stored in these platform-specific locations:

- Win: `C:\Users\<USERNAME>\AppData\Local\Temp`
- Mac: `/Users/<USERNAME>/Library/Logs/CSXS`

The filenames follow these patterns:

- CEP 4.0 - 6.0 releases: csxs`<versionNumber>`-`<HostID>`.log. An Illustrator PlugPlug example is csxs8-ILST.log.
- CEP 6.1 and later releases: `CEP<versionNumber>-<HostID>.log`. An Illustrator PlugPlug example is CEP8-ILST.log.

Logging can be set to these levels:

- 0 - Off (No logs are generated)
- 1 - Error (the default logging value)
- 2 - Warn
- 3 - Info
- 4 - Debug
- 5 - Trace
- 6 - All

Update the **LogLevel** key at one of these paths, then restart the application so the new logging level applies:

- Win: `regedit > HKEY_CURRENT_USER/Software/Adobe/CSXS.9`
- Mac: `/Users/<USERNAME>/Library/Preferences/com.adobe.CSXS.9.plist`

For example, on macOS, run this in Terminal:

defaults write com.adobe.CSXS.9 LogLevel 6

Higher log levels can slow extension loading.
