# Media Issues, Crash Issues, Preferences And Settings Issues, Export Issues

> Adobe Premiere Pro reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Automatically manage your Media Cache files; Clear media cache on launch; Clear media cache using preferences; Delete media cache files manually; Manage media cache; Eliminate flicker; Video assets from Creative Cloud Libraries broken between Premiere and After Effects; Fix outdated Windows Libraries; Recover projects after a crash; No splash screen appears on app launch; Try Adobe Creative Cloud Diagnostics; Premiere crashes when you open a specific project; Adobe Premiere hangs on launch on macOS; Premiere freezes on the splash screen; Premiere is crashing; Why reset preferences; Reset preferences at launch; Reset preferences using the preferences folder.

## Automatically manage your Media Cache files

### Configure Premiere preferences so cache files can be removed automatically by age and memory use.

In the Preferences dialog box, open Media Cache to configure cache handling. Automated cleanup can be based on age with Automatically delete cache files older than, or on cache size with Automatically delete oldest cache files when cache exceeds.

Select Edit > Preferences (Windows) > Media Cache or Premiere > Settings (macOS) > Media Cache.

Choose the needed settings in the Media Cache Management section.

Use Media Cache Management settings to remove old or unused media cache files and help Premiere perform well.

The Media Cache Management controls can also clear stale or unnecessary cache files as part of performance upkeep.

- Do not delete cache files automatically - This default Media Cache preferences setting leaves cache cleanup disabled. Automatic media cache deletion applies only to .pek, .cfa and .ims files in the Peak and Media Cache files subdirectory folders.
- Automatically delete cache files older than - 90 days is the default. Set a different period if your workflow needs one.
- Automatically delete oldest cache files when cache exceeds - By default, the threshold is 10% of the volume size that stores the media cache.

Note

Age-based or size-based cleanup starts only after Premiere is quit and opened again. During the next launch, Premiere checks whether media cache files match the deletion rules; when they do, deletion begins 10 minutes after launch. From then on, that maintenance repeats once per week.

## Clear media cache on launch

### Clear the media cache at launch when performing routine maintenance or system cleanup.

Before installing a newer Premiere version, or when diagnosing and fixing application problems, use the Premiere launch reset options for routine maintenance and cleanup.

Resetting preferences, clearing cache, and disabling plug-ins can all be done from Premiere startup options.

Exit Premiere and launch it again.

Hold Command (macOS) or Ctrl (Windows) while Premiere starts to open the reset option.

In the Reset options dialog box, choose Clear media cache files.

## Clear media cache using preferences

### Clear or remove the media cache without closing Premiere.

Use these preference paths: Edit > Preferences (Windows) > Media Cache; Premiere > Settings (macOS) > Media Cache.

Note

To delete the entire media cache, choose File > Close All Projects. Then go to Preferences (Windows)> Media Cache and Settings (macOS) > Media Cache.

Use the Delete button next to Remove Media Cache Files when removing media cache files.

Clearing cache clutter can keep projects responsive.

Removing accumulated cache files helps projects continue running smoothly.

When Delete Media Cache Files appears, choose one of these options:

- Delete unused media cache files - This removes files generated for source media that Premiere can no longer locate.
- Delete all media cache files from the system - This removes every cache file from the current cache location. Premiere automatically rebuilds deleted cache files whenever source media needs them. To clear every media cache file, restart Premiere and select this option before opening a project.

Select OK.

## Delete media cache files manually

### Delete media cache files manually to improve Premiere performance.

Exit Premiere.

After Premiere is closed, go to these folder locations and delete the files yourself.

- macOS: /Users/<username>/Library/Application Support/Adobe/Common
- Windows: \Users<username>\AppData\Roaming\Adobe\Common

After deleting the files, empty the trash.

Note

When troubleshooting errors, closing Premiere first and deleting files manually also removes the current media cache files, which is the intended result.

Once the files are removed, additional hard drive space should be available. For completed older projects, deleting these files is a useful way to recover storage and keep the computer's hard drive cleaner.

Opening a current project after all cache files are deleted includes a delay because Premiere has to rebuild them. For large projects, allow enough time for media cache files to be generated again.

Tip

For best results, place your Media Cache on a fast SSD or NVME drive, preferably one dedicated to cache storage. To relocate media cache files, click Browse and choose the desired folder location. If needed, the Media Cache can remain on the same drive as your media.

## Manage media cache

### Clearing old or unused media cache files can help keep performance steady.

Removing outdated or unused media cache files is one way to maintain good performance. When Premiere imports video and audio, it creates processed versions that can be accessed quickly for faster operation. These media cache files are saved in the Media Cache Files folder. A separate database folder stores links to each cache file; those media cache database files are located in the Media Cache folder.

Premiere uses the Media Cache to store accelerator files such as peak files (.pek) and conformed audio (.cfa) files.

Regularly clearing old or unused media cache files supports optimal performance. Deleted cache files are rebuilt whenever source media needs them. Clearing the media cache on a routine basis is a recommended practice for troubleshooting and for keeping Premiere performance at its best.

For best results, put your Media Cache on a fast SSD or NVME drive, preferably a dedicated one. Change media cache file locations by clicking Browse and selecting the desired folder. If needed, you can store the Media Cache on the same drive as your media.

## Eliminate flicker

### Remove image flicker that often appears on thin lines or sharp edges.

On interlaced displays, thin lines and sharp image edges may flicker; the Anti-flicker Filter control in Effect Controls > Motion can reduce or remove that problem.

Tip

Increasing the setting removes more flicker but also softens the picture. Use a comparatively high value for images that contain many sharp, high-contrast edges.

In the Timeline panel, choose a clip, then open the Effect Controls panel.

Open the Motion controls.

Select Anti-flicker Filter. Press the spacebar to preview the clip. Raise the filter strength when flicker remains visible, or lower it when the image looks too soft.

Apply the Anti-flicker Filter option to lessen or remove flickering in video footage.

The Anti-flicker Filter option helps reduce or eliminate flicker in video footage.

Higher strength settings remove more flicker, while the image becomes softer. For images with many sharp, high-contrast edges, set the value relatively high.

To vary the Anti-flicker Filter during a clip, add Anti-flicker Filter keyframes with different values.

## Video assets from Creative Cloud Libraries broken between Premiere and After Effects

Troubleshoot Team Projects where video assets from Creative Cloud Libraries show as broken or offline between Premiere Pro and After Effects.

When Team Projects include video assets, these problems can occur:

- In After Effects, the same Team Project may show a video as offline after that video was added from a Creative Cloud Library in Premiere.
- In Premiere, the same Team Project may show a video as offline after that video was added from a Creative Cloud Library in After Effects.

### Font used in the asset is not installed

Check which font the asset uses and whether that font is already installed on your machine.

Look in Adobe Fonts for fonts that match.

- In After Effects, select File > Add fonts from Adobe.
- In Premiere, select Graphics and Titles > Add fonts from Adobe Fonts.

### Color Swatches present in Creative Cloud Libraries is not supported

Use colors that are available in Adobe Premiere or After Effects.

### Assets need to be relinked again

Save the asset to a local folder, then relink that asset again.

A recommended approach is to put the Creative Cloud Libraries folder contents on the desktop or another local destination.

- Windows - C:\Users\username\AppData\Roaming\Adobe\Creative Cloud Libraries
- macOS - Macintosh HD\Library\Application Support\Adobe\Creative Cloud Libraries

Note

Create a backup of the Creative Cloud Libraries folder.

### Creative Cloud Library service needs to be refreshed

Stop Creative Cloud Library service from Task Manager in Windows or Activity Monitor on macOS.

Restart the Create Cloud library service, and make sure every Adobe application is closed while you use the library.

### Creative Cloud Libraries not syncing

Try renaming Adobe folders to "old\_ Creative Cloud Libraries" at these paths:

- Windows: C:\Users\username\AppData\Roaming\Adobe\Creative Cloud Libraries
- macOS: Macintosh HD\Library\Application Support\Adobe\Creative Cloud Libraries

Note

Back up the Creative Cloud Libraries folder first. The product creates this folder automatically after launch, along with user libraries.

You can also test the video assets from a new user account. If that account works, uninstall and reinstall Premiere Pro and After Effects.

## Fix outdated Windows Libraries

### Use these steps when Adobe Premiere fails to launch correctly and returns error code: 0xc000007b.

### Updating Microsoft Visual C++ Libraries

Try installing updated Visual C++ Libraries from Microsoft.

### Reverting to the earlier version

If Premiere continues to crash, try going back to an earlier app version. See how to install earlier versions of your Creative Cloud apps.

### Need more help?

If the problem still cannot be fixed and you need assistance, send details about the crash and the crash log so Adobe can help resolve it. Learn how to submit crash reports for Digital Video applications.

You can also use the support community to look for answers to common questions or issues, or to share ideas.

## Recover projects after a crash

### If Adobe Premiere quit unexpectedly, recover the last saved state of any open projects.

After a crash, open Premiere. A pop-up appears saying Premiere quit unexpectedly while a project was open.

Caution

If the restoration pop-up is dismissed, it will not be shown again or during the next application launch.

Select Reopen to open every available project in the state it had before the application closed unexpectedly. Saving the restored project with current changes writes those changes to the main file.

To restore earlier project versions, choose File > Revert to go back to the last state saved by the user.

For manual project restoration, or to recover a specific project version, open the Auto-Save or Recovery Projects folder inside the project folder and choose among the time-stamped versions.

Tip

Shorten the autosave interval so Premiere backs up projects more often and reduces possible project loss after a crash.

## No splash screen appears on app launch

### Use these fixes when Adobe Premiere launches without showing its splash screen.

### Check if any app instance is running in background

Confirm whether another copy of the app is still active in the background. When one is present, end it with Activity Monitor (macOS) or Task Manager (Windows).

### Resetting preferences

When Premiere will not open, reset preferences as a possible way to clear the launch problem.

### Clearing media cache

Another troubleshooting step is to clear the media cache and then test the issue again.

## Try Adobe Creative Cloud Diagnostics

### Use Adobe Creative Cloud Diagnostics (Beta) to test GPU driver compatibility and surface additional troubleshooting guidance.

Adobe Creative Cloud Diagnostics helps diagnose and troubleshoot common system problems, including installation failures, performance trouble, and conflicts with other installed software.

- Download for Windows
- Download for macOS

## Premiere crashes when you open a specific project

### A damaged workspace can sometimes make Adobe Premiere crash. Use the following steps to troubleshoot a project-specific crash.

When the project file itself may be at fault, bring it into a newly created project.

Choose File > New > Project, or choose New Project from the home screen.

Next, open Window > Workspaces and turn off Import Workspace from Projects.

Import Workspace from Projects brings the workspace saved with another project into the project currently open.

Import Workspace from Projects brings the workspace saved with another project into the project currently open.

Choose File > Import, browse to the project file, and attempt the import. You can bring in the full project or only selected sequences.

Options for bringing a saved project's workspace into the current project.

Options for bringing a saved project's workspace into the current project.

## Adobe Premiere hangs on launch on macOS

### Resolve the macOS launch freeze where Premiere shows only the Permissions dialog box.

During startup on macOS, Premiere verifies access to Desktop, Documents, and Downloads. Without that access, Premiere presents a dialog asking for folder permission.

Selecting Deny or Open Preferences causes Premiere to close. Permission approval requires Premiere to restart, while refusing access means Premiere cannot continue running.

### Denied or revoked the permissions

You chose Don’t Allow on the first macOS permission prompt, or Premiere later lost permission in System Preferences.

If Premiere hangs after permissions were denied or removed, use these steps:

Quit Premiere.

Open System Preferences > Security & Privacy > Privacy > Files and Folders, find Premiere [version], and enable the checkboxes for any folders shown.

Relaunch Premiere.

### Corrupted system database for permissions

When System Preferences > Security & Privacy > Privacy > Files and Folders appears to grant the needed access but Premiere still reports missing permissions, the system permissions database may be damaged.

Uninstall Premiere.

Restart the system.

Install Premiere.

## Premiere freezes on the splash screen

Troubleshoot installed plug-ins when Adobe Premiere stops at the splash screen.

Plug-in problems can make Premiere freeze on the splash screen during startup. Watch the splash screen to determine whether loading stops on a particular plugin.

The Premiere splash screen can indicate which plug-in is making the application stall.

The Premiere splash screen can indicate which plug-in is making the application stall.

Use the Premiere splash screen status to observe plugin loading and note the plugin where the hang occurs.

After finding the plug-in involved, inspect the MediaCore folder to confirm the plug-ins match the Premiere version in use.

- For Windows: C:\ProgramFiles\Adobe\Common\Plug-ins\7.0\MediaCore
- For macOS: /Library/Application Support/Adobe/Common/Plug-ins/7.0/MediaCore

Temporarily move the plug-ins from that location into another folder.

Test whether Premiere runs correctly without the third-party plug-ins. If removing them resolves the problem, update the plug-ins or ask the plug-in vendor for a compatible release.

## Premiere is crashing

### Try these fixes when Adobe Premiere will not open, crashes, freezes, or stops responding.

### Common issues

Review current known issues that involve launch crashes.

### Update Premiere

Install the newest Premiere release to improve product stability and pick up fixes for known issues.

### Restart Premiere

Force quit Premiere and open it again, or restart the computer, to clear the system problem.

### Reset preferences

Back up preferences, then reset them.

### Check Windows build number

Verify the Windows 11 build number and confirm whether the computer is running 32-bit or 64-bit Windows.

## Why reset preferences

### Resetting preferences can return Premiere to defaults and help troubleshoot common problems.

Troubleshoot Premiere issues by resetting preferences.

### Purpose of resetting preferences

Often called trashing preferences, this procedure returns Premiere to its initial default configuration. It can fix problems created by damaged or conflicting settings and is suggested when the software is not behaving as expected.

### Impact of resetting preferences

Resetting preferences removes most personal changes, including:

- Default transition duration
- User interface brightness
- Label color choices
- Audio hardware configuration
- Workspace edits, including panels you resized or moved

### Scratch disk settings and project files

Resetting preferences does not alter scratch disk settings. Those values are stored inside each project file, so Premiere reuses the scratch disk arrangement chosen when that project was created.

## Reset preferences at launch

### Reset Premiere during launch when performance problems may come from stored preferences.

Before you begin:

Make a backup before doing a manual preference reset, because custom items such as keyboard shortcuts, workspaces, and styles can be removed.

Start Premiere while holding a modifier key: Command, Option, or Shift (macOS), or Ctrl, Alt, or Shift (Windows).

When the Reset options dialog appears, choose the actions you need, use Continue to run them, and let Premiere finish launching.

Choose one or more actions for Premiere to complete before it opens.

Choose one or more actions for Premiere to complete before it opens.

Note

The key or key combination you used determines which options are selected automatically:

- Option or Alt: clears and rebuilds app preferences
- Shift: clears the plugin loading cache
- Option or Alt + Shift: clears app preferences and the plugin loading cache
- Command or Ctrl + 3: turns off third-party video plugins

Select OK.

Note

Your choices take effect when Premiere is restarted again.

## Reset preferences using the preferences folder

### Reset Premiere from the preferences folder as a troubleshooting step.

Before you begin

Back up preferences before resetting them manually, since customized items such as keyboard shortcuts, workspaces, and style settings can be changed or lost.

Exit Premiere.

Go to the preferences folder, then rename it or move it somewhere else.

Default locations:

- Windows: C:\Users<username>\Documents\Adobe\Premiere Pro<version>\Profile-<profilename>
- macOS: /Users/<username>/Documents/Adobe/Premiere Pro/<version>/Profile-<profilename>

After Premiere opens again, it creates a fresh preferences folder that uses default settings.

## Restore custom preferences

### Restore Premiere preferences when you need to reverse a reset or recover custom settings.

Caution

Putting custom preferences back can also bring the problematic settings back into Premiere.

Exit Premiere.

Open the preferences folder.

For a reset performed with Adobe Creative Cloud Diagnostics, use the backup folder named Profile-<name>_bkp_<lastest time stamp>.

Inside the backup folder, find these items:

- KYS File, which stores keyboard shortcuts
- Adobe Premiere Prefs file, which contains general preferences
- Layouts folder, which stores workspaces

To recover your settings, copy these files into the current preferences folder and replace the existing files.

If the folder was renamed, change it back to the default name (Profile-<name>).

If the folder was moved elsewhere, put it back in its original location.

Premiere restores the preferences on the next launch.

## Unable to migrate settings after updating Premiere

### Troubleshoot failed preference and settings import after updating Adobe Premiere.

After moving from an older Premiere release to a newer one, the import option may still fail to bring across settings, presets, workspaces, or keyboard shortcuts, even when that import option is enabled.

### Installed version has created preferences or settings folder

A previous pre-release installation can block migration by leaving a preferences or settings folder in place. The migration flow is designed to copy older preferences and settings into the new release structure, but existing files in that destination are not overwritten.

Back up your settings by moving the preferences folder to another location on the machine.

By default, the preferences folder is stored here:

- Windows: C:\Users<username>\Documents\Adobe\Premiere Pro<version>\Profile-<profilename>
- macOS: /Users/<username>/Documents/Adobe/Premiere Pro/<version>/Profile-<profilename>

Uninstall Premiere.

Remove the migration folder at this location:

- Windows: users<username>\AppData\Local\Adobe\OOBE\com.adobe.accc.apps\CCPrefMigration
- macOS: ~/Library/Application Support/Adobe/OOBE/com.adobe.accc.apps/CCPRefMigration

In the Creative Cloud desktop application, choose Update and enable the Import settings checkbox.

When Premiere is installed again, the previous release's settings, presets, workspaces, and keyboard presets are brought into the latest release.

## Unable to find the cause of render or export issue

### Use this approach when render or export troubleshooting still does not reveal the cause.

If rendering or export still makes Premiere hang or freeze after the recommended troubleshooting has been tried, rolling back to an earlier application version may help.

Exit Premiere, then open the Creative Cloud desktop app.

Choose Apps, then select the More actions icon for Premiere.

From the context menu, choose Other versions.

In the version list, locate the app version you want and select Install.

Tip

For more details, review guidance about installing previous versions of Creative Cloud apps and keeping earlier application versions available.

## Export is very slow

### Troubleshoot Premiere exports that take too long to finish.

Many factors can slow export, but two core checks often improve rendering performance:

Confirm that the device meets the recommended technical requirements.

Check whether installed drivers need updates. NVIDIA Studio Drivers are recommended.

Tip

When launch-day support for the newest games, patches, and DLCs matters most, choose the Game Ready Drivers.

For creative work where stability and quality matter most, choose the Studio Drivers for video editing, animation, photography, graphic design, and live-streaming.

## Unable to render or export a specific project

### Resolve render or export failures that affect one specific project.

Export another project to check whether export works outside the problem project.

If other projects export successfully, the current project may be failing because of third-party plugins, transitions, or LUTs during rendering.

When the issue appears tied to that project, import it into a new project. Use File > Import, browse to the original project file (.prproj), select Open, and then try exporting again.

## Unable to render or export Premiere project

### Troubleshoot Premiere when rendering or export causes hangs, freezes, or unresponsiveness.

Before you begin

Start with the standard export troubleshooting steps referenced here.

Try exporting the project to another file format. Review the formats Premiere supports for direct export.

For H.264 or HEVC output, open Preferences > Media and clear Enable hardware accelerated decoding (requires restart).

If the export is not H.264, or the problem remains, choose File > Project Settings > General. Under Video Rendering and Playback, select Mercury Playback Engine Software Only.

Note

On Apple computers with Apple Silicon processors, Software Only mode is unavailable.

Using Mercury Playback Engine Software Only can reduce rendering speed.

If a custom export preset is in use, switch to a built-in preset. In the Export Settings dialog box, open the Preset dropdown menu and pick a built-in preset that matches the target output format.

Select Queue to send the project to Media Encoder for export with Adobe Media Encoder. Media Encoder also lets you continue working on other Premiere projects.

When a third-party transition or plugin is in the project, remove it temporarily and try exporting again.
