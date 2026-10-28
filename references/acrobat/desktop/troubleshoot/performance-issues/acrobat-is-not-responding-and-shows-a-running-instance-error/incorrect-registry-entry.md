# Incorrect registry entry

Close Acrobat.

To open Run, press Windows + R.

Enter regedit, then press Enter.

Go to `HKEY_CLASSES_ROOT`\acrobat\shell\open\ddeexec\application

Right-click the application folder, choose Export, and save the backup file.

In the right pane, double-click Default. Inside the Value data field, switch the value from:

AcroViewA20 to AcroViewR20

Choose OK and shut the Registry Editor.

Start Acrobat again.
