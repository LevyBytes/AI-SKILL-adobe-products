# FontsObject.pollForAndPushNonSystemFontFoldersChanges()

app.fonts.pollForAndPushNonSystemFontFoldersChanges()

Note

This functionality was added in After Effects 24.6

### Description

Adding or removing font files within the folders deemed system font folders is detected and dealt with on its own, no user action needed, to refresh the font environment. Non-system font folders get no such automatic handling, so adds and removes of font files there go unnoticed until After Effects is restarted.

This runs a check across the known non-system font folders, and should it spot a change, it schedules an asynchronous update of the font environment to take care of it.

These are the non-system font folders After Effects is aware of:

```text
Windows: <systemDrive>:\Program Files\Common Files\Adobe\Fonts

Mac: /Library/Application Support/Adobe/Fonts
```

### Returns

Boolean; One of:

- false if no changes to the font environment are known.
- true if a change in the font environment has been detected and an asynchronous update scheduled to deal with it. This state will be cleared once the update has been processed, at which time FontsObject.fontServerRevision will return an incremented value.

—
