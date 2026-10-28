# Debugging Unsigned Extensions

During development, you can bypass extension-signature checks by editing the CSXS preference properties file at these locations:

- Win: regedit > `HKEY_CURRENT_USER`/Software/Adobe/CSXS.11, then create PlayerDebugMode as a "string" entry with value "1".
- macOS: Run `defaults write com.adobe.CSXS.11 PlayerDebugMode 1` in Terminal (the plist is also at /Users/`<username>`/Library/Preferences/com.adobe.CSXS.11.plist).

Those entries allow debug extensions to appear inside host applications. CSXS.11 assumes the target extension is being developed for CEP 11. For an extension targeting an earlier CEP release, replace 11 with the matching version number.
