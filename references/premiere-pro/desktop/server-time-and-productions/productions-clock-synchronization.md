# Why synchronized clocks matter for Productions in Adobe Premiere

Follow these practices so time values stay dependable while you work with Productions:

- When teams collaborate with productions, treat the file system's reported file timestamps as the source of truth.
- Configure the shared storage system's date and time controls instead of leaving them unchecked.
- Confirm that each editing system clock lines up with the storage server clock.
- For the simplest accuracy path, configure the server to communicate with an NTP time server.
- If an NTP time server cannot be used, enter the server time manually.
- Review the server clock regularly so drift is caught before it causes trouble.
- Keep clock offsets under a few minutes to reduce the chance of unexpected behavior in Premiere.
