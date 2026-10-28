# Premiere freezes on the splash screen

Troubleshoot installed plug-ins when Adobe Premiere stops at the splash screen.

Plug-in problems can make Premiere freeze on the splash screen during startup. Watch the splash screen to determine whether loading stops on a particular plugin.

The Premiere splash screen can indicate which plug-in is making the application stall.

Use the Premiere splash screen status to observe plugin loading and note the plugin where the hang occurs.

After finding the plug-in involved, inspect the MediaCore folder to confirm the plug-ins match the Premiere version in use.

- For Windows: C:\ProgramFiles\Adobe\Common\Plug-ins\7.0\MediaCore
- For macOS: /Library/Application Support/Adobe/Common/Plug-ins/7.0/MediaCore

Temporarily move the plug-ins from that location into another folder.

Test whether Premiere runs correctly without the third-party plug-ins. If removing them resolves the problem, update the plug-ins or ask the plug-in vendor for a compatible release.
