# PlugPlug Logs

Applications that support CEP extensions create log files containing useful debugging data. The log file locations vary by platform:

- Win: `C:\Users\<USERNAME>\AppData\Local\Temp`
- macOS: `/Users/<USERNAME>/Library/Logs/CSXS`

The files use these naming conventions:

- CEP 4.0 - 6.0 releases: csxs`<versionNumber>`-`<HostID>`.log. For example, PlugPlug in Illustrator generates log file csxs8-ILST.log.
- CEP 6.1 and later releases: `CEP<versionNumber>-<HostID>.log`. For example, PlugPlug in Illustrator generates log file CEP8-ILST.log.

Logging can be set to these levels:

- 0 - Off (no log output)
- 1 - Error (default setting)
- 2 - Warn
- 3 - Info
- 4 - Debug
- 5 - Trace
- 6 - All

Update the **LogLevel** key at the following location (restart the application for LogLevel changes to apply):

- Win: `regedit > HKEY_CURRENT_USER/Software/Adobe/CSXS.11`
- macOS: `/Users/<USERNAME>/Library/Preferences/com.adobe.CSXS.11.plist`

For example of macOS, in the terminal do:

    defaults write com.adobe.CSXS.11 LogLevel 6

Higher log levels can slow extension loading.
