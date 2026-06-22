# Encode Export Video Audio, Media Cache Database

> Adobe Media Encoder reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Encode and export video and audio with Media Encoder; Managing the media cache database.

## Encode and export video and audio with Media Encoder

Search. Last updated: Mar 27, 2026

### Learn efficient encoding and export of video and audio with Adobe Media Encoder.

Adobe Media Encoder encodes and transcodes media files into different video and audio formats by using built-in presets or custom settings.

### The encoding process

To encode a video or audio item in Adobe Media Encoder, place it in the encoding queue. Then choose an existing encoding preset or create custom settings. The application can begin encoding after the item is added, or it can wait until you start the queue. Adobe Media Encoder supports these actions:

- Add an item to the encoding queue: in Adobe Media Encoder, drag video or audio files into the queue panel. For more information.
- Encode the item using presets: with the item in the queue, choose formats and presets from the Format and Presets dropdown list. You can also choose a preset in the Preset Browser and drag it onto any queue item.
- Encode the item using custom settings: in the Queue panel, select the desired items and choose Edit > Export Settings, or choose the listed Format and Preset in the Queue panel before entering custom settings.

For automatic queue encoding after a specified idle duration, select Start queue automatically when idle for and set the idle-state duration in the Preferences dialog box.

For automatic encoding after a fixed idle period, select Start queue automatically when idle and enter the desired idle period.

To use the same automatic idle behavior, select Start queue automatically when idle, then specify the idle period.

After it is enabled, the countdown is shown in the Encoding panel.

### Import items into the encoding queue

To place video or audio files in the encoding queue, use one of these methods:

- From the desktop or the media browser, drag one more file into the Queue panel.
- In the Queue panel, select the Add Source button, then choose one or more files.
- Double-click an empty area of the Queue panel and choose one or more files.

### Import from Premiere

To add a Premiere sequence, use one of these methods:

- In the Media Browser, navigate inside an Adobe Premiere project, then drag sequences into the Queue panel.
- Select File > Add Premiere Sequence. Choose a Premiere project and select one or more sequences from that project.
- From the Project panel in Adobe Premiere, click and drag a sequence into the Queue panel.
- From the desktop, click and drag a Premiere project to the Queue panel.

### Import from After Effects

To add an Adobe After Effects composition, use one of these methods:

- In the Media Browser, navigate inside an After Effects project, then drag-and-drop compositions into the Queue panel.
- Select File > Add After Effects Composition, choose an After Effects project, and select a composition from that project.
- From the Project panel in After Effects, click and drag a composition into the Queue panel.
- From the desktop, click and drag an After Effects project to the Queue panel.

### Stop encoding

To stop encoding, use one of these methods:

- To stop the item currently being encoded, select File > Stop Current Item. Adobe Media Encoder continues with the remaining queued items.
- To stop encoding every item in the queue, select File > Stop Queue.

### Stitching clips

Multiple media files can be combined into one file as they are added to the queue. To stitch media files together, follow these steps:

Select File > Add Source, or use the Add Source button in the Queue panel.

Choose the assets to stitch together in the file explorer.

Enable the Stitch clips together check box.

Select Open so the stitched clip is added to the queue.

Alternatively, choose the clips to stitch. Drag them to the Queue panel and drop them on Drop here to stitch clips together.

The stitched clips appear in the queue. To inspect the separate clips, select Show sources. The default sort order is alphabetical. Rearrange them as needed.

The stitched clip name is assigned automatically from the first clip in the series. To rename a clip, select its name.

Note

Stitched clips follow the In and Out points set in media browser. After sources have been added to a stitched clip, their duration cannot be edited.

### Identify missing items in the encoding queue

Before encoding begins, you can find queue items that have missing components. This helps locate and resolve problems before the encode runs. A warning status appears beside the source or output containing missing items. Hover over the icon to see a summary of the related error.

Adobe Media Encoder displays a warning icon in these cases:

- Premiere projects have offline media. In this situation, Adobe Media Encoder substitutes proxy media for the missing media set. When no proxies exist, a graphic appears with the message 'Media offline'.
- Premiere projects are missing some fonts.
- Premiere projects are missing some effects.
- Overlay effects reference some missing files.

The Queue panel is open and shows error details so problems can be identified and fixed before encoding.

The Queue panel is open and shows error details so problems can be identified and fixed before encoding.

### Interpret items in the encoding queue

When importing a video asset, Media Encoder tries to detect its frame rate, pixel aspect ratio, field order, and alpha channel. If any of those characteristics are detected incorrectly, assign the correct interpretation manually.

Select one or more video items in the encoding queue.

Use one of these methods:

- Select File > Interpret Footage.
- Right-click the file and select Interpret Footage.

Select the proper interpretation settings.

Note

Interpret Footage is unavailable when the selected asset is not a video or image asset.

### Encode using presets

A. Format B. Preset C. Destination

Add items to the Queue panel.

Click the Format text to open the Format pop up with supported file formats, then select a format compatible with the output device.

Click the Preset text to open the Preset dialog box containing industry-standard presets, then select a preset compatible with the output device.

Another option is to take a preset from the preset browser and place it on the queue.

Click the Output text, locate the export directory or folder in the Save As dialog box, and select Save.

Select the Start Queue button.

Encoding begins for the files, using the chosen preset, format, and destination. After a file is encoded, click the output file path to open the folder that contains it.

A. Output file after encoding B. Output file before encoding

Note

During encoding, click the Start Queue button again if you want to pause the process.

### Encode using custom settings

For custom-setting encodes, use this sequence:

Place the required items in the Queue panel.

Bring up the Export Settings dialog box with any of these methods:

- In the Queue panel, choose the item's row where Format, Preset, and Output File path appear, then use Edit > Export Settings.
- Right-click the row that contains Format, Preset, and Output File path, and choose Export Settings.
- Choose the Format or Preset name to display the Export Settings dialog box.

Adjust the export options, then choose OK.

After closing the Export Settings dialog box, choose the Start Queue button to start encoding the files.

Note

For best encoding throughput, keep the Encoding panel closed. Use the Queue panel progress bars instead when you need to check how encoding is advancing.

Inside the Export Settings dialog box, these actions are available:

- From the Format menu, pick a video, audio, or still-image format. Review the supported export file formats list.
- From the Preset menu, pick an encoding preset.
- Choose Export Video, Export Audio, Export Captions, or any combination of them.
- Define pre-encoding choices such as cropping and trimming. Review all export settings for the full set.
- Configure XMP metadata export behavior.
- Enable Use Maximum Render Quality or Render At Maximum Bit Depth.
- Enable Use Frame Blending.
- To set the encoded file's name and save location, choose the underlined text beside Output Name in the upper-right area of the Export Settings dialog box, then enter the file name and location. When no filename is supplied, Adobe Media Encoder takes the source video clip filename.

Note

If Format is P2 Movie, Adobe Media Encoder does not use the filename you assign. Those encodes receive a six-character alphanumeric name instead. Output Name is stored in the clip metadata and appears as the clip name in Adobe Premiere.

The encoded file can be saved to a destination folder relative to the folder that contains the source video clip. Confirm the destination folder already exists before using it. If the folder path does not exist, an error explains that encoding cannot proceed because the folder cannot be found.

### Save the encoding queue

When Adobe Media Encoder closes, it automatically stores the encoding queue and the encoding settings. Starting an encoding operation also triggers an automatic save of the queue.

To save the encoding queue yourself, choose File > Save Queue.

Note

To keep completed encoded entries visible in the queue after closing and reopening Adobe Media Encoder, clear Preferences > Remove completed files from queue on exit.

### Change output file path for multiple sources

To update the Output File path for several outputs in one operation, follow this process:

Use Shift-click to select multiple sources in the queue.

Choose the Output File text for one source within the current selection.

In the Select an output folder dialog, pick a path, then choose Choose.

The selected outputs now target the new directory while keeping their individual output filenames.

### Watch folder

Adobe Media Encoder can monitor selected folders, called Watch Folders, for incoming files. Files placed in a watch folder are encoded automatically. After Adobe Media Encoder detects a video or audio file there, it applies the encoding settings assigned to that folder and writes the encoded result to an output folder created inside the watch folder.

Watch folders let Adobe Media Encoder automate the queuing and rendering of media files. To make several versions from one source, add separate output instances that use different formats or presets.

Files dropped into Watch Folder are encoded automatically by Adobe Media Encoder.

Adobe Media Encoder encodes content placed in Watch Folder without manual queue setup.

Use the Watch Folders panel in Adobe Media Encoder to add folders and manage them. Add a watch folder through any of these methods:

- Choose File > Add Watch Folder, then select a folder.
- Double-click a blank area of the Watch Folders panel, then select a folder.
- Create a folder in Explorer (Windows) or Finder (macOS), then drag that folder into the Watch Folders panel.

When a watch folder adds items to the encoding queue, those items encode with the rest of the queue after you start it.

Note

If the Start queue automatically when idle for preference is selected, encoding starts after the specified idle time has passed following the watch folder's addition of an item to the encoding queue.

### Create output in multiple formats using watch folders

Watch folders can produce several outputs from a single action. For instance, each time a video asset is transcoded, you might need both an AVI movie and a JPEG thumbnail image.

To create these files through one user action, use these steps:

Create a folder in File Explorer (Windows) or Finder (macOS) named My_WatchFolder.

Create a watch folder by choosing the Add Folder button > Add Encoding Folder, then browse to the folder you just made: My_Watchfolder.

- Choose Format, then choose MPEG4 as the format from the dropdown menu.
- Choose Preset, then choose the desired setting from the Preset dropdown menu.

- Choose the Output Folder to define where the generated output should be saved.

Create another watch folder item that points to My_Watchfolder, matching Step 2.

- Choose Format, then choose AVI as the format from the dropdown menu.
- Choose Preset, then choose the desired setting from the Preset dropdown menu.
- Choose Output Folder, then set the location where the output should be generated.

Create a third watch folder item that also points to My_Watchfolder, following the same pattern as Step 2 and Step 3.

- Choose Format, then choose JPEG as the format from the dropdown menu.
- Choose Preset, then choose the desired setting from the Preset dropdown menu.
- Choose Output Folder, then choose the location where the output should be generated.

Drag the source file into My_WatchFolder, then choose the Start Queue button. Encoding begins automatically.

After processing finishes, each file appears in its assigned output location.

### Remove, duplicate, and skip items in the encoding queue

From the selected files' context menu in the queue, you can remove, duplicate, or skip items in the encoding queue.

The queue context menu for selected files provides remove, duplicate, and skip actions for encoding queue items.

### Remove items from the encoding queue

To delete entries from the encoding queue, use this sequence:

Select the item or items that should be removed from the encoding queue.

Use one of these methods:

- Right-click the file, then choose the Remove button.
- Choose Edit > Clear, or press the Delete key.

### Duplicate items in the encoding queue

To make duplicate queue entries, use this sequence:

Select the item or items in the encoding queue that should be duplicated.

Use one of these methods:

- Right-click the file and choose Duplicate.
- Choose Edit > Duplicate
- Press Ctrl+D (Windows), or Command+D (macOS)

### Skip items in the encoding queue

To skip queue entries, use this sequence:

Select the item or items in the encoding queue that should be skipped.

Use one of these methods:

- Choose Edit > Skip Selection.
- Right-click the file and choose Skip Selection.

### Reset status of items in the encoding queue

To return a file's status in the encoding queue to its earlier state, use this sequence:

Select the queue items that should go back to the Ready state.

Use one of these methods:

- Choose Edit > Reset Status.
- Right-click the file and choose Edit > Reset Status.

### Monitor encoding progress

During encoding, each item's state appears in the Status column of the encoding queue. Adobe Media Encoder can process multiple outputs from one source at the same time, although source files are handled one after another according to their queue order.

Work in the application can continue while encoding runs. Items may still be added, removed, or reordered in the queue or watch folder. Outputs that are already encoding, however, cannot be changed.

Status

Definition

Ready

The item is waiting in the encoding queue and has not yet been encoded. A file can be removed while it is neither encoded nor currently encoding.

Done

Encoding completed successfully for the item.

Stopped

The encoding operation was canceled by the user while that item was in progress.

Failed

Adobe Media Encoder hit an error while trying to encode the specified item.

Skip

One or more selected files can be skipped by the user. Select the files, then choose Edit > Skip Selection.

| --- | --- |

### Track encoding progress of files using job count

The Queue panel includes a quick progress indicator that reports total jobs in the queue and how many are finished. When several files are rendering, this gives immediate visibility into encoding progress without opening each job's details.

Hover over the job count to display additional encoding-status detail. The breakdown lists how many jobs are completed, in progress, and failed.

Use an indicator to track job progress across total queued jobs, completed jobs, and other status updates.

An indicator can show total jobs in the queue, completed jobs, and other status updates for job progress.

### Audible alerts when jobs are completed

Adobe Media Encoder supports audible alerts. It plays a sound when queue jobs finish, and a different sound is used when error conditions are found. Preferences can disable these alerts if you do not want to hear them.

Select Play chime when finished encoding to make an audible alert play after the queue's jobs are complete.

Play chime when finished encoding enables an audible alert after all jobs in the queue have completed.

### Display log

Hover over the status icon to display a tool tip containing the error message. To view the log for an item that finished successfully, stopped, or failed, select its status.

### Parallel encoding

Adobe Media Encoder works through sources sequentially, while outputs from a single source can encode in parallel. This supports exporting several formats from the same source at once, but it does not export different sources at the same time.

Choose Parallel encoding when the same source needs multiple formats exported simultaneously.

Parallel encoding exports several formats from one source at the same time. Note

Parallel encoding is enabled by default. To turn it off, choose Edit > Preferences and deselect Enable Parallel Encoding.

When several outputs encode at once, the Encoding panel shows a thumbnail preview, progress bar, and estimated finish time for each encoding output.

Some export settings require an output to use serial encoding instead of parallel mode. After that temporary serial pass finishes, the queue resumes parallel encoding.

### More like this

- Working with log files
- Set preferences
- Files supported for export with Media Encoder

## Managing the media cache database

Search Last updated on Mar 27, 2026

The media cache database stores links to cached audio and video files imported into Adobe Media Encoder.

For some imported video and audio formats, Adobe Media Encoder prepares and caches accessible versions of the media. Each imported audio file is conformed into a new .cfa file, while MPEG files are indexed into a new .mpgindex file.

Note

On first import, the application may pause while it processes the media and adds it to the cache.

Links for cached media files are maintained in a database. Adobe Media Encoder, Adobe Premiere, and After Effects share this media cache database, allowing those applications to read and write against the same cached-file set. Changing the database location from any one of these applications updates the location for the others as well. Each application may use a separate cache folder, while one shared database tracks them all.

Media cache database and cached-file locations can be changed from Edit>Preferences>Media>Media Cache Files. For details, see Preferences.)

To move either the media cache database or the media cache itself, use one of the Browse buttons in the Media preferences.

To delete conformed and indexed files from the cache along with their database entries, choose Clean. This command removes only files linked to items whose source file is no longer available.

Note

Before choosing the Clean button, verify that any storage devices containing source media currently in use are connected to the computer. If footage is judged missing because the storage device that contains it is not connected, the related media cache files are removed. After that, the footage must be conformed or indexed again the next time you try to use it.

Note

Using the Clean button to clean the database and cache does not delete files associated with footage items whose source files remain available. To manually delete conformed files and index files, go to the media cache folder and remove the files there. The media cache folder location appears in the Media preferences. If the displayed path is shortened, choose the Browse button to show the full path.
