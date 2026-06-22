# Render Sequences For Playback

> Adobe Premiere Pro reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Render and export; Render a section of a sequence; Render and replace media in a sequence; Replace rendered clips with original media; Use preview files when rendering; Delete preview files; Preview on a television monitor; Play clips in Source Monitor; Play active sequence in Program Monitor; Play back in a continuous loop; Play clips with preroll and postroll; Match a frame with its source; Smart rendering supported formats.

## Render and export

### Render sequences for playback

Render a section of a sequence

Render and replace media in a sequence

Replace rendered clips with original media

Use preview files when rendering

Delete preview files

Preview on a television monitor

Play clips in Source Monitor

Play active sequence in Program Monitor

Play back in a continuous loop

Play clips with preroll and postroll

Match a frame with its source

Smart rendering supported formats

### Export files

Export video

Export a still frame

Export a still image

Export transcripts

Export caption tracks

Export selected captions

Export text from Motion Graphics

Best practices for exporting video for social media and phones

Export videos for social media channels

Export a project as an EDL file

Export a project as a Final Cut Pro XML file

Export videos with Content Credentials

Export video and audio files

Export directly to Adobe Media Encoder

Export options in Premiere

Export OMF files for Pro Tools

Supported features for exporting OMF files for Pro Tools

Quickly export a video file

Export AAF files

Supported export file formats

Create and export HDR videos for YouTube on Mac

Overview of export settings

Basic video settings

Video encoding settings

Preset Manager overview

Create and save custom presets

Manage presets

Export from Avid Media Composer to Premiere

Add Content Credentials to exported videos

### Stream video

Overview of Secure Reliable Transport

Enable Secure Reliable Transport stream

Secure reliable transport modes

SRT settings

## Render a section of a sequence

### Render a selected part of the timeline to improve playback, especially where edits are complex or effects are heavy.

Note

Hover on the work area bar to display a tool tip listing its start timecode, end timecode, and duration.

Identify unrendered sections:

Premiere shows rendering status with colored bars above the timeline:

- Red bar: an unrendered area that will probably not play smoothly.
- Yellow bar: an unrendered area that may still play in real time.
- Green bar: a rendered area that is ready for smooth playback.

Mark the range to render:

- Put the playhead at the desired render start and press I (In point).
- Put the playhead at the desired render finish and press O (Out point).

Open Sequence and choose one of these options:

- Render Effects In to Out: renders video-track sections between the In and Out points that contain a red render bar. Alternatively, use Enter.
- Render In to Out: renders video-track sections between the In and Out points that contain either a red render bar or a yellow render bar.
- Render Audio: creates a preview file for audio-track sections inside the work area.

The audio preference Render audio when rendering video lets Premiere render audio tracks each time video tracks are rendered.

For better motion quality in rendered preview files, enable Maximum Render Quality in Sequence Settings.

## Render and replace media in a sequence

### Use Render and Replace to flatten video clips and After Effects compositions so VFX-heavy sequences play with less processing demand.

Premiere tries to play sequences, clips, effects, transitions, titles, and other unrendered timeline elements in real time before any rendering is done.

Smooth playback sometimes requires media rendering, particularly in VFX-heavy sequences. Rendering unrendered timeline media lowers the amount of work demanded from available system resources.

Render and Replace in Premiere flattens video clips and After Effects compositions, which can make VFX-heavy sequences perform faster. The original clip can be brought back later with Restore Unrendered.

In the Timeline panel, open the sequence containing the media that needs rendering.

Activate the Timeline panel, select the media, and then choose Clip > Render and Replace.

In the Render and Replace dialog box, choose the format and other settings appropriate for the sequence being rendered.

Configure Render and Replace so clips render into a simpler pre-rendered format, lowering playback processing.

Configure Render and Replace so clips render into a simpler pre-rendered format, lowering playback processing.

- Source: chooses whether the new render follows sequence settings, individual clip settings, or presets.
- Format: chooses a file format that balances playback quality, render time, and file size. Available choices are QuickTime format, MXF OP1a files, and MXF OP1a files in DNXHD format.
- Preset: applies the frame size, frame rate, field type, and pixel aspect ratio from the selected preset, rendering all clips to those values. Clips are not rendered when their sources cannot be matched.

Note

Alpha support is available only with the GoPro CineForm with Alpha preset. Every other preset flattens alpha channels.

- Location: defines where the rendered file is saved. Save it beside the original media, or use Choose Location to browse somewhere other than the default.
- Include Handles: sets how many extra frames remain before each rendered clip's In point and after its Out point. Values range from 0 to 100 frames. For example, 30 keeps 30 frames before the In point and 30 frames after the Out point. Handles provide extra frames for small edit changes in the new project.
- Include Video Effects: includes clip effects in the render. With this option enabled, Premiere processes all non-intrinsic video effects on the clip. Those rendered effects still appear in the Effect Controls panel, but their settings become locked.

Select OK.

Premiere creates the rendered file in the chosen destination.

### Unsupported media types

- Still images cannot be rendered, but image sequences can.
- Most media types can be rendered, including After Effects compositions.
- Rendering and replacing is not available for special clips, synthetics, nested sequences, or adjustment layers.

### Effect handling while rendering

- Timeline rendering includes every non-intrinsic effect applied to the clip.
- When Source is set to Sequence, Intrinsic Motion effects are included even if Include Video Effects is off. Premiere does not render Audio effects, Transition effects between clips, Time Remapping effects, or Intrinsic Opacity. Once effects are rendered, they cannot be moved or edited in the Effect Controls panel.
- Audio in audio-video (AV) clips can be rendered with a suitable preset. If that preset does not support the clip's audio type, render and replace is unavailable for the AV clip. For audio-only clips, or when the audio portion of an AV clip is selected, Premiere outputs the audio clip as .wav audio files. Audio-only clips can be restored to the original unrendered media.

## Replace rendered clips with original media

### Restore a clip to its original unrendered state after rendering was used to improve playback performance.

After a clip in a sequence has been rendered and replaced, the original unrendered clip or After Effects composition can be restored at any time.

In the timeline, choose the sequence that contains the rendered clips.

Select Clip > Restore Unrendered.

Note

If the original file changes while rendered and replaced clips are in use, restoring the original clips brings in those changes.

## Use preview files when rendering

### Use preview files during export to make rendering much faster, which is especially useful for complex sequences or urgent deadlines.

Preview files are temporary render files made during editing so playback performs better. During export, those same files can prevent Premiere from rendering identical content again. Benefits include:

- Faster exports, particularly with long sequences or effects-heavy timelines.
- Consistent quality when preview settings and export settings match.
- Lower computer load because less rendering is required.

When previews are rendered, Premiere writes files to the hard disk. These preview files store the results of effects that Premiere processed for the preview. If you preview an unchanged work area again, Premiere plays the existing preview files immediately instead of processing the sequence another time. Premiere saves preview files in a folder you choose. Preview files can also shorten final export time by reusing already processed effects.

Premiere keeps existing preview files whenever it can to save more time. As you edit, preview files move with their related sequence segment. When a segment changes, Premiere trims the matching preview file automatically and preserves the part that did not change.

In Export Settings, go to the GENERAL section and enable Use Previews.

Choose Export to render directly from Premiere. Choose Send to Media Encoder when the export should go to Adobe Media Encoder.

Note

Media Encoder does not use Premiere preview files for encoding automatically. To use Premiere preview files, select Use Previews in Adobe Media Encoder for each encode.

After a project is completely finished, deleting preview files can free disk space.

## Delete preview files

### Delete temporary render files that were generated for the work area in the timeline.

With the Timeline panel active, do one of the following:

- To remove render files only for a clip range, adjust the Work Area bar so it covers only that range. Then select Sequence > Delete Work Area Render Files. Preview files are deleted when any part of their associated clip falls inside the work area.
- To remove every render file for a sequence, select Sequence > Delete Render Files.

Tip

Keyboard shortcuts can be assigned for Delete Render Files and Delete Work Area Render Files.

When the confirmation prompt appears, select OK.

## Preview on a television monitor

Any monitor connected to the computer can show the sequence. For previewing on a television monitor, the system needs video hardware with a video port that matches the monitor.

### Previewing on a television monitor via video card

Certain video cards and operating-system software can drive a television monitor separately from the computer desktop. Other setups treat a second computer monitor as a desktop extension, allowing it to serve as extra application workspace. Consult the documentation supplied with the video card and operating system.

### Preview on a television monitor via camcorder or deck

For DV projects, the sequence can be previewed on a television monitor through an IEEE 1394 connection with a camcorder or video deck.

Note

TV-monitor preview through camcorders or decks may not work in HDV mode. Use DV or Auto mode instead.

Check that the monitor is attached to the DV camcorder or deck, with the camcorder or deck also connected to the computer.

(For camcorder setup only) Configure the camcorder to send output to the monitor. Some devices do this automatically, while others require a menu option.

In the Source Monitor or Program Monitor, open the panel menu button at the upper right, select Playback Settings, and then set the desired options from the following:

- Desktop Video Display During Playback: controls whether playback appears in the Program Monitor. Deselect it to play back only through the external monitor chosen in External Device. If External Device is set to None, Desktop Video is selected so playback remains visible in the Program Monitor.
- External Device: chooses the external device used for video playback.
- Aspect Ratio Conversion: sets how pixel aspect ratio conversion is handled for DV projects.
- Desktop Audio: sends audio playback to the computer.
- External Device Audio: plays sound through the connected external audio device.
- External Device under Export: turns on export to tape for the selected device. During export, this setting does not change playback to an external device.
- Disable Video Output When Premiere is in the Background: turns off video to the external monitor when Premiere is not the active desktop application.
- 24p Conversion Method: chooses how 24p footage is converted. Learn more about setting 24p playback options.

Note

Playback on the desktop and playback on a television through a camcorder/VCR can be slightly delayed from each other. If audio and video appear out of sync, preview both through the same device.

## Play clips in Source Monitor

### Preview individual clips in Adobe Premiere with playback controls and keyboard shortcuts before adding them to sequences.

The Source Monitor is used to play individual clips before they are added to a sequence. Playback controls let you review the clip, find specific frames, and judge the footage before editing. Use the Program Monitor when you need to play sequences.

Before playback, double-click the clip from either the Project panel or Timeline panel so it loads into the Source Monitor. Click inside the Source Monitor to make it active; the blue border indicates that keyboard commands will go to that monitor.

### Play a clip using playback controls

In the Project panel, double-click a clip to open it in the Source Monitor.

Select the Play button at the bottom of the Source Monitor.

The bottom of the Source Monitor can hold customized playback controls. If a required button is missing, select the Button Editor icon at the lower-right corner and add buttons to the control bar. To create up to two rows, drag buttons from the Button Editor into the button bar.

The Button Editor adds playback controls to the Source Monitor toolbar.

The Button Editor adds playback controls to the Source Monitor toolbar.

### Navigate clips with keyboard shortcuts

For quicker playback and frame-level movement, use these keyboard shortcuts:

- Play forward: Press L one time for normal-speed playback. Press L repeatedly to raise the speed, or press Shift + L when you need a smaller speed increase.
- Play in reverse: Press J one time for standard reverse playback. Press J repeatedly to speed up reverse playback, or press Shift + J for a modest reverse-speed increase.
- Play slowly: Hold K + L to creep forward, or hold K + J to creep backward.
- Step one frame: Hold K and tap L to advance by one frame, or hold K and tap J to move back by one frame.
- Step five frames: Press Shift + Right Arrow to advance five frames, or press Shift + Left Arrow to move back five frames.

## Play active sequence in Program Monitor

### Preview assembled clips in real time in Adobe Premiere by using playback controls and keyboard shortcuts.

As you build and adjust an edit, the Program Monitor shows the active sequence from the Timeline panel. The Source Monitor plays separate clips, while the Program Monitor presents the edited sequence with edits, transitions, and effects already in place.

During editing, use the Program Monitor to check timing, pacing, transitions, and the overall sequence playback. Its transport controls work like controls on a video deck, and its buttons and keyboard shortcuts can be customized for faster playback operation. Before starting playback, make the Program Monitor the active monitor. The selected monitor is shown with a blue border.

By default, the Program Monitor places playback controls along its lower edge. To change which controls appear there, use the Button Editor icon.

### Play your sequence

Choose the Program Monitor panel so it becomes active. When it is active, a blue border surrounds the panel.

Press Space or L to start playing at the current playhead location.

In the Program Monitor, select the Play-Stop Toggle button when you want to start or pause playback of the active sequence.

The Play-Stop Toggle button in the Program Monitor also starts or pauses the active sequence.

Press Space or K when playback should stop.

For speed changes, use the J-K-L shuttle keys. J plays backward, K stops playback or changes shuttle behavior, and L plays forward. Repeating those keys raises the speed; for example, press L twice for faster forward playback, or press L and K at the same time for slow forward playback.

## Play back in a continuous loop

### Repeat playback continuously in Adobe Premiere by setting In and Out points and enabling the Loop button.

With loop playback, a chosen part of a sequence repeats without interruption so you can keep working on edits, effects, or timing without restarting playback by hand.

This mode is useful when you are changing video effects, color corrections, or audio parameters and need immediate visual or audible feedback. It also helps when refining keyframed animation or judging transition timing. Playback continues until you stop it, so you can keep adjusting interface controls, timeline edits, and metadata while the review keeps running.

If the monitor button bar does not show the Loop icon, add it through the Button Editor icon.

Use the Button Editor to place the Loop Playback button on the Program Monitor toolbar.

Add the Loop Playback button to the Program Monitor toolbar from the Button Editor.

### Enable loop playback

Move the playhead to the first frame of the range you want to repeat.

Create the In point by choosing Mark In or pressing I.

Move the playhead to the last frame of the loop range.

Create the Out point by choosing Mark Out or pressing O.

Choose the Loop icon in the monitor's button bar so playback repeats between the In and Out points.

Press Space or L to start loop playback.

The sequence then repeats from the In point through the Out point. While the loop is running, you can change effects in the Effect Controls panel, edit keyframes, type metadata, or perform other edits without pausing playback. When you are done, press Space or K to stop.

## Play clips with preroll and postroll

### In Adobe Premiere, use Play Around to preview several seconds on both sides of the playhead or edit points.

Preroll and postroll playback lets you judge timing and transitions by showing footage just before and just after selected locations in a sequence. Use it when polishing edits, testing whether cuts feel smooth, or checking In and Out point choices.

Play Around uses a set amount of time before and after the playhead, or around In and Out points. Premiere defaults to 3 seconds of preroll and 2 seconds of postroll. Change those values in Playback preferences when a different review window fits your work better.

### Preview with preroll and postroll

Place the playhead on the frame you need to inspect.

Press Shift + K to play the short range before and after the playhead.

To review an In and Out selection instead, press Shift + Space. Premiere includes the configured lead-in before the In point and the configured tail after the Out point.

The button-bar Play Around icon in the Source Monitor and Program Monitor performs the same action. If that icon is absent, add it with the Button Editor icon.

Use the Button Editor to add the Play Around button to the Program Monitor toolbar for preroll and postroll clip review.

Add the Play Around button through the Button Editor on the Program Monitor toolbar when you need preroll and postroll playback.

## Match a frame with its source

### In Adobe Premiere, find the original source clip for a timeline frame by using shortcuts or menu commands.

While editing a sequence, you can locate the source clip behind any displayed frame and load it into the Source Monitor at the matching timecode.

This workflow shows the clip that supplies the frame currently visible in the sequence timeline. The Source Monitor opens that clip on the exact frame aligned with the playhead, which helps you inspect extra handles, revise edit points, or confirm the original media. If the clip belongs to a nested sequence, choose Reveal Nested Sequence instead so the nested sequence itself opens.

### Locate the source frame

Move the playhead onto the frame you want inside a timeline clip.

Press F to load the source clip in the Source Monitor at the corresponding frame.

When the clip is inside a nested sequence, press Ctrl + Shift + T (Windows) or Shift + T (macOS) to show the nested sequence in the Source Monitor instead.

Note

When that source clip is already loaded in the Source Monitor, pressing F moves its playhead to the corresponding frame. If the Source Monitor menu contains several open clips, close the clip first so Match Frame opens a fresh instance at the intended position.

## Smart rendering supported formats

### Identify which codec and wrapper pairings allow smart rendering in Adobe Premiere exports without recompression.

Use this reference while setting up exports to check whether source footage can smart render, or while selecting capture formats for projects where smart rendering will improve the workflow.

Smart rendering skips recompression at export by passing matching source data straight into the output file. That keeps quality as high as possible and shortens export time. For smart rendering to apply, the source codec, frame size, frame rate, and bit rate must exactly match the export settings.

### MXF wrapper codecs

MXF containers can smart render with these codecs:

### QuickTime wrapper codecs

QuickTime containers can smart render with these codecs:

- Animation
- DNxHD
- GoPro CineForm
- NONE (Uncompressed RGB 8-bit)
- ProRes 422
- ProRes 422 HQ
- ProRes 422 LT
- ProRes 422 Proxy
- ProRes 4444

### QuickTime Match Source Rewrap

QuickTime Match Source (Rewrap) works with this set:

- Animation
- Apple ProRes (all 422 and 4444 variants)
- DV (25, 50, and DVCPROHD)
- GoPro CineForm
- None (uncompressed)

When source clips use codecs not included here, QuickTime Match Source (Rewrap) shows a compatibility warning and cannot be selected.

### Cross-wrapper special cases

Smart rendering can cross container boundaries for these codec and wrapper combinations:

Note

For QuickTime to MXF OP1a AVC-Intra smart rendering, the QuickTime AVC-Intra codec must be installed on the system.
