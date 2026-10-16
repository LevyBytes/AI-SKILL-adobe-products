# Corrupted licensing cache

Activation can fail when the licensing data held in the SLStore and SLCache folders becomes corrupted.

Quit InDesign Server.

Remove the SLStore and SLCache folders from these locations:

Windows:

- C:\ProgramData\Adobe\SLStore
- C:\Program Files (x86)\Common Files\Adobe\SLCache

macOS:

- /Library/Application Support/Adobe/SLStore
- /Library/Application Support/Adobe/SLCache

Use your serial number to reactivate InDesign Server.

Launch InDesign Server, and then confirm that startup completes correctly.

For a multi-instance license where InDesign Server starts only one instance, first confirm that the serial number allows multiple instances, then reactivate.

Note

When an organization migrates deployment from serial number licensing to Admin Console, fully remove the earlier InDesign Server version before installing the Admin Console package.
