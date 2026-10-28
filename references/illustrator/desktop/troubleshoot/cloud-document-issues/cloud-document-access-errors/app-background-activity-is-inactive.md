# App Background Activity is inactive

When Creative Cloud Libraries Synchronizer is not running, inspect App Background Activity:

Use the Apple menu to open System Settings (macOS Tahoe) or System Preferences (earlier macOS versions). Navigate to General > Login Items & Extensions (macOS Tahoe) or Users & Groups > Login Items (earlier macOS versions).

In the App Background Activity section, find CCLibrary. If the toggle next to CCLibrary is off, turn it on.

Open the Creative Cloud desktop app, then in the Apple menu bar choose Creative Cloud > Quit Creative Cloud.

Reopen the Creative Cloud desktop app so it starts Creative Cloud Libraries Synchronizer automatically.

Return to Activity Monitor and verify that Creative Cloud Libraries Synchronizer is running.

Reopen Illustrator and try to open a cloud document. If the document still does not open, Creative Cloud Libraries Synchronizer may be hung.
