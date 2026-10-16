# PlugPlug Logs

Each application that supports CEP extensions writes useful debugging logs. Platform-specific log locations are:

- Win: `C:\Users\<USERNAME>\AppData\Local\Temp`
- macOS: `/Users/<USERNAME>/Library/Logs/CSXS`

The generated files follow these patterns:

- CEP 4.0 - 6.0 releases: csxs`<versionNumber>`-`<HostID>`.log. Example: PlugPlug in Illustrator writes csxs8-ILST.log.
- CEP 6.1 and later releases: `CEP<versionNumber>-<HostID>.log`. Example: PlugPlug in Illustrator writes CEP8-ILST.log.

Logging levels can be set as follows:

- 0 - Off (No logs are generated)
- 1 - Error (the default logging value)
- 2 - Warn
- 3 - Info
- 4 - Debug
- 5 - Trace
- 6 - All

Update the **LogLevel** key at this location (restart the application before the new log level takes effect):

- Win: `regedit > HKEY_CURRENT_USER/Software/Adobe/CSXS.12`
- macOS: `/Users/<USERNAME>/Library/Preferences/com.adobe.CSXS.12.plist`

For example, on macOS run this in the terminal:

    defaults write com.adobe.CSXS.12 LogLevel 6

Note that higher log levels slow extension loading.
