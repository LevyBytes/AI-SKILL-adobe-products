# Video And Surround Sound, Keyboard Shortcuts

> Adobe Audition reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Working with video applications; Importing video and working with video clips; 5.1 surround sound; Default keyboard shortcuts.

## Working with video applications

### Learn how Adobe Audition can preview video, edit related audio, and keep sound synchronized with visual material.

Send selected clips to Premiere Pro or After Effects when you need to edit them in the Waveform Editor. After saving, the project audio updates automatically.

In Adobe Premiere, choose Edit > Edit in Adobe Audition > Clip.

In After Effects, choose Edit > Edit in Adobe Audition.

### Export a multitrack mix to Premiere

Premiere and Audition can pass audio directly between sequences and multitrack sessions. Sequence markers show up in Audition, and individual tracks can stay separate to preserve editing flexibility.

Sequences and sessions move between the applications through a shared XML format, exported to a folder with any referenced audio files.

Note

To send only one mixdown file to Premiere, instead of separate tracks, use the linked-session mixdown workflow.

Multiple clips from Audition combined as stems in Premiere

Multiple clips from Audition combined as stems in Premiere

Choose Multitrack > Export to Adobe Premiere.

Enter a name and location for the exported session folder, then configure these options:

Sample Rate

By default, this matches the original sequence's sample rate. Choose a different rate when the file must be resampled for another output medium.

Export each track or bus as a stem

Turns the full timeline duration of each track into one clip and combines multiple clips when needed. Use this option when clips should extend to and align with the sequence start and end points.

Mixdown Session To

Creates one mono, stereo, or 5.1 file from the session.

Open in Adobe Premiere

Opens the sequence in Premiere automatically. Clear this option when the sequence will be edited later or moved to another computer.

Click Export.

After Premiere opens the exported XML file, whether automatically or with File > Import, the Copy Adobe Audition Tracks dialog box appears.

Use the Copy to Active Sequence menu to choose where the exported Audition tracks should start. New tracks are placed below the existing tracks.

Note

Premiere can also send an audio sequence to Audition for editing.

### Link sessions to exported mixdown files

To build layered video soundtracks that remain easy to revise, connect multitrack sessions with exported mixdown files. Selecting those exported files in an application such as Premiere lets you remix them or edit them in Audition. Repeat the process as the video project changes to produce the final soundtrack.

### Embed edit-original data in exported mixdown files

Open the multitrack session.

With the multitrack session open, choose Edit > Preferences > Markers & Metadata (Windows) or Adobe Audition > Settings > Markers & Metadata (macOS).

Enable Embed Edit Original link data in multitrack sessions.

When exporting mixdowns, enable Include markers and other metadata.

### Edit a mixdown file via a video application

In the video application, select a mixdown file exported from Adobe Audition.

Choose Edit > Edit Original.

Choose one of these options, then select OK:

Open The Audition Multitrack Session That Created The File

Open The File In The Audition Waveform Editor

Use the Multitrack Editor to remix the linked session, or use the Waveform Editor to edit the mixdown file.

To replace the original file used by the video application, do one of these:

In the Multitrack Editor, choose File > Export > Multitrack Mixdown, then enter the original file's same name and location.

In the Waveform Editor, choose File > Save.

## Importing video and working with video clips

### Learn how Adobe Audition imports video, synchronizes audio with video clips, previews frames, and configures video playback settings.

### Insert a video file into a multitrack session

Inside the Multitrack Editor, video files can be inserted so the session lines up precisely with a video preview. The inserted file's video clip is placed at the top of the track display, with its audio clip on the track beneath it.

A video clip can be moved separately from the audio clip that contains the original soundtrack. To keep the pair in sync while moving them, first select both clips with Ctrl-click (Windows) or Command+click (macOS).

Place the current-time indicator at the wanted insertion point in the Multitrack Editor.

Select Multitrack > Insert File, then choose a supported-format video file.

After the video's audio mix is finished, export a mixdown and import it into the video application.

Note

- For quick audio editing from a video file, select File > Open. This works well for soundtrack edits that do not need a video preview, or for repurposing soundtracks for audio-only media such as radio or CD.
- A session can include only one video clip at a time.

### Snap to frames in a video clip

To align a multitrack session with video, set audio clips and the current-time indicator to snap to frame boundaries.

From View > Time Display, choose the SMPTE time format that matches the clip's frame rate.

Enable Edit > Snapping > Snap To Frames.

### Spot video frame preview while adjusting audio clip

When you add or reposition audio clips on a timeline, the Video panel shows the frame currently under the playhead so dialogue, sound effects, and musical crescendos can be lined up accurately. The timeline marks the active spotting point with a blue dotted line. Enable it here:

- Preferences > Video > Spot video frame when adjusting audio clip.

### Customize the Video panel

Use the Video panel to watch clips during multitrack playback and line up the soundtrack with video events such as scene changes, title sequences, or special effects.

Note

Hide or reveal the Video panel with Window > Video.

Right-click the Video panel and choose one of these options to adjust it:

- Scaling: changes preview magnification.
- Best Fit: resizes previews to match the panel bounds.

### Timecode overlay

Timecode Overlay places the current time display string over the Video panel and the video full-screen monitor. To configure the feature:

Choose Adobe Audition > Preferences > Video, or right-click the Video panel and choose Video Preferences.

In that window, adjust these settings:

- Enabled: turns the video timecode overlay on or off.
- Size: changes how large the timecode appears.
- Background Opacity: controls the opacity behind the displayed timecode.
- Position: places the timecode where you prefer.
  - Session: uses the multitrack session start time.
  - Media: uses the media's internal time code.

Once enabled, the overlay appears in the Video panel.

## 5.1 surround sound

### Create 5.1 surround mixes in Adobe Audition

Adobe Audition can work with 5.1 surround sound: five speakers plus one low frequency subwoofer (LFE). For reliable monitoring, the computer needs a sound card with at least six outputs, and Audition must map those outputs to the correct surround channels.

Choose Edit > Preferences > Audio Channel Mapping (Windows) or Adobe Audition > Settings > Audio Channel Mapping (macOS).

Assign every 5.1 channel to a sound card output:

L: Front left speaker.

R: Front right speaker.

C: Front center speaker.

LFE: Subwoofer

Ls: Left surround speaker.

Rs: Right surround speaker.

Learn how to configure audio inputs and outputs.

### Edit 5.1 surround files

The Waveform Editor uses the same editing toolset for 5.1 surround files as for mono and stereo material.

To edit only certain 5.1 channels, check the channels you want included.

### Pan tracks in a 5.1 surround mix

Open or create a 5.1 multitrack session.

Open the Track Panner with either method:

Select Window > Track Panner. Afterward, click the target mono or stereo track in the Editor panel.

As another route, double-click the surround plot for a mono track or stereo track in the Editor panel or Mixer panel.

Note

Panning is available for mono and stereo tracks only, not 5.1 tracks. Use the Waveform Editor when a 5.1 file needs relative channel-volume changes.

Double-click a surround plot to open the Track Panner

Double-click a surround plot to open the Track Panner

In the Track Panner, use any of these controls:

Click the L, C, R, Ls, and Rs buttons to turn channels on or off. Click LFE Only when the signal should go only to the subwoofer.

Drag inside the large surround plot to reposition the signal.

While dragging, white lines from the speakers grow or shrink to show signal power. Behind them, green and purple regions show the left and right stereo image locations, and blue regions show their overlap.

Under the surround plot, configure these options:

Angle

Indicates the perceived source position in the surround field. For example, -90° means straight left, and 90° means straight right.

Stereo Spread

Sets the distance between stereo audio tracks; zero and -180° give minimum separation, while -90° gives maximum separation.

Radius

Sets how broadly the sound occupies the surround field. For example, 100% creates a focused sound that comes from very few speakers, while 0% creates a diffuse sound from all speakers.

Center

For front-panned tracks, sets the Center channel level as a percentage relative to the Left and Right level.

LFE

Sets the signal level routed to the subwoofer.

To pan another track, select it in the Editor panel. The Track Panner updates to show that track's own settings.

Note

For panning surround tracks dynamically over time, learn more about automatic track settings.

### Pan sends to a 5.1 bus track

Create a 5.1 bus track in the Multitrack Editor.

For an audio track, open the send output menu and choose the 5.1 bus track.

The Sends area of the Editor and Mixer panels then shows a surround plot. Double-click the plot to open the Track Panner for that send.

## Default keyboard shortcuts

### Use Adobe Audition default shortcuts for playback, zooming, editing, and mixing audio.

### Keys for playing and zooming audio

Adobe Audition provides many shortcuts; this partial list covers commonly used playback and zoom commands. For the complete shortcut set, open Edit > Keyboard Shortcuts.

Result

Windows shortcut

macOS shortcut

Toggle between Waveform and Multitrack Editor

1

1

Start and stop playback

Spacebar

Spacebar

Move current-time indicator to beginning of timeline

Home

Home

Move current-time indicator to end of timeline

End

End

Move current-time indicator to the previous marker, clip, or selection edge

Ctrl+Left Arrow

Command+Left Arrow

Move current-time indicator to next marker, clip, or selection edge

Ctrl+Right Arrow

Command+Right Arrow

Toggle preference for Return CTI To Start Position On Stop

Shift+X

Shift+X

Zoom in horizontally

=

=

Zoom in vertically

Alt+=

Option+=

Zoom out horizontally

-

-

Zoom out vertically

Alt+minus sign

Option+minus sign

Add marker

M or \* (asterisk)

M or \* (asterisk)

| --- | --- | --- |
| Move to the previous marker | Ctrl+Alt+Left Arrow | Cmd+Option+Left Arrow |
| Move to the next marker | Ctrl+Alt+Right Arrow | Cmd+Option+Right Arrow |

### Keys for editing audio files

Scope: Waveform Editor only.

Result

Windows shortcut

macOS shortcut

Repeat the previous command (opening its dialog box and selecting OK)

Shift+R

Shift+R

Repeat the previous command (opening its dialog box but not selecting OK)

Ctrl+R

Command+R

Open the Convert Sample Type dialog box

Shift+T

Shift+T

Capture a noise reduction profile for the Noise Reduction effect

Shift+P

Shift+P

Activate the left channel of a stereo file for editing

Up arrow

Up arrow

Activate the right channel of a stereo file for editing

Down arrow

Down arrow

Make the spectral display more logarithmic or linear

Ctrl+Alt+up or down arrow

Option+Command+up or down arrow

Make the spectral display fully logarithmic or linear

Ctrl+Alt+Page Up or Down

Option+Command+Page Up or Down

Increase or decrease spectral resolution

Shift+Ctrl+up or down arrow

Shift+Command-up or down arrow

| --- | --- | --- |

### Keys for mixing multitrack sessions

Ctrl+shift-click

Command+Shift-click

Adjust knobs in large increments

Shift-drag

Shift-drag

Adjust knobs in small increments

Ctrl-drag

Command-drag

Nudge the selected clip to the left

Alt+comma

Option+comma

Nudge the selected clip to the right

Alt+period

Alt+period

| Result | Windows shortcut | macOS shortcut |
| --- | --- | --- |
| Select the same input or output for all audio tracks | Ctrl+shift-select | Command+Shift-select |
| Activate or deactivate Mute, Solo, Arm For Record, or Monitor Input in all tracks |  |  |
| Nudge the selected clip up | Alt+up arrow | Option+up arrow |
| Nudge the selected clip down | Alt+down arrow | Option+down arrow |
