# Debugging Unsigned Extensions

During active development, if HTML Extension Builder is not driving the debug workflow and signing should be skipped, disable signature checking by changing the CSXS preference properties file at this location:

- Win: In regedit, open `HKEY_CURRENT_USER`/Software/Adobe/CSXS.9 and create PlayerDebugMode as a "string" entry set to "1".
- Mac: Run `defaults write com.adobe.CSXS.9 PlayerDebugMode 1` in Terminal. The plist also resides at /Users/`<username>`/Library/Preferences/com.adobe.CSXS.9.plist.

With those entries set, host applications show debug extensions. The `CSXS.9` value assumes the target extension uses CEP 9; when targeting an earlier CEP release, change `9` to the matching version number.
