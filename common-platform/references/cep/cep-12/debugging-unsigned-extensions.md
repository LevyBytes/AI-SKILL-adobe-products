# Debugging Unsigned Extensions

During development, you can skip the extension-signature requirement by editing the CSXS preference properties file at this location:

- Win: regedit > `HKEY_CURRENT_USER`/Software/Adobe/CSXS.12; create PlayerDebugMode as type "string" and set it to "1".
- macOS: In the terminal, type: `defaults write com.adobe.CSXS.12 PlayerDebugMode 1` (The plist is also located at /Users/`<username>`/Library/Preferences/com.adobe.CSXS.12.plist)

These entries make debug extensions visible in host applications. CSXS.12 is used here on the assumption that the extension targets CEP 12. For an earlier CEP target, replace 12 with the matching version number.
