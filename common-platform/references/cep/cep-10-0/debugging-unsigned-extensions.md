# Debugging Unsigned Extensions

During development, if you are not using HTML Extension Builder for debug workflows and want to skip extension-signature enforcement, edit the CSXS preference properties file here:

- Win: regedit > `HKEY_CURRENT_USER`/Software/Adobe/CSXS.10, then create a PlayerDebugMode entry of type "string" and set its value to "1".
- macOS: In the terminal, run `defaults write com.adobe.CSXS.10 PlayerDebugMode 1` (The plist also resides at /Users/`<username>`/Library/Preferences/com.adobe.CSXS.10.plist)

These settings allow debug extensions to appear in host applications. CSXS.10 is shown under the assumption that the extension targets CEP 10; for an earlier CEP version, replace 10 with the matching version number.
