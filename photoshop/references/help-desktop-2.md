# Share And Collaborate, App Integrations, Troubleshoot

> Adobe Photoshop reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Share and collaborate; Create Projects and add files; Share and collaborate with Projects; App integrations; Access Adobe Express Templates; Refine Firefly-generated images; Transform image to video; Open Photoshop files in Illustrator; Troubleshoot; Set up and manage scratch disks; Check GPU compatibility; Known issues in Adobe Photoshop on desktop; Resolve graphics processor (GPU) and graphics driver issues; Troubleshoot scratch disk full errors in Photoshop; Resolve program error while saving files; Photoshop crashes while using bullets and numbers; Keyboard shortcuts not working.

## Share and collaborate

### Collaborate and edit

Create Projects and add files

Share and collaborate with Projects

## Create Projects and add files

In Adobe Photoshop, create and share projects so files stay organized and collaboration is easier.

### Create projects

On the Photoshop homescreen, select Projects > Create project.

The Projects workspace is where collaborative files can be organized, reviewed, and managed.

In the Projects workspace, you can organize, view, and manage collaborative files.

Provide a project name, then select Create.

Add the email addresses for the people who should collaborate on the project.

Note

An email invitation to join the project is sent to each collaborator.

Choose Can edit or Can comment for the permission.

Add a message if needed, then select Invite.

### Add files to projects

Open Projects, and then choose your desired project.

Choose Add > Move files or Create a folder.

In the Move in Adobe cloud storage window, choose the existing files to move into the project.

Note

Upload Photoshop (.psd), Illustrator (.ai), and Express design files.

New files can also be saved directly into a project from Photoshop.

Select Move to confirm and add the files.

Tip

For more actions, select the three-dot icon: Share, Copy link, Rename, Leave, and Delete.

## Share and collaborate with Projects

Use the Projects section in Adobe Photoshop to collaborate with others on shared project content.

On the Photoshop homescreen, choose Projects.

Use the filter dropdown and choose Shared with you.

Tip

Shared with you appears only after someone shares a project with your Adobe ID.

Navigate to the file or folder you want to open.

Double-click the target file to open it in Photoshop.

## App integrations

Access Adobe Express Templates

Refine Firefly-generated images

Transform image to video

Open Photoshop files in Illustrator

## Access Adobe Express Templates

From the Adobe Photoshop homescreen, Adobe Express templates can help you begin and customize projects more quickly.

On the Photoshop on desktop homescreen, select Templates.

For a fast design start, use the Templates tab in Photoshop homescreen and select Express templates.

From Photoshop homescreen, choose Express templates on the Templates tab to begin designs quickly.

When the Adobe Express Templates panel opens, select a template for preview.

Note

Place the pointer over a template to show its badge. Point to the badge to view a tooltip with the template type.

When the template opens in Adobe Express, edit and share it there.

Tip

If Adobe Express is not already authenticated, sign in with your Adobe ID.

## Refine Firefly-generated images

Bring Adobe Firefly-generated images into Adobe Photoshop so you can edit them there.

On the Photoshop homescreen, select Firefly history.

Inside Photoshop, the Firefly generation history panel lets you view and manage images generated with Firefly.

Use the Firefly generation history panel in Photoshop to view and manage your Firefly-generated images.

Choose an image previously generated with Firefly, and Photoshop opens it as a new document.

Edits made in Photoshop do not change the original Firefly asset.

## Transform image to video

Use an Adobe Photoshop image as the starting point for generating a video in Adobe Firefly.

Photoshop images can be used to generate videos in Adobe Firefly.

Generate videos in Adobe Firefly from Photoshop images.

Use File > Open to browse for an image and open it in Photoshop.

Use Share > Generate video in Firefly.

In the Firefly app, type the prompt for the video.

Select Generate.

## Open Photoshop files in Illustrator

Open, place, link, or embed Photoshop files in Illustrator while keeping control over how they are handled.

When Photoshop designs need to keep layers, text, and paths after import:

In Illustrator, choose File > Open.

In the Open File dialog box, locate the Photoshop file, then select Open.

When Photoshop Import Options appears, choose the required settings:

- Convert Layers to Objects: keeps masks, blend modes, transparency, slices, and image maps, while adjustment layers and effects are not preserved.
- Flatten Layers to a Single Image: combines the layers into one editable layer, keeping the appearance but removing layer-level editing.

Select OK.

### Place Photoshop files in Illustrator

Placing content such as layer comps, text, and paths helps retain Photoshop data. Illustrator brings in adjustment layers with visibility disabled, and those layers come back if the document later returns to Photoshop.

### Place a linked Photoshop image into an Illustrator file

Linking leaves the Photoshop file connected, so Illustrator receives updates made in the source file.

In Illustrator, choose File > Place.

Find the Photoshop file, check Linked checkbox, and then select Place.

A red X on the image means the file is linked and cannot be edited directly.

### Embed a Photoshop image into an existing Illustrator file

When embedded, the artwork is copied into Illustrator. File size goes up, and later changes in the original file no longer update the Illustrator document.

In Illustrator, choose File > Place.

Find the Photoshop file, confirm Linked checkbox is cleared, then select Show Import Options.

Select Place. In the Photoshop Import options dialog box, choose the desired import options and select OK.

## Troubleshoot

### Tools and resources

Set up and manage scratch disks

Check GPU compatibility

### Performance and stability issues

Known issues in Adobe Photoshop on desktop

Resolve graphics processor (GPU) and graphics driver issues

Troubleshoot scratch disk full errors in Photoshop

### File and format issues

Resolve program error while saving files

### Tool and feature issues

Photoshop crashes while using bullets and numbers

Keyboard shortcuts not working

## Set up and manage scratch disks

In Adobe Photoshop, adjust scratch disk choices, reclaim storage, and tune storage settings to address startup failures and performance problems.

Photoshop startup crashes and project-time crashes are often tied to too little scratch disk space. Scratch disks are hard drives or SSDs used by Photoshop as temporary storage when the computer's RAM cannot cover the current work.

Select Edit > Preferences > Scratch Disks (Windows) or Photoshop > Settings > Scratch Disks (macOS)

In the Scratch Disk Preferences dialog, select any additional drives Photoshop should use as scratch disks.

Use the arrow buttons to set drive priority, putting the fastest drives first.

Select OK.

## Check GPU compatibility

In Adobe Photoshop, GPU compatibility can be checked either manually or with the built-in tool.

### Check GPU compatibility manually

Open Edit > Preferences > Performance (Windows) or Photoshop > Settings > Performance (macOS).

Clear Use Graphics Processor.

After selecting OK, restart Photoshop.

Check whether the issue still occurs with GPU acceleration disabled.

If the problem goes away, the likely cause is the GPU or its driver.

### Run the built-in Photoshop GPU compatibility check

Select Help > GPU Compatibility.

On a Windows Intel-based system, if you see Your graphics processor is incompatible, check whether the Microsoft OpenCL/OpenGL Compatibility Pack is installed.

When that compatibility pack is present, uninstall it, then restart your computer.

Open Photoshop again and check whether the issue is resolved.

## Known issues in Adobe Photoshop on desktop

Use this list to track known issues, available workarounds, and current resolution status for Adobe Photoshop on desktop.

Adobe refreshes these entries as fixes ship and additional issues are confirmed. Return to this page for current status information.

Documents with many (6+) artboards can freeze or lag when artboards are moved

Open

| App version | Adobe Photoshop 27.7 |
| --- | --- |
| Impacted device types | macOS, Windows |
| Last updated |  |

Summary

Summary

In Artboard documents containing six or more Artboards, moving the Artboards can briefly freeze the application.

Workaround

Set explicit canvas limits and turn off Auto-size Canvas.

1. Create two shape layers, i.e., rectangles, outside the artboards to mark the outer canvas boundaries in the work area.
2. In the Artboard tool options gear menu, disable Auto-size Canvas.

Remove the canvas-boundary shape layers before export, then save the document.

Older hardware can make on-device performance slower than cloud

Resolved

| App version | Adobe Photoshop 26.7 |
| --- | --- |
| Impacted device types | Windows, Mac |
| Last updated |  |

Summary

Summary

On Apple MI Max, on-device processing can run 2.2.Sx slower than cloud (e.g., 1:22 vs 0:37), with the first use most affected. Later operations complete faster. Older systems or low VRAM can reduce performance.

Workaround

Keep GPU drivers current. When a system does not meet hardware requirements, Photoshop disables the on-device option and shows a tooltip that explains the limitation. Users can still use the cloud-based Remove tool. For best results, use newer hardware such as Apple M2+ or NVIDIA RTX series.

The default setting leaves "Open JPEG without Background layer" turned off.

Resolved

| App version | Adobe Desktop 26.7 |
| --- | --- |
| Impacted device types | Windows, Mac |
| Last updated |  |

Summary

Summary

Default preference change: turn off "Open JPEG without Background layer"

Credit allocation caps Premium GenAI features

Resolved

| App version | Adobe Desktop 26.7 |
| --- | --- |
| Impacted device types | Windows, Mac |
| Last updated |  |

Summary

Summary

A user's monthly generative credits allocation controls access to Generative Al features (100 credits for eligible subscribers). After the allocation is spent, premium features remain unavailable until the next billing cycle.

Workaround

Track credit usage in the Creative Cloud app. Higher-tier plans may provide additional credits. The Learn More link in the quota exhausted notification now opens the right details.

Photoshop in-app deeplinks may fail on certain Wi-Fi networks.

Under Review

| App version | Affects all app versions |
| --- | --- |
| Impacted device types | Desktop experiences (in-app links that depend on browsers) |
| Last updated |  |

Summary

On certain Wi-Fi networks, Photoshop in-app tutorial deeplinks route to an "Install Photoshop" page instead of starting Photoshop. Reports are concentrated in Germany, and the same device can succeed on a mobile hotspot or another network.

Next steps Try another connection, for example a mobile hotspot. If the problem continues, check this entry again.

Large UI text can hide some Remove Tool controls.

Partially resolved

| App version | Adobe Photoshop 27.0 |
| --- | --- |
| Impacted device types | Mac, Windows |
| Last updated | September 23, 2025 |

Summary

Remove Tool options, including flag and commit icons, can be clipped so they do not show.

Next steps Turn on the narrow options bar (Preferences > Workspace > Enable Narrow Options Bar) to reduce the options bar width further.

Remove Tool options bar may be cut off.

Partially resolved

| App version | Adobe Photoshop 27.0 |
| --- | --- |
| Impacted device types | Mac, Windows |
| Last updated | September 23, 2025 |

Summary

The Remove Tool options bar can appear cut off; Report this result, Reset all strokes, and Apply current strokes are unavailable.

Next steps Turn on the narrow options bar (Preferences > Workspace > Enable Narrow Options Bar) so the options bar uses less width.

A pixel layer below Harmonize can break additional variation generation.

Under Review

| App version | Adobe Photoshop 26.11 |
| --- | --- |
| Impacted device types | Windows, Mac |
| Last updated | October 28, 2025 |

Summary

The generated result is badly degraded and produces variations that cannot be used. Generate is disabled when one or more layers sit between the Harmonize layer and the original subject layer.

Next steps

Continue by moving the interfering layers, or run Harmonize on a new layer.

## Resolve graphics processor (GPU) and graphics driver issues

Address GPU-related problems in Adobe Photoshop by updating drivers, checking compatibility, and tuning performance settings.

Graphics processor (GPU) or graphics driver trouble in Photoshop can show up in several ways that interrupt normal work.

GPU-related issues in Photoshop may appear as one or more of these symptoms:

- Soon after launch, Photoshop shows a GPU compatibility screen
- Tools or filters respond slowly or lag during use
- The canvas flickers, flashes, or shows visual artifacts
- Photoshop freezes or crashes at launch or when specific features are used
- The menu bar or other interface elements are missing
- Zooming in or out causes slow screen redraw
- Parts of other windows remain visible after a partial screen redraw
- Crop handles, transform controls, or similar graphic elements appear discolored
- Images show a bright green fill

### Outdated, corrupted, or incompatible graphics driver

Get the current graphics driver from the GPU manufacturer's website and install it.

After installation, restart the computer.

Open Photoshop and check whether the problem is fixed.

If the issue continues, install a slightly older stable driver version.

Tip

Also review GPU compatibility to confirm that the hardware is suitable.

### Rendering issues or performance problems due to automatic graphics switch between integrated and discrete GPUs on macOS

Open System Settings > Battery (macOS Ventura or later).

Clear Automatic graphics switching.

Restart the computer.

Open Photoshop and check whether the problem is fixed.

### GPU settings in Photoshop are causing conflicts with certain features

Open Edit > Preferences > Performance (Windows) or Photoshop > Settings > Performance (macOS).

Confirm that Use Graphics Processor is checked.

Open Advanced Settings.

Clear Use OpenCL and GPU Compositing, then select OK.

Select OK again, then restart Photoshop.

Note

Some Photoshop features depend on GPU acceleration and stop working if the graphics processor is disabled. Affected features include certain 3D functionality as well as Oil Paint filter, Perspective Warp, and Smooth Brush Resizing.

### Corrupt Photoshop preference files

Close Photoshop.

While launching Photoshop, hold Alt+Ctrl+Shift (Windows) or Option+Command+Shift (macOS).

When asked to delete the Adobe Photoshop Settings file, select Yes.

Check whether fresh preference files resolve the issue.

## Troubleshoot scratch disk full errors in Photoshop

Fix scratch disk errors by clearing space, adding more drives, and adjusting Adobe Photoshop settings.

Review the basic ways to correct a scratch disk full error in Photoshop.

Photoshop may show "Scratch disk full" or "Scratch Disk Low" while you are working, and that can block continued editing or even prevent the application from opening. The error appears when Photoshop no longer has enough temporary storage space on the hard drive.

When the problem occurs, a dialog may say Could not initialize Photoshop because the scratch disks are full or Could not complete your request because the scratch disks are full, or startup may show a popup that says Scratch Disk Low. Photoshop can freeze, crash, or fail to launch, and performance may become much slower before the warning appears.

### Your scratch disk drive doesn't have enough free space

Free at least 100 GB of space on the primary scratch disk drive.

Windows: Delete files whose names begin with Photoshop Temp in C:\ drive.

macOS: Clean up the Macintosh HD drive or transfer files to an external drive.

Restart Photoshop and check whether the error is fixed.

### Set up additional scratch disks

Configure extra scratch disks for temporary files. Photoshop supports APFS and macOS Extended (Journaled) for macOS scratch disks, and NTFS, exFAT, and FAT32 for Windows.

### Optimize Photoshop settings

History States and auto-recovery can use substantial scratch disk space during complex edits. Reducing these settings lowers the temporary data Photoshop must store, which helps avoid scratch disk full errors.

Open Edit > Preferences > Performance (Windows) or Photoshop > Settings > Performance (macOS).

In the History & Cache section, lower the number of History States (default is 50).

Open Edit > Preferences > File Handling (Windows) or Photoshop > Settings > File Handling (macOS).

For very large files, select Automatically Save Recovery Information.

Select OK, then restart Photoshop.

### Reset preferences

Corrupted Photoshop preferences can change how scratch disks are handled. Resetting preferences restores default settings and can clear corruption that affects scratch disk behavior.

Close Photoshop completely.

While launching Photoshop, hold Shift + Alt + Ctrl (Windows) or Shift + Option + Command (macOS).

When asked to delete the Adobe Photoshop Settings file, select Yes.

After Photoshop opens, configure the scratch disk preferences again.

Check whether the scratch disk error is resolved.

## Resolve program error while saving files

Correct Adobe Photoshop program errors during save by changing system permissions or adjusting document layers.

While saving a file in Photoshop, you may see this message: Could not save as [filename].psd because of a program error. Photoshop then does not save the file. This usually occurs with large or complex multilayer files, particular file formats, or documents that have received major edits.

### Photoshop may have bugs or compatibility issues

Open the Creative Cloud desktop application.

Go to the Apps tab.

Locate Photoshop in the installed apps list.

Select Update.

Restart Photoshop, then try saving the file again.

### On macOS, Photoshop may lack the necessary disk access permissions to save files to certain locations

Open the Apple menu in the top-left corner.

Open System Settings.

Open Privacy & Security > Full Disk Access.

Select the lock icon, then enter the system password so changes can be made.

Enable the checkbox next to Adobe Photoshop so it has full disk access.

Restart Photoshop, then try saving the file again.

### Complex layer structures or layer effects

Hide every layer, then save the file under a new name.

Make layers visible again gradually in small groups.

After each group, save to determine which layer might trigger the problem.

For the layer that triggers the issue, simplify it by rasterizing it or removing effects.

Restart Photoshop, then try saving the file again.

### Unified Extensibility Platform (UXP) panel issues

Quit Photoshop completely.

Open /Applications/Adobe Photoshop [Version]/Adobe Photoshop [Version].app/Contents/Required/UXP/ (macOS) or Program Files\Adobe\Adobe Photoshop [Version]\Required\UXP (Windows).

Rename the folder com.adobe.unifiedpanel to ~com.adobe.unifiedpanel.

Restart Photoshop, then try saving the file again.

### Save engine incompatible with your specific file or system configuration

On macOS, open Photoshop > Settings > File Handling.

Choose Enable Legacy "Save As" so Photoshop uses the older save method.

Temporarily save in another format such as TIFF or PSB. Later, reopen the file and save in the preferred format.

## Photoshop crashes while using bullets and numbers

Fix Adobe Photoshop crashes related to bullets and numbers.

Install Photoshop version 26.6 or later.

Open the document that shows the problem.

On the Some text layers might need to be updated... dialog, select No.

Save a screenshot of the canvas so the text that must be recreated is backed up.

In the Layers panel, delete every text layer marked with a gray triangle with an exclamation mark. Select OK for any program errors that appear during the process.

Recreate the Type layers without using the Bullets and Numbering functionality. You can type list text manually as long as auto detection remains disabled.

Save the result as a new PSD document.

In Photoshop versions 26.4 and 26.5, clear Automatic detection of Bulleted and Numbered lists while typing in Preferences > Type.

## Keyboard shortcuts not working

Restore keyboard shortcut behavior in Adobe Photoshop by finding and resolving common conflicts.

When Photoshop keyboard shortcuts stop responding, the workflow can slow sharply. The usual causes include damaged preferences, conflicting apps, or third-party utilities that interfere with Photoshop keyboard input handling.

### Corrupt Photoshop preferences

Exit Photoshop fully.

Start Photoshop while holding Alt+Ctrl+Shift (Windows) or Option+Command+Shift (macOS).

At the Delete the Adobe Photoshop Settings File prompt, choose Yes.

Try the keyboard shortcuts again to confirm that they respond.

### Running multiple applications simultaneously

Save the open Photoshop document or project.

Quit every other application, handling them one at a time.

After each app closes, try Photoshop keyboard shortcuts so the conflict can be isolated.

When you find the app causing the issue, look for an available update for that app.

If an update does not resolve it, change the other application's keyboard shortcut settings or use that application only while Photoshop is closed.

Applications often associated with Photoshop keyboard shortcut conflicts include:

- 1Password: Update 1Password. Earlier releases have interfered with Photoshop keyboard shortcuts.
- Chrome: Update Chrome. Older Chrome releases have interfered with Photoshop keyboard shortcuts.
- Notability: Photoshop may display "Could not place because the Postscript data is empty or invalid." Remove the Notability app to resolve the issue. If it is no longer installed but was present before, verify that no leftover app components remain.

### Third-party utilities, extensions, and drivers

Boot the computer into Safe Mode.

- Windows: Hold Shift during restart, then select Safe Mode.
- macOS: Hold Shift through restart until the Apple logo appears.

Open Photoshop and check whether keyboard shortcuts function in Safe Mode.

Utilities that commonly create problems include:

- Default Folder X utility: Turn off or remove this utility. In the Default Folder X system preferences, select the Disable button to disable Default Folder X. You can also ask St. Clair Software about available updates.
- MagicMenu utility: In the MagicMenu system preferences, select the Disable button to turn off MagicMenu. You can also ask MagicPrefs about available updates.
- Comcast/Xfinity utilities: Ask Comcast/Xfinity for updates or for directions to disable or uninstall the utilities.
- BetterTouchTool: Turn off this utility, or ask BetterTouchTool for troubleshooting and available updates.
- Webroot Antivirus: Ask Webroot about troubleshooting and available updates.

### Outdated or conflicting tablet drivers

Go to the tablet manufacturer's website and get the latest driver.

Remove the currently installed tablet driver completely.

Restart the computer.

Install the replacement driver.
