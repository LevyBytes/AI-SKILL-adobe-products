# PlugPlug Logs

Applications that support CEP extensions generate log files containing useful debugging information. Locations are platform-specific:

- Win: `C:\Users\<USERNAME>\AppData\Local\Temp`
- Mac: `/Users/<USERNAME>/Library/Logs/CSXS`

PlugPlug log names follow these patterns:

- CEP 4.0 - 6.0 releases: csxs`<versionNumber>`-`<HostID>`.log. For example, PlugPlug in Illustrator creates csxs8-ILST.log.
- CEP 6.1 and later releases: `CEP<versionNumber>-<HostID>.log`. For example, PlugPlug in Illustrator creates CEP8-ILST.log.

Logging levels can be set to these values:

- 0 - Off (logging disabled)
- 1 - Error (default level)
- 2 - Warn
- 3 - Info
- 4 - Debug
- 5 - Trace
- 6 - All

Update the **LogLevel** key at the relevant location below. Restart the application so the new log level is applied:

- Win: `regedit > HKEY_CURRENT_USER/Software/Adobe/CSXS.8`
- Mac: `/Users/<USERNAME>/Library/Preferences/com.adobe.CSXS.8.plist`

For Mac, run this in the terminal:

    defaults write com.adobe.CSXS.8 LogLevel 6
