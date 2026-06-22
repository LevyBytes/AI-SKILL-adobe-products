# Gpu Driver Issue Macos, Issues On Startup, Authentication Failure, Fonts Issues ...

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Crash while using GPU rendering on macOS; Crash, freeze, or app open issues at launch; Authentication failure; Crash due to font issues; Crash on lost network connection; Access denied errors; Startup crash loop; Crash on launch while recovering a damaged document.

## Crash while using GPU rendering on macOS

To help resolve GPU-related Adobe InDesign crashes, create diagnostic reports and provide them to Adobe support.

On macOS, Adobe InDesign can crash at random intervals because of GPU driver problems. These failures affect Mac systems with GPU performance enabled, and they may happen during many different operations. Adobe can investigate the problem when you generate and share the system diagnostic report.

As a temporary workaround while Adobe investigates, switch InDesign to CPU mode by choosing View > Preview on CPU.

Certain macOS graphics drivers can conflict with GPU acceleration, which makes InDesign crash during routine work. After the change, InDesign renders with the CPU instead of GPU acceleration. That can slow performance on high-resolution displays, but it should stop crashes tied to the GPU. Review InDesign GPU performance settings if you need more detail about the trade-offs.

### GPU acceleration instability

Open InDesign if it is not already running.

Choose File > Preferences > GPU Performance (Windows) or InDesign > Preferences > GPU Performance (macOS).

Clear GPU Performance, then select OK.

Restart InDesign so the setting change is applied.

## Crash, freeze, or app open issues at launch

Correct folder access and reset preferences to fix permission problems that stop Adobe InDesign from launching normally.

For a successful launch, InDesign needs read and write permissions, meaning it must be able to view and modify files, in specific system folders. When those permissions are wrong, startup can crash, read-only folder errors can appear, or InDesign can open for a moment and then close.

### Folder permission issues

When the Preferences folder is read-only, InDesign cannot write or refresh the startup files it requires.

Windows

Open File Explorer, then select View > Hidden items.

Browse to C:\Users<username>\AppData\Roaming\Adobe\InDesign, using your account name in place of <username>.

Right-click the InDesign version folder, then select Properties.

Open the Security tab, then select Edit.

Choose your user account.

Grant Read and Write permissions.

Select OK.

Start InDesign.

macOS

Open Finder.

Browse to /Users/<username>/Library/Preferences/Adobe InDesign, using your account name in place of <username>.

Hold Control, select the InDesign version folder, and choose Get Info.

Select the lock icon and enter your administrator password.

Under Sharing & Permissions, choose your user account.

Set the privilege to Read & Write.

Close the window, then start InDesign.

### Incorrect Adobe PDF Settings folder permissions

If the launch problem continues, check that Adobe PDF Settings has the required permissions.

Windows

Open File Explorer and turn on View > Hidden items.

Browse to C:\Users<username>\AppData\Roaming\Adobe\Adobe PDF\Settings, using your account name in place of <username>.

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

### macOS folder permissions issue

Open Terminal from Applications > Utilities.

Enter the appropriate command after replacing <username> with your account name and <version> with the InDesign version folder name, then press Return:

- Single-user systems that need full access: chmod 777 /Users/<username>/Library/Preferences/Adobe/InDesign/<version>
- Shared systems that need restricted access: chmod 755 /Users/<username>/Library/Preferences/Adobe/InDesign/<version>

When prompted, enter your administrator password and press Return.

Open InDesign.

### Incorrect InDesign preferences settings

When permission changes do not fix the launch failure, restore InDesign preferences to their default state.

Launch InDesign while holding Shift + Ctrl + Alt (Windows) or Shift + Command + Option (macOS).

At the prompt asking whether to delete preference files, select Yes.

## Authentication failure

Fix plugin authentication failures by reinstalling Adobe InDesign and controlling third-party plugins.

Adobe InDesign verifies Adobe-owned plugins through a security check that helps block unauthorized or malicious files. If verification fails, an error names a plugin, such as Article.rpln, and InDesign can crash during launch or open with reduced functionality. The usual causes are third-party plugins interfering with verification or damaged core InDesign files. To resolve the failure, find and isolate the plugin that is causing the problem.

### Third-party plugins are causing issues

Remove InDesign completely through the Creative Cloud Desktop application.

Install InDesign again without adding third-party plugins.

Open InDesign to confirm it launches without authentication errors.

Create a new document and open core features to test the application. Once InDesign works without third-party plugins, identify the plugin responsible for the authentication failure.

Add one third-party plugin at a time.

Restart InDesign after each plugin is installed.

Check basic functionality, including creating a document, opening menus, and accessing panels.

Record which plugin installation causes the authentication error to appear.

Remove the problem plugin and ask its vendor for an updated version.

The authentication system in InDesign can reject a particular third-party plugin, or that plugin may alter core plugin files.

Note

Only Windows uses this authentication mechanism. Because authentication failures can block InDesign launch or stop access to specific features, fix them quickly to keep work moving.

## Crash due to font issues

Use font management and system troubleshooting for Adobe InDesign launch crashes and font-related failures.

Fonts can make InDesign crash when you open or edit a document, usually when the application loads fonts that are corrupted, incompatible, or installed incorrectly. Symptoms can include a splash screen followed by a freeze, a font-related error, or an unexpected quit. The trigger may be opening a specific file, scrolling through pages, or editing text, and some affected text can show pink highlighting before the crash. Corrupted font cache files are often the source, and InDesign normally rebuilds those files automatically at the next launch, which often clears startup crashes.

Quit InDesign completely.

Open C:\Users\AppData\local\Adobe\Adobe\InDesign<version>\Caches (Windows) or /Users/Library/Caches/Adobe InDesign/<version>/ (macOS).

Delete all files named AdobeFnt\*.lst (such as AdobeFnt10.lst, AdobeFnt12.lst).

Restart InDesign so clean font cache files are regenerated.

Before opening documents, wait until InDesign finishes activating fonts.

The table below lists the default paths you can check to see which fonts are installed on your machine. Fonts can also be stored in other locations, so treat the list as a starting point rather than a complete inventory.

## Crash on lost network connection

Prevent unexpected Adobe InDesign shutdowns by moving files to local storage or correcting network reliability.

If the network drops while you edit files stored on a server or network drive, InDesign shuts down deliberately to protect data. The exit can resemble a crash, often while you edit or save, but it is part of the recovery behavior. InDesign reads and writes data in increments, so a network interruption makes it save the current changes to a local recovery file and then close. Working from a local copy prevents these shutdowns.

### Unable to connect to the cloud server

Copy the InDesign document and every linked asset to a local drive.

Use the local copy for the whole editing session.

Save frequently with File > Save.

When the work is complete, copy the finished file back to the network location.

Check Window > Links to verify that all linked assets transferred correctly.

If direct work from network storage is unavoidable, the network must remain stable.

InDesign document operations can lose file access when infrastructure problems occur, including intermittent connectivity, bandwidth limits, or server timeouts. Coordinate with IT on a network setup that maintains continuous file access. Until the network is reliable, keep working from local storage to avoid data loss.

## Access denied errors

Resolve Adobe InDesign file access issues by checking permissions, file locks, network connections, and linked assets.

### Access to the file, folder, or network location is restricted

The document is stored in a file, folder, or network location your account cannot access. An Access denied message can appear when you open a document, save changes, or relink files.

Open the file or folder context menu and choose Properties (Windows) or Get Info (macOS).

Check the Security tab on Windows, or Sharing & Permissions on macOS.

Verify that your account has Read and Write access.

When access is missing, ask your system administrator or the file owner to grant it.

For files on a network drive, make sure you are connected and signed in.

Save the file to a local folder where write access is available. If the file opens or saves correctly from that new location, permissions on the original location are probably restricted.

### File locked by InDesign session or operating system

Make sure the file is not already open in another InDesign instance.

Check the same folder as the InDesign document for an .idlk file.

Delete the .idlk file only after confirming nobody else has the document open.

Windows: Open Properties for the file and clear Read-only.

macOS: With the file selected, open File > Get Info and clear Locked.

Restart the system so any operating-system-level file locks are released.

### Network drives and cloud storage connections issue

Confirm that the network connection is stable.

Make sure mapped network drives are still connected and accessible.

Open the file location in File Explorer or Finder and verify direct access.

For cloud storage such as Dropbox, OneDrive, or Google Drive, confirm that the file is fully synced.

Copy the file to your local drive, then open it from that location. If the file works from a local folder, the problem is with the network or cloud location.

### Missing, moved, or restricted linked graphics and fonts

Use Window > Links (Ctrl + Shift + D) to bring up the Links panel.

Check the list for links marked missing or modified.

On the problem link, open the context menu and choose Relink from the drop-down menu.

Navigate to the folder or other location that contains the linked file.

Verify that the needed fonts are installed locally or active through Adobe Fonts.

Use File > Package to gather the document and its linked assets into a single folder.

## Startup crash loop

Use this troubleshooting path when an unexpected InDesign crash leaves damaged recovery data or corrupt preferences that make startup fail repeatedly.

If Adobe InDesign quits while a document is open, its document recovery feature tries to reopen that document during the next launch. When the document data is damaged, that automatic recovery attempt can restart the crash cycle and keep InDesign from launching.

The symptom is a launch that immediately fails after the earlier unexpected crash. You might only see the splash screen for a moment before the app closes, or InDesign may exit without an error dialog. The failure happens before menus, preferences, or normal InDesign features become reachable.

### Damaged document in the recovery folder

Open File Handling preferences with InDesign > Preferences > File Handling (macOS) or Edit > Preferences > File Handling (Windows).

Set a different Document Recovery Data path.

### Corrupt preferences

Start InDesign while holding Ctrl + Alt + Shift (Windows) or Cmd + Option + Shift + Ctrl (macOS).

When the delete-preferences prompt appears, choose Yes.

## Crash on launch while recovering a damaged document

Clear damaged recovery data to stop Adobe InDesign from crashing during startup.

A recovery file may be responsible when InDesign fails on every launch after an earlier crash. At startup, InDesign tries to reload the recovery data, and that repeated load can trigger the same failure again.

The splash screen may appear for only a moment before InDesign closes.

### Damaged or corrupted recovery file

Exit InDesign.

Remove all items inside the InDesign recovery folder C:\Users<username>\AppData\Local\Adobe\InDesign<version><language>\Caches\InDesign Recovery (Windows) or /Users/<username>/Library/Caches/Adobe InDesign/<version>/<language>/InDesign Recovery (macOS).

Start InDesign again.

If InDesign now opens normally, a damaged recovery file was one of the files in that folder.

If the issue continues, inspect the recovery-folder setting in InDesign: use Edit > Preferences > File Handling (Windows) or InDesign > Preferences > File Handling (macOS), then check the document recovery path.
