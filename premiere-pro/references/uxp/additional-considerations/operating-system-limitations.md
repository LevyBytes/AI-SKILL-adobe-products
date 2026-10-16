# Operating System Limitations

Some system locations can remain blocked by the operating system even when `"fullAccess"` is declared:

- **macOS and Windows**: usually permit access to most locations the user can reach.
- **UWP (Windows Store apps)**: blocks access to system folders.

Handle file-system failures cleanly and tell users when permission is denied. System security rules can still prevent a plugin from reaching particular locations, even if the manifest permission is correct.
