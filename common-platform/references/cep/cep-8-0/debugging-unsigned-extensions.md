# Debugging Unsigned Extensions

During development without HTML Extension Builder debug workflows, signature checks can be bypassed by editing the CSXS preference properties file. Use these locations:

- Win: regedit > `HKEY_CURRENT_USER`/Software/Adobe/CSXS.8, then add a new entry PlayerDebugMode of type "string" with the value of "1".
- Mac: In the terminal, type: `defaults write com.adobe.CSXS.8 PlayerDebugMode 1` (The plist is also located at /Users/`<username>`/Library/Preferences/com.adobe.CSXS.8.plist)

With these entries, host applications display debug extensions. CSXS.8 is used here because the example assumes development for CEP 8. For an extension targeting an earlier CEP version, change 8 to the matching version number.
