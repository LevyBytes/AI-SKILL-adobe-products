# Folder permission issues

When the Preferences folder is read-only, InDesign cannot write or refresh the startup files it requires.

Windows

Open File Explorer, then select View > Hidden items.

Browse to C:\Users&lt;username&gt;\AppData\Roaming\Adobe\InDesign, using your account name in place of &lt;username&gt;.

Right-click the InDesign version folder, then select Properties.

Open the Security tab, then select Edit.

Choose your user account.

Grant Read and Write permissions.

Select OK.

Start InDesign.

macOS

Open Finder.

Browse to /Users/&lt;username&gt;/Library/Preferences/Adobe InDesign, using your account name in place of &lt;username&gt;.

Hold Control, select the InDesign version folder, and choose Get Info.

Select the lock icon and enter your administrator password.

Under Sharing & Permissions, choose your user account.

Set the privilege to Read & Write.

Close the window, then start InDesign.
