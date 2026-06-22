# Creating Remix, Multitrack Editor Overview, Basic Multitrack Controls, Multitrack Routing Eq Controls ...

> Adobe Audition reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Creating remix; Multitrack Editor overview; Basic multitrack controls; Multitrack routing and EQ controls; Arrange and edit multitrack clips with Audition.

## Creating remix

### Create remixes in Adobe Audition by automatically rearranging music to fit a chosen duration.

Audition can create remixes from music files in a collection. This is useful for songs that evolve from beginning to end because it can reduce abrupt dynamics or tempo changes. Any music piece in the collection can be recomposed to match the length of a video or project.

Remix analyzes the song with beat detection, content analysis, and spectral source separation to locate hundreds of possible transition points. It then rearranges passages into a new composition.

### Creating a remix

Begin by adding a clip to a multitrack session, or create the multitrack session first.

Enable remix for the clip by using one of these methods:

- From the menu bar, choose Clip > Remix > Enable Remix.
- Open the clip context menu, then choose Remix > Enable Remix.
- With the clip selected, go to the Properties panel's Remix group and click Enable Remix.

Resize the clip to the target duration with one of these methods:

- Drag the clip-edge handles until the clip reaches the required length.
- Change the value in Target Duration in the Remix group.

Open the Advanced section under Remix in the Properties panel to fine-tune the remix. The options are:

Stretch to exact duration: enables time-stretching on the remixed clip so it matches the target duration exactly.

Edit Length:

Short: Short creates shorter segments and more transitions. This choice fits songs that change from beginning to end because it reduces sudden dynamics or tempo changes.

Long: Long searches for the longest passages and uses the fewest segments so transitions are minimized.

Features:

Timbre: Timbre gives tonal qualities more weight when finding transition points.

Harmonic: Harmonic gives melodic and harmonic elements more weight in transition points.

Minimum Loop: Set the minimum segment length that can be used, measured in beats.

Maximum Slack: Set the greatest allowed deviation from the target duration.

To turn off remix and bring back the original clip, choose Clip > Remix > Revert Remix.

## Multitrack Editor overview

### Review the Multitrack Editor basics in Adobe Audition, including the interface, track structure, and tools used to build and mix complex audio projects.

The Multitrack Editor lets you combine several audio tracks into layered soundtracks and detailed musical compositions. Sessions can contain unlimited recorded or mixed tracks, and each track may hold as many clips as needed, constrained only by disk space and processing capacity. After the mix is ready, export a mixdown file for CD, web delivery, or other uses.

Because the Multitrack Editor is a flexible real-time editing workspace, playback can continue while settings change and the results can be heard immediately. While monitoring a session, for example, adjust track volume to blend tracks correctly. Edits remain impermanent and nondestructive. If the mix sounds wrong later, even next week or next year, return to the original source files and remix them, adding or removing effects to create other sonic textures.

Audition stores source-file details and mix settings in session (.sesx) files. These session files stay small because they hold only source-file pathnames and references to mix parameters, including volume, pan, and effect settings. To manage session files more easily, save each one in a dedicated folder alongside the source files it references. If the session must move to another computer later, move that dedicated session folder.

### Editing multitrack sessions in the Editor and Mixer panels

In the Multitrack Editor, the Editor panel contains tools for mixing and editing sessions. Track controls on the left change track-specific settings, including volume and pan. The timeline on the right is where clips and automation envelopes are edited for each track.

Adobe Audition Multitrack Editor, Editor panel view.

A. Track controls B. Zoom navigator C. Vertical scroll bar D. Track

Adobe Audition Multitrack Editor, Editor panel view.

The Mixer presents the same session in another form, showing many more tracks and controls at once without displaying clips. For large sessions with many tracks, the Mixer is especially useful.

Mixer controls for large multitrack sessions.

A. Inputs B. Outputs C. Effects D. Sends E. Equalization F. Automation Mode G. Volume

Mixer controls for large multitrack sessions.

### Select ranges in the Multitrack Editor

In the toolbar, select the Time Selection Tool .

In the Editor panel, use one of these actions:

- To select a range only, click an empty area in the track display and drag left or right.
- To select both a range and clips, click the middle of a clip and drag a marquee.

### Customize start offset and time display for multitrack sessions

In the Editor panel, click an empty area in the track display so no clips remain selected.

Select Window > Properties.

In the Properties panel, set these options:

- Start Time: applies a start-time offset so Audition audio can align with the time shown in video applications.
- Time Display: customize Time Display settings for the active session by setting Time Format and Custom Frame Rate.

## Basic multitrack controls

### Manage, organize, and adjust tracks with the Multitrack Editor in Adobe Audition.

Multitrack sessions can use four track types:

A session can contain one Video Track with one imported clip at a time; preview it through Window > Video.

Audio Tracks contain clips imported into the session or recorded there, and they include extensive controls for input and output choice, effects/EQ, send and bus routing, and mix automation.

Bus tracks gather output from multiple audio tracks or sends so those signals can be controlled together.

The Mix Track, placed last in every session, combines output from multiple tracks and buses and provides one fader for controlling them.

Learn more about routing audio to buses, sends, and the Mix track.

### Track configuration

Multitrack sessions can contain unlimited mono, stereo, and 5.1 tracks. Select the configuration that matches the intended final output:

Mono: Recordings with one channel, such as one microphone

Stereo: Playback on the standard two channels

5.1 surround: Immersive multi-channel audio

Use the Editor or Mixer panel meters to identify track channels:

A. Mono B. Stereo C. 5.1

Use the Editor or Mixer panel meters to identify track channels:

Waveforms can also be converted among surround, stereo, and mono formats.

### Add or delete tracks

Note

Only one video track is supported in a multitrack session, and Adobe Audition always places it at the top of the Editor panel.

### Add track

Add a track as follows:

- Use Multitrack > Tracks > Add [Track Type].
- Select a track, then add the new track above the selection.

### Add multiple tracks

To add multiple tracks:

- Select Multitrack > Add Tracks.
- Specify the track type and the number of tracks to add.

### Delete track

To delete a track:

- Choose the track you want to delete.
- Select Multitrack > Track > Delete Selected Track.

### Delete empty tracks

To delete all empty tracks in one step, select Multitrack > Delete empty tracks.

Note

Audio and video files can also be inserted into a multitrack session.

### Rename and organize tracks

Use track names for easier identification, or reposition tracks so related tracks appear together.

### Rename a track

- In the Editor or Mixer panel, fill in the text box with the track name.

Editor panel name text box

Editor panel name text box

### Move a track

- In the Editor panel, drag the track upward or downward.
- In the Mixer panel, reposition the track by dragging left or right.

Moving a track in the Editor panel

Moving a track in the Editor panel

### Show or hide tracks

During Multitrack editor work, manage track customization from the Tracks panel. The panel lets you decide which project tracks stay visible and which ones are hidden.

- Open the Tracks panel by selecting Windows > Tracks.

Tracks panel

Tracks panel

Track Visibility shows the presets available for tracks. Open Track Visibility options with one of these paths:

- Tracks panel route: choose Tracks pop-up window > Track Visibility.
- Editor panel route: choose Editor pop-up window > Track Visibility.
- Main menu route: choose Multitrack > Track Visibility.

Track visibility options

Track visibility options

Create custom presets by selecting Track Visibility > Save > Preset. You can store up to nine presets. Use the eye icon to hide tracks. One indicator marks a visible track, and the other marks a hidden track.

### Vertically zoom tracks

The vertical Zoom controls in the lower-right corner of the Editor panel zoom every track together. For sessions with many tracks, individual track zooming is usually more practical.

- In the track controls, drag a track's top or bottom border upward or downward.

Note

For fast zooming across all tracks, place the pointer over the track controls and roll the mouse wheel. To resize all track controls horizontally, drag the right border.

Note

See Zoom audio in the Editor panel for more detail.

### Mute and solo tracks

Soloing a track isolates it from the rest of the mix, while muting a track silences it in the mix.

- Mute a track by clicking the Mute button in the Editor or Mixer panels.
- Solo a track by clicking the Solo button in the Editor or Mixer panels. To clear Solo mode from other tracks automatically, Ctrl‑click (Windows) or Command-click (macOS).
- For default exclusive solo behavior, use Track Solo: Exclusive under the Multitrack section of the Preferences dialog box. That preference does not change bus behavior: soloing a bus always puts assigned tracks into Solo mode.

### Apply an identical setting to all tracks

Several settings can be applied across an entire session at once to speed up setup.

- Hold Ctrl+Shift (Windows) or Command+Shift (macOS), then choose one setting for any track: Input, Output, Mute, Solo, Arm For Record, or Monitor Input.

Tracks can also receive audio input and output assignments, and the Multitrack Editor can record audio clips.

### Set track output volume

Individual track output volume can be adjusted from either the Editor panel or the Mixer.

In the Editor panel, drag the Volume knob. Hold Shift for coarse changes; hold Ctrl (Windows) or Command (macOS) for finer changes.

In the Mixer, drag the track fader, or click above or below it to step to the next tick mark. For an exact fader target, use Alt‑click (Windows) or Option-click (macOS) at the desired spot above or below the fader.

Note

Reset knobs and faders to zero (unity gain) by Alt‑clicking (Windows) or Option-clicking (macOS) directly on them.

### Pan tracks in stereo

- For stereo panning, drag the Pan knob in the Editor or Mixer panel.
- Hold Shift for larger changes; hold Ctrl (Windows) or Command (macOS) for small-step changes.

Note

Audition's Multitrack Editor uses equal-power panning, which keeps perceived loudness consistent by slightly raising one channel relative to the other. Change Panning Mode in the Multitrack preferences to adjust that boost or to use logarithmic panning, which attenuates one channel instead.

### Duplicate tracks

Duplicate a track when you want the same clips, effects, EQ, and automation available for testing and comparison.

Choose a track in the Editor or Mixer panel.

Choose Multitrack > Track > Duplicate Selected Track.

### More like this

- Save and export files in Adobe Audition
- Automating mixes with envelopes
- Track routing and EQ controls
- Automating track settings
- Applying effects in the Multitrack Editor

## Multitrack routing and EQ controls

### Route tracks and apply EQ controls in the Multitrack Editor so complex Audition mixes can be shaped and managed effectively.

In Audition, Multitrack routing and EQ controls determine signal flow through a session and the sound of each track in the mix. Use these controls to choose inputs and outputs, send signals through buses and sends, and tune frequency balance track by track.

Showing and hiding sets of audio track controls

A. Editor panel B. Mixer

Showing and hiding sets of audio track controls

Use either approach for the multitrack routing controls:

- On the Mixer's left edge, click the Show/Hide triangle for each set of controls you want to show or hide.
- Use the Editor panel's upper-left buttons for Inputs/Outputs, Effects, Sends, or EQ.

To expose more or less detail in the Editor panel's track controls, drag their right or bottom border. Tracks can also be vertically zoomed.

### Assign audio inputs and outputs to tracks

Use the Inputs/Outputs area of the Editor or Mixer panels for these assignments:

Choose an input from the Input menu.

Choose Bus, Mix, or a hardware output from the Output menu.

Note

Audio Hardware preferences determine which hardware ports appear in the available-port list.

### Invert the polarity of an input

Out-of-phase stereo inputs, such as overhead drum microphones, can sound dull and make the stereo image narrower. Correct that issue by reversing the polarity of one input.

In the Mixer's Input Controls area, click the Polarity Reverse button.

Note

For background on audio phase, learn how sound waves interact.

### Routing audio to buses, sends ,and the Mix Track

Buses, sends, and the Mix Track route outputs from multiple tracks into a shared set of controls. These combined controls help you organize and mix a session efficiently.

Note

For saving an audio, bus, or Mix Track output as a file, see how to export multitrack mixdown files.

An example of audio routing for tracks

A. Vocal B. Reverb bus receiving vocal and guitar sends C. Guitar D. Drums bus combining drum outputs E. Bass outputting direct to hardware F. Mix Track G. Hardware outputs

An example of audio routing for tracks

Understanding bus tracks

Bus tracks collect outputs from multiple audio tracks or sends so their combined signal can be controlled together. For example, when one fader should set the level for several drum tracks, route all of those tracks to a bus. For better system performance, place one reverb effect on a bus track, then route sends from multiple tracks into that bus. Applying that same reverb separately to each track would waste CPU resources.

Bus tracks do not have a hardware input, but they retain the other capabilities of audio tracks. You can use effects, equalization, and automation changes over time. In most mixes, buses output to hardware ports or the Mix Track. When buses need to be combined, they can also output to other buses.

An example of bus routing:

A. Drum kit bus B. Hand drum bus C. Combined drums bus outputting to either the Mix track or hardware

An example of bus routing:

Understanding sends

Sends route audio from one track to multiple buses, giving the session broad signal-routing flexibility. Each track includes up to 16 sends, and each send is configured independently of the track output. For example, the unprocessed track can output directly to a hardware port, while Send 1 feeds a reverb bus and Send 2 feeds a headphone bus. A headphone bus gives performers their own recording mix; a drummer, for example, may want the bass track louder.

Sending tracks to multiple buses

A. Send 1 outputs to delay bus B. Send 2 outputs to reverb bus C. Mix track combines vocal, guitar, delay, and reverb outputs

Sending tracks to multiple buses

Understanding the Mix track

Every session includes one Mix Track, which gathers outputs from multiple tracks and buses under a single fader. Because it sits at the end of the signal path, the Mix Track provides fewer routing choices than audio and bus tracks. The Mix Track cannot connect directly to audio inputs, and it cannot output to sends or buses; it outputs only to hardware ports.

### Set up a send

When configuring a send, set the volume and stereo pan that feed the assigned bus. Also decide whether the send is pre‑fader or post‑fader. Track volume does not affect pre‑fader sends, but it does affect post‑fader sends. For example, a pre‑fader send routed to a reverb bus keeps the reverb audible after the dry signal fades out. A post‑fader send instead makes the reverb fade with that dry signal.

Pre‑ and post‑fader effect and send routing for each track

A. Input B. EQ C. Track volume D. Track mute E. Send F. Effects Rack

Pre‑ and post‑fader effect and send routing for each track

In the Sends area of the Mixer, click the Power button.

Click the Pre‑Fader/Post‑Fader button to place the send before the track volume or after it.

Adjust send Volume and Pan.

Choose a bus in the Send drop-down list.

See Insert effects before or after sends and EQ for more information.

### Equalize tracks

Each Multitrack Editor track has its own parametric EQ. Use the EQ section in either the Editor or Mixer panel for these controls:

Double-clicking the graph opens the Track EQ window for detailed controls.

Use the Power button to compare audio with EQ engaged and bypassed.

## Arrange and edit multitrack clips with Audition

### Arrange and edit clips in the Multitrack Editor to organize timelines and refine Audition audio projects efficiently.

Inserted audio files become clips on the selected track in the Multitrack Editor. Clips can be moved among tracks or to different timeline positions. Their edits are nondestructive, so you can trim starts and ends, crossfade against other clips, and make additional changes without altering the source.

Arrange clips in the Editor panel with the Move or Time Selection tools.

### Select and move clips

Use these actions:

- Select one clip by clicking it in the Editor panel.

- Select all clips in selected tracks with Edit > Select > All Clips In Selected Track.

- Select every clip in the session with Edit > Select > Select All.

- Move selected clips by choosing the Move tool in the toolbar and dragging the clips. Another option is Clip > Nudge Right or Nudge Left, which shifts clips one pixel at a time. When zoomed in enough to show individual samples, each nudge moves by one sample.

Note

With the Time Selection tool, move clips by right‑clicking and dragging, matching the technique used by the Hybrid tool in earlier versions. You can also drag the clip header with any tool.

### Snap to clip endpoints

Snapping helps align clips against other clips. When it is enabled, dragged clips and the current-time indicator snap to selected targets. As you drag a clip, a white line appears in the Editor panel where snap points meet.

Click the Toggle Snapping icon at the Editor panel's top edge to enable snapping for selected items.

Choose Edit > Snapping > Snap To Clips.

For more information, see Snap to loop beats and Snap to markers, rulers, frames, and zero crossings.

### Overlapping Clips

When clips overlap without a crossfade, playback comes only from the top-most clip.

Change clip order with either method:

• From the clip section of the main menu, select Bring Clip to Front or Send Clip to Back to rearrange the selected clip. • From the clip context menu, select Bring Clip to Front or Send Clip to Back to rearrange the clip. If one clip covers other clips, the Bring Clip to Front sub-menu lists the hidden clips by start time so you can bring them forward.

Clip context menu

Clip context menu

### Copy a clip

Copied audio clips come in two forms: reference copies that share source files and unique copies that use independent source files. Choose the copy type according to available disk space and the destructive editing you plan to do in the Waveform Editor.

Reference copies require no extra disk space and let edits to the original source file update every instance at once. For example, adding the Flanger effect to a source file in the Waveform Editor automatically applies that effect to all 30 referenced copies in a session.

Unique copies are stored as separate audio files on disk, so each version can be edited independently in the Waveform Editor. For example, destructive effects can be added to the introduction version while the verse version remains dry.

Note

For a quick reference copy, press Ctrl + C (Windows) or Cmd + C (macOS). Another option is Alt-drag (Windows) or Option-drag (macOS) on the clip header.

Select the Move tool from the toolbar, then right‑click and drag the clip.

Note

With the Time Selection tool, copy by right‑clicking and dragging the clip header, using the same style as the Hybrid tool technique in earlier versions.

Release the mouse button. Pop‑up menu options:

- Copy Here (to copy a reference)

- Copy Unique Here

### Trimming and extending clips

Trim or extend audio clips so they fit a mix. Since the Multitrack Editor is nondestructive, clip edits remain temporary and the original, unedited clip can be restored at any time. For permanent changes to an audio clip, send the source file to the Waveform Editor. The two editors can also be compared.

### Remove a selected range from clips

On the toolbar, select the Time Selection tool .

Drag through one or more clips so both the clips and a time span are selected, then use one of these choices:

- To cut that span out of the clips while preserving a gap in the timeline, choose Edit > Delete.

Selected Clips

Deletes the selected clips and shifts the remaining clips on those same tracks.

Time Selection in Selected Clips

Deletes the selected span from the chosen clips, splitting clips when needed.

Time Selection in All Tracks

Deletes the selected span from every clip in the session.

Time Selection in Selected Track

Deletes the selected span only from the track currently highlighted in the Editor panel.

### Collapse a gap between clips on a track

Right-click the blank space between the clips, then choose Ripple Delete > Gap.

### Trim or extend clips

To repeat a clip, right-click the clip and choose Loop.

In the Editor panel, move the pointer to the clip's left or right edge. When the edge‑dragging icon  appears, drag the clip edge.

Drag clip edges.

Clip > Trim provides three parameters.

Trim to time selection

To keep only part of the clip, select that part and choose Trim to time selection.

Trim In Point to Playhead

Move the playhead to the desired starting point, then choose this option to trim the clip start.

Trim Out Point to Playhead

Move the playhead to the desired ending point, then choose this option to trim away audio after that point.

### Shift the contents of a trimmed or looped clip

Slip editing moves the media inside a trimmed or looped clip while the clip edges stay fixed.

Shift clip contents within clip edges

Shift clip contents within clip edges

On the toolbar, select the Slip tool  .

Drag through the clip.

### Permanently edit a clip’s source file in the Waveform Editor

Use a double‑click on the clip header.

### Split clips

Splitting audio clips creates separate clips that can be moved or edited independently.

Split clips with the Razor tool

On the toolbar, hold down the Razor tool , then choose one of these items from the pop-up menu:

Razor Selected Clips

Splits only the clips you click.

Razor All Clips

Splits every clip at the time point you click.

Press Shift in the Editor panel to toggle between these modes.

In the Editor panel, click the point where the split should happen.

Split all clips at the Playhead

Place the Playhead where at least one audio clip exists.

Choose Clip > Split.

### Set audio clip properties

The Properties panel lets you change several settings at once for selected audio clips. Clip gain and mute controls operate separately from comparable track controls.

Select an audio clip, then choose Window > Properties.

Note

Individual properties are also available from the Clip menu.

Set these options:

Note

For a new clip name, use the text box at the panel top.

Clip Color

Customize the color by clicking the swatch. A red slash on that swatch means the clip still uses the default color for the current Appearance preset.

Clip Gain

Offsets a clip whose volume is too low or too high to mix comfortably.

Lock in Time

Restricts movement to vertical moves between tracks while the timeline position stays fixed. A lock icon  appears on the clip.

Loop

Turns on looping for the clip.

Mute

Silences the clip.
