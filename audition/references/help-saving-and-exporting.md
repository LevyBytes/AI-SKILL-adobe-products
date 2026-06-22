# Saving Exporting Files1, Viewing Editing Xmp Metadata

> Adobe Audition reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Save and export audio files — Save audio files; Viewing and editing XMP metadata.

## Save and export audio files — Save audio files

### Save, export, and convert audio in Adobe Audition with multiple formats, mixdown choices, and export settings.

The Waveform Editor can save audio files in several common formats. Choose the format according to the file's intended use, because each format preserves different information and some data can be lost after saving to another format.

In the Waveform Editor, use one of these commands:

- To save edits in the active file, select File > Save.

- To create a renamed copy of the edits, select File > Save As. To write a separate export while leaving the current file open, select File > Export > File.

- To save the selected audio as a separate new file, select File > Save Selection As.

- To save every open file in its current format, select File > Save All.

- To process every open file, select File > Save All Audio as Batch Process.

Enter a filename and location, and choose a file format. Configure these options:

- Sample Type: shows the sample rate and bit depth. Select Change to revise them.
- Format Settings: shows compression and storage mode details; select Change to modify them.
- Include Markers and Other Metadata: saves audio markers and Metadata panel information in the saved files.

Note

Some CD-burning programs treat non-audio data, including markers and metadata, incorrectly, which can create a harsh noise burst at the start of each track.

### Save and export audio files — Export with Adobe Media Encoder

Adobe Media Encoder can receive Audition audio and video, then render multitrack sessions to multiple output formats. Its formats and presets support high-quality publishing for audio and video.

For Adobe Media Encoder export:

Use File > Export > Export with Adobe Media Encoder.

Enter the filename and choose its location.

Adobe Media Encoder exports only the mix track unless you change the default. Select Change to map tracks from the multitrack session to channels in the output file.

When you need a project excerpt instead of the full timeline, use Range to choose the current Time Selection or the video clip range.

Note

1. Use the latest versions of Audition and Media Encoder for this export workflow.
2. For related details, see encoding video or audio items in Adobe Media Encoder.

### Save and export audio files — Extract audio channels to mono files

To work on or export separate channels from a stereo or surround-sound file, extract those channels as mono files. Each extracted filename receives the channel name from Adobe Audition.

Example: a stereo source named Jazz.aif creates Jazz_L and Jazz_R mono files.

In the Waveform Editor, select Edit > Extract Channels to Mono Files.

Audition opens each extracted file automatically in the Editor panel.

### Save and export audio files — Save multitrack sessions

A multitrack session file is a compact non-audio file. It records where related audio files live on the hard drive, how long each audio file lasts inside the session, envelopes and effects assigned to tracks, and similar mix data. Reopen the saved session later to continue changing the mix.

For multitrack mixes built completely in Adobe Audition, use the native SESX format for session files. For interchange with other applications, review the workflow for exporting sessions to OMF or Final Cut Pro Interchange format.

Note

Sessions can store references to all open files and reopen them automatically with the session. Turn on Reference All Open Audio and Video Files in the Multitrack preferences.

In Multitrack Editor, use one of these commands:

- To save edits to the active session file, select File > Save.

- To save under another filename, select File > Save As. Or select File > Export > Session to leave the current session open.

- To save the session file and every audio file it contains, select File > Save All.

Enter a filename and location.

Select Include Markers and Other Metadata when audio markers and Metadata panel information should be included.

Tip

For related steps, review export a multitrack session in Adobe Audition.

### Save and export audio files — Export sessions to OMF or Final Cut Pro Interchange format

Export to OMF or Final Cut Pro Interchange format when a full mix must move into other workflow applications. OMF began as an Avid Pro Tools format and has become a common multitrack interchange choice for many audio mixing tools. Final Cut Pro Interchange format uses human-readable XML files, so offline edits can revise text references, mix settings, and related data.

### Save and export audio files — Export to OMF

In Multitrack Editor, select File > Export > OMF.

Specify a filename and location.

Configure these options:

- Sample Type: choose Change to open the Convert Sample Type dialog box.
  - Media: Encapsulated places audio clips inside the OMF file for simpler organization. Referenced places audio clips in the same folder as the OMF file, allowing offline edits when needed. Encapsulated OMF files are limited to 2 GB in size.
  - Media Options: controls whether clip source files are cut to clip length in the Editor panel or keep the full original file.
  - Handle Duration: for trimmed clips, sets how much time beyond each clip edge is included. Extra audio gives more room for later fades and edits.

The Warnings section lists session elements that will be omitted or modified. To copy the warning text, select the Copy Warnings option.

### Save and export audio files — Export to Final Cut Pro Interchange format

From Multitrack Editor, use File > Export > FCP XML Interchange Format.

Enter the filename and location.

To save audio markers and Metadata panel information, select Include Markers and Other Metadata.

For easier transfer to another system, select Save Copies of Associated Files to gather the session and source files together. Select Options to change the format and sample type used for exported source files.

The export omits these session elements:

- The second stereo-clip channel. (All clips and tracks become mono.)
- Clips that overlap
- Effects and track EQ.
- Automation envelopes, with the exception of clip volume and mono-to-stereo track panning.
- The mix track, buses, sends, and output routing.

### Save and export audio files — Export session templates

Session templates carry all multitrack properties and clips, which makes it faster to start projects that reuse similar tasks and settings. Related shows might share examples such as an intro theme or background ambiance.

Use File > Export > Session as Template, then enter a name and location.

To start from a template, select File > New > Multitrack Session, then pick an option from the Template menu.

### Save and export audio files — Export session archives

Export session archives when session and source files need to be bundled for transfer to other computers or storage devices. This workflow also lets you change a session's sample rate and bit depth.

Open File > Export > Session.

Enable Save Copies of Associated Files, and then choose Options.

To store source files in another format, select Convert Files, and set the desired options.

To choose between full and trimmed source files, use the Media Options menu.

Handle Duration sets how much extra audio is saved at the beginning and end of trimmed clips. For more flexibility with later trimming and fade changes, add handles of up to 10 seconds each.

### Save and export audio files — Export multitrack mixdown files

When a session mix is complete, export either the full session or a selected section in common audio formats. The exported result uses the volume, pan, and effects state currently routed through the mix track.

For a fast mix of particular audio clips into one track, choose Multitrack > Bounce to New Track.

When only part of the session should be exported, choose the Time Selection Tool on the toolbar and mark the required range.

Choose File > Export > Multitrack Mixdown, then pick the command that matches whether the export should contain a selected range, the whole session, or several clips:

- Time Selection
- Entire Session
- Selected Clips

Another route is Multitrack > Mixdown Session to New File; this sends the mixdown to Waveform Editor, so the remaining steps are unnecessary.

Enter a filename, then set the destination and file format.

Configure these options:

- Sample Type: shows the sample rate and bit depth. To revise those values, select Change.
- New Sample Type: shows the sample type that every file in the panel will have after conversion is applied.
- Format Settings: summarizes compression and storage behavior for the data; to edit it, select Change.
- Mixdown Options: controls whether tracks become separate files, or whether mono, stereo, and 5.1 mixdowns are output at the same time. To revise these and related settings, select Change.
- Include markers and other metadata: writes audio markers and Metadata panel information into the saved files.
- Open files after export: enables Audition to open the files after conversion completes.

Note

In Waveform Editor, choose Edit > Edit Original to reopen the multitrack session that produced a mixdown file. Embedded metadata must be present in the file for this command to work.

### Save and export audio files — Audio format settings

For most work, keep uncompressed audio in AIFF or WAV format. Use compressed MP3 only for web delivery or portable media players.

In a Save As or Export dialog box, use Change beside Format Settings to open the options listed below.

Note

Watch Estimated File Size at the bottom of the dialog box to evaluate the impact of setting changes.

### Save and export audio files — AIFF format settings (_aif, _.aiff, \*.aifc)

On Mac OS, AIFF is the standard format for uncompressed audio files.

- Sample Type (available only for 32-bit files): chooses the audio bit depth. Greater bit depths increase dynamic range and lower distortion, but they also require larger files and more processing time. Integer settings clip audio beyond the amplitude range allowed by the chosen bit depth. Floating Point settings use a little more storage while preserving much more dynamic range. Choose 32-bit Floating Point when the file will be processed repeatedly and you want to discard as little amplitude data as possible.
- Byte Order (available only for 16-bit files): sets the numerical order for bytes of data. Use Little-Endian for Intel processor systems and Big-Endian for PowerPC processor systems.

Note

To add Author metadata to an AIFF file, enter it in Dublin Core: Creator on the XMP tab of the Metadata panel.

### Save and export audio files — Monkey's Audio format settings (.ape)

Monkey's Audio uses lossless compression to reduce files to about one-half of their starting size while keeping sonic fidelity intact.

- Compression: sets the balance between processing speed and final file size. (Fast processing produces larger file sizes, and vice versa.)

### Save and export audio files — MP2 Audio format settings

MP2 (MPEG-1 Audio Layer II) is a lossy compression format widely used in radio broadcasting.

- Automatic chooses one of the following options from the file's current channel configuration.
- Mono creates a one-channel file.
- Dual Mono creates a two-channel file with matching audio in both channels.
- Stereo creates a two-channel file by handling channels independently while keeping stereo imagery.
- Joint Stereo handles both channels together, reducing file size but often changing stereo imagery.

- Bitrate: changes the balance between file size and audio quality. Higher values increase both size and quality; lower values reduce both.

For details about Advanced options, hover over them until a tool tip appears.

### Save and export audio files — MP3 format settings

MP3 is the standard compressed format for distributing audio online.

- Type: choose Constant for one steady bitrate, or choose Variable when bitrate should vary according to the audio content.

- Bitrate (for constant bitrates) or Quality (for variable): changes the balance between file size and audio quality. Higher values increase both size and quality; lower values reduce both.

Note

Do not encode the same audio to mp3 more than once. Opening an mp3 file and saving it again recompresses the audio, making artifacts from the previous compression more obvious.

### Save and export audio files — QuickTime format settings (audio-only \*.mov)

Audio-only QuickTime files always save as uncompressed PCM (Pulse Code Modulation) data, so their format settings cannot be changed.

### Save and export audio files — Wave PCM format settings (.wav, .bwf)

Wave PCM is the standard uncompressed audio format for Windows. Broadcast Wave metadata can be included in Windows PCM files.

- Sample Type (available only for 32-bit files): chooses the audio bit depth. Greater bit depths increase dynamic range and lower distortion, but they also require larger files and more processing time. Integer settings clip audio beyond the amplitude range allowed by the chosen bit depth. Floating Point settings use a little more storage while preserving much more dynamic range.

- 4GB Plus Support: saves files larger than 4GB by using either RF64 format, which matches the current European Broadcasting Union standard, or Multiple Data Chunks format for legacy Audition releases.

Note

- Compatibility with earlier Adobe Audition releases is why the nonstandard 16.8 and 24.0 Floating Point choices remain available. (Audition 1.0 used 16.8 internally. 24.0 was an optional setting in that release.)
- For compatibility with many applications, choose RF64 format for files larger than 4GB.

### Save and export audio files — libsndfile, FLAC, and OGG format settings

These options apply across many formats.

Format

- Format: identifies the file format and extension.
- Encoding: sets the data storage scheme for the file.
- Byte Order: sets the numerical order for bytes of data. Default Byte Order uses the default for your system processor and is usually the best option.
- VBR Quality (OGG files only): sets the balance between file size and audio quality. (Higher settings create larger files with better quality.)

Note

FLAC is unusual because it is both compressed, which reduces file size, and lossless, which preserves full audio fidelity.

### Save and export audio files — Close files

Use any of these commands:

- For the file currently shown in the Editor panel, choose File > Close.

- To close every open audio, video, and session file, choose File > Close All.

- For files not referenced by an open multitrack session, choose File > Close Unused Media.

- To close the current session plus related audio clips in Multitrack Editor, choose File > Close Session and its Media.

## Viewing and editing XMP metadata

In Adobe Audition, use the Metadata panel's BWF, ID3, and RIFF tabs for fast access to common audio metadata. The XMP tab shows that same information together with a broader metadata set used by Adobe video applications. (For example, RIFF tab's Display Title field maps to the Dublin Core section's Title field on the XMP tab.)

Note

When saving files, preserve metadata by enabling Include Markers and Other Metadata in the Save or Export dialog box.

Use the BWF tab for Broadcast Wave files, where you can set a playback time offset and enter standard descriptive metadata. A file must be saved in WAV format to include Broadcast Wave metadata; see Save audio files. See Spot-insert a Broadcast Wave file into a session for the related Multitrack Editor workflow.

The ID3 tab applies to mp3 metadata, and the RIFF tab applies to radio-industry metadata.

### About the Metadata panel and XMP

Use XMP metadata to organize files and make the workflow easier to manage. Metadata is descriptive information about a file. Video and audio files already include basic properties such as date, duration, and file type. Properties such as location, director, copyright, and many others can be added.

The Metadata panel lets asset information move through Adobe video and audio applications. Conventional clip properties stay limited to a single application's Project or Files panel, but metadata properties are embedded in source files, allowing other applications to show the data automatically. Because the metadata travels with the asset, video assets are easier to track and manage as they pass through production.

Note

Adobe Bridge also shows properties from the Metadata panel, adding detail that supports faster asset browsing.

### About schemas and properties

A metadata schema groups properties for a particular workflow. For example, Dynamic Media includes properties such as Scene and Shot Location, which suit digital video projects. Exif schemas instead contain properties for digital photography, such as Exposure Time and Aperture Value. Broader properties such as Date and Title appear in the Dublin Core schema. To change which properties are visible, see Show or hide metadata.

Note

For details about a schema or property, hover over it in the Metadata panel. Most items display a tool tip.

### About the XMP standard

Adobe applications store metadata with Extensible Metadata Platform (XMP). Because XMP is based on XML, metadata can move across many applications and publishing workflows. Most metadata in other formats, such as Exif, GPS, and TIFF, transfers into XMP automatically, making it easier to view and manage.

Usually, XMP metadata is written directly into source files. When a file format cannot support XMP, the metadata is written to a separate sidecar file instead.

XMP is unavailable for project assets that have no corresponding files. In Adobe Premiere, examples are Bars and Tone, Universal Counting Leader, Color Matte, Titles, Black Video, and Transparent Video.

Note

Use the XMP Software Development Kit when you need custom metadata creation or exchange. See Extensible Metadata Platform for additional XMP information.

### Show or hide XMP metadata

To tailor the Metadata panel to your workflow, display or hide entire schemas or individual properties so only needed items are shown.

Open the options menu for the Metadata panel, then choose Metadata Display.

Select items in the list to show them, or deselect items to hide them.

### Save, switch, or delete metadata sets

When different workflows require different displayed metadata sets, save those sets and switch between them later.

Open the options menu for the Metadata panel, then choose Metadata Display.

Use any of these actions:

To store the current metadata display set, click Save Settings. Enter a name, then click OK.

To show a saved metadata set, choose it from the menu.

To remove a saved metadata set, choose it from the menu and click Delete Settings.

### Create schemas and properties

When a unique customized workflow is not covered by the default metadata options, create your own schemas and properties.

Open the options menu for the Metadata panel, then choose Metadata Display.

Click New Schema, then enter a name.

Find the schema name in the list, then click Add Property on its right.

Enter a property name, then select one of the following for Type:

Integer

Shows whole-number values that you drag or click to change.

Real

Shows fractional values that you drag or click to change.

Text

Shows a text box for properties similar to Location.

Boolean

Shows a check box for On or Off properties.

### Edit XMP metadata

Properties with similar names are linked between the Metadata and Files panels, but the Metadata panel includes a larger property set.

In the Editor panel, open the file or session you need.

In the Metadata panel, edit text or change values as needed.

### Search XMP metadata

Open the file or session you want to search in the Editor panel.

In the Metadata panel, click the XMP tab.

Type the text you want to find into the search box.

The metadata list collapses so only properties containing the search string remain visible.

Move through results by clicking the Previous and Next buttons beside the search box, or by pressing Tab.

To leave search mode and restore the complete metadata list, click the close button to the right of the search box.

### Album Art metadata

The ID3 tab in the Metadata window contains the Album Art metadata option for selecting artwork for an MP3 file.

Add album art with these steps:

To open the Metadata window, choose Windows > Metadata.

Open the ID3 tab from the list of available tabs.

Choose Album Art option. By default, the tab shows the first album art from the audio file.

To use a custom image as album art, click Browse. Supported custom image formats are .png and .jpeg.

Album art for MP3 files

Album art for MP3 files

Note

Only MP3 files can use this feature. With other audio file formats, the Metadata panel shows Album Art grayed out.
