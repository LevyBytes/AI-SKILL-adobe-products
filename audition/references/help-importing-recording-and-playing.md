# Multichannel Audio Workflow, Creating Opening Files, Importing Files Panel, Extracting Audio Cds ...

> Adobe Audition reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Multichannel audio workflow — Multichannel Audio Workflow; Create, open, or import files in Adobe Audition; How to import files with Files panel; Extracting audio from CDs; Supported import formats; Navigate time and playing audio in Adobe Audition.

## Multichannel audio workflow — Multichannel Audio Workflow

Adobe Audition can handle multichannel audio with as many as 32 channels. In the Waveform Editor, individual audio channels can be edited and processed separately. In the Multitrack Editor, multichannel files can remain a single clip or be separated so the channels appear as multiple clips.

### Multichannel audio workflow — Waveform Editor

For multichannel audio or video files, edit each audio channel on its own in the Waveform Editor with these steps.

Choose File > Open. The opened file appears in the Files Panel.

Open the drop-down to display all channels in the file.

Channel list

Channel list

Double-click an individual channel to turn off the other channels.

Note

When iXML metadata includes channel names, those names are shown.

Enable specific channels

Enable specific channels Waveform editor

Waveform editor

### Multichannel audio workflow — Multitrack Editor

Within a session, multichannel audio or video can be brought into the Multitrack Editor as a single multichannel clip; that is the default behavior. To have Audition split individual channels, or groups of channels, into separate clips during drag-and-drop, hold Alt (Windows) or Option (Mac) during the drag.

Importing audio as one multichannel clip

Importing audio as one multichannel clip Importing audio to Multitrack Editor as different clips

Importing audio to Multitrack Editor as different clips

- Drag the channels you want to import into the Multitrack panel. Multiple selected channels can be dropped on one track or placed across different tracks.
- To place channels on different tracks, keep Alt (Windows) or Option (MAC) held down.

Insert clip to different tracks

Insert clip to different tracks Note

To make the clip follow the channelization of the destination track, use the double-modifier behavior with Command+Option (MAC) and Control+Alt (Windows).

### Multichannel audio workflow — Modify the channels in a specific clip

Use the following steps when you need to change channels already assigned to a particular clip.

Note

Once a clip has been added to a track, its channel count cannot be changed. You can replace one channel with another instead.

Choose the clip you need to edit.

In the Properties panel, choose Source Channel Routing.

Use radio buttons to modify the source channel routing of the selected clip

Specific Channel Routing

Specific Channel Routing

### Multichannel audio workflow — Effects channelization

Effects can use independent input and output channel assignments, and you can check which channel layouts each effect supports. Route specific audio clip or track channels into mono, stereo, surround, or immersive effects, then review existing routing at a glance.

To change an effect layout, launch an effect from the Effects Rack or Effects menu. The Effects window appears; choose the Channel map editor.

Channel map editor

Channel map editor

Select Request Layout to open the Request Effect Layout window.

Request layout

Request layout

The Request Effect layout window lets you set the input type. In the drop-down, choose Mono, Stereo, or 5.1.

Choose input from drop-drown

Choose input from drop-drown Note

Output is tied to input and is not editable.

For a custom channel setup, select Custom, then update Channel Label as needed.

Custom audio channel layout

Custom audio channel layout

The plus and minus icons below change the channel count.

Add or remove channels

Add or remove channels

You can now adjust the effect input and effect output for each individual channel.

Modify effect input and effect output

Modify effect input and effect output

## Create, open, or import files in Adobe Audition

### Set up a custom startup configuration in Adobe Audition so repeat projects open faster and more consistently.

Short tutorial for creating, opening, and importing files before beginning work on an Audition project.

### Create a new blank audio file

A blank audio file works well for recording fresh audio or combining audio that has been pasted.

Select File > New > Audio File.

Note

For a fast way to make a file from selected audio in another open file, choose Edit > Copy to New.

Type a filename, then configure these options:

- Sample Rate: sets the file's frequency range. Reproducing a frequency requires a sample rate at least twice as high as that frequency.
- Channels: sets whether the waveform is mono, stereo, or 5.1 surround. For quicker reuse, Adobe Audition remembers the five most recent custom audio channel layouts you used.
- Bit Depth: sets the file's amplitude range. In Audition, the 32-bit level gives the greatest processing flexibility. For broad application compatibility, convert to a lower bit depth after editing is finished.

Note

For recordings that contain only voice, mono is usually a strong choice because it processes faster and creates smaller files.

### Create a multitrack session

Session (\*.sesx) files do not store audio data inside the session file. They are compact XML-based files that reference audio and video files elsewhere on the hard drive. A session file keeps track of:

- The files included in the session.
- Where those files are located.
- Envelopes and effects applied in the session.

.sesx files can be opened in text editors, or kept in version control systems, when you need to inspect settings closely. Perforce and Git are common choices in the game industry.

Select File > New > Multitrack Session.

Enter a filename and location, then configure these options:

- Template: selects either the default template or a custom template you created. Session templates define source files along with settings such as Sample Rate and Bit Depth.
- Sample Rate: sets the session's frequency range. To capture a frequency accurately, use a sample rate at least double that frequency.
- Bit Depth: sets the amplitude range for the session, including recordings and files made with the Multitrack > Mixdown Session to New File command.
- Mix: controls whether tracks mix down to a mono, stereo, or 5.1 Mix track.

Note

- Every file added to a session must use the same sample rate. When imported files use different sample rates, Audition asks to resample them, which can lower audio quality. Change resampling quality in the Sample Rate Conversion settings under Data preferences.
- Choose the bit depth with care because it cannot be altered after session creation. For fast systems, 32-bit is usually ideal. On a slower system, try reducing the bit depth.

### Open existing audio files and multitrack mixes

Multitrack Editor can open these file types: Adobe Audition Session; Adobe Audition 3.0 XML is also supported; Adobe Premiere Sequence XML is included; Final Cut Pro XML Interchange is included; and OMF is included.

Other supported formats, including audio contained in video files, open in the Waveform Editor.

Note

SES session files created by Adobe Audition 3.0 or earlier are not supported. If you still have Adobe Audition 3.0, save those sessions in XML format so later versions can open them.

Select File > Open. Select a supported audio or video file.

If the desired file is not visible, use the menu at the bottom of the dialog box and choose All Supported Media.

### Append audio files to another

In Waveform Editor, use one of these commands:

- To append to the active file, choose File > Open Append > To Current.
- To append into a new file, choose File > Open Append > To New.

From the Open Append dialog box, choose one or more files.

Note

When selected files differ in sample rate, bit depth, or channel type, Audition converts them to match the currently open file. Best results come from appending files that use the same sample type as the original file.

After choosing the files, select Open.

### Import a file as raw data

Files without header information describing the sample type cannot be opened normally. To provide that information yourself, bring the file in as raw data.

Select File > Import > Raw Data.

Choose the file, then click Open.

Configure these options:

Sample Rate

- Sample Rate: use the file's actual rate when you know it. Audition accepts raw data rates from 1 Hz to 10,000,000 Hz, while playback and recording work only from 6000 Hz through 192,000 Hz.
- Channels: type a value from 1 to 32.
- Encoding: sets the storage scheme used for the file's data. If the encoding is unknown, check with the file supplier or the documentation for the application that produced it.
- Byte Order: sets the byte sequence for numeric data. Little-Endian is common for WAV files, Big-Endian is common for AIFF files, and Default Byte Order uses your system processor's default, which is usually best.
- Start Byte Offset: sets the file data point where importing begins.

### Insert an audio file into a multitrack session

Inserted audio in Multitrack Editor appears as a clip on the selected track, or on the nearest empty track when one is needed.

In Multitrack Editor, choose a track and put the playhead at the target time position.

Select Multitrack > Insert Files.

Choose a supported audio or video file.

Note

To convert marker ranges into clips automatically, drag ranges from the Markers panel to the Multitrack Editor.

### Spot-insert a Broadcast Wave file into a session

When a Broadcast Wave (BWF) file is inserted into a multitrack session, Audition can read its embedded timestamp and place the file at the matching time. This workflow is spot-inserting.

Choose this preference path: Edit > Preferences > Multitrack (Windows) or Adobe Audition > Settings > Multitrack Clips (macOS).

Enable Use embedded timecode when inserting clips into Multitrack.

Select a track in the Multitrack Editor.

Select Multitrack > Insert Files, then choose one or more BWF files.

Audition places an audio clip at the specified start time.

Note

For a BWF clip timestamp, open the clip in the Waveform Editor, then choose Window > Metadata. On the BWF tab, look for Time Reference.

### Import sequence from Adobe Premiere

Adobe Premiere projects (.prproj) can be imported directly into Adobe Audition. The import references original media and does not need rendering.

Select File > Import > File, then pick the Adobe Premiere project.

Next, the Import a Premiere Sequence dialogue box lists the sequences contained in the project. Choose the exact sequence you want to open. Audition imports the selected sequence directly while referencing the original media.

Certain content and clip-routing arrangements require rendering or appear offline, including synthetic content, nested sequences, and incompatible channel configurations.

The Import Options dropdown in the Import a Premiere sequence dialogue box controls the Render Unsupported Content and Clip Channel Routing check box.

Rendered-content storage can be set with the Project Folder and Custom Location radio buttons. Choose Browse to pick a custom location.

Adobe Audition imports the sequences with references to the original media. Video imported from Adobe Premiere appears as one flattened layer.

### Import ASND files

ASND files come from Soundbooth, a discontinued Adobe application. Starting with Audition 23.0, .asnd files cannot be opened directly in Audition.

On Windows, open .asnd files this way:

Rename <file_name>.asnd to <file_name>.zip.

Use WinRAR to unzip the file into an empty folder.

Import Mixdown.wav from that folder into the latest version of Audition.

On macOS, open .asnd files this way:

Open Terminal.

In Terminal, navigate to the folder that contains the .asnd file.

Run unzip <file_name>.asnd.

The extracted contents appear in that same folder.

Import Mixdown.wav into the latest version of Audition.

## How to import files with Files panel

### Import and manage audio files with the Files panel in Adobe Audition so media stays quick to find and organize.

Use the Files panel as a quick-access list for open audio and video files.

Note

Double-click a blank area in the file list to open the Open File dialog box quickly.

### Import files into the Files panel

Importing into the Files panel keeps the current file open in the Editor panel. This is useful while gathering assets for a multitrack session.

Use either method:

- At the top left of the Files panel, click the Import file button.

- Choose File > Import > File.

Choose an audio or video file in a suitable format.

### Insert from the Files panel into a multitrack session

Select the files to insert in the Files panel.

Note

For multiple adjacent files, click the first file in the range, then Shift-click the last one. For nonadjacent selection, use Ctrl-click (Windows) or Command-click (macOS).

Use the Insert into Multitrack button at the top of the Files panel. Then choose New Multitrack Session or an open session.

The files land on separate tracks at the current time position.

### Change displayed metadata in the Files panel

From the upper-right corner of the Files panel, click the menu icon and choose Metadata Display.

Choose the metadata fields to show, then click OK.

To reposition metadata columns, drag headers such as Name or Duration left or right.

Note

Click column headers when you need to change the file sort order.

## Extracting audio from CDs

### Extract CD tracks in Adobe Audition with Extract Audio from CD.

The Extract Audio from CD command imports audio tracks from a physical CD into Adobe Audition and gives you control over drive speed, track selection, and file naming.

Insert an audio CD into the CD-ROM drive on the computer.

Choose File > Extract Audio from CD.

For Drive, choose the drive containing the audio CD.

For Speed, select an extraction speed available for that drive. Maximum Speed usually works well; if errors occur, choose a lower speed.

Use any of these options:

- For preview playback, select the track's Play button.

- Use the checkboxes beside track numbers, or Toggle All, to include or exclude tracks.

- Edit a track name by double-clicking it.

Tip

Turn on Extract to Single File when you want one file containing every selected track.

### Configure track information and CD databases

By default, the middle of the Extract Audio from CD dialog box fills Artist, Album, Genre, and Year from the selected CD database. To change those entries, use any of these actions:

- To customize information, overwrite the existing entries.
- To restore original database information, select the Retrieve Titles icon.
- If a message reports multiple matching records, use the arrows to insert a different database record.
- To choose another database and file naming convention, select the Title Settings icon. To learn about a Title Settings option, hover over it until its tool tip appears.

Note

When Audition detects multiple Artist entries, it automatically turns on Compilation. In the Title Settings dialog box, type a Separator for Compilations character so each track's Artist and Track Title can be separated.

### Extract CD tracks with the Open command (macOS)

Open can extract tracks as AIFF files, but Audition must keep reading audio from the CD, which slows import and editing work.

Extraction through Open can hurt Audition performance significantly. Extract Audio from CD is usually the preferable command.

Insert an audio CD into the CD-ROM drive on the computer.

Choose File > Open.

Set QuickTime as the file type, then browse to the CD-ROM drive.

Choose the tracks to extract, then select Open.

## Supported import formats

### Use these Adobe Audition file formats when importing, editing, or exporting audio for different workflows.

Audition opens audio in these formats:

- AAC (including HE-AAC)
- AIF, AIFF, AIFC (including files with up to 32 channels)

The AIFF format appears in many variants. Audition supports every uncompressed AIFF file and most widely used compressed variants.

Note

Open the Metadata panel, go to the XMP tab, and read Dublin Core: Creator to find Author metadata in AIFF files.

- AC-3
- APE
- AU
- AVR
- BWF
- CAF (all uncompressed and most compressed versions)
- EC-3
- FLAC
- HTK
- IFF
- M4A
- MAT
- MPC
- MP2
- MP3 (including MP3-surround files)
- OGA, OGG
- PAF
- PCM
- PVF
- RAW
- RF64
- SD2
- SDS
- SF
- SND
- VOC
- VOX
- W64
- WAV (including files with up to 32 channels)

WAV also exists in numerous variations. Audition can read all uncompressed WAV files and most common compressed forms.

- WMA (Windows only, and enabled with DLMS Format Support in Media & Disk Cache preferences)
- WVE
- XI

### Video import formats

The Waveform Editor can open audio contained in the video formats listed below. The Multitrack Editor accepts those same file types for insertion and shows video preview in the Video panel.

Note

Install QuickTime to use these video formats. Additional imports are available when QuickTime support is extended.

- AVI
- DV
- MOV
- MPEG-1
- MPEG-4
- 3GPP and 3GPP2

Note

DLMS Format Support in Media & Disk Cache preferences enables the formats below. The preference is on by default.

- AVI (Windows only)
- FLV
- R3D
- SWF
- WMV

## Navigate time and playing audio in Adobe Audition

### Move through the timeline and control playback in Adobe Audition so audio can be previewed, reviewed, and edited accurately.

In the Editor panel, use these time-monitoring features:

- The Playhead, shown in the timeline near the top of the panel, sets where playback or recording begins.
- The lower-left time display reports the current position as numbers. Decimal is the default time format, and you can change it; the timeline uses the same format.
- For a separate time-display panel, use Window > Time.

The separate panel remains available while you edit.

Features that help you monitor time in Adobe Audition.

A. Playhead B. Timeline C. Time display

Features that help you monitor time in Adobe Audition.

### Position the current‑time indicator

In the Editor panel, use any of these methods:

Drag the Playhead in the timeline, or click the exact time position you need.

At the lower-left time display, drag over the numbers, or click and type a time.

At the bottom of the panel, choose one of these buttons:

Note

To show these transport controls in their own panel, select Window > Transport.

- Pause: Stops the current-time indicator temporarily. Select the Pause button again to continue playback or recording.
- Move Playhead to Previous: Sets the current-time indicator at the beginning of the next marker. When no markers exist, the indicator goes to the start of the waveform or session.
- Rewind: Moves the current-time indicator backward. Right-click the Rewind button to choose how quickly the cursor travels.
- Fast Forward: Moves the current-time indicator forward. Right-click the Fast Forward button to choose how quickly the cursor travels.
- Move Playhead to Next: Sends the current-time indicator to the next marker. With no markers present, the indicator goes to the end of the waveform or session.

### Preview audio by scrubbing

To scrub audio and hear playback while shuttling through a file, use any of these approaches:

Move the Playhead by dragging it.

Click Rewind or Fast Forward.

Use J, K, and L for reverse shuttle, stop, and forward shuttle. Each additional press of J or L increases shuttle speed. To change the default shuttle rate, adjust JKL Shuttle Speed in the Playback and Recording preferences.

### Play audio linearly or in a loop

Set a Playhead position in the Editor panel, or highlight a range.

Right-click the Play button at the bottom of the panel, then choose one of these options:

- Return Playhead to Start Position on Stop: Matches the playback behavior in Audition 3.0 and earlier. (Shift+X toggles this option on and off.)
- Play Spectral Selection Only: Outputs only the frequencies chosen with the Marquee, Lasso, or Paintbrush selection tools.

Use the Loop Playback button when refining a selected range or testing different effects processing.

Select the Play button to begin playback.

Tip

- By default, playback scrolls the Editor panel after it moves past the visible part of a waveform. Auto-scrolling can be turned off in the Playback and Recording section in Preferences.
- Use the spacebar for quick playback start and stop.

### Synchronize the current‑time indicator across files or views

In the Waveform Editor, the playhead position can stay consistent as you move among files, which helps when editing multiple versions of one waveform. In Multitrack Editor, the playhead position can also be kept when switching to Waveform Editor, useful when both views are part of the edit-and-effects workflow.

For Waveform Editor file-to-file playhead synchronization:

Open Edit > Preferences > General (Windows), or open Adobe Audition > Settings > General (macOS).

Enable Synchronize selection, zoom level, and playhead across files in the Waveform Editor.

For Multitrack/Waveform Editor playhead synchronization:

Open Edit > Preferences > Multitrack Clips (Windows), or open Adobe Audition > Settings > Multitrack Clips (macOS).

Enable Synchronize clips with Waveform Editor.

### Change the time display format

Select View > Time Display, then choose the option you need:

- Decimal (mm:ss.ddd): shows minutes, seconds, and thousandths of a second.
- SMPTE 59.94 fps: uses SMPTE non-drop-frame timecode, with each second equal to 30 frames.
- SMPTE 59.94 fps Drop: uses SMPTE drop-frame timecode, with each second equal to 30 frames.
- SMPTE 30 fps: uses SMPTE timecode, with each second equal to 30 frames.
- SMPTE 29.97 fps: uses SMPTE non-drop-frame timecode, with each second equal to 29.97 frames.
- SMPTE 29.97 fps Drop: uses SMPTE drop-frame timecode, with each second equal to 29.97 frames.
- SMPTE 25 fps (EBU): uses the European PAL television frame rate, with each second equal to 25 frames.
- SMPTE 24 fps (Film): uses a film-oriented time display, with each second equal to 24 frames.
- SMPTE 23.967 fps: uses a time display where each second equals 23.967 frames.
- Samples: counts time numerically from the actual number of samples elapsed since the start of the edited file.
- Bars and Beats: presents time as musical measures in bars:beats: subdivisions. To change its settings, select Edit Tempo, then set the options in the Properties panel.
- Custom (X frames per second): uses a custom time format. To change the custom format, select Edit Custom Frame Rate, then enter a frames-per-second number. Valid values are whole numbers from 2 to 1000.
- Tempo: sets beats per minute.

### Jump to time

Use the Jump to time shortcut to put focus on the timecode display, allowing you to type a time code for the playhead position. Enter timecode with these steps:

At the lower-left time display, drag over the numbers, or click and enter a specific time.

After the timecode becomes highlighted, type the exact time where the playhead should move.
