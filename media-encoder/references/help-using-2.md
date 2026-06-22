# Using Preset Browser, Source Settings, File Formats Supported Import, Adding Third Party Plugins

> Adobe Media Encoder reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Using the Preset Browser; Source Settings; File formats supported for import with Media Encoder; Managing third-party audio plug-ins.

## Using the Preset Browser

Search. Last updated: Mar 27, 2026 | Also applies to Adobe Premiere

The Preset Browser offers Adobe Media Encoder options that make preset workflows more efficient.

### System presets

The browser organizes system presets by intended use (such as Broadcast, Web Video) and by device destination (such as DVD, Blu-ray, Camera, Tablet). These presets can be modified into custom presets, also called User Presets.

In the Preset Browser, presets can be located quickly with search or through the collapsible folder navigation.

### Custom presets, preset groups, and aliases

To make a custom User preset, use one of these actions:

- Choose Preset > Create Encoding Preset for an encoding preset.
- Choose Preset > Create Ingest Preset for an ingest preset.
- In the Preset Browser, use the Create New Preset button. From the pop-up menu, pick either New Encoding Preset or New Ingest Preset.

To add a Preset Group, use one of these actions:

- Use Preset > Create Group
- In the Preset Browser, click the Create New Preset Group button

A Preset Group can hold user presets, preset aliases, and nested preset groups.

To add an alias for a system or user preset, use one of these actions:

- In the Preset Browser, select a system or user preset, then choose Preset > Create Alias
- Move a system preset by dragging it into the User Presets & Groups section of the Preset Browser
- Hold Alt (Windows) or Opt (Mac) while dragging a user preset to another location in the User Presets & Groups section of the Preset Browser.

### Managing Presets

Manage presets from the Preset menu or from options in The Preset Browser (Window>Preset Browser). A preset in the Preset Browser can also be right-clicked to open the context menu with available commands.

The Preset Browser

A. Custom preset B. Preset group C. Create new preset D. Delete preset E. Create new preset group F. Preset settings G. Import presets H. Export presets I. Search for presets

The Preset Browser

### Modify user presets

- To rename a preset, click the selected preset's name, type the new preset name, and press Enter. Another option is to select Preset > Rename.
- To change preset settings, select a preset, then select Preset > Settings.
- To remove a preset, select it and press Delete. Another option is to select Preset > Delete.

Note

Only custom presets can be edited. To preserve changes made from system presets, click the Save A Copy button in the Preset Settings dialog and save them as new user presets.

### Show the location of a preset in Finder or Explorer

Right-click the preset in the Preset Browser, then choose Reveal Preset File.

### Quickly find a preset in the browser

Typing in the search field narrows the Preset Browser list to entries that match the search string. Matching is checked across all columns.

### Import and export presets

Presets can move in and out as EPR files. EPR files use the XML format.

- Select Preset > Import to bring in EPR files. Imported presets are shown in the User Presets and Groups section.
- Select Preset > Export to write selected presets as EPR files.

Note

EPR files can also be dragged and dropped into the User Presets and Groups section.

### Apply presets or preset groups to the Queue

To apply presets to Queue sources, use one of these actions:

- Dropping a preset on a source creates an output for that source.
- Dropping a preset on an existing output changes that output to use the preset's settings.

- To create an output for the source, take a source from the Queue and drop it on a preset, preset group, or alias in the Preset Browser.
- To swap an output over to preset settings, drag that output from the Queue onto a preset, preset group, or alias in the Preset Browser.
- In the Queue, select a source, then double-click a preset, preset group, or alias in the Preset Browser.
- In the Queue, select a source. In the Preset Browser, choose presets, preset groups, or aliases. Click Apply Preset.

### Apply presets or preset groups to Watch Folders

To apply presets to watch folders in the Watch Folders panel, use one of these actions:

- Dropping presets on a watch folder creates new outputs for that watch folder.
- Dropping presets on an existing output changes that output to use the preset's settings.

- To create an output for the watch folder, take a watch folder from the Watch Folders panel and drop it on a preset, preset group, or alias in the Preset Browser.
- To swap an output over to preset settings, drag that output from the Watch Folders panel onto a preset, preset group, or alias in the Preset Browser.
- In the Watch Folders panel, choose a watch folder. Use Alt + double-click (Win) or Opt + double-click (Mac) on a preset, preset group, or alias in the Preset Browser.
- Choose a watch folder in the Watch Folders panel, then choose presets, preset groups, or aliases in the Preset Browser. Use Alt + click (Win) or Opt + click (Mac) on the Apply Preset button.

### Apply presets to Premiere sequences, After Effects compositions, and media assets during import

To apply presets to Adobe Premiere sequences, use one of these actions:

- In the Media Browser, open an Adobe Premiere project and move sequences onto a preset, preset group, or alias in the Preset Browser.
- From the Project panel in an open Adobe Premiere project, drag a sequence onto a preset, alias, or preset group in the Preset Browser.

Note

Only this workflow adds multiple presets to Adobe Premiere sequences in one step. During export from Adobe Premiere to Adobe Media Encoder, the Export Settings dialog can apply one preset at a time.

### Apply presets to After Effects compositions

- In the Media Browser, open an Adobe After Effects project and move compositions onto a Preset Browser preset, preset group, or alias.
- From the Project panel in an open After Effects project, send a composition to a Preset Browser preset, preset group, or alias.

### Apply presets to video and audio assets

- From the Media Browser, move media files onto a Preset Browser preset, preset group, or alias.
- From Finder or Windows Explorer, drop video and audio assets onto a Preset Browser preset, preset group, or alias.

### Important considerations when applying presets

- If you drag one preset onto an output, that output is replaced. The resulting outputs reuse that output's output path, output name, and source range settings.
- If you drag one preset onto a source, Media Encoder adds an output.
- When a preset group, or several selected presets, is dropped on an output, outputs are added. Those new outputs copy that output's output path, output name, and source range settings.
- When a preset group, or several selected presets, is dropped on a source, outputs are added. Existing-output settings, including output path, are not carried over.

### Using Ingest Presets with Media Encoder

Adobe Media Encoder can ingest camera media to a local drive, letting editing begin quickly in Premiere. In AME, use the Media Browser to choose the clips for ingest and add In/Out points when needed.

To ingest clips, drag them onto an Ingest preset in the Preset Browser, or drag them straight to the Queue and apply an Ingest preset to the new sources there. In the Ingest Preset Settings dialog, choose the local destination for copied camera files, pick a Transcode format, and, when needed, configure Metadata or rename the assets. After queue processing finishes, import the resulting files into the Premiere project and start editing.

Build an Ingest Preset and configure its options to define how project media import is handled.

Build an Ingest Preset and configure its options to define how project media import is handled. Note

The Media Intelligence feature is available only in the beta release.

For copying files from a camera or networked volume, enable 'Copy files to destination', then choose where the ingested files go by clicking 'Browse For Location' and selecting a destination folder. To confirm that copies match their sources, select Verify and pick one of these methods:

- MD5 Comparison: runs an MD5 validation and confirms that the ingested file matches the source file.
- File Size Comparison: compares the ingested file's size against the original movie clip's size.
- Bit by Bit Comparison: runs a CRC validation and checks whether the source-file checksum matches the ingested file. When the files differ, the checksums do not match and the test fails.

For transcoding during ingest, enable 'Transcode files to destination', then choose where the ingested files go by clicking 'Browse For Location' and selecting a destination folder. Then select a transcoding Format and Preset from installed system presets, or use a custom Encoding preset that you previously created or imported into the Preset Browser.

### Adding Metadata to Files During Ingest

During ingest, you can attach metadata by making a custom form, or schema, that is applied to each ingested file as XMP metadata. To add metadata, enable 'Add File Metadata' in the File Metadata section. To create a preset, use this sequence:

1. Use the downward arrow icon beside the metadata-preset list, then choose New Preset.
2. Use + to create another metadata field.
3. Type the metadata field name. Do not include spaces in the name.
4. To make a field mandatory, click the check box beside the asterisk \*.
5. Optionally, enter the preset value in Input Metadata Value.
6. For each additional field, click the + button again.
7. Save the preset by clicking Save.

Note

Together, the metadata name and metadata value form the metadata pair, also called the key-value pair. You can supply a default value for the name, or enter the value dynamically during ingest.

To edit a preset, use this sequence:

1. Choose a preset from the menu.
2. Use the downward icon beside the menu and select Edit. Update the values as needed, then click Save.
3. For a differently named copy, select Save As. Enter the preset's new name.
4. To return to the Metadata panel without saving edits, click x. To remove a preset, click the Trash icon.

You can share metadata presets with other users by sending the preset file. Shared presets help teams keep metadata sets consistent while organizing assets and content. To find the presets on your computer, use the downward icon beside the Preset menu, then select Show in Explorer or Show in Finder. To import one, use the downward arrow beside the Preset menu and select Import Preset. Choose the presets to import and click Open. File Metadata presets are stored as .PLMP files at these locations:

- Windows: C:\Users\\Documents\Adobe\Adobe Media Encoder\10.0\Presets\Metadata\
- Mac: HD/Users//Documents/Adobe/Adobe Media Encoder/10.0/Presets/Metadata/

### Renaming files during ingest

Ingest-time file renaming uses renaming presets that append chosen strings to the output file name.

Note

Files inside complex folder structures, such as P2, are not renamed.

For rename-on-ingest behavior, enable 'Rename files' in the File Rename section. To create a file-naming preset, use this sequence:

1. Use the downward arrow icon beside the renaming-preset list, then choose New Preset.
2. Use "+" to insert an element into the custom naming preset.
3. Custom Text: type the characters appended to the output file name, such as a company name, project name, or separator.
4. Date: choose 'Ingest Date' when the queue-add date should be used. Choose 'Creation Date' when the date should come from the source-file timestamp.
5. Time: choose 'Ingest Time' when the queue-add time should be used. Choose 'Creation Time' when the time should come from the source-file timestamp.
6. File Name: inserts the source file name, without its extension, as part of the new output name.

To insert more elements, click the "+" button again. Click Save, enter a preset name, and make sure that name has no spaces.

To edit file renaming presets, follow these steps:

1. Choose the preset from the menu.
2. Use the downward icon beside the menu, then select
3. Change the values as needed, then click Save.
4. For a differently named copy, select Save As and enter a new preset name.
5. To return to the File Rename panel without saving edits, click "x".
6. To remove a preset, click the Trash icon.

Collaborative workflows often benefit from consistent naming rules. Send the preset file to share renaming presets with other users. To find the presets on your computer, use the downward icon beside the Preset menu, then select Show in Explorer or Show in Finder. To import one, use the downward arrow beside the Preset menu, then select Import Preset. Choose the presets to import and click Open. File Rename presets are stored as .PLRP files at these locations:

- Windows: C:\Users\\Documents\Adobe\Adobe Media Encoder\10.0\Presets\Rename\
- Mac: HD/Users//Documents/Adobe/Adobe Media Encoder/10.0/Presets/Rename/

### Adding Visual Analysis to an Ingest Preset

While creating an Ingest Preset through Preset menu > Create Ingest Preset, visual analysis can be included. With that option enabled, files that Media Encoder moves or transcodes also get sidecar files used for visual search.

Type the preset name in Preset Name.

Fill in the required parameters in the fields.

Move down to the Media Intelligence Analysis panel.

Enable the Analyze for visual search and write a sidecar file checkbox.

Select OK.

### Adding Visual Analysis to an Ingest Preset — Working with Ingest Outputs in the Queue Panel

Queue-panel ingest outputs resemble Encoding outputs, but a few behaviors differ. Ingest-output format is always displayed as 'Ingest'. When transcoding is enabled, the ingest output tool tip shows the associated encoding preset's format and preset. For example: 'H.264 (Match Source - High bitrate)'

To convert an ingest output into an encoding output, pick another format from the Format popup menu. To reverse the conversion, change the encoding output's format to 'Ingest'. Edit an ingest output in either of these ways:

- Choose the output, then use Preset > Settings
- Use the hot-text shown in the Format or Preset columns

The Ingest Settings dialog opens so you can apply required changes. To save the settings, click OK. In the Queue, this changes the ingest output's Preset Name to 'Custom'.

The Output File column displays ingest destinations. When both Copy and Transcode option are enabled, use the popup arrow left of the destination path to switch between the two paths. To open a destination folder, click that destination's hot-text link.

Ingest job in Queue

Ingest job in Queue

Create a custom User preset in any of these ways:

- For a new encoding preset, use Preset > Create Encoding Preset.
- For a new ingest preset, use Preset > Create Ingest Preset.
- To add Media Intelligence analysis to Ingest Presets, use Preset > Create Analysis Preset. The Media Intelligence feature is available only in the beta release.
- In the Preset Browser, use the Create New Preset button and pick New Encoding Preset or New Ingest Preset from the menu that appears.

Build a new Preset Group in either of these ways:

- Use Preset > Create Group
- Use the Create New Preset Group button in the Preset Browser

Preset Groups may hold user presets, preset aliases, or nested preset groups.

Create an alias to a system or user preset in any of these ways:

- In the Preset Browser, select a system or user preset, then use Preset > Create Alias
- Move a system preset into the User Presets & Groups section of the Preset Browser by dragging it
- Hold Alt (Windows) or Opt (Mac), then drag a user preset to another location in the User Presets & Groups section of the Preset Browser.

## Source Settings

Search Last updated on Feb 17, 2023 | Also applies to Adobe Premiere

In Adobe Media Encoder, Source Settings are used to improve and adjust footage color and quality for ARRIRAW (.mxf) and RED (.R3D) clips.

### MXF/ARRIRAW Source Settings

The MXF/ARRIRAW Development Settings or Source Settings dialog box appears only for ARRIRAW (.mxf) file formats. Use it to change exposure index, white balance, and tint.

The available Color Space choices are Rec709 and LogC4.

Click the Add Source button to add the ARRIRAW (.mxf) file to the Queue panel.

In the Queue panel, right-click the ARRIRAW (.mxf) source file and choose Source Settings from the drop-down list.

Set exposure index, white balance, and tint as needed. You can also select either Rec709 or LogC4 from the Color Space options. Select OK.

### RED R3D Source Settings

RED (.R3D) Source Settings let you adjust and customize source-file settings for RED media. Red R3D Source Settings can access only RED (.R3D) format files. The panel includes multiple settings options for changing clip color settings.

Click the Add Source button to add an R3D format file to the Queue panel.

In the Queue panel, right-click the RED (.R3D) source file, then choose Source Settings from the drop-down list.

Choose values for Presets and Image Pipeline. In the RED R3D Source Settings window, Demosaic, Decoding, Creative 3D LUT, and various other settings can be adjusted. Select OK.

Note

Source Settings are also offered for PSD images, After Effects compositions, and MPEG media that uses Variable Frame Rate.

Every format opens its own dialog box with editable properties. Some properties for a given source may not be editable.

### More like this

- Working with log files
- Set preferences
- Files supported for export with Adobe Media Encoder

## File formats supported for import with Media Encoder

Search Last updated on Mar 27, 2026

Review which video, animation, and image file formats Adobe Media Encoder can import.

Filename extensions such as MOV, AVI, MXF, and FLV may identify container file formats instead of specific audio, video, or image-data formats. A container can hold data encoded with many compression and encoding methods. Adobe Media Encoder imports these container files, but whether the data inside them can be imported depends on the installed codecs, especially decoders.

Installing additional codecs expands the file types that Adobe Media Encoder can import. Many codecs must be installed at the operating-system level and then operate as components inside QuickTime or Video for Windows formats. For details about codecs compatible with files created by particular devices or applications, contact the hardware or software manufacturer.

### Video and animation formats

MPEG, MPE, MPG, M2V, MPA, MP2, M2A, MPV, M2P, M2T, MTS, MP4, M4V, M4A, VOB, 3GP, AVC, h.264

MPEG-1 (Audio Layer II), MPEG-2, and MPEG-4 formats. Variable Frame Rate (VFR) support in h.264. Mac H.264 (Feature available on Mac OSX 10.13 and later). Win-Intel H.264 Hardware Encode. Hardware accelerated decode is supported for H.264, .mov, and .mp4 containers in both VFR and CFR on Mac 10.13, later versions, and Windows 10 with supported Intel HW.

| Format | Description |
| --- | --- |
| 3GP | 3GPP file format |
| AAF | Advanced Authoring Format |
| Animated GIF (GIF) | Supported on Windows only, QuickTime Animation files with Delta Frames |
| ARI | ARIRAW format |
| AVC-Intra, AVC-Intra LT, AVC Long GOP (Op1a), AVC Long GOP (Op1b), including AVC-Ultra | Panasonic codecs |
| Cinema DNG | High-resolution raw format |
| RMF | Canon RAW format, Canon XF-HEVC, Canon C4 |
| DV Stream | The native video format used for tape |
| DNxHD | Supported for MXF and QuickTime |
| DNxHR | Supported for MXF and QuickTime |
| FLV, F4V. | Flash video |
| MOV | GoPro CineForm format, QuickTime format |
| HEVC | High-Efficiency Video Coding. HEVC (also known as H.265) codec footage in a QuickTime (.MOV) container, produced by an iPhone or iPad with iOS 11 or a DJI Phantom 4 drone. VFR support. HEVC Hardware Encode (Feature available on Mac OSX 10.13 and later and Windows 10 RS5). For information on HEVC video extensions supported on Windows, view HEVC Video Extensions. |
| IMX | Supported in MXF container |
| JPEG2000 MXF Op1a | Supported in MXF container |
| MXF | Media eXchange Format. Supports MXF-wrapped DV (DALET). Note: Adobe Media Encoder supports ARRIRAW files in an MXF container. |
| MXF OP1a | Supported in MXF container |
| Netshow ASF | Windows only |
| P2 Movie | Supported in MXF container |
| CINE | Phantom CINE format |
| MOV | QuickTime movie. HEVC (also known as H.265) codec footage in a QuickTime (.MOV) container. |
| R3D | RED Raw, RED Helium, RED WEAPON |
| SonyRAW | Supported in MXF container |
| Sony Venice V3, Sony Venice V4, Sony VENICE 2 Ver. 2 | Supported in MXF container |
| AVI, WAV, BWF | Video for Windows and macOS(requires QuickTime player), AVI Motion JPEG files on macOS |
| WMV, WMA, ASF | Windows Media |
| XAVC Intra, XAVC Long GOP | Sony codecs |

Note

1. FLV and F4V are container formats associated with particular video and audio format sets. F4V files generally store H.264 video together with AAC audio. FLV files generally store video encoded by On2 VP6 or Sorenson Spark, with MP3-encoded audio. Adobe Media Encoder imports FLV files that use the On2 VP6 video codec, but not files that rely on the Sorenson Spark codec. Premiere also excludes FLV import support.
2. Media eXchange Format (MXF) is a container format. Adobe Media Encoder imports only some data varieties from inside MXF files. One supported variety is Op-Atom data from Panasonic cameras that record to Panasonic P2 media with DV, DVCPRO, DVCPRO50, DVCPRO HD, and AVC-Intra codecs. Adobe Media Encoder also imports XDCAM HD files in MXF format.
3. Some formats associated with recent camera models use MPEG-4 encoding. For example, XDCAM EX uses MP4 files, while AVCHD uses MTS files.

### Audio formats

| Format | Description |
| --- | --- |
| ASND, multi-track files imported as merged single track | Adobe Sound Document |
| Adobe Audition tracks | Audition track format |
| AAC, M4A | Advanced Audio Coding |
| AIF, AIFF | Audio Interchange File format |
| AVI, WAV | Video for Windows. Require QuickTime Player on Mac OS. |
| MP3, MPEG, MPG, MPA, MPE | MPEG Audio Layer 3 |
| MPEG 2 | MPEG 2 |
| MOV; on Windows, require QuickTime player | QuickTime format |
| WAV | Waveform format |
| WMA, Windows only | Windows Media Audio format |

### Still-image formats

| Format | Description |
| --- | --- |
| AI, EPS | Adobe Illustrator |
| ARI | ARRIRAW |
| BMP, DIB, RLE | Bitmap |
| CIN, DPX | Cineon/Digital Picture Exchange. Support for DPX asynchronous decode. |
| GIF | Graphics Interchange Format |
| HEIF | High Efficiency File Format supported on both Mac OS 10.13 or higher, and Windows 10 (version 1809 or higher). On Windows, both the HEIF image extension and the HEVC Video Extension needs to be installed. For information on HEIF image and HEVC Video extensions, see HEIF Image Extensions and HEVC Video Extensions. |
| ICO; Windows only | Icon File |
| JPE, JPG, JPEG, JFIF | JPEG |
| OpenEXR | High dynamic range file format |
| PSD | Photoshop |
| PIC, PCT | PICT |
| PNG | Portable Network Graphics |
| TGA, ICB, VDA, VST | Targa |
| TIF, TIFF | Tagged Interchange File |

Note

Any supported still-image format can be imported as a sequence. See Import items into the encoding queue for more information.

### Closed captioning formats

Format

Description

DFXP

Distribution Format Exchange Profile

MCC

MacCaption VANC

PTL, PRTL

Adobe Premiere Title

SCC

Scenarist Closed Caption

SRT

Subrip Subtitle format

STL

EBU N19 Subtitle

XML

W3C/SMPTE/EBU Timed Text

| --- | --- |

### Project file formats

Format

Description

AEP, AEPX

After Effects project

CHPROJ

Adobe Character animator project

CMX3600 EDL

Edit decision list (EDL)

FCP XML

Final Cut Pro XML

PRPROJ

Adobe Premiere project

| --- | --- |

## Managing third-party audio plug-ins

Search Last updated on Mar 27, 2026

Manage third-party audio plug-ins by choosing which plug-ins are enabled or disabled.

Previously, Premiere sequences containing third-party audio effects defaulted to DynamicLink rendering through Premiere, even when Import sequences natively was enabled. Media Encoder now provides native audio rendering for audio effects: VST3 and VST plug-ins on both platforms, plus Audio Units plug-ins on macOS. For Import sequences natively mode, users decide which third-party audio plugins load, allowing selective enabling or disabling. Effects are applied in Premiere projects and then sent to Media Encoder. Third-party effects must be scanned before they can be accessed. For feature details, see the documentation supplied by the plug-in manufacturer.

Open File > Manage Audio Effects > Audio Plug-in Manager.

1. Manage and optimize audio plug-Ins
   Under VST Plug-in Folders, click Add to choose custom folders for plug-in scanning. Click Default to choose the standard VST folder for your operating system.

The Folders section is only for legacy VST effects. Do not add a VST 3 folder there.

In the Available Plug-Ins section, choose Scan for Plug-Ins to scan every system audio plug-in folder. After a recent plug-in update, choose Rescan existing plug-ins.

Media Encoder automatically enables every valid effect.

To keep the application's menus efficient, use the check boxes next to each effect name to enable or disable plug-ins. If a plug-in appears as Not Working, click Reload to rescan it.

Choose the plug-ins you want available in Media Encoder and click OK.
