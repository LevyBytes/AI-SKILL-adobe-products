# PlugPlug Logs

Each application that supports CEP extensions writes log files containing useful debugging information. Log files are stored in these platform-specific locations:

- Win: `C:\Users\<USERNAME>\AppData\Local\Temp`
- macOS: `/Users/<USERNAME>/Library/Logs/CSXS`

The files follow these naming conventions:

- CEP 4.0 - 6.0 releases: csxs`<versionNumber>`-`<HostID>`.log. For example, PlugPlug in Illustrator generates log file csxs8-ILST.log.
- CEP 6.1 and later releases: `CEP<versionNumber>-<HostID>.log`. For example, PlugPlug in Illustrator generates log file CEP8-ILST.log.

You can set logging levels to the following values:

- 0 - Off (No logs are generated)
- 1 - Error (the default logging value)
- 2 - Warn
- 3 - Info
- 4 - Debug
- 5 - Trace
- 6 - All

Update the **LogLevel** key at this location. Restart the application before the new log level takes effect:

- Win: `regedit > HKEY_CURRENT_USER/Software/Adobe/CSXS.10`
- macOS: `/Users/<USERNAME>/Library/Preferences/com.adobe.CSXS.10.plist`

For example of macOS, in the terminal do:

    defaults write com.adobe.CSXS.10 LogLevel 6

Higher log levels can slow extension loading.
