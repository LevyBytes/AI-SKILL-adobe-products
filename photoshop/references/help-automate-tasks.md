# Create Record Actions, Process A Batch Of Files, Automation Settings And Presets

> Adobe Photoshop reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Automate tasks; Record an action; Record a path; Insert a stop; Change settings when playing an action; Exclude commands from an action; Insert a non-recordable menu command; Overwrite a single command; Add commands to an action; Rearrange commands within an action; Record an action again; Image Processor overview; Convert files with the Image Processor; Batch-process files; Create a droplet from an action; Batch and droplet processing options; Overview of Actions; Use the Actions panel.

## Automate tasks

### Create and record actions

Record an action

Record a path

Insert a stop

Change settings when playing an action

Exclude commands from an action

Insert a non-recordable menu command

Overwrite a single command

Add commands to an action

Rearrange commands within an action

Record an action again

### Process a batch of files

Image Processor overview

Convert files with the Image Processor

Batch-process files

Create a droplet from an action

Batch and droplet processing options

### Automation settings and presets

Overview of Actions

Use the Actions panel

Apply actions in the Actions panel

## Record an action

Action recording in Adobe Photoshop captures repeatable steps so routine work can be replayed instead of rebuilt.

Photoshop records an action as a sequence of steps that can be played later for automation. Tool operations, including brush strokes, can also be included when tool recording is enabled in the Actions panel.

Select Windows > Action.

Open the Actions panel menu and select New Action.

In the New Action dialog box, configure these options:

- Name: Enter the action name.
- Set: Choose the Set you created; when you do not choose one, Default Actions remains selected.
- Function Key: Set a shortcut such as Ctrl + Shift + F3 (Windows) or Command + Shift + F3 (macOS). Ctrl with F1 is not available on Windows. If another command already uses the shortcut, the action runs in place of that original command.
- Color: Choose the color shown in Button mode.

Select Record.

Run the commands and operations that belong in the action. For steps that cannot be recorded directly, choose commands from the Actions panel menu.

Use the Stop, Record, Play button to run actions.

Use the Stop, Record, Play button to run actions.

Choose Stop Playing/Recording to finish.

Tip

Choose Create new set to make a folder for storing and organizing recorded actions.

## Record a path

Use Insert Path in Adobe Photoshop when an action needs to contain a detailed path.

The Insert Path command adds a complex path, such as one made with the Pen tool, to an action. During playback, Photoshop assigns the work path to the recorded path. Add the path while recording, or insert it after the action already exists.

### Record a path in an action

Begin recording an action.

Choose an existing path in the Paths panel.

In the Actions panel, choose the menu icon > Insert Path.

Note

When an action needs several paths, save each path immediately after adding it. After every Insert Path step, record a Save Path step in the Paths panel so the previous path is not replaced.

## Insert a stop

Add stops to Adobe Photoshop actions when playback must pause for work that cannot be captured.

Stops pause an action for unrecordable work, such as painting. After completing that work, choose Play in the Actions panel to continue the action.

To place a stop at the action's end, select the action name; to place it after a step, select that command.

From the Actions panel menu, select Insert Stop.

Enter the message to display.

Select OK.

Note

A stop can be added during action recording or to an action that was already recorded.

Tip

The stop can show a brief reminder message. Add a Continue button to the message box when no manual task is needed.

## Change settings when playing an action

Modal controls in Adobe Photoshop actions let playback pause so individual command settings can be changed.

Add a modal control when a step needs user-adjusted settings during playback. While the action runs, Photoshop opens the command options for that step.

In the Actions panel, find the command that should pause.

Enable modal control by selecting the box beside the command name. Use the modal button to toggle whether default settings can be changed.

Use the modal button to toggle whether default settings can be changed.

At the pause, update the settings shown in the dialog box.

Use Enter (Windows) or Return (macOS) to resume action playback.

## Exclude commands from an action

Prevent selected Adobe Photoshop action commands from running during playback.

Mark commands as excluded when they should be skipped by an action.

Expand the action in the Actions panel so its command list is visible.

Remove the check mark beside the command to exclude.

## Insert a non-recordable menu command

Add non-recordable menu commands to an Adobe Photoshop action so they can run during playback.

Insert Menu Item adds menu commands that direct recording cannot capture into an action. The inserted commands run only during playback; if one opens a dialog box, playback waits until OK or Cancel is chosen.

Choose the action or command in the Actions panel where the menu item should be placed.

Choose Insert Menu Item from the Actions panel menu.

When the Insert Menu Item dialog box opens, go to the needed menu, such as File, Edit, or Image, and choose the command.

Select OK.

## Overwrite a single command

Edit an existing Adobe Photoshop action command.

In the Actions panel, double-click the command that needs new settings.

Change the settings in the dialog box.

Select OK.

## Add commands to an action

Add more commands to an Adobe Photoshop action.

In the Actions panel, select the action name when the new commands should go at the end, or select a specific command when they should be inserted after that step.

Select Begin Recording in the Actions panel.

Run the commands to include while recording is active.

Select Stop Playing/Recording in the Actions panel.

## Rearrange commands within an action

Reorder commands inside an Adobe Photoshop action.

In the Actions panel, expand the action so its commands are visible.

Drag the command into its new location within the same action or into a different action.

Release the mouse button when the highlighted line appears at the target position.

## Record an action again

Re-record an Adobe Photoshop action when its captured steps need to be replaced.

In the Actions panel, choose the action to record again, then choose Record Again from the panel menu.

If the modal tool appears, make a different result and press Enter (Windows) or Return (macOS) to record it, or leave the same settings in place.

Set options in the dialog box and choose OK to record them, or choose Cancel to keep the existing values.

Note

Photoshop saves recorded and installed actions by default in the Actions Palette.psp file inside the Photoshop preferences folder. Export recorded action (.atn) files when you need an archive or a shareable copy.

## Image Processor overview

### Process many files at once in Adobe Photoshop without building an action.

The Image Processor (File > Scripts > Image Processor) converts files in one operation and handles routine batch work through a simple interface. Unlike the Batch command, it does not require an action.

With the Image Processor, you can:

- Save a group of files as JPEG, PSD, TIFF, or all three formats at the same time.
- Process camera raw files with the same options.
- Constrain resized images to chosen pixel dimensions.
- Store a color profile, or convert files to sRGB before saving JPEG images for the web.
- Add copyright metadata to the converted images.

## Convert files with the Image Processor

Batch-convert, resize, and save groups of files in Adobe Photoshop while choosing format, color, and metadata settings.

Select File > Scripts > Image Processor.

Choose images from currently open files, or include every subfolder in the selection.

(Optional) Select Open First Image To Apply Settings when the first image needs adjustment before the remaining files receive the same settings. For PSD or JPEG files, this option can convert the first image's color profile and reuse it across the full set. The Image Processor does not store these settings globally; they apply only to the chosen location. Camera RAW files keep their current settings unless you change them.

Pick where the processed files will be stored. Processed outputs receive unique names, so existing files are not overwritten.

Choose the destination for the processed files.

Select the file types and options:

- Save As JPEG: writes images as JPEG files inside a folder called JPEG in the destination folder.
- Quality: controls JPEG image quality from 0 through 12.
- Resize to Fit: scales the image within the Width and Height values you enter while preserving original proportions.
- Convert Profile To sRGB: changes the color profile to sRGB. To store the profile with the saved image, also select Include ICC Profile.
- Save As PSD: writes Photoshop-format files into a folder called PSD in the destination folder.
- Maximize Compatibility: includes a composite version of a layered image in the target file for applications that cannot read layered images.
- Save As TIFF: writes images as TIFF files inside a folder called TIFF in the destination folder.
- LZW compression: uses the LZW compression scheme when saving the TIFF file.

Set other preferences:

- Run Action: choose an action set and an action already loaded in the Actions panel to apply to each image.
- Copyright Info: add metadata or replace existing metadata.
- Include ICC Profile: attach the profile to the saved files.

Choose Run to start processing. The Image Processor builds JPEG, PSD, or TIFF file folders in the selected destination.

Tip

Choose Save to store the settings. To use them again, choose Load and select the saved file.

## Batch-process files

### Process multiple files at once in Adobe Photoshop, saving them to a chosen location or back to their source folders.

The Batch command runs an action over groups of files to automate repetitive editing. Large image sets can be handled in one workflow instead of step by step.

Select File > Automate > Batch.

In Set and Action, choose the action to run. If the action is not visible, load the correct set in the Window > Actions panel.

Choose source files from the Source dropdown menu:

- Folder: processes files in a selected folder; select Choose to locate it.
- Import: processes images from a camera, scanner, or PDF.
- Opened Files: processes every file currently open.
- Bridge: processes the Adobe Bridge selection, or uses every file in the current Bridge folder when nothing is selected.

Select Override Action "Open" Commands when the selected source files should replace the file recorded in the action.

Select Include All Subfolders to bring in files from nested folders under the chosen folder.

Select Suppress File Open Options Dialogs so camera raw processing uses default or previously chosen options without showing dialogs.

Select Suppress Color Profile Warnings to hide color policy messages.

Choose the save target from Destination:

- None: leaves processed files open.
- Save and Close: replaces the originals.
- Folder: stores output in a selected location.

Select OK to run the batch process. Check the destination folder, or the original files when Save and Close was selected, to confirm that everything was processed and saved correctly.

### Batch-process files in nested folders into different formats

To sharpen, resize, and save JPEGs back into their original folders, create an action for those steps first. Then run Batch with Include All Subfolders selected, Destination set to Save and Close, and Override Action “Save As” Commands selected.

Continue through Batch setup until you reach Destination.

Set Destination to Save and Close.

Use Override Action “Save As” Commands for these effects:

- Name output from the current document rather than from a filename captured in the Save As step.
- Save files in their original folders rather than the folder captured in the Save As step.

Confirm that the action contains a Save As step; otherwise Photoshop will not save files automatically.

Select OK to run the batch process.

## Create a droplet from an action

Droplets in Adobe Photoshop batch-process files after you drop them on an icon.

Build the action you want the droplet to run.

Select File > Automate > Create Droplet.

In the Save Droplet In section, select Choose and choose a location, such as your desktop.

Use Set to choose the action set, then use Action to choose the specific action.

Configure processing, saving, and file naming options.

Select OK to create the droplet. Photoshop puts the droplet icon in the location you specified.

Drop a file or folder on the droplet icon to launch the assigned Photoshop action automatically.

### Best practices for cross-platform droplets

- For droplets that need to work on Windows and macOS, create them with the EXE extension.
- On macOS, drag a Windows droplet onto the Photoshop icon to update it for use.
- Do not hardcode filenames in actions; a fixed filename can stop processing and ask for a filename.

## Batch and droplet processing options

Review Adobe Photoshop batch-processing options for sources, destinations, naming rules, and automated multi-file processing.

### Important notes about processing options

### Override Action "Open" Commands

When an action has an Open command for a saved file and this checkbox is left off, Photoshop returns to the recorded file after each source file and runs the action on that recorded file only. The Batch command always opens the file named inside the action, so the newest opened file becomes the target and the files you picked for the batch are not processed.

Use this option only with an action that contains an Open command. It replaces the recorded file selection only; all other Open settings remain in effect.

### Override Action "Save As" Commands

When this option is not enabled and the action contains a Save As command, Photoshop writes output to the action's recorded folder rather than to the Batch destination. If that Save As step also recorded a filename, each processed image is saved over the same file.

This option works only when the action includes a Save As step. Without that step, Batch does not save the output files. Only the filename and folder recorded by Save As are overridden; the rest of the Save As settings are kept.

For files that should keep their original names inside the Batch destination, record a Save As step in the action, enable Override Action 'Save As' Commands, and choose a destination folder. If you set renaming rules in the Batch dialog box but leave this option disabled, Photoshop creates two files: a renamed copy in the Batch folder and an original-name copy in the folder stored by the action.

Batch and Droplet dialog boxes do not expose every Save setting, including options such as JPEG compression or TIFF settings. To use those choices, record a Save As step with the needed settings in the action, then enable Override Action "Save As" Commands so Photoshop keeps those settings while saving into the folder you choose.

## Overview of Actions

Automate repeated editing work with Actions in Adobe Photoshop on desktop.

An action stores a recorded series of operations, including menu commands, tool use, and panel changes, and can then replay that sequence on one file or on many files. Example uses include enhancing colors, removing a background, increasing clarity, resizing for social media, or saving to chosen formats.

You can run actions unchanged, adjust them for your own workflow, or build custom actions for tasks you perform repeatedly.

## Use the Actions panel

Use the Actions panel when you need to edit existing actions or record new ones in Adobe Photoshop on desktop.

### Open the Actions panel and apply an action

Choose Window > Actions, or use the Actions panel flyout menu, to display the Actions panel.

Find the action you want in the panel, then select it to run it on the image.

Note

By default, Photoshop records an applied action as one History panel step, which lets you undo the full action in a single undo operation. Advanced workflows can disable that behavior.

### Edit an action

Choose Window > Actions to display the Actions panel.

Use the gear icon beside an action to show the steps inside it.

To change settings, select a step, or right-click an action and choose Edit Action.

Confirm the update with OK.

### Record an action

Open Window > Actions so the Actions panel is visible.

Use the Create new action icon.

Set these fields in the New Action dialog:

- Name: optionally enter a description of the action's purpose.
- Function Key: choose a keyboard shortcut for running the action.
- Thumbnail icon and color label: choose a thumbnail icon and attach a color label.

Select Record.

Carry out the operations that should become part of the action.

Select the Stop icon when recording is finished.

### Delete an action

Choose Window > Actions to display the Actions panel.

Right-click the action or action group, then choose Delete action.

Select OK.

### Create a group

Use groups to collect related actions so the panel stays organized and easier to manage.

Choose Window > Actions to display the Actions panel.

Select the Create new group icon.

Type a name, then select OK.

## Apply actions in the Actions panel

Use Actions panel workflows to apply common edits quickly, resize images, and export files in Adobe Photoshop on desktop.

### Apply actions

Use Window > Actions, or open the panel with the Open Action Panel icon in the Contextual Task Bar.

On the Essentials tab, browse the available categories and select one: Basic Adjustments, Subject & Background, Creative Effects, Guides, Resize, and Export.

Actions panel with flyout menu open in the right panel group.

Actions panel with flyout menu open in the right panel group.

Move the pointer over an action to see a preview of its result.

Select the action to apply it.

Note

Actions listed on the Essentials tab preserve the original image state by working non-destructively.

### Modify actions

Use the Settings icon when an action needs changes or advanced-option adjustments.

Use Window > Actions, or open the panel with the Open Action Panel icon in the Contextual Task Bar.

On the Essentials tab, select the Settings icon on the action.

Update any available settings, including keyboard shortcuts, action description, action name (when editable), thumbnail icon, and color.

Adjust settings of the selected action in the Actions panel flyout menu.

Adjust settings of the selected action in the Actions panel flyout menu.

### Use action options

Extra action options let you edit an action or target parts of the image, including the subject or background.

Use Window > Actions, or open the panel with the Open Action Panel icon in the Contextual Task Bar.

On the Essentials tab, select the More options icon on the action.

Available choices include Edit Action, Play Action, Apply on subject, and Apply on background.
