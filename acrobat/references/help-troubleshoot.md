# Performance Issues, Pdf Viewing Editing Issues, Print Scan Issues

> Adobe Acrobat reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Troubleshoot; Adobe Acrobat crashes; AcroCEF and RdrCEF process error; Acrobat is not responding and shows a running instance error; Acrobat failed to load core DLL; Applications crash on ARM64-based Windows devices; AI Assistant or Generative summary show errors; AI Assistant doesn’t appear in Acrobat; Acrobat crashes on macOS; Unable to fill forms in Acrobat; Unable to edit XFA forms; Can't enable forms for Acrobat Reader users; Markup and tracked changes not exported from Word to PDF; Error when deleting pages in PDFs; Adobe PDF Printer is missing from the printer list; Error while printing PDFs in Acrobat; Unable to connect to the scanner; Negative image while scanning with Acrobat.

## Troubleshoot

### Install and update issues

Error while updating Acrobat on Windows

Unable to download and install Adobe Acrobat Reader

Acrobat Reader updates not applied on Windows

Acrobat installation errors

Acrobat shows sign-in errors

### Performance issues

Adobe Acrobat crashes

AcroCEF and RdrCEF process error

Acrobat is not responding and shows a running instance error

Acrobat failed to load core DLL

Applications crash on ARM64-based Windows devices

AI Assistant or Generative summary show errors

AI Assistant doesn’t appear in Acrobat

Acrobat crashes on macOS

### PDF viewing and editing issues

Unable to fill forms in Acrobat

Unable to edit XFA forms

Can't enable forms for Acrobat Reader users

Markup and tracked changes not exported from Word to PDF

Error when deleting pages in PDFs

### Print and scan issues

Adobe PDF Printer is missing from the printer list

Error while printing PDFs in Acrobat

Unable to connect to the scanner

Negative image while scanning with Acrobat

Error while scanning files in Acrobat

Known and fixed issues in Adobe Acrobat

Acrobat compatibility warning for Rosetta on Mac with Apple Silicon

## Adobe Acrobat crashes

Here's how to pin down and resolve the crashes that commonly hit Adobe Acrobat.

A range of causes can bring Acrobat down, among them broken plug-ins, damaged files, or clashes with your system settings.

Quick preliminary checks

Run through these basics before you move on to other causes and fixes:

- Bring Acrobat and your operating system up to their newest versions. For OS updates, see the official Windows Update Guide or macOS Update Guide.
- Reboot the machine, then start Acrobat again.

Should Acrobat keep crashing, pick your OS, pin down which crash scenario applies, and work through the step-by-step fixes.

## AcroCEF and RdrCEF process error

Here's how to sort out trouble with the key background processes that Adobe Acrobat and Acrobat Reader rely on.

Network features like Fill & Sign, Send for e-signature, and Share for review run on the AcroCEF.exe and RdrCEF.exe processes. An error dialog can surface while you use those services whenever the processes misbehave.

### Windows

Close Acrobat or Acrobat Reader.

To bring up Task Manager, press Ctrl + Alt + Delete.

On the Processes tab, track down every instance of AcroCEF.exe and RdrCEF.exe and end them.

Shut Task Manager, then start Acrobat again.

### macOS

Close Acrobat or Acrobat Reader.

Go to Finder > Applications > Utilities > Activity Monitor.

Highlight all of the AcroCEF and RdrCEF processes and quit them.

Start Acrobat again.

### Insufficient folder permissions

Review each path listed here and make sure your user account holds the rights to open and change those folders.

### For Adobe Acrobat

Windows: C:\Program Files\Adobe\Acrobat DC\Acrobat\WebResources

macOS: /Library/Application Support/Adobe/Acrobat/DC/WebResources

### For Acrobat Reader

Windows: C:\Program Files\Adobe\Acrobat Reader\WebResources

macOS: /Library/Application Support/Adobe/Acrobat Reader/DC/WebResources

### Antivirus software causes performance issues

Certain antivirus tools can keep Acrobat from running as it should, so make sure yours is current.

- When the trouble continues, switch your antivirus off for a moment as Acrobat launches.
- Once it launches, list Acrobat as an exception within your security software's settings.

To keep your machine protected, switch the antivirus back on once you've finished testing.

### Corrupt installation file

### Windows

Launch Acrobat.

Go to Menu > Help > Repair installation.

Work through the on-screen steps to repair the files.

Reboot the machine once the repair finishes.

### macOS

Launch Acrobat.

Go to Help > Check for updates.

Work through the on-screen steps to repair the files.

Reboot the machine once the repair finishes.

### Damaged app files

### Windows

With the Adobe Cleaner Tool, remove Acrobat along with the Creative Cloud desktop app.

Reboot the machine.

Grab the Acrobat 64-bit Installer and launch it from your notifications or the Downloads folder.

Double-click the file you downloaded, then choose Run.

Work through the on-screen steps to install Acrobat.

### macOS

With the Adobe Cleaner Tool, remove Acrobat along with the Creative Cloud desktop app.

Reboot the machine.

Grab the Acrobat Unified Installer file and launch it from your notifications or the Downloads folder.

To mount the Acrobat installer volume, double-click the downloaded .dmg file.

Work through the on-screen steps to install Acrobat.

## Acrobat is not responding and shows a running instance error

### On Windows, here's how to deal with a running instance error in Adobe Acrobat.

This error can pop up when you go to open a PDF or run a tool while a second copy of Acrobat is already active on Windows:

A running instance of Acrobat has caused an error

### Unresponsive background processes

Close Acrobat.

To bring up Task Manager, press Ctrl + Shift + Esc.

On the Processes tab, find Adobe Acrobat listed beneath Apps and Background Processes.

For each Adobe Acrobat process, right-click it and pick End task.

Shut Task Manager, then start Acrobat again.

### Incorrect registry entry

Close Acrobat.

To open Run, press Windows + R.

Enter regedit, then press Enter.

Go to `HKEY_CLASSES_ROOT`\acrobat\shell\open\ddeexec\application

Right-click the application folder, choose Export, and save the backup file.

In the right pane, double-click Default. Inside the Value data field, switch the value from:

AcroViewA20 to AcroViewR20

Choose OK and shut the Registry Editor.

Start Acrobat again.

### Outdated Acrobat version

Launch Acrobat.

From the menu, choose Menu > Help > Check for updates.

Apply whatever updates are offered, then relaunch Acrobat.

### Corrupt installation file

Launch Acrobat.

From the menu, choose Menu > Help > Repair installation.

Let the on-screen prompts walk you through repairing the files.

Once the repair finishes, reboot the machine.

## Acrobat failed to load core DLL

### Steps for diagnosing the case where Adobe Acrobat cannot load its core file.

Several conditions can trigger this fault: a DLL that is absent or damaged, mismatched versions, an installation path that points to the wrong place, or system permissions that are locked down. The message you'll see reads:

Acrobat failed to load its core DLL

### Corrupted or missing DLL files

Go to Control Panel > All Programs.

Right click Adobe Acrobat and select Repair.

Work through the on-screen prompts.

When the repair wraps up, restart the computer.

### Protected mode is turned on

Launch Acrobat.

Choose Menu > Preferences.

Under Categories, pick Security (Enhanced).

Within Sandbox Protections, clear the Enable Protected Mode at startup checkbox.

Acknowledge the prompt that appears and click OK.

### Corrupted application files

With the Adobe Cleaner Tool, remove both Acrobat and the Creative Cloud desktop app.

Reboot the computer.

Grab the Acrobat 64-bit Installer, then launch it either from your notifications or out of the Downloads folder.

Double-click the file you downloaded and choose Run.

Let the on-screen prompts carry you through installing Acrobat.

### Unsupported installation location

The local system drive is the only supported home for Acrobat. Putting it on a mapped or network drive isn't supported and tends to produce DLL loading errors.

## Applications crash on ARM64-based Windows devices

Steps for clearing crashes that trace back to Visual C++ runtime faults on ARM64 Windows hardware.

When AMD64 runtime files land on an ARM64 Windows device by mistake, certain applications can crash. Following an install or an update, those applications might throw errors and flag the Visual C++ runtime as missing or invalid.

### Incorrect Visual C++ runtime files cause applications to crash

Grab the Visual C++ Runtime repair tool ZIP and unpack it.

Download ZIP

Right-click FixVCRuntime.exe and select Run as administrator.

Hold on until the repair has finished.

Reboot the computer once everything wraps up.

What the tool does

- Confirms the machine is Windows running on ARM64 architecture.
- Looks through the Windows System32 directory for AMD64 builds of the Microsoft Visual C++ runtime libraries (version 14.44.35211.x).

  - Saves a local backup of the affected DLLs before touching anything​
  - Strips the wrong AMD64 files out of the system directory​
  - Lays down the proper ARM64 Visual C++ runtime package by way of Microsoft's official redistributable

- Double-checks the cleanup, then clears out on its own the temporary files used while repairing.
- Records every operation to a file dropped beside the executable (FixVCRuntime.log).

When to use this tool

Reach for this tool only when:

- Your machine is an ARM64-based Windows device, for instance the Surface Pro X or Lenovo ThinkPad X13s.
- Following an install or update, Acrobat or other applications flag the Visual C++ runtime as missing or invalid.
- Adobe Support or your IT administrators have told you to repair the Visual C++ runtimes.

Safety and validation

- Only the Microsoft Visual C++ runtime files confirmed to be wrong for the AMD64 architecture on ARM64 systems get touched by the tool.
- Every affected file is backed up by the tool ahead of removal.
- What ships inside is the unaltered, digitally signed Microsoft Visual C++ Redistributable package.
- Nothing else across your system or applications is altered.

Log file

The tool drops a log file into the same directory as the executable (for example, C:\Users<User>\Downloads\FixVCRuntime.log). Inside you'll find precise timestamps covering detected files, backup steps, and installer outcomes. Should support ask for it, you can hand over this log to confirm the repair went through.

Version information

Component

Description

Tool name

FixVCRuntime.exe

Purpose

Repair Visual C++ runtime corruption on ARM64 systems

Requires

Administrator privileges

Supported OS

Windows 11 ARM64, Windows 10 ARM64

Distributed by

Adobe Systems (Internal Support Tool)

| --- | --- |

Note: Point this utility at a non-ARM64 or unsupported system and nothing happens. Use it only when Adobe Support or your IT administrators direct you to.

## AI Assistant or Generative summary show errors

Steps for clearing the common errors that crop up with the AI Assistant and Generative summary tools in Acrobat.

Now and then, while you're using AI Assistant or a Generative summary in Acrobat, errors can surface that stop these features from behaving the way they should. Run into errors, partial responses, or blocked access? Walk through the causes and fixes below to sort the problem out.

### PDF doesn’t meet the requirements

The file falls short of what the generative AI features require.

Go over the technical requirements that the generative AI features depend on.

Confirm the PDF is free of corruption, damage, or restrictions.

Switch to a different PDF that satisfies the requirements.

### Temporary processing delays

Heavy use of the generative AI features, or a spike in overall demand at that moment, can briefly leave Acrobat unable to handle requests.

Give it a few minutes.

Once some time has passed, take another run at the generative AI features.

### Incorrect or low-quality answers

Now and then the answers you get back can mislead or come up short. Anything generated outside the supported languages happens by accident and isn't what AI Assistant is meant to do.

Restate the question in plain, straightforward terms and supply extra context where it helps.

Look over the results before you put them to use in your document.

### Session not valid

Your session is no longer valid.

Reload the page.

Restore access by signing out of Acrobat and then signing back in.

### Older app versions

The generative AI features aren't supported on out-of-date Acrobat apps. Move up to the newest version:

- Windows users: Menu > Help > Check for updates.
- On a Mac, the path is Help > Check for updates.

See how to update Acrobat by hand.

Tip

Should a message tell you the feature isn't available, double-check whether generative AI is supported for your account, locale, or region. Read more on the reasons AI Assistant may be absent from Acrobat.

## AI Assistant doesn’t appear in Acrobat

Steps for resolving cases where the generative AI features go missing or aren't available in Acrobat.

On occasion, the AI Assistant features fail to load, sit disabled, or throw an error while a PDF is being analyzed.

### Plan doesn’t include generative AI features

Log in with the Adobe ID tied to a plan that bundles generative AI.

Verify that generative AI features are covered by your plan.

On an enterprise account, reach out to your IT administrator to confirm generative AI is switched on for your organization.

### Acrobat isn't updated

Move Acrobat up to the newest version. See how to update Acrobat by hand.

After the update, relaunch the application.

Give the generative AI features another try.

Tip

Confirm your internet connection so that Acrobat is able to reach its online services.

### Classic Acrobat doesn’t support generative AI

Switch on the new Acrobat experience:

- Windows users: Menu > Enable new Acrobat.
- On a Mac: View > Enable new Acrobat.

### PDF is incompatible with generative AI features

Confirm your PDF carries no password protection and no usage restrictions.

Check that what you're working with isn't a PDF portfolio.

### Language support isn't available

A supported application locale is a prerequisite for the generative AI capabilities. Find out which languages the GenAI features cover.

Verify what locale your application is currently set to.

Move over to a locale that is supported. See the steps for changing the Acrobat language.

## Acrobat crashes on macOS

Fix the problem of Acrobat quitting unexpectedly at launch under macOS.

Following the June 2026 update on macOS, Adobe Acrobat can quit unexpectedly the moment it opens or while users run tasks like PDF editing. The usual culprit is a damaged set of installation files.

### Corrupted or outdated installation files

Grab the Acrobat Cleaner Tool.

Use the Acrobat Cleaner Tool to clear out whatever Acrobat installation is already present.

Once the cleanup finishes, reboot your Mac.

Pick the newest Acrobat installer matching your macOS and pull it down to your machine.

Open the installer and proceed to install Acrobat.

After the install wraps up, start Acrobat and confirm the app comes up without trouble.

## Unable to fill forms in Acrobat

### Learn what to do when you can't fill out PDF forms in Adobe Acrobat.

### Form is non-interactive

Bring up the PDF form inside Acrobat or Acrobat Reader.

As your cursor passes over the form fields, watch for blue highlighting on them.

A form whose fields stay unhighlighted is likely not interactive.

Select All tools > Fill & Sign.

Add your details by hand with the text and checkmark tools.

### Windows

Bring up the PDF inside Acrobat or Acrobat Reader.

Select Menu > Document properties > Security.

Confirm that Filling of form fields is set to Allowed.

When it isn't allowed, reaching out to the person who built the form for an unrestricted copy may be necessary.

### macOS

Bring up the PDF inside Acrobat or Acrobat Reader.

Select File > Document properties > Security.

Confirm that Filling of form fields is set to Allowed.

When it isn't allowed, reaching out to the person who built the form for an unrestricted copy may be necessary.

## Unable to edit XFA forms

### Learn how to work with XFA forms that can't be directly edited in Adobe Acrobat.

The structure, layout, and behavior of an XFA form are defined by the XML data it holds. Direct editing of that XML data isn't something Adobe Acrobat Pro (version 2020 and later) can do.

Two workarounds let you alter an XFA form inside Acrobat Pro: write the form out as a PostScript file, or send it to print as an Adobe PDF. Neither workaround covered here works in Acrobat Standard or Acrobat Reader.

Caution

Applying one of these workarounds to an XFA form in Acrobat flattens the resulting PDF or form, stripping out every form field, layer, interactive object, button, and JavaScript.

### Save as Encapsulated PostScript (EPS) file

### Windows

Bring up the XFA form in Acrobat.

Select Menu > Save As.

For the file type, choose Encapsulated PostScript (\*.eps).

Choose where to put the file, then select Save.

Reopen the saved file in Acrobat to edit its content.

### macOS

Bring up the XFA form in Acrobat.

Select File > Save As.

For the file type, choose Encapsulated PostScript (\*.eps).

Choose where to put the file, then select Save.

Reopen the saved file in Acrobat to edit its content.

### Print to Adobe PDF

### Windows

Bring up the XFA form in Acrobat.

Press Ctrl + P.

From the Printer drop-down menu, choose Adobe PDF.

Select Print.

Give the new PDF a name and choose where it should go.

Select Save.

### macOS

Bring up the XFA form in Acrobat.

Press command + P.

From the Printer drop-down menu, choose Adobe PDF.

Select Print.

Give the new PDF a name and choose where it should go.

Select Save.

## Can't enable forms for Acrobat Reader users

### Learn what to do when you are unable to enable forms for Adobe Acrobat Reader users.

### Incompatible Acrobat version

Adobe Reader offers no way to enable forms. Filling in and saving Reader-enabled forms calls for Acrobat Pro, Pro Extended, or Standard (version 8 or later) on your end, while the people receiving them need Acrobat Reader version 8 or later.

### Windows

Bring up the form in Acrobat.

Select Menu > Document properties.

Select the Security tab.

Within the security settings, confirm that Filling of form fields is allowed.

### macOS

Bring up the form in Acrobat.

Select File > Document properties.

Select the Security tab.

Within the security settings, confirm that Filling of form fields is allowed.

## Markup and tracked changes not exported from Word to PDF

See how to fix tracked changes going missing when you export PDFs out of Microsoft Word with PDFMaker on Windows.

As of December 2025, PDFs that PDFMaker exports from Word leave out tracked changes and comments no matter how the markup is configured in Word's Review tab. Even with markup showing in Word, the PDF comes out as clean content.

### PDFMaker exports PDFs without markup by default

Note

Inside Microsoft Word, go to Acrobat > Preferences > Word and verify that Convert displayed comments to notes in Adobe PDF stays unchecked.

To carry markup over into exported PDFs:

Press Win + R to open the Run dialog box.

Type regedit and press Enter.

Navigate to: `HKEY_CURRENT_USER`\Software\Adobe\Adobe Acrobat\DC\PDFMaker\Word

Tip

Swap DC for whatever Acrobat version you run, if it differs.

In the right pane, right-click and select New > DWORD (32-bit) Value.

Name the new value: bEnableMarkupExport.

Double-click the new value and set it to 1.

Select OK and close Registry Editor.

Restart Microsoft Word.

Once those steps are done, PDFMaker carries the markup through when it exports PDFs from Word.

## Error when deleting pages in PDFs

See what steps to take when Adobe Acrobat won't let you delete pages.

Trying to remove one or more pages in Adobe Acrobat can surface this error:

One or more pages are in use and could not be deleted.

This error can show up even with every tab closed, and reinstalling Acrobat may not clear it.

### Assistive technology support is turned on

When assistive technology support is enabled under Accessibility preferences, Acrobat may scan images or documents embedded inside the PDF. That background scan holds the affected pages in memory, which blocks them from being deleted.

The steps below let you switch the setting off:

Select Menu > Preferences (Windows) or Acrobat > Preferences (macOS).

From the left panel, select Accessibility.

Deselect Enable assistive technology support.

Select OK.

## Adobe PDF Printer is missing from the printer list

See how to resolve the Adobe PDF Printer going missing after you install Adobe Acrobat on Windows.

### Adobe PDF Printer is not installed

Select Start > Control Panel > Devices and Printers.

Select Add a printer.

In the Add a Device dialog, select The printer that I want isn’t listed.

Select Add a local printer or network printer with manual settings.

Select Use an existing port, then select Documents\*.pdf (Adobe PDF) from the drop-down list and select Next.

Select Have Disk > Browse.

Go to the location C:\Program Files (x86)\Adobe\Acrobat <version>\Acrobat\Xtras\AdobePDF, pick AdobePDF.inf, and then select Open.

Out of the Adobe PDF Converters list, pick the converter matching your Windows version, then select Next.

Note

When you're not certain which option is right, begin at the top of the list and move downward, selecting Next on each one until the printer installs.

Select Next, label the printer Adobe PDF, and let the on-screen prompts walk you through the rest.

## Error while printing PDFs in Acrobat

### Learn how to troubleshoot printing errors in Adobe Acrobat.

### Acrobat isn't updated

Open Acrobat.

Select Menu > Help > Check for updates (Windows) or Help > Check for updates (macOS).

Put on any available updates and restart Acrobat.

### Printer connection or hardware issue

Confirm the printer is wired to your machine through a USB cable that is seated firmly, then run off a test page. Should the printer give no response, recheck that the cable sits snugly in both ends. Plugging the printer straight into one of the computer's USB ports, rather than routing it through a USB hub, tends to give you steadier results.

When the trouble continues, power the printer down, leave it off for roughly 30 seconds, and switch it on again. A cycle like this clears the printer's internal state and clears up small hiccups more often than not. With that done, send your PDF to print once more. Routine checks of this kind tend to clear the usual connection snags and confirm the hardware is behaving as it should.

### Outdated drivers

Make sure the printer is running its newest software. Head to the website of whoever makes your printer and find the drivers area. Look up the most recent drivers that match your exact model and download them. With the download finished, put those refreshed drivers onto your computer. Reboot the machine afterward, open Adobe Acrobat, and try reaching the printer once more.

### Printer-specific issue

Sending a job to a separate printer is a quick way to tell whether the fault lies with the device you are using. If a second printer is on hand, swap over to it. To change the default printer:

- Windows: Change the default printer – Microsoft Help
- macOS: Change the default printer – Apple Support

### Corrupt or problematic PDF file

### Print as image

Open Acrobat.

Select Print this file from the top bar.

In the Print dialog box, select Advanced.

Select Print as Image.

Select OK and then select Print.

### Download or copy the PDF again

Write the PDF straight to your local hard drive instead of a USB stick or a network location. Bring that saved PDF up in Acrobat and print it.

### Save As a new copy

Open Acrobat.

Select Menu > File > Save As (Windows) or File > Save As (macOS).

Rename the file using only letters and numbers.

Open the saved file in Acrobat.

Select Print this file from the top bar.

Select Print.

### Check syntax issues with Preflight

Open Acrobat.

Select All tools > Use print production.

Select Preflight.

In the Find bar, type syntax.

Select Report PDF syntax issues, then select Analyze and fix.

## Unable to connect to the scanner

Find out how to work past the error that shows up when Adobe Acrobat is unable to reach the scanner.

### Loose or disconnected cables

Check that the scanner has power and that its USB cable is plugged firmly into the computer. Often, just unplugging the USB cable and plugging it back in is enough to fix a faulty connection.

- Should another program on your system be able to drive the scanner, give it a try there.
- When the scanner itself looks to be at fault, reach out to its manufacturer for help sorting it out.

### Software conflicts at startup

### Windows

Press Windows + R, type msconfig, and press Enter.

In the System Configuration Utility, select the Startup tab.

Select Disable All, then select OK.

Restart your computer and relaunch Acrobat.

### macOS

Open System Settings > General > Login Items.

In the Open at Login section, select the unused app, such as utility software, antivirus programs, or program updaters, and then select the - icon to disable the app.

In Allow in the Background, turn off unnecessary apps.

Restart your computer and relaunch Acrobat.

### Outdated scanner drivers

Be sure the scanner has its newest software loaded. Go to the website of the company that built your scanner and open the drivers area. Track down the latest drivers that fit your particular scanner model and download them. After the download, install those updated drivers on your computer. Once that finishes, reboot the machine, start Adobe Acrobat, and have another go at connecting to the scanner.

### Incompatible scanner driver

Switching driver options is one way to clear up a breakdown in communication between Acrobat and your scanner. Under Windows, flip between the TWAIN and WIA drivers on Acrobat's scanner selection screen and see which works. On macOS, Acrobat leans on ICA drivers, and you pick those from the same scanner selection screen.

## Negative image while scanning with Acrobat

### Find out how to correct the problem where a document scanned through Adobe Acrobat comes out inverted or as a negative.

### Invert image setting is turned on

Open Acrobat and select Create.

Select Scanner.

In the Scanner options, deselect Invert Black and White Images.

Scan the document again.

## Error while scanning files in Acrobat

### Find out how to clear the color-format error that Acrobat reports.

Creating a PDF through Acrobat's scanner option can bring up this message:

The selected color format is not supported

The cause is usually a scanner driver that is out of date or incompatible, or a breakdown in communication between Acrobat and the scanner.

### Outdated scanner drivers

Be sure the scanner is running its most current software.

Go to the website of your scanner's manufacturer and open the drivers area.

From that manufacturer's site, look up and download the newest drivers for your scanner.

After the download, install those updated drivers on your computer.

Once the install wraps up, reboot your machine.

Start Acrobat again and scan your file.
