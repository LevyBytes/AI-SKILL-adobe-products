# Correct Mistakes, Edit Vr Content

> Adobe Premiere Pro reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: View warnings, errors, and information events; View or make changes in the History panel; VR editing in Premiere; VR auto-detection; Interpret VR footage; Assign VR properties to sequences; 360-degree panning; VR assignments; Hide VR video view controls; Immersive video effects and transitions; Three-axis video rotation; Assembling Ambisonics Audio; Monitor Ambisonics audio; Restage correctly aligned video and audio; Publish VR videos.

## View warnings, errors, and information events

### Project issues in Adobe Premiere can be tracked through alerts, notifications, and the Events panel.

In Premiere, the Events panel gathers warnings, errors, and informational messages that help diagnose project problems, especially issues involving plug-ins or other third-party components.

Before you begin:

Have a Premiere project open and be actively editing.

When an event appears during editing, double-click the alert icon to display the Events panel.

In the Events panel, choose an item from the list, then select Details for additional information about that event.

Select Clear All in the Events panel to remove its entries.

If notification behavior should change, adjust it this way:

- Select Edit > Preferences > General (Windows) or Premiere > Preferences > General (macOS).
- Clear Show Event Indicator to stop notification pop-ups.
- Select OK so the preference change is saved.

Premiere uses color coding so events can be recognized quickly:

- Errors icon
- Alerts icon
- Informational messages icon

Review the Events panel from time to time so possible problems are visible before they interrupt project work.

## View or make changes in the History panel

### Use the History panel in Adobe Premiere to review and control recent edits.

The History panel in Adobe Premiere shows the editing actions taken in the current project as a visual sequence, letting you track what has happened and move through those changes.

Before you begin:

Open a project in Premiere and begin editing.

### Guidelines for using the History panel

- The History panel records both states and actions.
- An action is an individual operation or edit made in a Premiere project. Examples include cutting a clip, adding an effect, repositioning timeline content, or changing volume. After an action is performed, the History panel records it.
- A state is the project condition at one point in the edit history, including all actions completed up to that moment. Premiere adds a new state to the history list after a set of actions so that the project can return to that moment.
- Changes that apply to the application as a whole, including panel layouts, windows, and preferences, do not alter the project itself and therefore do not appear in the History panel.
- After a project is closed and opened again, earlier actions are unavailable in the History panel.

### View or make changes

Select Window > History.

The History panel opens and lists every action completed in Premiere during the current session. Earlier actions appear at the top, while newer actions appear at the bottom. Each entry uses the tool or command name that changed the project, together with an icon for that tool or command. Some operations create a separate state for each panel they affect, and edits made in that kind of panel are grouped as one History panel state.

Move through the History panel by dragging the panel slider up or down.

To undo an edit, choose its entry in the History panel. Premiere dims the states and actions beneath it and returns the project to the condition that existed just before that action.

To redo an edit, choose a dimmed entry in the History panel, and Premiere restores the project forward through that action.

To remove an edit, choose the action, select Delete Redoable Actions, and select OK. This removes that action and all later actions, returning the project to its condition before the deleted action.

To remove every action from the History panel, select the panel control and then select Clear History.

Play the video in the Program Monitor. The image reflects the adjustments made through the History panel.

## VR editing in Premiere

### Premiere supports editing for 360° video, 180° video, and VR footage.

For 360° or 180° video editing, first confirm that the computer satisfies the VR system requirements. To work with a VR headset during editing, use a supported VR headset and install the required software for it.

Premiere can display VR video, including 360° and 180° media, inside monitor panels. When a clip or sequence contains VR properties, Premiere detects them and sets up the VR viewer automatically. VR videos can also be published from Premiere directly to web destinations such as YouTube or Facebook.

Set up a 360 sequence, place the VR Viewer buttons in the Program and Source monitors, create proxies, refine cuts, and continue with the rest of the edit.

## VR auto-detection

### Adobe Premiere can identify whether a clip or sequence includes VR properties.

When VR properties exist on a clip or sequence, Premiere can detect them and configure the VR viewer automatically.

Before you begin:

Confirm that the clip added to the sequence is a VR video.

Select the clip in the Project panel, then choose File > Get Properties for > Selection.

In the Properties panel, the VR Projection option shows whether VR properties are assigned to the clip and whether the media is 360° or 180° video.

When the clip has assigned VR properties, these details are shown:

- VR Projection
- VR Layout
- VR Captured View

Premiere detects VR properties automatically and shows the results in the Properties panel.

Premiere also reports auto-detected VR properties in the Properties panel. Note

The Source Monitor and Program Monitor options for VR Video are unavailable when the content has no VR properties.

## Interpret VR footage

### Interpret VR footage in Premiere so viewing, effects, and 360° editing use the right settings.

Before you begin:

Import a VR video and verify whether VR properties are present.

Interpret the VR footage when either of these conditions applies:

- A VR clip does not contain VR Properties.
- VR Projection, VR Layout, and VR Captured View are present, but their assigned values are wrong.

Right-click the clip in the Project panel and select Modify > Interpret Footage.

Interpret Footage lets you define how Premiere reads the properties for the selected clip.

Interpret Footage is where you specify the interpretation of the selected clip's properties.

In the Modify Clip window, select VR Properties.

In the VR Properties section, set the needed options.

- Use Properties from File
- Conform to

The VR Properties section provides the controls used to interpret the VR footage.

Use the VR Properties controls to define how the VR footage should be interpreted.

Select OK.

## Assign VR properties to sequences

### Set VR properties so VR content remains correctly configured while editing.

Before you begin:

Before changing settings, confirm that the sequence media is VR video.

Select the VR sequence in the Timeline or Project panel.

Open the Sequence menu and choose Sequence Settings.

When the Sequence Settings dialog box appears, open the VR Properties tab.

Adjust the details in the VR Properties section.

The VR Properties tab shows which VR properties are available for changes required by the project.

The VR Properties tab lists the editable VR properties for the project.

- Projection - choose the projection format used to display the selected sequence. For example, Equirectangular means the clip is a 360-degree image mapped around a sphere.
- Layout - choose the VR video layout. For example, Monoscopic is used for clips with 2:1 dimensions.
- Horizontal Captured View and Vertical - set the horizontal or vertical captured view from the default degrees.

## 360-degree panning

### In Adobe Premiere, the VR dial pans continuously through 360 degrees and shows direction.

Before you begin

Enable the dial with right-click video frame > VR Video > Enable, then select Show Controls.

During playback or while playback is paused, change the view by using the dial or by double-clicking inside the video frame.

Use the dial at the bottom for continuous 360-degree panning.

The bottom dial provides continuous panning through 360 degrees.

For the standard monitor view, use the Monitor Settings menu and deselect Enable for VR Video.

Use the Toggle VR Video Display button to switch the VR video display on or off. The button can be docked with the monitor's playback buttons. To add it, select the plus icon in the lower right corner of the monitor, drag Toggle VR Video Display out of the editor, and place it in the monitor panel.

## VR assignments

### VR property assignments determine how Premiere treats VR clips when metadata is present or absent.

VR properties are assigned when those values are written into a clip's metadata as the clip is created. If no VR properties are assigned, the clip metadata contains none of those values. Premiere still uses frame dimensions to recognize VR media and interpret it this way:

- 1:1 frame size dimensions are interpreted as Stereoscopic over/under VR.
- 2:1 dimensions are interpreted as Monoscopic VR.
- 4:1 dimensions are interpreted as Stereoscopic side-by-side VR.

Note

Auto-detection works only at these frame heights: 960, 1920, 2048, 2880, 4096, 5760, 6000, and 8192.Bl

## Hide VR video view controls

### Adobe Premiere lets you hide the VR video view controls.

The VR view in the Source and Program Monitors includes scroll bars, hot-text controls for pan and tilt, and a dial for continual VR view panning. These controls can be hidden when you want more of the monitor area devoted to the video image.

Before you begin

Make sure the project contains a 360 video.

Right-click either Source or Program Monitors and choose VR Video > uncheck Show Controls from the context menu to hide the controls.

This option can also be assigned to a keyboard shortcut. Its state is maintained separately for each monitor and saved with the project.

## Immersive video effects and transitions

### Adobe Premiere includes immersive video effects and transitions.

Premiere provides multiple immersive video effects and transitions for immersive video work. To see the available items, choose Video Effects > Immersive Video or Video Transitions > Immersive Video.

Note

Every immersive video effect and transition can detect VR properties in a clip automatically.

## Three-axis video rotation

### Perform three-axis video rotation while editing VR clips in Adobe Premiere.

A single sequence can contain different resolutions along with stereoscopic and monoscopic layouts. When equirectangular VR clips are mixed together, some clips may match the sequence resolution and stereoscopic layout while others may not. Apply the VR Projection effect and select the suitable layout and video so the frame is filled correctly. You may also need to fix the zero angle when camera placement or subject focus creates an alignment problem. Correct that by rotating the video with pan, roll, and tilt controls.

This rotation can play in real time when GPU acceleration is enabled.

- For fill-frame scaling, select VR Projection > Stretch To Fill Frame in the Effects panel; this ignores aspect ratio or frame size.

Enable Stretch To Fill Frame when the clip should scale until the frame is filled.

Turn on Stretch To Fill Frame to scale the clip so it occupies the full frame.

- Select Input Auto VR Properties to use the clip's VR properties. The effect reads the properties from the source clip or nested sequence where the effect is applied. To set Input Layout, Input Horizontal FOV, and Input Vertical FOV manually, disable the Input Auto VR Properties checkbox.
- To set the stereoscopic or monoscopic layout that matches the VR Properties on the Source Clip, select VR Projection > Input Layout. Edit Input Horizontal FOV and Input Vertical FOV as needed.
- Select Output Auto VR Properties to use the values in the current sequence's settings. To define the desired output stereoscopic or monoscopic layout manually, usually matching the VR Properties on the Sequence Output Layout, edit Output Layout, Output Horizontal FOV, and Output Vertical FOV as needed.
- Use the Filtering slider to raise filtering quality. Filtering controls the count of extra samples gathered horizontally and vertically. The result is reduced aliasing artifacts. Filtering defaults to 1, which reads a total of 4 samples, comparable to bilinear filtering. Higher filtering values help most when scaling an image down.

  - Use a positive value to strengthen the stereoscopic effect and a negative value to reduce it.
  - In normal use, adjust by very small degree values, often less than a single absolute degree, although the effect supports the full - 180 to +180 degrees range.
  - This parameter is ignored when either the input layout or the output layout is monoscopic.

- For the sphere's left-to-right orientation, select VR Projection > Pan.
- For the sphere's bottom-to-top orientation, select VR Projection > Tilt.
- For counter-clockwise to clockwise orientation of the sphere, select VR Projection > Roll.

## Assembling Ambisonics Audio

### Ambisonics audio can be assembled with 360 video to build an immersive experience.

Ambisonics is a full-sphere surround sound approach used by enthusiasts, and it can represent sources above and below the listener as well as around the horizontal plane. Unlike multichannel surround formats that carry speaker signals in their channels, Ambisonics stores a speaker-independent sound-field representation called B-format. That B-format signal is decoded for the listener's speaker setup. Because of this extra stage, producers can work in source directions instead of loudspeaker positions, while listeners get substantial flexibility in both speaker layout and speaker count for playback.

Ambisonics audio can be combined with 360 video for immersive output. To verify alignment, monitor the Ambisonics audio while changing its orientation. The audio media may be stored in separate audio files, commonly uncompressed WAV with PCM encoding, or it may be included in MP4 using AAC encoding.

### Considerations when using Ambisonics audio

- Import multichannel mono media as adaptive track audio.
- VR sequence presets can be found either in the Audio Track Mixer or in the Audio Effects folder under the Audio Effects panel.
- When exporting media, choose Export Settings > H.264 > Audio is Ambisonics, then choose the needed Ambisonics setting.

Select the Audio is Ambisonics checkbox when the clip contains Ambisonics audio.

Use the Audio is Ambisonics checkbox to mark a clip as containing Ambisonics audio.

## Monitor Ambisonics audio

### Import Ambisonics media and monitor its spatial position accurately with headphones.

Note

For context on Ambisonics audio clips, review the assembly guidance and related considerations.

Create the sequence through File > New Sequence > Sequence Presets > Legacy > VR.

Choose the preset that matches the footage:

- VR > Monoscopic 29.97 > 2048x2048 - Ambisonics
- VR > Stereoscopic 29.97 > 2048x2048

Create a sequence that contains multi-channel Ambisonics audio.

On the mix track in Audio Track Mixer, apply Binauralizer - Ambisonics.

For orientation, Pan controls left-to-right movement, Tilt controls bottom-to-top movement, and Roll controls counter-clockwise to clockwise rotation.

Note

All three controls range from -180 to +180 degrees.

To monitor from another direction, select the effect's knob control and adjust the left-to-right Pan value.

At the bottom of the effect, open the control enumeration menu. Select the option that changes Tilt when listening upward or downward, or use Roll to rotate head direction clockwise or counter-clockwise.

Once the effect is applied, headphones can monitor the spatial character of the media accurately. By default, head position faces straight ahead in the audio sphere.

To monitor both 360 videos from another position, make sure you are in the VR Viewer menu and that the viewer controls are visible.

Turn the Binauralizer's Pan control until its number matches the numeric value below the VR Viewer monitor. Then turn the effect's Tilt control until it matches the numeric value to the right of the VR Viewer. You can then monitor both 360 videos.

Note

After Ambisonics audio monitoring is complete, either remove Binauralizer - Ambisonics from the Audio Track Mixer mix track or disable it there.

## Restage correctly aligned video and audio

### Reorient or restage the video and audio spheres to the correct spatial position.

Note

Review the Ambisonics-plus-360-video assembly guidance for the immersive workflow.

Create a VR sequence by importing VR video and Ambisonics audio.

On the sequence's video clip, apply Effects > VR Projection. This effect reorients the video sphere.

Use the VR Projection effect under Immersive Video effects when the video sphere needs reorientation.

The VR Projection effect in Immersive Video effects provides video-sphere reorientation.

Select the Panner- Ambisonics effect for the matching audio clip in the sequence. This effect reorients the audio sphere.

Apply the Ambisonics Panner effect to the audio clip to reorient the audio sphere.

Use the Ambisonics Panner effect on the audio clip when the audio sphere must be reoriented.

Use Effects Control > Pan, Tilt, and Roll in the VR Projection effect. Rotate the video sphere in the VR viewer until the video content is correctly positioned.

Use Pan, Tilt, and Roll in the VR Projection effect to rotate the video sphere.

The Pan, Tilt, and Roll properties in the VR Projection effect provide video-sphere rotation.

After the video is positioned, copy the same numeric values from the VR Projection effect to the Pan, Tilt, and Roll sliders in the Panner - Ambisonics effect.

## Publish VR videos

### Export VR video in the needed format and publish it to the selected platform.

Before you begin:

Make sure all VR video edits are finished and the sequence is ready to export.

After editing is complete, open the Export tab and choose the platform, such as YouTube or Facebook.

In the Settings section, choose H.264, HEVC, or QuickTime formats for video encoding.

In the Video section, scroll to Video is VR and confirm the checkbox.

Mark that the video is VR and enter the other important details before final export.

Specify that the video is VR and provide the remaining key export details.

Choose the layout that matches the media.

For the best VR video export results, use Stretch to Fill under the Scaling setting.

Select the Publish dialog to upload the video directly to platforms such as YouTube or Facebook.

Note

After upload completes, a delay may occur before the video can be played in VR mode.

For direct VR workflows, use stereo media when needed, edit sequences, apply special effects, and export properly tagged 360-degree projects for media players.
