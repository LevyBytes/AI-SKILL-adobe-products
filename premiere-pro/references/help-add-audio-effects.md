# Basic Audio Editing

> Adobe Premiere Pro reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Add audio effects; Audio editing concepts; Extract audio from clips; Link audio and video clips; Synchronize audio and video; Synchronize clips in the Timeline panel; Merge clips in the Project panel; Merge clips in the Timeline panel; Use the timecode from an audio primary clip to create a merged clip; Edit merged clips; Edit metadata of merged clips; Limitations of merged clips; View audio and video waveforms in the Source Monitor; Edit audio using the Properties panel; Edit audio clips in the Source Monitor.

## Add audio effects

### Basic audio editing

Audio editing concepts

Extract audio from clips

Link audio and video clips

Synchronize audio and video

Synchronize clips in the Timeline panel

Merge clips in the Project panel

Merge clips in the Timeline panel

Use the timecode from an audio primary clip to create a merged clip

Edit merged clips

Edit metadata of merged clips

Limitations of merged clips

View audio and video waveforms in the Source Monitor

Edit audio using the Properties panel

Edit audio clips in the Source Monitor

### Advanced audio techniques

Audio channel mapping

Audio Track Mixer overview

Create a submix

Map source audio channels on import

Change source audio channel mapping

Map to audio output device hardware channels

Break a stereo track into mono tracks

Use mono clips as stereo clips

Edit a multi-clip link in the Source Monitor

Clean audio with bulk mute or bleep

Remix audio in Audition to match video duration

Assign multiple audio channels

### Adjust volume and levels

Automatically tag audio

Apply Enhance Speech

Audio editing with Essential Sound panel

Improve dialogue clarity

Repair dialogue

Create a Reverb effect

Automatically duck audio

Create audio presets

Adjust gain in audio

Adjust track volume

Auto-match audio loudness

Monitor volume levels

Use Dynamic Audio Waveforms

Enhance Speech technical requirements

Live waveform editing

Global mute in Premiere

### Apply audio effects

Audio effects library

Loudness Meter overview

Apply Loudness Meter to a track

Measure the loudness of your track

Edit Loudness Meter settings

Remix audio in Premiere

Remix tool considerations in Premiere

Set automation modes for Audio Clip Mixer

Audio panning and balancing controls in Audio Track Mixer

Pan or balance a stereo track

Pan or balance an adaptive track

Pan or balance a track in the timeline

Record changes to sound tracks

Add effects to audio tracks

Copy and paste audio effects in the timeline

Adjust audio track effects in the Timeline

Designate a track effect as pre-fade or post-fade

Channelize effects

Copy and move effects in Audio Track Mixer

Audio Track Mixer automation modes

Set Automatch Time for Touch mode and Read mode

Specify automated keyframe creation

Remix in Premiere

### Apply audio transitions

Crossfade between audio clips

Fade in or fade out clip audio

Specify default audio transitions

Audio crossfade transitions

### Use Adobe Stock audio

Use Adobe Stock audio in your project

About Adobe Stock audio licensing and usage rights

## Audio editing concepts

### Learn key audio concepts for building professional-quality soundtracks with powerful audio mixing tools in Adobe Premiere.

### Audio tracks

Premiere works with several audio track types:

- Standard tracks: handle mono and stereo audio clips.
- Mono tracks: handle single-channel audio clips.
- Adaptive tracks: handle clips that use different channel formats.
- 5.1 surround tracks: handle multi-channel surround sound clips.

Select the track type that fits both the source audio and the intended output.

### Audio waveforms

In the Timeline, audio clips show waveforms that visualize amplitude over time. Larger waveform shapes indicate louder sound. Increase the track height when you need to inspect waveform detail more closely.

### Volume control

Premiere Pro gives you several clip-volume controls:

- Move the horizontal volume line directly on the clip.
- Adjust it in the Effect Controls panel.
- Add the Audio Gain effect.
- Set keyframes when volume needs to change accurately over time.
- For all tracks, the Audio Track Mixer supplies live level control along with metering.

### Quick audio adjustments

For quick sound edits, Premiere Pro includes these tools:

- Audio Clip Mixer: Work on a single clip's volume, pan, and effects from the Timeline panel without opening a deeper mix workflow.

On each sequence track, the Audio Clip Mixer changes volume and pan for individual audio clips.

For clip-by-clip volume and pan work on each track in the sequence, use the Audio Clip Mixer.

- Essential Sound panel: Use audio-type presets and everyday controls through an interface organized around Dialogue, Music, SFX, and Ambience.

From one interface, the Essential Sound panel lets you set audio types and add effects such as speech enhancement, loudness control, and reverb.

Use the Essential Sound panel as a single place to tag audio types and apply speech enhancement, loudness control, reverb, and similar effects.

- Audio Track Mixer: Change full-track volume, pan, and effects while playback or mixing is underway.

Across complete audio tracks, the Audio Track Mixer manages volume, pan, and automation, which suits adjustments meant to affect every clip on a track.

When the same adjustment should cover all clips on a track, use the Audio Track Mixer for track-wide volume, pan, and automation control.

With these controls, routine audio edits can be handled quickly without opening complex settings.

### Audio effects

Use built-in effects such as EQ, Compression, and Reverb to improve audio. Effects can target a single clip or a whole track. For common audio fixes, the Essential Sound panel supplies straightforward presets.

### Multichannel audio

For stereo or surround sound material, Premiere Pro supports these channel workflows:

- Route source audio channels to chosen output channels.
- Turn separate channels into individual mono clips.
- Build custom channel layouts.

## Extract audio from clips

### Extract audio from clips and create new audio source clips inside an Adobe Premiere project.

Audio can be extracted from clips into new source clips in the project without changing the original media. The extracted audio clips inherit the original source clips' source channel mappings, gain, speed, duration, and interpret footage adjustments.

In the Project panel, choose one or more clips that include audio.

Choose Clip > Audio Options > Extract Audio.

Extract Audio produces a separate audio clip from the source video so the sound can be moved or edited on its own.

With Extract Audio, Premiere Pro creates an independent audio clip from the original video, letting the audio be edited or repositioned separately.

The generated audio files include Audio Extracted in their file names.

## Link audio and video clips

### Link video clips with audio clips so they act as one item, or unlink them for separate editing in Adobe Premiere.

Linked audio and video stay synchronized and easier to manage. After clips are linked, operations such as moving, trimming, or applying effects happen to the audio and video together.

One video clip can be linked with several audio clips, and multiple audio clips can also be linked to one another. Linking audio clips inside a sequence affects only those source-clip instances; the original source audio clips in the Project panel remain unchanged.

In the Timeline panel, select each audio clip on its own track. A video clip can also be selected. To select both audio and video clips, use Shift-click.

Note

Every audio clip must use the same track format, such as mono, stereo, or 5.1 surround. They also need matching channel type, and each clip has to occupy a different track. Clips already linked, including an audio clip linked to a video clip, must be unlinked before creating a multi-clip link.

Open the menu bar's Clip menu, then choose Link.

Link groups the selected audio and video clips so timeline moves and edits keep them together.

The Link command binds selected audio and video clips, keeping them together during timeline edits and moves.

After linking, the selected clips work as one unit.

To separate a linked clip, select it and choose Clip > Unlink.

## Synchronize audio and video

### Synchronize audio and video clips so picture and sound line up accurately and the edit remains clear.

Adobe Premiere includes Merge Clips for synchronizing video with separately recorded audio, a workflow often called double-system recording.

With Merge Clips, select a video clip and sync it with as many as 16 audio channels.

Merge Clips can synchronize one video clip with up to 16 audio channels. The items that form the merged clip are called component clips.

Clips can be group-selected in either the Project panel or the Timeline before they are merged.

A single video or AV clip can be merged with one or more audio clips. A merged clip can contain 16 audio tracks total across mono, stereo, and surround 5.1 material. Counts are based on format: one mono clip equals one track, one stereo clip equals two tracks, and one 5.1 clip equals six tracks.

Note

Making a merged clip leaves the source clips intact.

## Synchronize clips in the Timeline panel

### Synchronize clips in the Timeline panel before creating a merged clip.

Clip synchronization lets one or more audio clips line up with a video clip. The media may have been captured separately, such as separate picture and sound, or it may come from different cameras recorded in sync. Once the clips are synchronized, a merged clip can be created in the Timeline panel.

### Manually synchronize clips in the Timeline panel

Place the clips in the Timeline panel.

Edit the clips, then drag them into alignment until sync is achieved.

### Synchronize clips using the Synchronize function

Select the clips that need synchronization.

Choose Clip > Synchronize.

In the Synchronize Clips dialog box, choose one of these Synchronize Point options:

Rather than lining clips up by hand, run Synchronize and choose a Synchronize Point so Premiere Pro can align them automatically.

Use Synchronize with a selected Synchronize Point when you want automatic alignment instead of manual clip adjustment.

- Clip Start: Uses the In point as the basis for sync, such as the clap of the slate.
- Clip end: Uses the Out point as the basis for sync, such as the clap of the tail slate.
- Timecode: Uses shared timecode across the clips to determine synchronization.
- Clip Marker: Uses a numbered clip marker in the middle of the shot as the synchronization point. This function remains unavailable unless every component clip has at least one numbered marker.
- Audio track channel: Lets you choose one audio track as the sync reference when several audio channels are present.

Select OK to finish the synchronization.

## Merge clips in the Project panel

### Merge audio and video clips in Premiere Pro's Project panel, including sync-point selection and merged-clip naming.

Select the video clip that the audio clips should merge with.

Note

A merged clip can contain only one video clip. A video clip is not mandatory; audio-only clips can be merged with other audio-only clips.

Use Shift-click (Windows) or Command-click (macOS) to choose the audio-only clips to merge with the video clip.

Choose Clip > Merge Clips.

In the Merge Clips dialog box, choose one of these synchronization-point options:

Use Merge Clips in the Project panel when audio and video clips need a quick merge with a sync point in Premiere Pro.

In Premiere Pro, Merge Clips provides a fast Project panel workflow for combining audio and video clips and setting their sync point.

- In points: Synchronizes clips from their In points, for example a slate clap.
- Out points: Synchronizes clips from their Out points, for example the end slate clap.
- Timecode: Synchronizes clips by matching timecodes.
- Clip Marker: Synchronizes clips by numbered markers, and is available only when all clips have those markers.

Select OK.

The merged clip appears in the Project panel with a name based on the video clip. Without video, the default name comes from the top-most selected audio clip according to the current bin sort order. Premiere Pro adds a suffix to the merged clip's name, and that name can be changed if needed.

## Merge clips in the Timeline panel

### Merge an audio clip with a video clip from the Timeline panel.

Before you begin

Add both the video and audio clips that will be merged to the Timeline panel. The workflow is most reliable when the clips are already aligned and synchronized.

Select the clips in the Timeline panel.

Choose Clip > Merge Clips.

In the Merge Clips dialog box, select OK.

The merged clip is added to the Project panel.

When clips are merged from the Timeline, synchronization starts at Clip Start for each component clip. If the merge should use Clip End, Timecode, or Numbered Marker instead, synchronize the clips first and then merge them.

## Use the timecode from an audio primary clip to create a merged clip

### Use an audio primary clip's timecode while creating a merged clip.

During merging, timecode can come from the primary audio clip. This lets you skip the source camera audio for the merged clip and use another audio clip instead.

Before you begin

Identify the primary or main clip that should be used for the merge.

Select the video clip and the audio clip that carries the timecode.

Choose Clip > Merge Clips.

After the Merge Clips dialog opens, pick the applicable action:

In the Use Audio Timecode From Clip dropdown menu, choose the primary audio clip that will supply timecode for the merged clip.

Choose the primary audio clip from the Use Audio Timecode From Clip dropdown menu to create the merged clip from that audio timecode.

- To create a merged clip from an audio primary clip's timecode, enable the Use Audio Timecode From Clip checkbox and choose the audio track to synchronize with the video.
- To remove source camera audio from a clip, enable the Remove Audio from AV Clip checkbox.

Select OK.

Premiere Pro synchronizes the merged clip's audio and video using the specified primary audio clip timecode.

## Edit merged clips

### Review the ways merged clips differ from regular clips during editing and trimming in the Timeline panel, including gap-related behavior.

Most merged-clip editing feels similar to editing any other clip, but a few workflow differences apply.

### Edit merged clips with gaps into the Timeline panel

Merged clips behave differently when edited into the Timeline panel if their component structure contains gaps.

- Another component clip is available: When an In or Out point falls inside an audio or video gap and another component clip exists above or below that gap, Premiere Pro assigns a track for the gap as the merged clip is added to the Timeline panel.
- When no component clip is available: A merged audio/video clip may include gap areas that have no alternate component clip. If an In or Out point is marked in such a gap, adding the merged clip to the Timeline panel triggers this Premiere Pro message: “Invalid edit. No media present in source clip’s marked In/Out range”. The No drop icon appears if you try to drag and drop the merged clip into the timeline.

Note

Video gaps play as black, meaning no visual content. Audio gaps play as silence unless a different audio clip on another track fills the gap.

### Trim merged clips

Merged-clip trimming follows the same general model as trimming any other clip, except for these points:

- A trim affects component clips evenly and keeps any offsets intact.
- To adjust only one component clip's edge, hold Alt or Option while dragging to break sync temporarily.
- With snapping enabled, trimming individual component clips snaps at the ends of other component clips.
- Standard trim limits still apply; a merged clip can be shortened only to a point where at least one frame remains in any component clip.

## Edit metadata of merged clips

### Use the Metadata panel to inspect and change metadata for clips and sequences in the project.

Creating a merged clip copies each component clip's metadata into the Metadata panel.

Before you begin

Create a project, import the audio and video files, and arrange them on the timeline. Synchronize the audio and video with Merge clips. Turn on the Metadata panel by choosing Windows > Metadata.

In the Project panel, select the clip whose metadata you want to inspect. The Metadata panel displays the selected clip's details.

To enter metadata:

- In the File popup menu, choose the component clip, then enter metadata for that clip.
- In the File popup menu, choose All Files, then enter metadata for the merged clip. Any value entered for a property is written into the XMP for every component file that forms the merged clip.

Your edits update the merged clip metadata.

The selected merged clip's metadata details shown in the Metadata panel.

The Metadata panel displays metadata details for the selected merged clip.

## Limitations of merged clips

### Understand Adobe Premiere merged-clip limitations, including unsupported editing and synchronization features.

In Premiere Pro, merged clips make complex-sequence editing simpler. Because a merged clip is handled as one clip in the sequence, editors do not need to manage several separate clips. They can also synchronize audio and video that were recorded separately. Even so, merged clips have important limitations.

These Adobe Premiere features and commands are unavailable for merged clips:

- Replace Footage.
- Control over all audio channel mapping inside merged clips.
- Final Cut Pro XML and AAT interchange formats.
- Auto-sync through audio waveforms, free-run timecode, time-of-day timecode, AUX timecode, and separate audio timecode.

Remember these details when using merged clips:

- Merged clips, or portions of clips that were merged before, cannot be remerged or used to make a new merged clip.
- Only component clips can serve as the source material for creating a merged clip.
- When a specific component clip is removed, the merged clip can be relinked.
- Audio inside merged clips is restricted to one mono track rather than stereo or multi-channel audio.

## View audio and video waveforms in the Source Monitor

Display audio waveforms together with video playback in the Source Monitor in Adobe Premiere.

Premiere Pro can show audio waveforms beside video playback in the Source Monitor. For work such as interview cutting, dialogue sync, or detailed sound design, viewing picture and sound together provides more precise and efficient editing. This combined display helps identify audio cues while monitoring the image, place accurate In and Out points, and review clips without changing display modes.

To load a video clip with audio into the Source Monitor, double-click it in the Project or Timeline panel.

In the Source Monitor, use the Settings icon to open monitor settings and turn on Video and Audio Waveform Split, or enable preview mode with the Drag Audio and Video icon.

When preview mode is active in the Source Monitor, audio waveforms are displayed under the video playback.

In Source Monitor preview mode, the waveform appears beneath the playing video.

Play the clip or scrub the playhead to watch the video while the waveform below it updates in real time. While viewing both audio and video, set In and Out points or add markers.

## Edit audio using the Properties panel

### Adjust volume, panning, and mute settings with quick audio controls in the Properties panel.

In Adobe Premiere, the Properties panel puts frequently used audio controls within reach without requiring separate panels. These controls handle volume levels, stereo balance, clip muting, and keyframe creation for detailed audio edits.

Use this workflow with audio clips already on the timeline. When one or more audio clips are selected, the Properties panel shows contextual audio controls for fast changes during editing. For advanced audio mixing that uses effects and presets, use the Essential Sound panel instead.

### Adjust audio clip properties

On the timeline, choose one or more audio clips.

In the Properties panel, move the Volume slider left to lower the clip, or right to raise it.

Use the quick audio controls that appear in the Properties panel.

Use the Properties panel options for fast audio changes.

Choose Mute when you need to silence the clip for now without changing its volume setting.

With mono clips, use the Pan slider to place the sound between the left and right speakers.

Use the keyframe icon to add keyframes for volume changes over time on the audio clip.

Open the three-dot menu icon and choose Open more audio controls for the Essential Sound panel, or choose Browse Adobe Stock audio to search for music and sound effects.

### Edit multiple clips simultaneously

After several audio clips are selected on the timeline, shared settings can be changed together from the Properties panel.

- Matching values: When every chosen clip has the same setting for a property, that value is shown in the control. Editing it moves all selected clips to the updated value.
- Different values: When the selected clips do not match, the control shows a dash. Dragging from that dash makes a relative change, so each clip is raised or lowered proportionally.
- Absolute values: Click the dash and type a value to force every clip in the selection to that exact setting.

This kind of multi-clip edit reduces time spent balancing levels for interview segments, music tracks, or sound effects.

## Edit audio clips in the Source Monitor

### Review audio accurately in Adobe Premiere with waveform views and navigation tools.

Before a clip is added to a sequence, the Source Monitor gives you audio-focused controls for checking waveforms, moving through audio quickly, and finding exact edit points.

Open audio in the Source Monitor when you need to find a particular sound, spot a problem, or place In and Out points before the edit. Dialogue editing, podcast work, and music edits benefit from this approach because timing accuracy matters. Double-clicking an audio clip in the Project panel or Timeline opens it in the Source Monitor automatically.

In the Source Monitor, audio is shown as visual waveforms. Louder sections appear larger, and quieter passages appear smaller, which makes it easier to identify sounds and set accurate edits.

### View audio waveforms in the Source Monitor

In the Project panel or Timeline, double-click an audio clip to load it into the Source Monitor.

For clips with one audio channel or several audio channels, the waveform appears without extra setup.

To change waveform display behavior for the project, use the wrench icon in the Timeline panel to open Timeline Display Settings, then choose Show Audio Waveform.

Turn on Show Audio Waveform in Timeline Display Settings so clip waveforms are visible inside audio tracks.

Enable Show Audio Waveform from Timeline Display Settings when audio-track waveforms should be shown in the tracks themselves.

### Navigate audio using scrubbing

From either the Project panel or Timeline, double-click the audio clip so it opens in the Source Monitor.

Move the cursor over the waveform so the playhead appears.

Scrub the audio by dragging the playhead across the waveform in either direction.

Note

As you drag, scrubbing plays the audio, which helps you find individual sounds faster. To turn that playback off, go to Premiere > Preferences > Audio (Windows) or Premiere > Settings > Audio (macOS), then clear Play audio while scrubbing in Source and Program Monitors.

### Zoom to locate precise edit points

Open the audio clip in the Source Monitor.

At the bottom of the Source Monitor, find the zoom scrolling bar below the timecode ruler.

For horizontal waveform and timecode zoom, drag either end of the zoom scrolling bar.

For vertical zoom on one channel, drag either end of the vertical zoom bar beside the dB ruler on the right of the Source Monitor.

Use Shift while you drag the vertical zoom bar to scale every channel vertically together.

Tip

Double-click the vertical zoom bar to go back to the default zoom level. A second double-click returns to the custom zoom you used previously.
