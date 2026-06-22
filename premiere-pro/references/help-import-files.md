# Import Still Images, Import Images As Image Sequence, Import Photoshop And Illustrator Files, Resize Imported Images ...

> Adobe Premiere Pro reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Import still images; Import images as an image sequence; Import Photoshop and Illustrator files; Resize imported images; Import a Premiere Elements project; Record audio; Record a voice-over on an audio track from the Timeline; Record audio using the Audio Track Mixer; Mute input during recording; Supported file formats; Blackmagic RAW support; Import media from Firefly to Premiere on desktop.

## Import still images

### Bring individual still images, or a numbered still-image sequence, into Adobe Premiere from other Adobe applications such as Photoshop or Illustrator.

Premiere can import one still image at a time or bring in a set of still images as a sequence. Still images can also come from Adobe applications including Photoshop and Illustrator.

Imported stills use the duration defined in the Still Image preferences. You can adjust a still image's duration after placing it in a sequence. For still images and movies, the largest importable frame size is 256 megapixels, with no dimension exceeding 32,768 pixels.

### Preparing still images before importing

Before importing a still image into Premiere, prepare the file as fully as possible to reduce rendering time. Preparing it in the original application is usually quicker and simpler. Consider these steps:

- Confirm that the file format is supported by the operating system you will use.
- Set pixel dimensions to match the resolution planned for Premiere. If the image will be scaled over time, choose dimensions that retain enough detail at the largest size used in the project.
- For best results, make files at least as large as the project's frame size so Premiere does not need to scale them upward. Enlarging an image beyond its original size can reduce sharpness. If an image will be scaled up, create it at a larger frame size than the project uses. For example, when scaling an image by 200%, prepare it at twice the project frame size before import.
- Crop away image areas that should not appear in Premiere.
- To mark regions as transparent, create an alpha channel or use transparency tools in applications such as Photoshop or Illustrator.
- For final output on standard television screens, avoid thin horizontal lines, including 1-pixel lines, in images or text. Interlacing can make them flicker. If thin lines are necessary, apply slight blur so the lines appear in both video fields.
- Save the file with the correct naming convention. For example, when importing into Premiere on Windows, use a three-character filename extension.
- When preparing still images in color-managed applications such as Photoshop, choose a video-friendly color space such as sRGB or NTSC RGB to make colors appear more consistent between the source application and Premiere.

## Import images as an image sequence

### Import an animated GIF or a numbered still-image sequence into Adobe Premiere.

Premiere can import animation stored in one file, such as an animated GIF. It can also import a sequence of still-image files and combine them automatically into one video clip, with each still becoming one frame. Sequence import is useful for animations exported from applications such as After Effects as image sequences.

Set the frame rate for the still-image sequence.

Choose Edit > Preferences > Media (Windows) or Premiere > Preferences > Media (macOS).

Choose a frame rate from the Indeterminate Media Timebase menu.

Verify that every still-image filename ends with the same number of digits and uses the correct filename extension, such as file000.bmp, file001.bmp, and so on.

Choose File > Import.

Select the first numbered file, select Image Sequence, and then choose Open (Windows) or Import (macOS). With Image Sequence enabled, Premiere treats each numbered file as one frame in a video clip.

## Import Photoshop and Illustrator files

### Importing layered Photoshop files and Illustrator images.

### Import a layered Photoshop file

Premiere can import files from Adobe Photoshop 3.0 or later and from Adobe Illustrator. For layered files, you control how the layers come in. Empty transparent areas in non-flattened files stay transparent after import because that transparency is stored as an alpha channel. This makes it possible to place imported graphics over clips on other tracks without additional work.

Layered Photoshop files can be imported in several ways: selected layers as separate clips in a bin, selected layers as separate clips in both a bin and a sequence, or selected layers merged into one video clip.

Premiere can also import Photoshop files saved from Photoshop in timeline animation mode when they contain videos or animations.

Note

A layer brought individually from a Photoshop composition into Premiere may behave differently than expected.

From the original file, Premiere preserves attributes such as opacity, position, transparency (alpha channel), visibility, layer masks, adjustment layers, vector masks, layer clipping paths, clipping groups, and common layer effects. When Photoshop exports to a format that supports alpha channels, a white background exports as opaque white, while a checkerboard background exports as a transparent alpha channel.

Layered Photoshop import is a convenient way to use graphics created in Photoshop. If Premiere imports a Photoshop file as unmerged layers, every layer becomes its own clip inside a bin. Each clip name combines the layer name with the name of the file that contained it. Each layer also uses the default duration selected for still images in Preferences.

Video or animation stored in Photoshop files imports like any other Photoshop file. Each layer takes the default still-image duration, so playback after import may not match the timing in the Photoshop source. Before import, set the still image default duration to match the intended speed. For example, for a Photoshop animation made at 30 fps and a Premiere sequence also set to 30 fps, set the Premiere still image default duration to 30 frames in Preferences.

The choices in the Import Layered File dialog box control how Premiere interprets video or animation layers during import.

Selecting a Photoshop file with layers for import opens the Import Photoshop Document dialog box.

The Import Layered File menu provides these import choices:

- Merge All Layers: Combine every layer and import the file into Premiere as one flattened PSD clip.
- Merged Layers: Combine only the selected layers and import them into Premiere as one flattened PSD clip.
- Individual Layers: Bring in only the selected layers from the list, placing one clip per source layer in a bin.
- Sequence: Bring in only the selected layers, with each layer as a separate clip. Premiere also builds a sequence with each clip on its own track and places the clips in their own bin in the Project panel. When Sequence is chosen, the Footage Dimensions menu offers these choices:
- Document Size: Change the clip frame size so it matches the frame size defined in the Sequence Settings dialog box.
- Layer Size: Set each clip frame size to the dimensions of its source layer in the Photoshop file.

Note

When one layer is imported as a single clip, the Project panel name uses the layer name followed by the original filename.

### Import Illustrator images

An Adobe Illustrator still-image file can go directly into a Premiere project. During import, Premiere changes path-based Illustrator artwork into the pixel-based image format Premiere uses; this conversion is rasterization. Premiere also smooths the edges of Illustrator artwork through anti-aliasing and turns empty areas into an alpha channel so those regions are transparent.

To define the dimensions used when Illustrator artwork is rasterized, set crop marks in the Illustrator file before import.

Although Premiere merges Illustrator layers, you can still edit them by selecting the clip and choosing Edit > Edit Original.

## Resize imported images

### Resize imported images in Adobe Premiere to improve a video's visual framing.

Still images brought into Premiere often use more pixels than the video clips in the project, which can make them look cropped on the Timeline.

You can change each clip's Scale value by hand so it fits the sequence frame size, or apply Set To Frame Size to resize the image more quickly.

With Set To Frame Size, Premiere keeps the image's original pixel resolution available, so zooming in can still show the sharpest available detail.

Right-click (Windows) or Control-click (macOS) an image in the timeline.

Choose Set To Frame Size.

## Import a Premiere Elements project

### Bring a Premiere Elements project into Adobe Premiere when you want to keep editing with professional tools.

Choose File > Open Project.

Use Open Project from the File Menu to locate PREL files.

Use Open Project from the File Menu again to browse for PREL files.

Navigate to an Adobe Premiere Elements project file that uses the .prel filename extension.

Select Open.

In the Convert Project dialog box, select OK.

To make the PREL file usable in Premiere, confirm the conversion by selecting OK in the Convert Project dialog.

To convert that PREL file into a Premiere-readable format, select OK in the Convert Project dialog.

## Record audio

### Record audio in Premiere through the Track Mixer or capture a voiceover directly on the timeline.

This workflow shows how to route a microphone so voice-overs can be recorded straight into Premiere.

Premiere can record onto an audio track in a new sequence, or onto a new audio track inside an existing sequence. The recording is saved as an audio clip and placed in the project.

Before capturing audio, confirm that the computer provides sound inputs. Premiere works with ASIO (Audio Stream Input Output) devices on Windows and Core Audio devices on macOS. Many audio devices include connectors for speakers, microphone cables, and breakout boxes.

When an ASIO or Core Audio device is used for sound input, verify that the sound-device settings and input-volume controls are configured correctly. Use the operating system's help for device-specific details.

In Premiere, configure the default device choices in Audio Hardware Preferences so the correct input channel is used for recording.

After the input hardware is connected and the initial settings are in place, record audio with the Audio Track Mixer in Premiere. Its controls let you set monitoring levels.

Voiceovers can also be recorded directly to audio tracks from the timeline without using the Audio Track Mixer workflow.

Premiere creates an audio clip from the take and adds it to both the Timeline and Project panels.

### Prepare the audio input channel for recording

When a track is armed for recording, Premiere records it from the Default Device channel selected in the Audio Hardware area of the Preferences dialog box. On Windows, that dialog also has the ASIO Settings button, which enables audio inputs attached to the computer. Submix and master tracks take audio from tracks already inside the sequence; for that reason, recording controls and track input choices are not available on those tracks.

### Record audio from a microphone

When recording with a microphone, use the computer or sound-card documentation to check whether the microphone jack expects a monaural or stereo microphone.

Confirm that the Input audio device has been specified. Match the microphone to the jack, and check that the input device, whether a microphone or another audio device, is properly connected to the computer or sound card. A mono microphone used with a stereo jack, or a stereo microphone used with a mono jack, can produce noise, channel loss, intermittent sound, or silence.

If the source is a microphone, switch off the computer speakers so feedback and echo do not occur.

## Record a voice-over on an audio track from the Timeline

### Capture a voice-over from the Premiere Timeline panel onto an audio track.

Before you begin:

Make the Voice-over Record button available for direct Timeline recording to an audio track. Use this path: Timeline > Timeline Display Settings icon > Customize Audio Header > Button Editor > Microphone button > OK, then drag the Microphone button to the required audio track.

Set a specific In and Out range for inserting the audio recording.

Once the In and Out range is defined, Premiere begins the voice-over recording workflow.

A pre-roll countdown is shown as an overlay on the Program Monitor. This visual cue gives you time to get ready and start speaking. The pre-roll countdown length can be set in the Voice-Over Record Settings dialog box.

The Program Monitor shows Recording status while the voice-over on the audio track is in progress.

While that voice-over is being captured on the audio track, the Program Monitor displays the Recording status.

Recording begins automatically as the playhead arrives at the In point in the timeline.

Capture stops when the playhead reaches the Out point in the timeline. At that moment, the Program Monitor status message changes to "Finishing...".

After recording finishes, Premiere creates an audio file for the take and imports that file as a new project item in the Project panel.

## Record audio using the Audio Track Mixer

### Use Premiere recording tools to place audio in a new sequence or an existing one.

Before you begin:

Create a timeline audio track with the channel count required for the planned recording. For example, voice captured with one monaural microphone should go to a mono audio track. Every timeline track you add is also represented in the Audio Track Mixer.

Within Audio Track Mixer, click Enable Track For Recording icon (R icon) on the track connected to the audio device.

From the Track Input Channel menu, choose the recording input channel.

Either create a new sequence or record into a sequence that already exists.

Note

An existing sequence is often useful for voiceovers because you can record while watching sequence playback. For that workflow, enable Solo Track icon (S icon) in the Audio Track Mixer on the track receiving the voiceover. Selecting that icon mutes the other audio tracks.

Choose the audio track for recording, then set levels on the input device until the recording level is appropriate.

Set the Audio Track Mixer panel menu to Meter Input(s) Only so metering is limited to input from the sound card.

At the bottom of Audio Track Mixer, choose Record to switch into Record mode.

Check the input levels by playing part of the analog source, or by having the narrator speak into the microphone. Record-enabled tracks should show strong input levels without clipping.

Select the Play and Stop toggle button to begin recording. If needed while recording, move the track volume slider up for louder monitoring or down for quieter monitoring to keep the desired monitor level.

Note

When audio clips, the red indicators at the top of the VU meters illuminate. Keep the signal from becoming loud enough to clip. As a general guide, loud audio sits near 0 dB, while quiet audio is around -18 dB.

Select the Stop icon to finish recording.

Premiere places the captured audio as a clip on the audio track and as a primary clip in the Project panel. The clip in the Project panel can be selected later for renaming or deletion.

Note

Repeat this step when recording to more than one track.

## Mute input during recording

### Mute input while recording an audio file in Premiere.

Before you begin:

If speakers are attached to the computer, muting input can help stop echo or feedback.

Open the audio preferences at Edit > Preferences > Audio (Windows) or Premiere > Settings > Audio (macOS).

Enable Mute input during timeline recording.

Premiere mutes the input so extra voice or echo is not captured in the recording.

## Supported file formats

### Review current video, audio, and still-image formats supported by Adobe Premiere.

Filename extensions such as MOV, AVI, and MXF identify container formats, not necessarily the exact audio, video, or image data format inside. A container can hold data compressed or encoded in several different ways. Premiere can import these containers, but importing their contents depends on which codecs, specifically decoders, are installed.

### Supported sequence, still image, and movie sizes

- Sequence size: Video and still-image files being imported must stay within the allowed maximum dimensions. The largest sequence frame size is 10,240x8,192 pixels (width x height). If either Frame Size dimension is set above that maximum in the Sequence Settings dialog box, Premiere changes the value back to the limit.
- Still image and movie size: Still images and movies can be imported up to 256 megapixels, with no single dimension greater than 32,768 pixels. For example, 16,000x16,000 pixels is allowed, and 32,000x8,000 also works, but 35,000x10,000 pixels cannot be used.

### Supported native video and audio formats for import

Adobe Premiere works with many audio and video formats, which helps post-production projects stay compatible with current broadcast formats.

### Supported native camera formats

Premiere supports editing many native media formats from current DSLR cameras without requiring transcoding or file rewrapping.

The formats below can be imported directly and edited in Premiere. Unless another note says otherwise, the needed codecs are included with Premiere and work on both Mac OS and Windows systems.

### ARRI AMIRA camera

Premiere includes native support for the ARRI AMIRA camera and applies the appropriate color LUTs as master clips during import.

### ARRI ALEXA 35

For ARRI ALEXA 35, Premiere accepts ARRIRAW and ProRes files.

### ARRI Alexa LF footage

Premiere can import the ALEXA LF (Large Footage) file format.

### Canon XF, Canon RAW

Canon XF and Canon RAW footage can be edited natively. Supported examples include Canon Cinema EOS C300, C400, C500, EOS R5, EOS-1D X Mark III, EOS R5 Mark II, and EOS R1 cameras.

Premiere also imports and edits QuickTime formats natively, including Apple ProRes and MOV files recorded by Canon 5D and 7D cameras. Clip metadata can be used without transcoding, rewrapping, or log-and-transfer steps.

### CinemaDNG

Premiere imports and edits uncompressed CinemaDNG media from these cameras:

- Blackmagic Cinema Camera
- Blackmagic Pocket Cinema Camera
- Convergent Design Odyssey7Q

For CinemaDNG media, Source Settings provides access to metadata parameters for editing. On supported GPUs, CinemaDNG can be debayered for extreme playback performance.

### Panasonic AVC, P2 cameras

For Panasonic AVC and P2 workflows, Premiere can import and edit these camera and codec formats natively:

- Panasonic AVC Ultra
- Panasonic AVCi 200
- Panasonic AVC Ultra Long GOP (Group of Pictures)
- Panasonic P2 cameras and across multiple P2 cards

Panasonic Camera acquisition metadata can also be viewed in Premiere's Metadata panel, giving grading work an easier starting point.

Premiere exposes these fields for supported Panasonic cameras:

- Camera Manufacturer
- Camera Model
- Video Codec
- Video Bit Rate
- ISO Sensitivity
- White Balance Color Temperature
- Capture Gamma
- Capture Gamut

### Phantom Cine media

Phantom Cine media recorded on Vision Research Phantom cameras can be imported and edited natively.

### RED support

Premiere can work natively with RED Digital Cinema (R3D) footage from these cameras and codec formats:

- Color Science like REDcolor2, REDgamma2, and REDlogFilm
- RED ONE
- RED EPIC
- RED Scarlet-X cameras with support for RED Rocket
- Red Dragon including RED Dragon 6K
- RED Komodo
- RED V-Raptor XL camera
- RED V-RAPTOR [X]

Note

For RED format clips, GPU processing through OpenCL and CUDA handles debayering to improve playback speed and performance.

### Sony cameras

Premiere can use media from these Sony cameras directly, with no rewrap or transcode step:

- Sony XDCAM
- Sony XDCAM 50
- Sony XAVC
- Sony XAVC LongGOP (Group of Pictures)
- Sony XAVC-S
- Sony A7S Mark III
- Sony SStP
- Sony RAW (F65, F55, F5, FS700 cameras)
- Sony VENICE V3
- Sony VENICE V4
- Sony VENICE 2 Ver. 2
- Sony BURANO
- X-OCN (LT)
- XAVC H Intra HQ
- XAVC H Intra SQ
- XAVC H Long
- XAVC Intra
- XAVC Long

Imported clips can be browsed in the Media Browser and organized with camera metadata.

### Supported still‑image and still-image sequence file formats

Format

Details

AI, EPS

Adobe Illustrator

BMP, DIB, RLE

Bitmap

DPX

Cineon/DPX

EPS

Adobe Illustrator

GIF

Graphics Interchange Format

ICO

Icon File (Windows only)

JPEG

JPE, JPG, JFIF

PNG

Portable Network Graphics

PSD

Photoshop

PTL, PRTL

Adobe Premiere title

TGA, ICB, VDA, VST

Targa

TIFF

Tagged Interchange Format

| --- | --- |

### Supported closed captioning and subtitle file formats

Format

Details

DFXP

Distribution Format Exchange Profile

MCC

MacCaption VANC

SCC

Scenarist Closed Caption File

SRT

Subrip Subtitle format

STL

EBU N19 Subtitle File

XML

W3C/SMPTE/EBU Timed Text File

| --- | --- |

### Supported video project file formats

Format

Details

AAF

Advanced Authoring Format

AEP, AEPX

After Effects project

CHPROJ

Character Animator Project

CSV, PBL, TXT, TAB

Batch lists

EDL

CMX3600 EDLs

PREL

Adobe Premiere Elements project (Windows only)

PRPROJ

Premiere project

XML

FCP XML

| --- | --- |

### Support for growing files

Premiere supports growing files for workflows that need media to be used while it is still being written. A growing file continues to be written to disk after ingestion and increases in duration over time. Premiere refreshes the duration automatically according to a preference setting.

### Supported codecs for growing files within an MXF wrapper

- AVC-Intra Class 50/100
- IMX 30/40/50
- XDCAM HD 50/35/25/18 RDD9 (The low latency version of XDCAM HD is not supported)
- OP1B files

Media Preferences contains the controls for automatically refreshing growing files and setting the refresh frequency. The updated duration appears in the Project panel and the Source Monitor, and the refreshed duration is available for Timeline editing.

Growing files import only when Premiere can read the volume that stores them. For network storage, an unc path("//somewhere/something") is readable only when that drive is mapped("H:\somewhere\something"). After mapping, bring in the file with File > Import. The resulting clips can be edited like other clips.

## Blackmagic RAW support

### Use Blackmagic RAW with Adobe Premiere.

Blackmagic RAW, developed and supported by Blackmagic Design, is used for raw video. Several Blackmagic Design products, including cameras and recorders, create Blackmagic RAW files. Adobe video products handle Blackmagic RAW through a plugin made by Blackmagic Design.

Open the Blackmagic RAW Installer page.

Download the Blackmagic RAW installer for your operating system, then install it.

## Import media from Firefly to Premiere on desktop

For easier editing, web-generated Adobe Firefly videos can be opened directly in Premiere on desktop.

Adobe Firefly can generate AI-generated visual assets, including videos, images, and audio files. After videos are created from text prompts and images in Firefly, they can be sent straight to Premiere on desktop. That handoff removes the separate manual download and import steps.

Generate a video using Firefly or partner video models.

Hover over the generated video and select Edit > Open in Premiere desktop.

The Edit menu handoff sends the Firefly-generated video straight to Adobe Premiere for advanced editing.

That same Edit menu action passes the Firefly-generated video to Adobe Premiere so the asset can be edited further.

A new page opens and starts the transfer. Download progress is visible in the Progress sheet.

Tip

When Firefly videos are edited in Premiere through Open in Premiere desktop, they are saved automatically on the device. The storage location for these Firefly media files can also be changed.

- On macOS: Open Premiere > Settings, then locate Cloud Media Downloads.
- On Windows: Open Edit > Preferences, then locate Cloud Media Downloads.

The media appears automatically in the Firefly Downloads bin of the Project panel for the currently open Premiere project.

Note

The video sent to Premiere keeps its original Firefly resolution and quality.

After the asset shows up in the Project panel, you can drag it to the Timeline, apply effects, or sort it into bins like any other imported media.
