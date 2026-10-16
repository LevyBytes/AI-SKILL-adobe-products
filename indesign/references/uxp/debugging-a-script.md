# Debugging a Script

This page describes debugging approaches for common issues.

Quick tips for logs:

- Script `console.log` output and UXP logs go to these locations:
  For versions of InDesign earlier than 19.2 -

  - macOS: `/Users/<user name>/Library/Caches/UXPLogs/`
  - Windows: `C:\Users\<username>\AppData\Local\Temp\UXPLogs`

  Starting with InDesign 19.2, log locations changed to the following:

  - Adobe InDesign -
    macOS: `/Users/<user name>/Library/Logs/Adobe/Adobe InDesign <InDesign version year>/`
    Windows: `C:\Users\<username>\AppData\Roaming\Adobe\InDesign\Logs`
  - Adobe InDesign Server -
    macOS: `/Users/<user name>/Library/Logs/Adobe/Adobe InDesign Server <InDesign version year>/`
    Windows: `C:\Users\<username>\AppData\Roaming\Adobe\InDesign Server\Logs`

  When several files appear in the same location, choose the file with the newest timestamp.

- Every sample script includes a try/catch block. Exceptions raised by InDesign are caught and either written to the console or shown in the dialog box.
- Parser errors from the interpreter are written directly into the UXP logs.
