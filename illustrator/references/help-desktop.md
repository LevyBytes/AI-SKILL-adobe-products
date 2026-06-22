# Save And Export, Connect With Other Apps And Tools, Troubleshoot

> Adobe Illustrator reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Save and export; Export to Adobe cloud storage; Export for screens; Export assets to Firefly Boards; Connect with other apps and tools; About using desktop AI tools with Adobe Illustrator (Beta); Connect Adobe Illustrator (Beta) to AI tools; Work with Adobe Illustrator (Beta) documents from AI tools; Troubleshoot; Known and fixed issues in Adobe Illustrator; Recover Adobe Illustrator files after a crash; Quick save, auto-backup, and recovery settings; Cloud documents won't open and show a file access error.

## Save and export

### Export files to different formats

Export to Adobe cloud storage

Export for screens

### Export to other apps

Export assets to Firefly Boards

## Export to Adobe cloud storage

Export Illustrator assets to Adobe cloud storage so they are easy to access, share, and reuse in Illustrator on desktop and web.

Adobe cloud storage lets you manage, sync, and save artwork directly in the cloud. From there, you can reach it on any device, keep versions current, and collaborate with others more smoothly. Cloud storage keeps creative work backed up and available whether you move between Illustrator apps or send files out for review.

### Export your file

Open the file for export.

Choose File > Export > Export As.

In the Export As dialog box, choose a format (PDF, PNG, JPG, etc.) and adjust artboard settings as required.

Choose Export to Adobe cloud storage.

Set the file name and destination so Illustrator assets export directly to Adobe cloud storage.

Choose a destination and file name to send Illustrator assets straight to Adobe cloud storage.

In the dialog box named Export to Adobe cloud storage, choose one destination: a new project, an existing project from the Projects tab, or the Your files location.

Choose Export.

The exported file appears in the Projects tab and in the Your files section, and you can also open it from Illustrator on the web.

## Export for screens

Use Export for Screens to export artboards and assets in several sizes and formats for web and app design.

Export for Screens lets you export multiple artboards and assets together, using the formats and sizes required for web and mobile screens.

### Export artboards

Open the document in Illustrator.

Choose File > Export > Export for Screens.

In the Export for Screens dialog box, choose the Artboards tab.

Select the artboards for export.

In Formats, select at least one file format (PNG, JPEG, SVG, PDF, WebP, or TIFF).

Use Export for Screens to export several Illustrator artboards at once, with TIFF selected as the output for high-quality processing.

For high-quality processing, export multiple Illustrator artboards together through Export for Screens and choose TIFF as the output.

Configure scale, the options tied to each format, and Advanced settings for the export.

Under Export to, choose the folder selector and then choose a local save folder, or choose Export to Adobe cloud storage to store the assets in the cloud.

Choose Export Artboard.

### Export assets

Select the artwork to export.

Right-click and choose Collect for Export.

Choose File > Export > Export for Screens.

In the Export for Screens dialog box, choose the Assets tab.

From the list, select the assets you need.

In Formats, select at least one file format (PNG, JPEG, SVG, PDF, WebP, or TIFF).

Adjust scale, format-specific choices, and Advanced settings for the asset export.

Under Export to, choose the folder selector and then choose a local save folder, or choose Export to Adobe cloud storage to store the assets in the cloud.

Choose Export Assets.

## Export assets to Firefly Boards

Send assets from Adobe Illustrator to Firefly Boards for ideation and visualization.

Assets can be exported straight from the Illustrator workspace into Firefly Boards for building mood boards and mockups.

In the Illustrator workspace, select the assets to export to Firefly Boards.

Choose Share Document in the upper-right area of the Application Bar.

Choose Open in Firefly boards. Illustrator converts the assets to raster form and creates a new board in Firefly Boards.

On the board, pick an area for placing the assets, then edit them as needed.

To move the assets back into Illustrator, choose Download, and then open them in Illustrator.

(Applies to English only) For ideation and visualization, you can also use the mood board template and the mockup template, respectively.

## Connect with other apps and tools

About using desktop AI tools with Adobe Illustrator (Beta)

Connect Adobe Illustrator (Beta) to AI tools

Work with Adobe Illustrator (Beta) documents from AI tools

## About using desktop AI tools with Adobe Illustrator (Beta)

Review the MCP server and how it supports work in Illustrator (Beta) through AI tools such as Cursor, Claude Code, or Codex.

### MCP server in Illustrator (Beta)

Model Context Protocol (MCP) is a standard for connecting AI tools with external data sources.

Illustrator (Beta) provides a built-in MCP server so desktop AI tools can connect to Illustrator (Beta) and run supported tasks from those tools. In the AI tool, describe the requested change in natural language; the tool then applies the needed edits to the active Illustrator document. This integration works with 40 Illustrator tools and actions.

After the connection is made, the authentication key stays valid until it is regenerated, and regeneration requires a new connection setup. Billing happens through the AI tool rather than through Adobe.

### Use cases

Try this Illustrator (Beta) scenario through an AI tool:

Create translated versions of your artwork with an AI tool

After learning about MCP, continue by setting up a connection from the AI tool to Illustrator (Beta).

## Connect Adobe Illustrator (Beta) to AI tools

Set up Illustrator (Beta) with AI tools such as Cursor, Claude Code, or Codex so artwork can be edited through text prompts.

### Before you begin

Before setup, confirm these requirements:

- Use the latest version of Illustrator (Beta)
- Keep a desktop AI tool such as Cursor, Claude Code, or Codex installed on the same computer as Illustrator (Beta)

### Set up a connection with Cursor

Open Illustrator (Beta).

Choose MCP & Tools in the Application Bar at the top of the workspace.

MCP & Tools is also available from Illustrator (Beta) > Settings (macOS) or Edit > Preferences (Windows).

Choose Connect next to Cursor. The Cursor app opens automatically and displays the Install button.

Choose Install to finish setup.

To confirm the connection, try a simple prompt in Cursor, such as Create a document. When the connection works, Cursor asks whether it can continue with the requested change.

### Set up a connection with the Claude Code or Codex CLI

Claude Code and Codex Command Line Interface (CLI) versions must be launched from Terminal (macOS) or Command Prompt (Windows) before they can connect to Illustrator (Beta).

The Codex app can connect to Illustrator (Beta) through text prompts. Use the Others option in the MCP & Tools settings for that setup.

Open Illustrator (Beta).

Choose MCP & Tools in the Application Bar at the top of the workspace.

MCP & Tools is also available from Illustrator (Beta) > Settings (macOS) or Edit > Preferences (Windows).

Copy the command for your AI tool that includes the server URL and authentication key:

- For Claude Code, choose Copy Claude Code command to clipboard next to Claude Code.
- For Codex, next to Codex, choose Copy Codex command to clipboard.

Sample command for Claude Code:

claude mcp add --transport http --header "Authorization: Bearer ilst_da9d6ccd0a1e39ecea17c19e3a5042325856532f8f8df1185b76f0ba5b6fa054" --scope user illustrator http://localhost:18412/v1/mcp

Caution

Do not use the sample command, because your Illustrator (Beta) installation has its own authentication key. From the MCP & Tools settings, use only the exact command shown there.

On macOS, use Terminal; on Windows, use Command Prompt. Paste the command and press Enter to complete setup.

Type Claude or Codex in Terminal or Command Prompt to restart that session.

For a quick connection test, enter a prompt like Create a document in Claude Code or Codex. When the connection works, it asks whether it can continue with the requested change.

### Set up a connection with other AI tools or the Codex app

Open Illustrator (Beta).

In the Application Bar at the top of the workspace, choose MCP & Tools.

The same area is also available from Illustrator (Beta) > Settings (macOS) or Edit > Preferences (Windows).

Next to Others, choose Copy URL so the server URL is copied, then store it somewhere temporary. Do the same with Copy key to capture and save the authentication key.

Finish the setup by following the instructions for your AI tool. In the Codex app, for example, you could ask: Please add the Illustrator MCP server configuration in Codex, then use the URL and key I copied.

To confirm that the connection works, send a small prompt in the AI tool, such as Create a document. When the connection is active, the tool asks for permission before it carries out the requested change.

After the AI tool is connected, start by reviewing the supported Illustrator (Beta) tools and actions, and sample prompts.

## Work with Adobe Illustrator (Beta) documents from AI tools

Edit, organize, and manage Illustrator (Beta) artwork directly through your AI tool.

### Before you begin

Before you start, make sure that you:

- Have the latest version of Illustrator (Beta) installed
- Have a desktop AI tool, such as Cursor, Claude Code, or Codex, installed on the same computer as Illustrator (Beta)
- Have created an MCP connection from Illustrator (Beta) to a desktop AI tool
- Have a stable network connection

### Edit and manage Illustrator (Beta) documents from the AI tool

Launch Illustrator (Beta), then switch to the document you want to work on so it becomes active.

Open the AI tool where the MCP server connection was created.

In that AI tool's prompt interface, enter a request that uses any combination of the supported tools or actions listed in the table, then press Enter. The prompt interface reports task progress and then asks whether to accept or reject the proposed edits. Accept the edits to apply them to the document.

To reverse edits, use Command + Z (macOS) or Ctrl + Z (Windows) in Illustrator (Beta).

Tip

When you are not sure how to write a useful prompt, use the sample prompts in the table as a starting point.

## Troubleshoot

### Application crash issues

Recover Adobe Illustrator files after a crash

Quick save, auto-backup, and recovery settings

### Cloud document issues

Cloud documents won't open and show a file access error

Known and fixed issues in Adobe Illustrator

## Known and fixed issues in Adobe Illustrator

Check which Illustrator problems are currently known and which ones have already been fixed.

### System Issues

Unable to reopen recently opened cloud documents from the Your files tab on the homescreen

Under Review

| App version | Illustrator 30.0 |
| --- | --- |
| Impacted device types | macOS, Windows |
| Last updated | October 2025 |

Summary

Reopening recent cloud documents from the Your files tab on the homescreen can return this error: Can't open file. The account you signed in with doesn't have access to this file.

Next steps

Temporary workaround: open those recent cloud documents through Home tab > Recent. To address the Your files tab error, run the Creative Cloud Cleaner tool and reinstall the CoreSync process:

- Prepare to run the Creative Cloud Cleaner tool
- Download and run the Creative Cloud Cleaner tool

Blank screen appears when trying to save files to Adobe Cloud

Fixed

| App version | All Illustrator versions |
| --- | --- |
| Impacted device types | macOS, Windows |
| Last updated | October 06 2025 |

Summary

Saving files to Adobe Cloud, or opening files from Home > Your files, can show a blank screen.

Next steps

Resolve the issue by updating the browser:

- On macOS, update Safari.
- On Windows, update Edge.

SVG copy may not work even after changing clipboard preferences

Fixed

| App version | Illustrator 29.6 or earlier |
| --- | --- |
| Impacted device types | macOS and Windows |
| Last updated | Oct 06 2025 |

Summary

SVG copy can still fail after clipboard preferences are changed under Edit > Preferences > Clipboard Handling (Windows) or Illustrator > Preferences > Clipboard Handling (macOS).

Next steps

Relaunch Illustrator to apply the fix.

Copying artwork may cause Illustrator to slow down or freeze

Fixed

| App version | Illustrator 29.6 or earlier |
| --- | --- |
| Impacted device types | Windows |
| Last updated | September 03 2025 |

Summary

When Windows clipboard history is active, copying complex artwork can make Illustrator slow down or stop responding.

Next steps

Update to the latest Illustrator version to fix the problem. After Illustrator is updated, copied artwork no longer places SVG code on the clipboard by default. That change improves speed and lowers lag for complex selections. If your workflow often moves artwork between Illustrator and other apps that depend on SVG formats, such as browser-based editors or other vector tools, you can turn the setting back on whenever needed.

Illustrator may crash when copying or cutting artwork

Fixed

| App version | Illustrator 28.7 to 29.6 |
| --- | --- |
| Impacted device types | Windows |
| Last updated | September 03 2025 |

Summary

Illustrator can crash while copying or cutting any object, including an object in a new file. This behavior comes from a recent Windows Defender change that interrupts the system clipboard during copy and cut operations.

Next steps

Install the latest Windows Defender patch update to fix the crash.

Lag when panning, zooming, or moving objects with window manager apps

Under Review

| App version | Illustrator 2025 |
| --- | --- |
| Impacted device types | macOS |
| Last updated | June 2025 |

Summary

With window manager apps such as Magnet running, Illustrator can lag while you pan, zoom, or move objects.

Next steps

The team is working on a resolution. Until then, keep window manager apps turned off during Illustrator work.

Illustrator unexpectedly starts recording your screen activity

Under Review

| App version | Illustrator 28.6 or later |
| --- | --- |
| Impacted device types | macOS |
| Last updated | June 2025 |

Summary

Illustrator can unexpectedly request screen recording access when the Eyedropper tool samples colors outside the app.

Next steps

Temporarily limit screen access in macOS security settings. Open System Settings from the menu, go to Privacy & Security > Screen & System Audio Recording, and disable Adobe Illustrator 2025.

Retype not working in non-English locales

Under Review

| App version | Illustrator 2025 |
| --- | --- |
| Impacted device types | Windows |
| Last updated | May 2025 |

Summary

Retype can fail in non-English locales when English OCR is not installed on the device.

Next steps

Temporary workaround: add English OCR. In Settings, open Time & language > Language & region. Use Preferred languages > Add a language. Choose English (United States), continue with Next, leave every option checked except Set as my Windows display language, then finish with Install.

## Recover Adobe Illustrator files after a crash

Use Illustrator's built-in recovery methods to restore files after a crash.

### Recover files using auto-recovery

After Illustrator crashes, take these steps right away:

Restart Illustrator. If Illustrator stayed open during the crash but no longer responds, force quit it from Activity Monitor (macOS) or Task Manager (Windows), then restart it.

Let Illustrator begin auto-recovery. When the process finishes, it opens each unsaved file with Recovered added to the filename.

Choose File > Save As to save the recovered file.

### Recover files from the auto-backup location

When auto-recovery does not show the files, or you closed them by mistake, the auto-backup location may still contain recoverable copies. If auto-backup was set to a different folder, go there instead.

Note

These steps do not apply to Illustrator versions 29.2 to 29.8, which use .aishm files for recovery.

### macOS

From the menu bar, choose Go, then choose Go to Folder.

Enter ~/Library/ and press Return.

Browse to Preferences/Adobe Illustrator <version> Settings/<locale>/DataRecovery.

To recover the content, open the files with the .ai or .aid extension in Illustrator.

### Windows

In Windows Search, enter %AppData% to open the Roaming folder in your Windows user profile.

Browse to Adobe\Adobe Illustrator <version> Settings<locale>\x64\DataRecovery.

To recover the content, open the files with the .ai or .aid extension in Illustrator.

Auto-backup for unsaved files is on by default. If the auto-backup location does not contain the files you need, turn on the settings now for future recovery.

Note

- If Illustrator crashes between the configured auto-backup intervals, some data may be lost.
- If another crash interrupts data recovery, Illustrator automatically disables the auto-backup and recovery settings. You need to enable them again.

## Quick save, auto-backup, and recovery settings

Adobe Illustrator includes quick save, auto-backup, and recovery settings that speed up saving and reduce crash-related data loss.

Note

For a faster and more dependable file save and recovery experience, update to Illustrator 30.0 and confirm that you meet the requirements.

### Save and recovery Settings

Open Illustrator > Settings > File Handling (macOS) or Edit > Preferences > File Handling (Windows) to reach these settings:

### Requirements for the new quick save and recovery experience

For the new auto-backup and recovery experience to operate, make sure that you:

- Update Illustrator to version 30.0.
- Enable Save in Background in the settings.
- Save Illustrator files with compatibility set to Illustrator 2020; this applies to local documents and not cloud documents.
- Avoid third-party plugins or content in Illustrator.
- Keep Live Paint, Shape Builder, or Freeform Gradient content out of your files.

## Cloud documents won't open and show a file access error

Use this guidance when cloud documents do not open and the error says your account lacks access to the file.

If a cloud document opens with this message, the likely problem is the Creative Cloud Libraries Synchronizer process: Can't open file. The account you signed in with doesn't have access to this file. Contact the owner for more info.

Work through the likely causes and their fixes in order.

### Creative Cloud Libraries Synchronizer isn't running

Start by checking the status of Creative Cloud Libraries Synchronizer.

### macOS

Open Finder and go to Applications > Utilities > Activity Monitor.

Use the Activity Monitor search bar to look for Creative Cloud Libraries Synchronizer:

- If it is not running, check whether App Background Activity is inactive.
- If it is running, it could still be hung.

### App Background Activity is inactive

When Creative Cloud Libraries Synchronizer is not running, inspect App Background Activity:

Use the Apple menu to open System Settings (macOS Tahoe) or System Preferences (earlier macOS versions). Navigate to General > Login Items & Extensions (macOS Tahoe) or Users & Groups > Login Items (earlier macOS versions).

In the App Background Activity section, find CCLibrary. If the toggle next to CCLibrary is off, turn it on.

Open the Creative Cloud desktop app, then in the Apple menu bar choose Creative Cloud > Quit Creative Cloud.

Reopen the Creative Cloud desktop app so it starts Creative Cloud Libraries Synchronizer automatically.

Return to Activity Monitor and verify that Creative Cloud Libraries Synchronizer is running.

Reopen Illustrator and try to open a cloud document. If the document still does not open, Creative Cloud Libraries Synchronizer may be hung.

### Windows

Press Ctrl + Shift + Esc to open Task Manager.

Use the Processes tab (Windows 11) or the Details tab (earlier Windows versions) in Task Manager to see whether Creative Cloud Libraries Synchronizer is running. If it is running, it may still be hung.

### Creative Cloud Libraries Synchronizer is hung

When the process is present but cloud documents keep failing to open, treat Creative Cloud Libraries Synchronizer as likely hung. Restart it with these steps:

Complete these actions:

- macOS: In Activity Monitor, choose Creative Cloud Libraries Synchronizer, then use Force Quit in the Apple menu. Repeat with Illustrator selected in Activity Monitor.
- Windows: In Task Manager, right-click Creative Cloud Libraries Synchronizer.exe and select End task. Repeat by right-clicking Illustrator.exe and selecting End task.

Wait 10 seconds.

Launch Illustrator again; Creative Cloud Libraries Synchronizer starts automatically.

Use Activity Monitor (macOS) or Task Manager (Windows) to verify that Creative Cloud Libraries Synchronizer is running.

When Creative Cloud Libraries Synchronizer is missing from Activity Monitor (macOS) or Task Manager (Windows), restart the computer and repeat the check.

Once Creative Cloud Libraries Synchronizer is active, try opening a cloud document.

### Issue isn't resolved even after trying all the steps

If the same error still appears when you open cloud documents, contact Adobe support.
