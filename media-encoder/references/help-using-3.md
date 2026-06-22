# Import Media Into Adobe Media Encoder, Log Files, File Formats Supported Export, Default Keyboard Shortcuts ...

> Adobe Media Encoder reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: How to export media from Team Projects using Adobe Media Encoder; Working with log files; Files supported for export with Media Encoder; Default keyboard shortcuts; About video and audio encoding and compression; Compression tips.

## How to export media from Team Projects using Adobe Media Encoder

Search | Last updated Mar 27, 2026 | Also applies to Adobe After Effects, Adobe Premiere

Use Adobe Media Encoder to browse team projects, then export and render their content.

In Adobe Media Encoder, choose Help > Sign In. Then sign in to Creative Cloud with your Creative Cloud Adobe ID and password.

The Media Browser lets you inspect team-project content, including nested bins and folders, in a manner similar to ordinary Premiere projects and After Effects projects.

1. Browsing Team Projects within Media Encoder
   Use the Team Projects Versions slider to view earlier versions of a team project. Tick marks along the vertical track mark those previous versions.

Move the slider to the top to see the latest version.

When Premiere or After Effects collaborators share changes, Adobe Media Encoder updates the version history in the Media Browser right away. The newest version appears at the top of the slider.

You can select team-project assets and import them into an Adobe Media Encoder queue, similar to working with projects from Premiere or After Effects.

2. Queue import

### More like this

- Getting started with Team Projects
- New features summary
- Create a team project
- Add and manage media in a team project
- Collaborate with Team Projects
- Share and manage changes with collaborators
- Archive, restore, or delete a team project

## Working with log files

Search Last updated on May 13, 2025

### Encoding log file

The encoding log is a plain-text record of every file queued for encoding, whether the job completed or not. Each encoded file's status is appended after earlier entries, placing the newest record last. Entries keep accumulating until you clear them manually. To remove log entries, open the file in a text editor, select every entry, delete the selection, and save the empty file as AMEEncodingLog.txt.

The log file lives at these locations:

- Windows 10 (v22H2 or later) and 11: C:\Users\[user]\Documents\Adobe\Adobe Media Encoder\[product version]\AMEEncodingLog.txt
- Mac OS Monterey (version 12 or later): /Users/[user]/Documents/Adobe/Adobe Media Encoder/[product version]/AMEEncodingLog.txt

To view the log file, choose File > Show Log or press Ctrl + L.

There are two log files:

AMEEncodingLog.txt: for jobs that encoded successfully.

AMEEncodingErrorLog.txt: for jobs that failed, or that the user stopped.

### Error log file

Adobe Media Encoder stores log files and error log files in the same location as its application files.

To view the error log file, choose File > Show Errors.

## Files supported for export with Media Encoder

Search Last updated on Mar 27, 2026

This reference identifies the file formats Adobe Media Encoder can export, including outputs for video, animation, and audio.

For an Adobe Media Encoder export, choose the output format in the Export Settings dialog box. That choice controls which preset options appear. Pick the format that best matches the output you need.

Adobe Media Encoder works both as a stand-alone application and as part of Adobe Premiere, After Effects, Audition, and Animate. The export formats available in Adobe Media Encoder vary according to which of those applications are installed.

Filename extensions such as MOV, AVI, and MXF identify container file formats rather than a particular audio, video, or image data format. Container files may hold data encoded through different compression and encoding methods. Adobe Media Encoder can encode video and audio for these containers when the required codecs, specifically encoders, are installed. Many codecs must be added to the operating system and operate as components inside the QuickTime or Video for Windows formats.

The available choices depend on the other software applications installed on the system.

### Video

Format/Container

Video Codec Option

Apple ProRes MXF OP1a

- Apple ProRes 422 Proxy
- Apple ProRes 422 LT
- Apple ProRes 422
- Apple ProRes 422 HQ
- Apple ProRes 4444
- Apple ProRes 4444 XQ (Windows only)

AS-10

- XDCAMHD 25/35
- XDCAMHD 50

AS-11

- AVC-Intra for HD Shim
- IMX 50 for SD Shim

AVI (Windows only)

- DV
- Intel IYUV
- Microsoft RLE
- Microsoft Video 1
- Uncompressed UYVY
- V210
- None

AVI (uncompressed) (Windows only)

- V210
- UYVY

DNxHR/DNxHD MXF OP1a

- DNxHD
- DNxHR

H.264

- Presets include support for many top social media sites
- Also includes options to create Blu-ray compliant content

HEVC (H.265)

- Supports up to 8k output

JPEG 2000 MXF OP1a

MPEG-2

- Includes options to create DVA and Blu-ray compliant content

MPEG-4

MXF OP1a

- AVC-Intra
- AVC-LongG
- DV
- DVCPRO50
- DVCPRO HD
- IMX
- XAVC Intra
- XAVC Long GOP
- XDCAMEX 18/35
- XDCAMHD 18/25/35
- XDCAMHD 50

P2 Movie

Note

Apple silicon computers do not provide P2 Movie format support.

- AVC-Intra
- AVC-LongG
- DVCPRO
- DVCPRO 50
- DVCPRO HD

QuickTime

Note

On Apple silicon computers, GoPro Cineform formats are unsupported.

- Animation
- Apple ProRes 422 Proxy
- Apple ProRes 422 LT
- Apple ProRes 422
- Apple ProRes 422 HQ
- Apple ProRes 4444
- Apple ProRes 4444 XQ (Windows only)
- DNxHD/DNxHR
- DV25
- DV50
- DVCPRO HD
- GoPro CineForm
- None
- Uncompressed RBG
- Uncompressed YUV

Windows Media (Windows only)

- Windows Media Video V7
- Windows Media Video V8
- Windows Media Video 9
- Windows Media Video 9 Advanced Profile
- Windows Media Video 9 Screen

Wraptor DCP

Note

On Apple silicon computers, Wraptor DCP formats are unsupported.

- JPEG 2000

| --- | --- |

Note

MXF serves as a container format. Adobe Media Encoder can write and export movies using the Op-Atom variety of MXF containers with the DVCPRO25, DVCPRO50, DVCPRO100, and AVC-Intra codecs. Premiere can export MXF files that contain MPEG-2 essence items compliant with the XDCAM HD format used by systems such as Avid Unity. The stand-alone Adobe Media Encoder can export that format too.

### Still image and still-image sequence formats that support match source

- Animated GIF
- Bitmap (BMP; Windows only)
- DPX
- GIF (Windows only)
- JPEG
- OpenEXR
- PNG
- Targa (TGA)
- TIFF (TIF)

Note

To export a movie as a sequence of still-image files, choose Export As Sequence on the Video tab after selecting a still-image format.

### Audio

- Advanced Audio Coding (AAC), Version 1, and Version 2
- Audio Interchange File Format (AIFF)
- mp3 format
- Waveform Audio (WAV)

### Support for web distribution

- Facebook 720HD
- Twitter 720P
- Vimeo 480p SD, 480p SD Wide, 720p HD, 1080p HD
- Web Video DG Fast Channel 480/512 MPEG-2
- YouTube 480p SD, 480p SD Wide, 720p HD, 1080p HD, 2160p 4K

### Codecs support for Adobe Media Encoder installed with other products

- With Adobe Premiere and After Effects: every codec is supported, although trial versions of Adobe Premiere and After Effects do not include HEVC.
  - AS-11 SD
  - HEVC
  - MPEG-2
  - MPEG-2 DVD
  - MPEG-2 Blu-ray
  - MXF OP1a

## Default keyboard shortcuts

Search Last updated on Dec 21, 2021

This article provides the complete keyboard shortcut list for Adobe Media Encoder.

### Application shortcuts

Result

Windows

Mac OS

Open Preferences dialog

Ctrl+,

Cmd+,

Keyboard Shortcuts dialog

Shift+Ctrl+Alt+K

Shift+Cmd+Opt+K

Quit AME

Ctrl+Q

Cmd+Q

Add Source

Ctrl+I

Cmd+I

Add watch folder

Ctrl+Alt+I

Cmd+Opt+I

Start/Pause Queue

Enter

Enter

Stop Queue

Esc

Esc

Stop Current Item

Ctrl+ - (minus)

Cmd+ - (minus sign)

Save Queue

Ctrl+S

Cmd+S

Show Log

Ctrl+L

Cmd+L

Show errors

Ctrl+Alt+L

Cmd+Opt+L

Undo

Ctrl+Z

Cmd+Z

Redo

Shift+Ctrl+Z

Shift+Cmd+Z

Redo

Ctrl+Y

Cmd+Y

Cut

Ctrl+X

Cmd+X

Copy

Ctrl+C

Cmd+C

Paste

Ctrl+V

Cmd+V

Clear

Delete

Delete

Duplicate

Ctrl+D

Cmd+D

Select All

Ctrl+A

Cmd+A

Deselect All

Ctrl+Shift+A

Cmd+Shift+A

Skip Selection

Ctrl+Shift+.

Cmd+Shift+.

Reset Status

Ctrl+.

Cmd+.

Open Export Settings dialog

Ctrl+E

Cmd+E

Restore AME preferences to default state

Hold Shift Key during launch

Hold Shift Key during launch

Launch Help

F1

F1

| --- | --- | --- |

### Preset shortcuts

Result

Windows

Mac OS

Open Preset Settings dialog

Ctrl+Alt+E

Cmd+Opt+E

Apply to queue

Ctrl+U

Cmd+U

Apply to watch folders

Ctrl+Alt+U

Cmd+Opt+U

Create Encoding preset

Ctrl+N

Cmd+N

Create Ingest preset

Ctrl+Alt+N

Cmd+Opt+N

Create preset group

Ctrl+G

Cmd+G

Create alias to preset

Ctrl+B

Cmd+B

Rename user preset or preset group

Ctrl+R

Cmd+R

| --- | --- | --- |

### Preset Browser shortcuts

Result

Windows

Mac OS

Apply preset to source in Queue

Double-Click preset

Double-Click preset

Apply preset to Watch Folder

Alt+Double-Click preset

Opt+Double-Click preset

Create alias to System preset

Drag preset

Drag preset

New preset from System preset

Alt+Drag preset

Opt+Drag preset

Create alias to User preset

Alt+Drag preset

Opt+Drag preset

Open/Close folder and all sub-folders

Ctrl+Double Click preset

Cmd+Double Click preset

Reveal System preset

Alt+Right Click preset

Opt+Right Click preset

| --- | --- | --- |

### Media Browser shortcuts

Result

Windows

Mac OS

Set In Point for selected clip

I

I

Set Out point for selected clip

O

O

Clear In & Out points

C

C

Toggle playback of selected clip

Space

Space

Fast-backward playback

J

J

Pause playback

K

K

Fast-forward playback

L

L

Slow-backward playback

Shift+J

Shift+J

Slow-forward playback

Shift+L

Shift+L

| --- | --- | --- |

### Workspace shortcuts

Result

Windows

Mac OS

Close/Open Queue panel

Ctrl+1

Cmd+1

Close/Open Encoding panel

Ctrl+2

Cmd+2

Close/Open Watch folders panel

Ctrl+3

Cmd+3

Close/Open Preset browser

Ctrl+4

Cmd+4

Close the current panel

Ctrl+W

Cmd+W

Maximize/Restore panel under cursor

`(backtick)

`(backtick)

Maximize/Restore current panel

Shift+`

Shift+`

Maximize/Restore panel under cursor (Non-English Keyboards)

<

<

Maximize/Restore current panel (Non-English Keyboards)

Shift+<

Shift+<

| --- | --- | --- |
| Close/Open Media Browser | Ctrl+5 | Cmd+5 |

Result

Windows

Mac OS

Open/close folder

Right and Left Arrows

Right and Left Arrows

Select previous/next item in list

Up and Down Arrows

Up and Down Arrows

Add previous/next item in list to current selection

Shift + Up/Down Arrows

Shift + Up/Down Arrows

Select previous/next item in list. If the selection is a folder, use Right Arrow to open it and Left Arrow to close it.

Right and Left Arrows

Right and Left Arrows

Add previous/next item in list to current selection. If the selection is a folder, use Right Arrow to open it and Left Arrow to close it.

Shift+Right and Left Arrows

Shift+Right and Left Arrows

| --- | --- | --- |

### Export Settings dialog

Result

Windows

Mac OS

Moves playhead one frame earlier/later

Left/Right arrows

Left/Right arrows

Move playhead to the start/end frame

Home/End

Home/End

Set source range In Point to playhead's current position

I

I

Set source range Out Point to playhead's current position

O

O

Move playhead to the In Point

Q

Q

Move playhead to the Out Point

W

W

Zooms in frame preview

Ctrl++(plus)

Cmd++(plus)

Zooms out frame preview

Ctrl+- (minus)

Cmd+-(minus)

Exports preset as an EPR file

Alt+Click "Save Preset" button

Opt+Click "Save Preset" button

| --- | --- | --- |

Bit rate field in Mbps:

Result

Windows

Mac OS

Increase or decrease current value by 1

Shift+Up/Down Arrows

Shift+Up/Down Arrows

Increase or decrease current value by .1

Up and Down Arrows

Up and Down Arrows

Increase or decrease current value by .01

Ctrl+Up/Down Arrows

Cmd+Up/Down Arrows

Increase or decrease current value by .001

Ctrl+Alt+Up/Down Arrows

Cmd+Opt+Up/Down Arrows

| --- | --- | --- |

| Bit rate field in Kbps: |  |  |
| --- | --- | --- |
| Result | Windows | Mac OS |
| Increase or decrease current value by 10 | Shift+Up/Down Arrows | Shift+Up/Down Arrows |
| Increase or decrease current value by 1 | Up and Down Arrows | Up and Down Arrows |
| Increase or decrease current value by .1 | Ctrl+Up/Down Arrows | Cmd+Up/Down Arrows |
| Increase or decrease current value by .01 | Ctrl+Alt+Up/Down Arrows | Cmd+Opt+Up/Down Arrows |

| Numeric field with whole numbers (ex. Frame Width setting): |  |  |
| --- | --- | --- |
| Result | Windows | Mac OS |
| Increase or decrease current value by 1 | Up and Down Arrows | Up and Down Arrows |
| Increase or decrease current value by 10 | Shift+Up/Down Arrows | Shift+Up/Down Arrows |
| Increase or decrease current value by 10 | Ctrl+Up/Down Arrows | Cmd+Up/Down Arrows |
| Increase or decrease current value by 100 | Ctrl+Shift+Up/Down Arrows | Cmd+Shift+Up/Down Arrows |

### Customize keyboard shortcuts

Choose Edit > Keyboard Shortcuts (Windows) or Application > Keyboard Shortcuts (Mac OS) to customize shortcuts in Adobe Media Encoder.

For example, use these steps to change the Cut shortcut from Ctrl+x to Ctrl+t:

1. Choose Edit > Keyboard Shortcuts.
2. In the Keyboard Shortcuts panel, open the Edit menu by selecting the disclosure control to its left.
3. Choose Cut.
4. Click next to Ctrl+x to remove the current command.
5. Click Add.
6. Press Ctrl+t.
7. Click OK.

### Keyboard Shortcuts dialog

Result

Windows

Mac OS

Expand/Collapse all categories in dialog

Alt+Click Category heading

Opt+Click Category heading

| --- | --- | --- |

## About video and audio encoding and compression

Search Last updated on May 22, 2024

Converting video and audio into a digital format requires a tradeoff among quality, file size, and bitrate. Most formats shrink file size and bitrate through compression, selectively lowering quality. Compression makes movies small enough to store, send, and play back efficiently.

For movie export intended for a particular device type and bandwidth, begin by selecting an encoder, or codec. Encoders apply different compression schemes to the source information. Each encoder pairs with a matching decoder that decompresses and interprets the data during playback.

Many codecs are available, and no one codec is ideal for every use. A codec that usually works well for cartoon animation, for instance, is often inefficient for live-action video.

Compression may be lossless, meaning image data is not discarded, or lossy, meaning selected data is removed.

Use the Export Settings dialog box to adjust many compression-related factors and other encoding settings. See Encoding and exporting.

Additional encoding and compression details are available in this FAQ entry: "FAQ: What is the best format for rendering and exporting from After Effects?"

### Temporal compression and spatial compression

Video and audio compression has two broad categories: spatial and temporal. Spatial compression works on an individual frame of data without using nearby frames. It is also commonly called intraframe compression.

Temporal compression finds changes from frame to frame and stores only those changes, so each frame is described by how it differs from the frame before it. Areas that do not change are reused from earlier frames. This approach is also commonly called interframe compression.

### Bitrate

Bitrate, also called data rate, influences both the quality of a video clip and which viewers can download it under their bandwidth limits.

For Internet video delivery, create files with lower bitrates. Viewers on fast connections can play those files with little or no delay, while viewers on slow connections must wait for downloads to complete. If you expect many viewers to have limited internet speeds, keep clips short so download times stay reasonable.

### Frame rate

Video consists of images shown rapidly in sequence on the screen, creating the impression of motion. Frame rate is the count of frames displayed each second, measured in frames per second (fps). Higher frame rates use more frames each second to present the image sequence, producing smoother movement. The quality tradeoff is that higher frame rates require more data and therefore more bandwidth.

With digitally compressed video, increasing the frame rate also increases file size. To make the file smaller, reduce either the frame rate or the bitrate. Reducing bitrate while keeping the frame rate the same lowers image quality.

Because video usually looks much better at its native frame rate, the rate at which it was originally recorded, Adobe recommends keeping the frame rate high when your delivery channels and playback platforms support it. Use 29.97 fps for full-motion NTSC video; use 25 fps for PAL video. When the frame rate is lowered, Adobe Media Encoder drops frames at a linear rate. If reducing frame rate is required, dividing evenly gives the best results. For example, with a 24 fps source, use 12 fps, 8 fps, 6 fps, 4 fps, 3 fps, or 2 fps as the reduced frame rate.

On mobile devices, choose the device-specific encoding presets in the Preset Browser panel.

Note

When you create a SWF file with embedded video, the video clip and the SWF file need matching frame rates. Playback becomes inconsistent when the SWF file and embedded video clip use different frame rates.

### Key frames

Key frames are full video frames, or images, placed at regular intervals in a video clip. Frames between key frames store information about changes occurring between those key frames.

Note

Key frames differ from keyframes, which are markers used to define animation properties at specific times.

By default, Adobe Media Encoder chooses the key frame interval, also called key frame distance, automatically from the video clip's frame rate. The key frame distance value controls how frequently the encoder re-evaluates the video image and records a complete frame, or key frame, into the file.

Footage with many scene changes, fast motion, or animation may produce better overall image quality when the key frame distance is lower. Smaller key frame distance values also create larger output files.

After lowering the key frame distance value, increase the video file bitrate to keep image quality comparable.

### Image aspect ratio and frame size

File frame size affects final video quality just as frame rate does. With bitrate held constant, a larger frame size leaves fewer bits for each pixel and lowers quality.

Image aspect ratio compares an image's width with its height. Common ratios include 4:3 (standard television) and 16:9 (widescreen and high-definition television).

### Pixel aspect ratio

Square pixels are standard in most computer graphics; their width-to-height pixel aspect ratio is 1:1.

Some digital video formats use pixels that are not square. Standard NTSC digital video (DV), for example, uses a 720x480-pixel frame and displays as 4:3. Its PAR is 0.91, describing a tall, narrow non-square pixel.

### Interlaced versus noninterlaced video

Interlaced footage builds each frame from two fields. One field carries half of the frame's horizontal lines: the upper field (Field 1) has the odd-numbered lines, while the lower field (Field 2) has the even-numbered lines. An interlaced video display, such as a television, paints a frame by drawing one field's lines and then the other field's lines. Field order determines which field appears first. In NTSC video, the screen receives new fields 59.94 times per second, yielding a frame rate of 29.97 frames per second.

Noninterlaced frames are stored without field separation. On a progressive-scan monitor (such as a computer monitor), a noninterlaced frame is drawn in one pass from the top horizontal line to the bottom one.

When an interlaced source is encoded to noninterlaced output, Adobe Media Encoder deinterlaces the video before encoding.

### High-definition (HD) video

Any video format whose pixel dimensions exceed standard-definition (SD) formats is considered High-definition (HD) video. Typical standard-definition digital formats sit close to analog TV systems such as NTSC and PAL, at about 480 or 576 vertical lines, respectively. The widely used HD sizes are 1280x720 and 1920x1080, both with an image aspect ratio of 16:9.

HD formats may be interlaced or noninterlaced. At higher frame rates, the maximum-resolution formats are usually interlaced, because progressive video at these dimensions would demand an impractically high data rate.

HD names combine vertical pixel dimensions with scan mode and the frame or field rate, depending on that scan mode. For example, 1080i60 identifies 60 interlaced 1920x1080 fields per second, while 720p30 identifies 30 noninterlaced 1280x720 frames per second. Both examples work out to a frame rate of approximately 30 frames per second.

## Compression tips

Search Last updated on Mar 27, 2026

Video compression guidance

Keep editing in the project's native video format until final delivery

Start from raw footage, or from the least-compressed version you can access. Whenever video passes through a lossy encoder, quality is reduced. A single generation of loss is often workable, but encoding and compressing material that was already compressed can push the damage past an acceptable level. Previously encoded and compressed video can also carry noise and artifacts, which may slow the next encode/compression pass or make the output file larger.

Keep the video duration as short as possible

Cut material from the start and end, and remove unneeded content during editing. See Crop and trim source before encoding.

Tune the compression settings

When compressed footage looks good, adjust settings to lower the file size. Test the footage, then keep changing compression values until you find the strongest setting for that specific video. Because each video has different attributes that affect compression and file size, each one needs its own best-fit setting. See Encoding and exporting.

Reduce fast motion

If file size matters, keep movement low. Movement of any kind raises file size; shaky camera work, rolls, and zooms cause especially poor results here. After Effects motion stabilization features can remove unnecessary movement.

Pick suitable dimensions

See Image aspect ratio and frame size.

Use a suitable frame rate

See Frame rate.

Set a suitable key-frame count

See Key frames.

Lower noise and grain

Noise and grain in source images make encoded files larger. When possible, use Adobe Premiere or After Effects tools to reduce noise and grain.

Audio compression guidance

Audio production follows the same kind of concerns as video production. For effective audio compression, begin with a source audio file that has no distortion or audible artifacts from the original recording.

When encoding material from a CD, record it through direct digital transfer instead of through a sound card's analog input. A sound card adds needless digital-to-analog and analog-to-digital conversion, which can introduce noise into the transferred audio. Direct digital transfer tools are available for Windows and Mac OS. When an analog source is unavoidable, use the best sound card available.

Note

For a monaural (mono) source audio file, encode in mono for Flash use. With Adobe Media Encoder and an encoding preset, verify whether the preset outputs stereo or mono, then choose mono if needed.
