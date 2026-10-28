# Installed version has created preferences or settings folder

A previous pre-release installation can block migration by leaving a preferences or settings folder in place. The migration flow is designed to copy older preferences and settings into the new release structure, but existing files in that destination are not overwritten.

Back up your settings by moving the preferences folder to another location on the machine.

By default, the preferences folder is stored here:

- Windows: C:\Users&lt;username&gt;\Documents\Adobe\Premiere Pro&lt;version&gt;\Profile-&lt;profilename&gt;
- macOS: /Users/&lt;username&gt;/Documents/Adobe/Premiere Pro/&lt;version&gt;/Profile-&lt;profilename&gt;

Uninstall Premiere.

Remove the migration folder at this location:

- Windows: users&lt;username&gt;\AppData\Local\Adobe\OOBE\com.adobe.accc.apps\CCPrefMigration
- macOS: ~/Library/Application Support/Adobe/OOBE/com.adobe.accc.apps/CCPRefMigration

In the Creative Cloud desktop application, choose Update and enable the Import settings checkbox.

When Premiere is installed again, the previous release's settings, presets, workspaces, and keyboard presets are brought into the latest release.
