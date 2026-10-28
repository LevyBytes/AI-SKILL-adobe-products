# Incorrect Adobe PDF Settings folder permissions

If the launch problem continues, check that Adobe PDF Settings has the required permissions.

Windows

Open File Explorer and turn on View > Hidden items.

Browse to C:\Users&lt;username&gt;\AppData\Roaming\Adobe\Adobe PDF\Settings, using your account name in place of &lt;username&gt;.

Right-click the Settings folder, then select Properties.

Open the Security tab, then select Edit.

Choose your user account.

Turn on the Read permission.

Select OK.

Start InDesign.

macOS

Open Finder.

Browse to /Library/Application Support/Adobe/Adobe PDF/Settings.

Hold Control, select the Settings folder, and choose Get Info.

Select the lock icon and enter your administrator password.

In Sharing & Permissions, select your user account.

Change the privilege to Read or Read & Write.

Close the window, then start InDesign.
