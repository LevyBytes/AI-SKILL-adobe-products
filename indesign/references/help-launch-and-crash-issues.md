# Submit A Crash Report, Error 2 Or Crash For Save, Launch Issues Windows Update, Launch Issues With Rosetta ...

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Submit a crash report; Crash or Error 2 when saving documents; Launch issues after Windows update; InDesign Rosetta version won’t open in future macOS releases; App launch issues on Windows; App running slower than usual; Damaged fonts crash errors; Corrupt VCRuntime crash error; Crash during print setup on Windows; Crash while working with remote libraries.

## Submit a crash report

Send InDesign crash details through Adobe Crash Reporter so the data can help improve Adobe InDesign stability.

After Adobe InDesign closes unexpectedly, Adobe Crash Reporter opens on its own and can deliver failure diagnostics to the InDesign engineering team.

Crash submissions are especially useful for improving InDesign stability because engineers compare the reports to spot patterns and correct underlying causes. Reports become more actionable when they include your email address and a clear account of the workflow, which also enables follow-up or fix notifications.

If no Crash Reporter window appears after a failure, the feature may already have been turned off in preferences.

### InDesign crash reporter is triggered

Detailed reports give the engineering team a much better chance of finding and fixing the underlying problem. Without enough context, engineers may be unable to reproduce a crash or connect it with patterns across other reports.

In Adobe Crash Reporter, put a close workflow description in either Problem Description or What were you doing when the problem occurred?. Include the exact action in progress, such as exporting a print-ready 50-page magazine layout to PDF or placing a large TIFF into a poster design. Also mention patterns you have noticed, including whether particular files, repeated actions, or certain times are involved.

When the same steps reliably reproduce the problem, record the precise sequence that triggers the crash.

Add your email address in the designated field so the team can ask follow-up questions or tell you when a fix is available.

Enable the checkbox that includes application usage data so the report carries workflow context.

Once the information is complete, choose Send Report or Submit to send Adobe the diagnostic data. The upload happens automatically, and you can relaunch InDesign to keep working.

### Crash reporter triggered with a particular document

When one specific document consistently crashes InDesign, providing that file to Adobe can speed diagnosis and resolution. Engineers may need the actual document because some failures depend on document structure, damaged objects, or rare content combinations that cannot be recreated otherwise.

Upload the affected InDesign document together with linked assets to Creative Cloud, Dropbox, Google Drive, WeTransfer, or another file-sharing service. If the original cannot be shared for privacy reasons, make a duplicate, remove sensitive material, and confirm that the duplicate still crashes. A reduced file is still helpful if it reproduces the failure.

Create a shareable link with the right access permissions.

Paste that link into the crash report's problem description field along with your explanation.

State whether opening the file, making specific edits, or exporting causes the crash.

### Understanding Adobe Crash Reporter privacy

Adobe Crash Reporter is not a monitoring mechanism for your activity. InDesign detects the crash locally, and Adobe receives information only after you decide to send the report. The report starts from your own computer. When you submit it, Adobe receives non-personally identifiable details, such as the software area that failed.

Adding context about what you were doing at the time helps diagnosis. If you include contact information, such as an email address, Adobe uses it only to ask about the crash or to notify you about a fix or workaround. That personal information is not used for marketing. You may also submit the report anonymously.

The engineering teams receive these reports directly and use them as an important input for product improvement.

### Share historical crash data

When the crash reporter does not work, or Adobe Support needs older crash information, you can find and extract crash logs manually from the operating system.

### macOS

In the InDesign quit unexpectedly dialog box shown after the crash, select Report.

Use Cmd + A to select every line of crash log text, then copy it with Cmd + C.

Open TextEdit, then paste the log by pressing Cmd + V.

Save the file so Adobe Support can receive the captured data even if the system never writes a permanent file.

### To access historical crash logs

In Finder, press Shift + Cmd + G.

Enter ~/Library/Logs/DiagnosticReports, then press Enter.

Search for files with the .ips extension, which is standard for macOS Tahoe and InDesign 2026. Older logs may still use the .crash extension.

Open Console by pressing Cmd + Space, typing Console, and pressing Enter.

Choose Crash Reports in the sidebar.

Use the app name or date to filter for the relevant InDesign crashes.

Right-click the relevant Adobe InDesign entry and choose Reveal in Finder to find the actual .ips file to share.

### Windows

Open Task Manager by right-clicking an empty taskbar area and choosing Task Manager, or by pressing Ctrl + Shift + Esc.

Choose the Details tab, which was called the Processes tab in older Windows versions.

If InDesign.exe is frozen but still open, right-click InDesign.exe and choose Create Dump File.

When administrator credentials are requested, enter your password or select Continue.

Record the location displayed in the completion message, typically C:\Users\\AppData\Local\Temp\InDesign.DMP.

Go to that folder and find the .DMP file to provide to Adobe Support.

## Crash or Error 2 when saving documents

After the January 13, 2026, Microsoft Windows updates, InDesign can show Error 2 while saving files or crash during the save operation.

Once those January 13, 2026, Microsoft Windows updates are installed, Adobe InDesign may hit Error 2 during save operations, or it may crash while handling files in cloud-synced locations such as OneDrive, Dropbox, Google Drive, etc.

### Affected Windows Versions

- Windows 10 - January 13, 2026-KB5073724 (OS Builds 19045.6809 and 19044.6809)
- Windows 11 - January 13, 2026-KB5074109 (OS Builds 26200.7623 and 26100.7623)

Investigation points to recent Windows operating system behavior, especially the post-update handling of cloud-backed files. No recent InDesign changes are known to cause this issue.

Microsoft has acknowledged the problem for Windows 10 and Windows 11, and Adobe is coordinating with Microsoft to resolve it as quickly as possible. Until a fix is in place, the following workarounds can reduce the effect.

### Windows operating system changes

Microsoft issued an out-of-band (OOB) Windows update on Saturday, January 24, 2026, for the reported problem. Windows Message Center and Microsoft Learn carried the announcement. Documentation was also revised across Windows update release notes, the M365 admin center (authenticated users), and the Windows release health dashboard.

For Windows 11 devices that are running the updates released this month, the OOB update is delivered through Windows Update. Install it from Settings > Windows Update, then choose Download and Install.

Note

Windows Update shows this update only on devices where one of the January updates that introduced the issue is already installed. Some devices may install it automatically, such as Hotpatch capable (KB5078167) devices or devices with Get Windows updates as soon as they're available enabled.

For supported Windows Server and Windows 10 versions, Microsoft Update Catalog provides the OOB update. The KB articles below provide detailed setup information.

### For IT administrators

For Microsoft Intune or Windows Autopatch environments, administrators should use this Windows Update guidance when applying the OOB update.

- Expedite Windows quality updates in Microsoft Intune
- Deploy an expedited quality update using Windows Autopatch

IT administrators using WSUS can distribute updates released to the Microsoft Catalog at enterprise scale by using guidance from:

- WSUS and the Microsoft Update Catalog

Note

All users should be able to obtain the latest Windows update. If the update is not visible, or if installation problems occur, contact Microsoft.

Open a Microsoft support case when you need help installing the Windows update or clarifying Windows behavior after the out-of-band (OOB) fix is deployed.

If the Windows update cannot be installed, use the workaround below as a temporary option until installation succeeds.

### Specific Microsoft updates (individual users)

Remove the Microsoft updates released on January 13, 2026.

On Windows, choose Settings > Windows Update > Update history > Uninstall updates.

In the Control Panel list, choose the recent update KB5073724 (Windows 10) or KB5074109 (Windows 11).

Select Uninstall.

Restart your system.

### Specific Microsoft updates (Enterprise environments)

In enterprise deployments, administrators can use a Group Policy Known Issue Rollback (KIR) to roll back KB KB5073724 (Windows 10) or KB5074109 (Windows 11). Apply the KIR with these steps:

Open the Group Policy Management Console (GPMC).

Go to Computer Configuration > Administrative Templates > System > Group Policy.

In the policy list, select Configure rollback of problematic updates.

Set the rollback target to KB5073724 (Windows 10) or KB5074109 (Windows 11) update.

Apply and enforce the policy across the affected machines.

Save the document on the local drive first, then copy it to cloud-synced locations such as OneDrive, Dropbox, Google Drive, etc. Use these links to follow additional Adobe information about the issue:

- UserVoice
- Adobe Forum

## Launch issues after Windows update

Use the Windows-update VCRuntime guidance to address Adobe InDesign launch failures.

The investigation shows that a Windows update damaged the VC runtimes that InDesign requires at startup. Recent InDesign changes are not responsible for the failure.

Resolve the InDesign startup error.

Resolve the InDesign startup error.

Microsoft has confirmed the issue. Adobe is working directly with Microsoft on a resolution. For now, use one of the Microsoft-recommended workarounds below.

### Corrupt VCRuntime

### Workaround 1: Repair VCRuntime

Repairing the installed VC packages resolves this issue. Close every application before starting.

Go to Control Panel > Programs > Programs and Features.

Right-click each installed Microsoft Visual C++ Redistributable package, both x64 and x86.

Select Change > Repair if Change is available. Follow the prompts to repair the Microsoft Visual C++ Redistributable.

When Change is unavailable, use Workaround 2 instead.

Restart the system, then launch InDesign.

### Workaround 2: Install the latest VCRuntime

Get the current supported VCRuntime installer from Microsoft and install it.

Help track the issue

Adobe is actively collaborating with Microsoft, and Microsoft Support Request Number 2602270030003886 is tracking the investigation. Use either option below to help Microsoft and Adobe continue investigating.

Raise a Microsoft Service Request

Customers should open a support ticket directly with Microsoft, provide the extra logs listed below, and reference Adobe-created Microsoft Support Request Number: 2602270030003886 so both teams can coordinate tracking and investigation. Once the Microsoft ticket is created and the requested logs are attached, send sharewithID@adobe.com the Microsoft Support Request Number for that ticket.

Share logs with Adobe ID

If the issue continues, send your logs to sharewithID@adobe.com so Adobe can pass them to Microsoft and help resolve the problem more quickly.

### Additional information requested by Microsoft to assist with the issue investigation

Supply these items.

### Information 1: Additional logs by running collect.exe

Get collect.exe from Download Microsoft Visual Studio and .NET Log Collection Tool. The utility gathers setup logs for Visual Studio, .NET, and the VC Redistributable packages.

On a machine where the applications still fail to launch after the updates are applied, run collect.exe and send the generated setup logs to Microsoft or Adobe for more analysis.

After collect.exe runs, the relevant installation logs are zipped to %TEMP%\vslogs.zip.

### Information 2: Additional logs by running TroubleShootingScript toolset (TSS)

Use the TroubleshootingScript toolset (TSS) to capture more logs and generate a `DND_S`etupReport.

Download and unzip toolset from: https://aka.ms/getTSS.

Use Windows Start menu search for Powershell.

Open an elevated PowerShell prompt by right-clicking Windows PowerShell or PowerShell and choosing Run as administrator.

Run this command so the script can execute: Set-ExecutionPolicy - scope Process -ExecutionPolicy RemoteSigned - Force

Collect the installation data by running the tss script with: .\TSS.ps1 -Collectlog `DND_S`etupReport

Create a zip from the C:\`MS_DATA` folder that contains the collected files.

### Information 3: Printer driver details

Share information about any printer drivers installed on the affected computer, especially older or legacy drivers such as Fiery or Canon printers. During Windows updates, those drivers may replace newer VC runtime components with outdated DLL versions.

Use these links to follow additional Adobe information about the issue:

- UserVoice
- Adobe Forum

## InDesign Rosetta version won’t open in future macOS releases

Use this material to troubleshoot Rosetta-related Adobe InDesign launch problems on Apple silicon devices.

### Current behavior

Rosetta is available on macOS for Apple silicon today and remains available through macOS 27, the next major macOS release. On computers running macOS 28, a future macOS release will no longer start the Rosetta version of InDesign.

Use Open in Rosetta when you need InDesign to start through Rosetta on Apple Silicon machines.

Choose Open in Rosetta to run InDesign with Rosetta on Apple Silicon machines.

To keep working smoothly, start the Apple Silicon native version of InDesign. Use Find out your macOS you're using to identify the macOS version on the computer.

### Expected changes in future InDesign versions

Beginning with InDesign 21.4, launching InDesign in Rosetta mode shows an alert about this change. Refer to the notification from Apple for additional details.

Choose Learn More for information about this alert, or choose OK to dismiss it.

Select Learn More if you want details about this alert, or OK when you only need to close it.

## App launch issues on Windows

To address Adobe InDesign startup failures, review compatibility settings and the Windows system configuration.

On Windows, Adobe InDesign launch failures commonly appear as an immediate crash after the icon is selected, an error message, or a silent close before the application opens.

### Missing Windows Media components (Windows N)

Open the Windows Media Feature Pack download page.

Get the version that matches your Windows edition.

Start the installer using administrator privileges.

After installation finishes, restart the computer.

Open InDesign.

### Outdated Windows system files

Install Windows updates.

After the update finishes, restart the computer.

Open InDesign.

## App running slower than usual

Address Adobe InDesign performance problems with preference resets, document cleanup, and checks of the system configuration.

If Adobe InDesign lags or reacts slowly during normal work, likely causes include display configuration, damaged preferences, document-specific issues, or limited system resources.

Symptoms can include page-switching delays, sluggish document scrolling, long waits when applying text or object formatting, or broad unresponsiveness in tasks that used to finish quickly. The application can also show high memory or CPU use in Task Manager or Activity Monitor.

Before moving through the fixes below, confirm these basics:

- The computer meets the minimum technical requirements for the installed InDesign version.
- Creative Cloud shows that the latest available InDesign update is installed.
- Determine whether the slowdown is limited to one document or appears in every document. Select File > New > Document to create a blank file.
- Store files on the local internal hard drive instead of network drives, external drives, or removable media.
- Confirm that no recent system changes occurred, such as antivirus as antivirus, operating system updates, browser updates, or extensions.

### Excessive memory use for page thumbnails

Turning off thumbnails in the Pages panel removes visual page previews, which can lower memory use substantially in documents with many pages.

Choose Window > Pages to show the Pages panel.

Open the panel menu icon, then choose Panel Options.

Clear Show Thumbnails.

### Preview image generation impacts save performance

Preview images are created whenever InDesign saves a document, which can add unnecessary time to saves and increase file size.

Choose Edit > Preferences > File Handling (Windows) or InDesign > Preferences > File Handling (macOS).

Clear Always Save Preview Images With Documents.

Choose OK.

Choose File > Save, then compare the save speed.

### Live Screen Drawing settings affect screen updates

Choose Edit > Preferences > Interface (Windows) or InDesign > Preferences > Interface (macOS).

In the Live Screen Drawing drop-down menu, choose Never, Immediate, or Delayed. With Delayed, the display refreshes after a short pause; with Never, redraw happens only after the mouse button is released.

### Live preflight consumes system resources

Live preflight checks document content continuously in the background against the active preflight profiles, using system resources while you edit. For final-output checks, turn it On only when needed instead of leaving it enabled for the whole editing session.

Choose Window > Output > Preflight.

In the Preflight panel, clear On to disable live preflight.

As another option, open the profile dropdown and select a minimal profile that has fewer rules.

### Corrupt preferences

Damaged preference files can lead to unexpected behavior and slower performance.

Choose Edit > Preferences > General (Windows) or InDesign > Preferences > General (macOS).

Choose the Reset Preferences on Quit button.

In the confirmation dialog box, choose OK.

Choose OK again to close the Preferences dialog box.

Quit InDesign, wait briefly, and launch it again.

Preference resets remove custom settings, keyboard shortcuts, and workspace configurations. If possible, record your customizations before performing the reset.

### Driver conflicts or hardware incompatibilities with GPU

Graphics Processing Unit (GPU) acceleration can run into driver conflicts or hardware incompatibilities, causing display lag or rendering delays. Review GPU performance in InDesign to see when GPU acceleration helps your workflow.

Choose InDesign > Preferences > GPU Performance.

Clear GPU Performance to use CPU rendering.

Choose OK, then restart InDesign.

Check document performance. If it improves, look for graphics driver updates from the computer manufacturer.

### Corrupt fonts

Text rendering and menu display can slow when font files are corrupted, too many fonts are installed, or font cache files are damaged.

Close InDesign and all Adobe applications.

Use a font management utility or the operating system font folder to find recently installed or suspicious fonts.

Temporarily disable or remove fonts that are not essential.

On macOS, clear the font cache with a utility such as Font Book; on Windows, restart the system.

Open InDesign and test performance.

Turn fonts back on gradually so you can isolate problematic typefaces.

### Damaged application files or incomplete updates

When application files are damaged or updates are incomplete, core functionality can be corrupted and a full removal followed by a fresh installation may be required.

Download and run the Adobe Creative Cloud Cleaner Tool.

In the product list, choose InDesign, then choose Clean All.

Remove InDesign preference folders manually from these locations:

Windows:

- C:\Users\\AppData\Roaming\Adobe\InDesign\
- C:\Users\\AppData\Local\Adobe\InDesign\

macOS:

- ~/Library/Preferences/Adobe InDesign
- ~/Library/Caches/Adobe InDesign

Restart the computer.

Open Creative Cloud Desktop and reinstall InDesign from Apps.

Start InDesign with default settings.

## Damaged fonts crash errors

Resolve Adobe InDesign crashes at startup or while working with documents when corrupted or incompatible font files are the cause.

Corrupted or incompatible font files can make InDesign crash during launch, document opening, scrolling, exporting, printing, and similar actions. These failures often happen because fonts do not load or process correctly.

### Fonts with special characters or corrupted metadata

Use Control Panel > Appearance and Personalization > Fonts (Windows), or open Font Book from Applications (macOS).

Look for fonts whose names contain special characters or symbols.

Temporarily remove those fonts.

Restart InDesign and check stability.

Enable fonts one by one to find the problematic ones.

Replace problematic fonts with clean copies from the original source.

If removing fonts with special characters does not stop the crash, the cause may be third-party plugins. Third-party font management plugins can interfere with native font handling during startup or font activation.

### Third-party font management plugins conflict with InDesign

Go to C:\Program Files\Adobe\Adobe InDesign [version]\Plug-Ins (Windows) or /Applications/Adobe InDesign [version]/Plug-Ins (macOS).

Create a desktop folder named Disabled Plugins.

Move non-Adobe font plugins into this folder.

Restart InDesign and test stability. If the crash stops, turn plugins back on individually to find the problematic one, then ask the plugin vendor for updates. If crashes continue after the plugins are removed, clear the system font cache. Corrupted font cache files can keep InDesign from reading font metadata correctly.

### Corrupted font cache files prevent fonts from loading correctly

### Windows

Quit every Adobe application.

Use Windows + R, enter services.msc, and press Enter.

On Windows Font Cache Service, right-click and select Stop.

From C:\Windows\ServiceProfiles\LocalService\AppData\Local, delete the FontCache folder.

Start Windows Font Cache Service again, then restart Windows.

### macOS

Close all Adobe applications.

From the locations below, remove folders whose names begin with com.apple.FontRegistry or com.adobe.FontCache:

- ~/Library/Caches
- /Library/Caches

Restart the system.

### Corrupt fonts

Leave the problematic font disabled in the font management utility.

Open the affected document in InDesign.

When the missing-font prompt appears, choose OK.

Choose Type > Find/Replace Font.

In the Font Information list, choose the missing font.

In the Replace With section, pick a replacement font and style.

Choose Change All, then choose Done.

## Corrupt VCRuntime crash error

Corrupted VCRuntime files after a Windows update can prevent InDesign from launching or can crash it during startup.

InDesign 2020 and later can fail to open on Windows because Microsoft Visual C++ runtime (VCRuntime) files are corrupted, often following faulty Windows updates. In this condition, InDesign usually crashes right away at startup with a system error message before the splash screen appears, so documents cannot be opened.

### Corrupted Visual C++ runtime files prevent InDesign from launching

Fix this launch problem by repairing the installed VC runtime. Close every application on the system before starting.

Resolve the InDesign startup error.

Resolve the InDesign startup error.

Open Control Panel > Programs > Programs and Features.

For each installed Microsoft Visual C++ Redistributable package (x64 and x86), open the context menu.

Choose Change > Repair when Change is offered, then follow the repair prompts for Microsoft Visual C++ Redistributable.

Restart the system, then open InDesign again.

If the problem continues, get the latest VCRuntime from the Microsoft support site and run through steps 1-4 again.

## Crash during print setup on Windows

Review why Adobe InDesign can crash during printer setup with certain printer configurations.

On Windows, Adobe InDesign can close unexpectedly while you open printer settings or try to print a document. The behavior appears only in some situations, especially with particular printer models and cloud-sync file setups.

At present, outdated drivers have been tied to this problem for these printers:

- Konica Minolta
- Canon ColorPass
- LANIER

When your printer is different, or when current drivers for one of the listed printers do not fix the crash, send these details so the issue can be investigated further:

- Which printer driver is installed, plus the printer setup details.
- Whether the printer is configured as local, network, or wireless.
- Whether this printer is configured as your default printer.

Send the information to sharewithID@adobe.com.

InDesign print handling can conflict with the default printer setup, especially when the printer is reached over network or wireless links that add protocol mismatches or communication delays.

## Crash while working with remote libraries

Fix Adobe InDesign crashes that occur with remote libraries kept on a network drive or shared location.

While you use library files (.indl) from a network drive or shared location, InDesign can stop responding or crash. The failure most often appears when you open a library, drag an item, or work with library content that is being read from remote storage.

### Corrupted local cache files disrupt access to network-stored libraries

Quit InDesign.

Open File Explorer (Windows) or Finder (macOS).

In Windows, choose View > Show > Hidden items; in macOS, choose Go > (hold Option) > Library.

Browse to the Adobe InDesign cache location, such as AppData on Windows or Caches on macOS.

Find the InDesign cache files and delete them.

Restart your system.

Open InDesign again and confirm whether the problem is fixed.
