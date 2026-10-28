# AEGP_DoCommand

`AEGP_DoCommand`

Call the handler for a specified menu command. Every After Effects menu item has an associated command.

Note that we make no guarantees that command IDs will be consistent from version to version.

Suite argument declaration (not a standalone call):

```cpp
AEGP_DoCommand(
  AEGP_Command  command);
```

Having given the disclaimer above, here are a few command numbers that have been supplied to other developers, and may be of interest:

- 3061 - Open selection, ignoring any modifier keys.

- 10314 - Play/Stop (valid in 13.5 and later)

- 2285 - RAM Preview (valid prior to 13.5)

- 2415 - Play (spacebar) (valid prior to 13.5)

- 2997 - Crop composition to region of interest.

- 2372 - Edit > Purge > Image Caches

If your AEGP needs to call some other After Effects menu item, there's a fairly easy way to find out most commands you want, using scripting:

```cpp
cmd = app.findMenuCommandId(text); // e.g. text = "Open Project..."
alert(cmd);
```

With After Effects open, fire up Adobe ExtendScript Toolkit CC, paste in the snippet shown above, and from the application drop-down pick whichever After Effects build is currently live. A click on Play then executes the script inside AE. If that route fails, reach out to API Engineering to get the command number.
