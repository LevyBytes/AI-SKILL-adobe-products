# Font And Plugin Issues, Settings Interface And Feature Issues, Cloud Collaboration And Web Issues

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Missing font error; Third-party plugin issues; Feature keyboard shortcuts don’t work; InDesign preferences and support file locations; Data merge fails with absolute paths on macOS; Pages panel scroll bar missing or UI elements disappear; Missing user dictionaries; InDesign Server activates as Developer Edition; InDesign Server license fails after VM move; InDesign Server licensing issues; Creative Cloud issues with InDesign; Issues sharing documents for review; HTML preview unavailable.

## Missing font error

Use Adobe InDesign font activation, replacement, and font-management methods to resolve missing-font errors.

Unavailable fonts keep text from rendering correctly and interrupt the layout workflow. InDesign calls attention to the problem by showing an alert, listing unavailable fonts in the Missing section of the Font menu, and highlighting affected text in pink.

### Fonts are unavailable or no longer supported

Choose Type > Font drop-down menu, then inspect Missing fonts.

Launch the Creative Cloud Desktop app.

In the Creative Cloud Desktop app, choose the Home tab, then choose Adobe Fonts.

Search by name for each missing font.

Choose Activate for every font you need. The fonts then appear in the InDesign font menu.

### Deactivated fonts in the font management utility

A font management utility such as Suitcase Fusion or Universal Type Client may have the fonts turned off. Turn the fonts on in that utility, or install them locally on the system.

Open the font management application.

Search for the missing font names shown in the InDesign alert.

Choose each font and activate it using the workflow provided by your utility.

Return to InDesign and reopen the document.

### Font files are damaged or installed incorrectly

Open another Adobe application, such as Photoshop or Illustrator.

Check the font menu to see whether the missing font appears there.

If several applications cannot access the font, uninstall it through the operating system.

Restart the computer.

Reinstall the font from its original source. After reinstalling, verify that the system font folder contains it: C:\Windows\Fonts (Windows) or /Library/Fonts (macOS).

### Highlight missing fonts

Choose Edit > Preferences > Composition (Windows) or InDesign > Preferences > Composition (macOS).

Turn off the Substituted Fonts option.

Before you share a document, choose File > Package to gather fonts and linked assets.

Note

- The Find/Replace Font dialog box cannot change fonts that are part of imported graphics. Install the font if a placed EPS or PDF file uses it. Another option is to re-create the EPS or PDF file with the font embedded.
- A font replacement can alter the document's appearance when the installed font is larger than the monospace font.

## Third-party plugin issues

Use Adobe InDesign troubleshooting for crashes, errors, and slow performance caused by third-party plugins.

Third-party plugins can add substantial capability to InDesign, but they may also introduce crashes, errors, or sluggish behavior. Problems commonly begin after a plugin is installed, after InDesign is updated, or when a document depends on particular plugins. You might see plugin-related errors, crashes during startup, or tasks that stop responding. Before deeper troubleshooting, verify that the behavior is tied to a plugin, then reset InDesign preferences so preference corruption is ruled out.

### Incompatible or outdated plugins

Plugin problems commonly come from version mismatches or damaged installs. If the plugin does not support the current InDesign version or OS, and no update exists, contact the plugin developer before proceeding. InDesign may also hit conflicts when multiple plugins interact; when the problem returns, the most recently added plugin is usually the likely source.

Check the plugin manufacturer's website for updates that match your InDesign version.

Confirm that the system satisfies the plugin's requirements, including memory, OS version, and InDesign version.

Download and install either the newest plugin version or the release compatible with your InDesign version.

Choose Window > Find Extensions on Exchange to locate and update plugins from Adobe Exchange.

When installing plugins through the Creative Cloud Desktop app, choose Stock & Marketplace > Plugins menu, then choose Manage Plugins.

If every plugin has been updated and the problem remains, uninstall all third-party plugins.

Restart InDesign and check whether the problem has cleared.

Add plugins back individually, restarting InDesign after each installation.

If InDesign behaves correctly without third-party plugins but problems continue after they are restored, consider system-level causes or an issue with that specific plugin.

### System-level issues

Security tools or low-level system services can disrupt plugin authentication, or they can block plugins from reaching resources they need. Check the disk first with Disk Utility on macOS or CHKDSK on Windows, then run an up-to-date antivirus scan so disk damage and malware are ruled out.

Windows:

Open Settings > System > Recovery. In Advanced Startup, choose Restart now.

After the restart, open Troubleshoot > Advanced options > Startup Settings and press F4 during startup.

Start InDesign and check whether the plugin works.

When plugins work in Safe Boot, start Windows normally, then look for startup items that conflict.

Press Ctrl + Shift + Esc to open Task Manager.

Open the Startup tab.

Turn off startup programs that are not required.

Restart Windows, then test InDesign plugin functionality again.

macOS:

Enter Safe Boot mode by holding Shift while the system starts.

Start InDesign and check whether the plugin works.

When plugins work in Safe Boot, restart normally, then review startup items for conflicts.

Open Apple menu > System Settings.

Choose the General tab.

Choose Login Items & Extensions.

Remove startup items that are not needed.

Restart macOS, then test InDesign plugin functionality again.

If these steps do not resolve the issue after you have confirmed that the plugin is current and compatible, contact the plugin developer's technical support. Provide the InDesign version, operating system, steps to reproduce the issue, and the exact error message or behavior.

For documents blocked by missing plugins, try opening them after temporarily installing the required plugin. Another option is to ask the document creator to remove the plugin dependency before sending the file.

## Feature keyboard shortcuts don’t work

Fix macOS problems where particular keyboard shortcuts stop responding.

In Adobe InDesign on macOS, some keyboard shortcuts can fail when third-party security tools or other system utilities turn on Secure Keyboard Entry.

If InDesign stops responding to modifier-based shortcuts such as Shift, Option, or Command combinations on macOS, system-level software is often capturing the keyboard input first.

Examples:

- Resizing while holding Shift no longer constrains proportions.
- Cmd + Spacebar does not activate zoom.
- Modifier-based shortcuts can fail intermittently.

Inside InDesign, keyboard modifier keys may seem inactive even though the same keys still work correctly in other applications.

Secure Keyboard Entry limits how applications detect certain key combinations, which can prevent InDesign from processing its shortcuts normally.

### Third-party security software turned on Secure Keyboard Entry

The command text depends on the security application, and may appear as "Pause Secure Keyboard Entry" or "Disable keyboard protection".

Find the security application in the macOS menu bar.

Open the application's settings or its drop-down menu.

Clear Secure Keyboard Entry.

Go back to InDesign and try the shortcuts again.

If the problem remains, look for another utility that could be capturing keyboard input. Possible causes include keyboard remapping tools, macro or automation software, clipboard managers, accessibility utilities, input-enhancement utilities, and similar apps. Quit those applications temporarily, then test again.

### Shortcut set is modified

Open InDesign > Keyboard Shortcuts.

In the Set drop-down menu, choose Default.

Choose OK so the default shortcut behavior is restored.

## InDesign preferences and support file locations

Use these locations to find preference files, cache files, and support files on macOS and Windows.

These paths are useful when you are diagnosing performance trouble, resetting preferences, preserving custom settings, or moving an InDesign setup to another computer.

Adobe InDesign keeps preference and support data in three main places: the Application folder for installed factory presets, the Roaming Data folder for preference data that can follow a profile across machines, and the Local Cached Data folder for larger caches that can be rebuilt.

### File location structure

### Application folder

This folder sits at the InDesign application installation path and includes subfolders for factory presets plus default support files installed with the app.

### Roaming Data folder

Normal preference data intended for roaming profiles or networked environments is stored here. This location holds custom settings, workspaces, and configuration files.

### Local Cached Data folder

Large caches and temporary files that can be rebuilt after removal are kept here. In Windows roaming profile environments, this folder is meant for data that should stay local instead of roaming between machines.

### Windows file paths

### Windows 10 and later

### Windows 8, Windows 7, Windows Vista

Note

Use <User Name> for your actual Windows username, and use <#> for the version number.

### Version numbers

Use your InDesign version to identify the matching preferences folder number:

### Reset preferences with keyboard shortcut

To remove InDesign SaveData and InDesign Defaults, hold the following keys while InDesign starts:

- Windows: Shift + Ctrl + Alt
- macOS: Shift + Control + Option + Command

This clears custom settings and returns InDesign to factory defaults.

### File contents by location

### Local Cached Data folder

- InDesign Recovery folder data
- Scripting Support folder
- FindChangeData and FindChangeDataTmp
- FontMask
- Cache and idletask log
- InDesign ClipboardScrap and DragDropScrap
- InDesign SavedData

### Roaming Data folder

- Color Settings
- Composite Fonts
- FindChange Queries
- InDesign Defaults
- InDesign Scripts folder
- Workspaces folder
- Menu Sets folder

## Data merge fails with absolute paths on macOS

Fix absolute-path failures by changing Adobe InDesign configuration files in the application folder.

On macOS, Data Merge in InDesign can fail to load images or other assets that use absolute file paths, even if both the file and the path are valid. InDesign may show an alert explaining that absolute-path references cannot be used because a configuration setting stops POSIX-style paths from resolving during data merge operations.

### Data Merge cannot resolve absolute file paths on macOS

Quit InDesign.

In Finder, open the InDesign application folder.

Open Resources > Cookies.

Find `ENABLE_POSIX_PATH`.

Delete the file, or rename it to a name such as `ENABLE_POSIX_PATH`\_old.

Start InDesign.

Run a test data merge.

### Find the correct absolute file path

Place an image in an InDesign document.

Open Window > Links (Ctrl + Shift + D).

Choose the image in the Links panel.

Open the Links panel icon, then choose Copy Info > Copy Full Path.

Add the copied path to your data source file.

## Pages panel scroll bar missing or UI elements disappear

Address missing scroll bars and disappearing interface controls by updating Adobe InDesign or applying a compatibility fix.

With multiple monitors, InDesign can show panel UI problems that make navigation controls unavailable. The Pages panel scroll bar may disappear, and other panels such as Layers can lose controls or other interface elements.

### Update InDesign

Open the Creative Cloud desktop app.

Choose Apps.

Find InDesign in the app list.

Choose Update, or install the newest version that is available.

Start the updated InDesign version.

Confirm that the Pages panel and other interface elements appear correctly.

When updating InDesign is not possible, install the supplied compatibility plug-in for InDesign CC 2018 to fix the display problem.

Note

If file-copying fails during installation, extract the ZIP archive before you run the included VBS script. Windows needs the files outside the compressed ZIP archive before it can run the script.

## Missing user dictionaries

Fix missing-dictionary alerts by relinking user dictionaries or changing path settings in Adobe InDesign.

This problem comes from the new macOS dictionary-file path format introduced in InDesign 20.0. The computer can still contain dictionaries made in older releases, but InDesign may be unable to locate them. Starting with InDesign 20.0, dictionary references use POSIX-style file paths. Older dictionaries from InDesign 19.3 or earlier may still contain HFS-format paths.

### Add dictionary files using the updated file path format

Quit InDesign.

Find your old user dictionary files. They are usually in your user Library folder.

Rename the dictionary files or add them again with the updated file path format supported by the latest version of InDesign.

Start InDesign.

Open Preferences > Dictionary.

Under User Dictionary, remove entries marked with a question mark.

Choose Add User Dictionary, browse to the existing dictionary file, and add it again.

Choose OK, then restart InDesign if required.

After the dictionary files are added again, custom spell-check words should return, and the question mark indicators should no longer appear. For general references to the operating system, write macOS; for instructional UI actions, use select.

## InDesign Server activates as Developer Edition

Resolve licensing problems in Adobe InDesign by clearing cached licensing data and activating again with the Adobe Provisioning Toolkit Enterprise Edition (APTEE) tool.

If Adobe InDesign Server activates as Developer Edition rather than the licensed production version, cached licensing data from an earlier installation or activation attempt is the usual cause.

This behavior can occur when licensing data is not passed along and saved correctly.

### InDesign Server activates in developer edition mode

Shut down Adobe InDesign Server wherever it is running.

Rename SLCache under System Library/Application Support/Adobe (macOS) or C:\Program Files (x86)\Common Files\Adobe (Windows).

Reactivate InDesign Server using the APTEE tool. The command takes the format: adobe_prtk --tool=Serialize --leid=V7{}InDesignServer-<version number>-<OS>-GM --serial=<serialNumber> --adobeid=<email>

For example: adobe_prtk --tool=Serialize --leid=V7{}InDesignServer-13-Win-GM --serial=<serialNumber> --adobeid=<email>

Restart the server, then confirm that output files no longer include the Developer Edition watermark.

If the issue still occurs, verify that the installer matches your license type. Before installing the new package, organizations moving from serial-number-based deployment to Adobe Admin Console deployment must fully uninstall the older version.

For deployments through Admin Console, create packages using Admin Consoles.

## InDesign Server license fails after VM move

Resolve Adobe InDesign license deactivation by using Provisioning Toolkit to relicense automatically when the VM starts.

When an InDesign Server virtual machine is moved to a different host, datastore, or disk location, the licensing system may treat it as a separate machine and deactivate the license.

### InDesign Server deactivates after a virtual machine is moved

InDesign Server can reach startup, initialize, and then quit silently in this failure mode.

Set the virtual machine to reactivate InDesign Server automatically during guest operating system startup so repeated manual activation is not required.

Download the Adobe Provisioning Toolkit Enterprise Edition.

Use a machine that has internet access, then open a command prompt or terminal.

Go to the directory where the adobe_prtk tool is located.

Create the provisioning file by running the command that matches your platform.

Windows: adobe_prtk --tool=VolumeSerialize --generate --serial=`YOUR_SERIAL_NUMBER` --leid=V7{}InDesignServer-12-Win-GM --provfilepath=C:\path\to\output

macOS: adobe_prtk --tool=VolumeSerialize --generate --serial=`YOUR_SERIAL_NUMBER` --leid=V7{}InDesignServer-12-Mac-GM --provfilepath=/path/to/output

Move both adobe_prtk and the generated prov.xml file onto the VM.

Set up a startup task with Task Scheduler (Windows) or launchd (macOS).

Have that startup task execute this command at OS startup: adobe_prtk --tool=VolumeSerialize --provfile=/absolute/path/to/prov.xml

Restart the VM, then check that InDesign Server opens correctly and still has its license.

Note

Use your real InDesign Server serial number in place of `YOUR_SERIAL_NUMBER`. Adjust the paths so they fit your own environment.

You create the provisioning file one time; after that, it can be used again whenever the VM boots.

## InDesign Server licensing issues

Use license reactivation and cache cleanup in Adobe InDesign to address activation failures, sudden exits, and watermark mode.

Licensing trouble in InDesign Server can show up as unexpected exits, watermark mode, wrong instance counts, or warnings that the server is not correctly licensed.

The usual causes are damaged licensing data, activation that did not complete, or virtual machine environment changes.

### InDesign Server licensing and activation issues

Moving a VM between hosts in a virtualized environment can deactivate the license and lead to these symptoms.

Sign in to the Adobe Admin Console.

Build a license-only package for InDesign Server.

Install that package using the license-only package instructions.

Start InDesign Server from the command line.

Verify that the application launches successfully.

### Damaged Keychain entries prevent InDesign Server from license validation

In the NGL logs, look for this error: SaveToStorageImpl Error: Failed in writing to storage with error code -25300.

Open Applications > Utilities > Keychain Access.

Find Secure Notes entries with the name Adobe App Info.

Remove every matching Secure Notes entry.

Start InDesign Server from the command line.

Check that the application no longer quits unexpectedly.

### Corrupted licensing cache

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

## Creative Cloud issues with InDesign

Fix Adobe InDesign documents whose linked Creative Cloud Library elements fall back to local libraries by unlinking the affected items and saving the files again.

If Creative Cloud Libraries synchronization breaks down, linked library items in InDesign documents may show unresolved cloud icons, block access to updated assets, and lose their connection to Creative Cloud Libraries.

Before you begin

Make backups of every affected InDesign file. This procedure saves documents to disk, so an error during the workflow can cause data loss. If the on-screen changes are not the result you want, do not save the InDesign file.

### Unresolved linked elements

Delete librarylookupfile from ~/Library/Application Support/Adobe/Creative Cloud Libraries/LIBS (macOS) or C:\Users<user_name>\AppData\Roaming\Adobe\Creative Cloud Libraries\LIBS (Windows).

Open the InDesign document and verify whether the original canvas is visible. Each unresolved linked item can show a cloud icon with a red dot, which means InDesign cannot resolve that link.

Hold Option (macOS) or Alt (Windows), then click the cloud icon; the Links panel opens.

For the unresolved link, right-click and choose Unlink. The cloud icon is removed from the canvas. Do the same for each unresolved link.

Save the document once it looks correct.

Restart your computer.

## Issues sharing documents for review

Troubleshoot problems that occur when Adobe InDesign documents are shared for review.

The solutions below target the most likely and easiest causes of sharing or loading failures. After each solution, test again before moving to the next step.

### Issue resolving login credentials

Select Help > Sign Out in InDesign or the Creative Cloud Desktop application.

After a short wait, open InDesign Sign In.

Use your Adobe ID credentials to complete Sign In.

Share the document for review.

### CoreSync folder issues

Fully quit InDesign and the Creative Cloud Desktop application.

Rename the CoreSync folder at C:\Program Files (x86)\Adobe\Adobe Sync\ (Windows) or ~/Library/Application Support/Adobe/ (macOS).

Open the Creative Cloud Desktop application again so it regenerates the folder, then launch InDesign.

Share the document for review.

### CEP folder issues

Fully quit InDesign and the Creative Cloud Desktop application.

Rename the CEP folder at C:\Program Files (x86)\Common Files\Adobe\ (Windows) or ~/Library/Application Support/Adobe/ (macOS).

Open the Creative Cloud Desktop application again so it recreates the folder, then launch InDesign.

Share the document for review.

### UXP folder issues

Fully quit InDesign and the Creative Cloud Desktop application.

Rename the UXP folder at C:\Program Files (x86)\Common Files\Adobe\ (Windows) or ~/Library/Application Support/Adobe/ (macOS)

Open the Creative Cloud Desktop application again so it recreates the folder, then launch InDesign.

Share the document for review.

### Creative Cloud desktop application isn’t installed properly

Fully quit InDesign and the Creative Cloud Desktop application.

Use Creative Cloud Desktop application to uninstall InDesign. When several Adobe applications are installed, remove all of them before fully removing the Creative Cloud Desktop application. Back up application preferences and custom settings before uninstalling if you need to keep them.

Uninstall Creative Cloud Desktop application.

After a few minutes, reinstall Creative Cloud Desktop application.

Open Creative Cloud Desktop application, then install InDesign.

## HTML preview unavailable

HTML that is inserted into or edited inside an Adobe InDesign document may appear as a still image rather than as a preview.

In Adobe InDesign, the Insert/Edit HTML dialog can show a static placeholder instead of a live preview when HTML code is inserted or edited. The dialog displays this message: Code snippet preview generation is temporarily unavailable.

Images or graphics added with Insert/Edit HTML still keep their original layout and dimensions, and the correct image or graphic appears after the InDesign file is exported.

### HTML Preview plugin unavailable

Bring InDesign up to date.

Add the free Insert HTML Preview for InDesign plugin on Windows or macOS so the preview is visible.
