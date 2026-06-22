# Audio Channel Mapping, About Audio Track Mixer, Create A Submix, Map Source Audio Channels On Import ...

> Adobe Premiere Pro reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Audio channel mapping; Audio Track Mixer overview; Create a submix; Map source audio channels on import; Change source audio channel mapping; Map to audio output device hardware channels; Break a stereo track into mono tracks; Use mono clips as stereo clips; Edit a multi-clip link in the Source Monitor; Clean audio with bulk mute or bleep; Remix audio in Audition to match video duration; Assign multiple audio channels.

## Audio channel mapping

### Route source and output audio channels in Adobe Premiere for cleaner monitoring and delivery.

Audio channel mapping controls where clip audio is sent, whether to timeline tracks or to output devices. It is useful with multi-channel sources, including surround sound and audio recorded on multi-track devices.

When a clip contains several audio channels, Premiere places each channel on its own Timeline track during import. You can still change that routing to match the edit.

In the Project panel, right-click the audio and choose Modify > Audio Channels.

Use the Audio Channels tab in the Modify Clip dialog box to adjust the mapping.

The Modify Clip dialog lets you reroute stereo or multi-channel media into the Timeline tracks you want.

Use Modify Clip when stereo or multi-channel source audio needs different routing into Timeline tracks.

Under Media Source Channel, select or clear the boxes beneath each clip channel to turn the needed channels on or off, then select OK.

## Audio Track Mixer overview

### Mix audio and build a polished Premiere project with the Audio Track Mixer.

For broad track-level sound control in video projects, the Audio Track Mixer provides controls for volume, pan, effects, and automation across full audio tracks. That layout helps audio post-production move faster and stay consistent.

Audio tracks can be edited with either the Audio Track Mixer or the Audio Clip Mixer. The distinction is:

- The Audio Track Mixer manages whole tracks.
- The Audio Clip Mixer manages the individual audio clips within each track.

### Audio Track Mixer

In the Audio Track Mixer, each mixer strip maps to a track in the active sequence timeline and presents Timeline audio tracks as a console.

The number of sliders in the Audio Track Mixer follows the number of audio tracks in the Timeline. Adding an audio track to the Timeline adds a corresponding track in the Audio Track Mixer. Click a track name to rename it. The Audio Track Mixer can also record audio straight into tracks in a sequence.

Mixer changes such as fader moves or pan settings apply to the full track instead of separate clips, which suits background music, dialogue, and ambience across a sequence.

Use the Audio Track Mixer to watch and change levels live for individual tracks and the final mix, making it easier to balance sequence audio.

The Audio Track Mixer also provides real-time level monitoring and adjustment for each track plus the final mix, supporting overall sequence balance.

### Automation Modes

During playback, the mixer can use five automation modes for changing audio dynamically:

- Off: Existing keyframes are ignored, and no new keyframes are written.
- Read: Existing keyframes play back, but changes are not accepted.
- Latch: Once you adjust a control, keyframe recording starts and the new value is held until playback stops.
- Touch: Keyframes are recorded only during the time a control is being adjusted; after release, the earlier value returns.
- Write: Playback continuously writes keyframes and replaces any existing ones.

Use these modes to automate volume, pan, and effect parameters with precision while keeping the mix process more efficient.

### Track Effects

When Track Effects are hidden in the Audio Track Mixer, reveal them with the Audio Track Mixer's arrow icon at the top-left of the panel. Effects such as Reverb, Amplitude, and Compression can be applied together on full tracks.

The Track Effects panel provides slots for effects and send assignments. Choose an empty slot to open the available effect list for that track. After adding an effect, adjust that effect's parameters. Multiple effects can run at the same time.

The FX button leaves an audio effect in place while muting it. To delete an effect, select the effect and choose None from the dropdown menu.

### Submixing and Routing

A submix gathers audio signals routed from selected audio tracks into another track. Changes made on the submix can affect all of those routed tracks at once. In the signal path, it sits between regular audio tracks and the master track, much like an audio adjustment layer.

## Create a submix

### Improve audio edits by working with submixes.

In Adobe Premiere, submixes let you collect several audio tracks so they can be processed as a group. Use them when related tracks need shared effects or level changes.

### When to use submixes

Submixes are useful when you need to:

- Put one effect or adjustment across several tracks.
- Make mixing simpler by collecting related tracks together.
- Reduce processing load by using fewer effect instances.

### How Submixes Differ from Audio Tracks

Submixes, like regular audio tracks, support mono, stereo, and 5.1 surround, and they appear as editable tracks in both the Audio Track Mixer and Timeline panel. Their behavior differs from regular tracks in these ways:

- No Clips or Recording: Submixes cannot hold clips or be recorded into, so they do not include recording, input, or clip-editing controls.
- Visual Differences: In the Audio Track Mixer, submixes use a darker background than regular tracks.
- Limited Controls in Timeline: In the Timeline panel, submixes do not show a Toggle Track Output icon or a Display Style icon.

Before you begin:

Before building submixes, plan the overall mix, organize the sequence tracks logically, and decide which audio tracks should be grouped in a submix.

Choose Sequence > Add Tracks.

In the Add Tracks dialog box, type how many submixes to create and choose where the submix should be placed on the timeline.

Add audio submix tracks when you want a more efficient audio-editing setup.

Create audio submix tracks to streamline the audio editing workflow.

Choose the track type required for the submix.

Select OK.

Premiere creates the submix and places it on the timeline at the location you specified.

## Map source audio channels on import

### Configure Premiere to map source audio channels automatically.

Import-time source channel mapping determines how audio is arranged as media enters the project. With multi-channel clips, it lets you decide which channels to use and how they should be configured before editing begins.

Choose Preferences > Timeline.

In the Default Audio Tracks section, choose the settings that match the project needs.

Use the Default Audio Tracks section in Timeline preferences to define the default mapping for imported audio clips.

Set default audio-clip mapping for imports from the Default Audio Tracks section of the Timeline preferences.

Select OK.

## Change source audio channel mapping

### Update source audio channel mapping for one or more audio clips in Adobe Premiere.

Changing channel mapping controls how audio is interpreted during the edit. This is especially helpful for multi-channel clips and footage captured with external audio devices.

In the Project panel, select one or more clips that contain audio.

From the menu bar, choose Clip, then choose Modify > Audio Channels.

Note

When more than one audio clip is selected, all selected clips must use the same track format. If your workflow depends on changing source clips through Modify Audio Channels, avoid using proxies in Premiere because they can cause unexpected behavior.

The Audio Channels dialog box shows a matrix with clip channels on the left and source channels across the top. Click the matching cell in the matrix to connect a clip channel to a source channel. A checkmark marks that connection.

Choose the audio output channel mapping used by a stereo track.

Select the mapping for stereo-track audio output channels.

To preview a channel, choose the source channel, press the Playback button, or use the slider.

Use Preview Media Source Channel options to define how the source channel is previewed.

Set source-channel preview behavior with the controls under Preview Media Source Channel.

Select OK.

### Hide audio channel labels in the Timeline

For a cleaner Timeline view, clip audio channel labels can be hidden, which is useful with multi-channel clips or crowded sequences. Hiding them keeps waveforms clear so they are easier to scan.

Use the wrench icon to open the Timeline panel menu.

Turn Show Audio Channel Labels on or off.

## Map to audio output device hardware channels

### Assign sequence audio channels to hardware outputs in Adobe Premiere.

For accurate monitoring and mixing, especially in multi-channel studio setups, map audio tracks to specific hardware output channels. This routing controls where each audio track goes so the final output matches the production setup.

Choose Edit > Preferences > Audio Hardware.

In Output Managing, choose the driver shown under Map Output for. By default, Premiere uses Adobe Desktop Audio.

In Preferences, use Output Mapping to send Premiere audio tracks to particular hardware output channels.

Use the Output Mapping section of Preferences when Premiere audio tracks need routing to specific hardware output channels.

Drag the sequence channel tile you want so it lines up with the matching hardware channel in the list.

Select OK.

## Break a stereo track into mono tracks

### Break stereo audio into mono sources for more detailed mixing control in Adobe Premiere.

Use Breakout to Mono when a stereo or 5.1 surround clip needs independent mono audio source clips for its channels. Apply it from the Project panel; clips already placed in a sequence are not the target. A stereo source becomes two mono clips, one per channel, while a 5.1 surround source produces six mono clips.

Note

Premiere keeps the source media intact. Breakout to Mono adds source clips with the needed source channel mapping instead of writing new media files.

In the Project panel, choose a clip that contains stereo or 5.1 surround audio.

From the menu bar, select Clip, then select Audio Options > Breakout to Mono.

Choose Breakout to Mono when a stereo clip should become two separate mono clips.

Breakout to Mono creates two mono clips from a stereo clip.

Premiere names the new audio source clips from the original clip name plus the channel names. For instance, a stereo audio clip named Zoom becomes Zoom Left and Zoom Right after Premiere creates the two source clips.

## Use mono clips as stereo clips

### Use a mono audio clip as stereo and map it to left and right stereo channels.

A mono audio clip can be treated as a stereo clip when needed. In the Modify Clip dialog, map that mono clip across a left and right stereo channel pair.

Select a mono clip in the Project panel.

From the menu bar, select Clip, then select Modify > Audio Channels.

In the Modify Clip dialog, open the Clip Channel Format dropdown menu and select Stereo.

Set Clip Channel Format to Stereo to make the mono clip behave as stereo.

Choosing Stereo for Clip Channel Format converts the mono clip into a stereo clip.

Select OK.

## Edit a multi-clip link in the Source Monitor

### Adjust multi-clip links in the Source Monitor to speed multicamera editing in Adobe Premiere.

In the Source Monitor, a multi-clip link can be reviewed and refined before the material is added to the timeline. This workflow lets you preview angles, switch between them, and tune individual camera angles while keeping the main sequence undisturbed.

Before you begin:

Select the clips and link them with Clip > Link Clips.

In the Timeline panel, double-click a linked clip.

Use the Track menu to choose the track whose channel you want displayed.

When needed, set the In and Out points for a track.

Note

When you set In and Out points for one track, the other linked tracks receive the same trim amount. Linked tracks that do not share the same duration will end up with different In and Out point positions. Those points match across linked clips only when the clips have identical durations.

## Clean audio with bulk mute or bleep

### In Premiere on desktop, use AI-powered media intelligence to find explicit words in dialogue and apply silence or bleeps in bulk.

Premiere desktop can use AI-powered media intelligence to locate explicit language automatically in dialogue tracks. Bulk mute or bleep then lets you censor words across a clip, reducing the amount of manual audio cleanup.

Create a transcript for the dialogue in the sequence.

Go to the Text panel, select the More options icon, then select Censored word list.

In the Censored word list dialog box, enter the words Premiere should locate in the sequence transcript before applying an effect over them.

Add terms to the Censored word list so they are flagged and censored in the sequence transcript.

Words added to the Censored word list are marked in the sequence transcript for censoring. Tip

The dialog box also provides Import word list and Export word list.

Open the Filter dropdown and select Censored words so the flagged words are shown.

In the Apply dropdown, select a censorship tone, then apply it to one detected instance or to every detected instance.

Use the Apply dropdown to choose a censorship tone and target one or all flagged words.

From the Apply dropdown, apply the chosen censorship tone to a single flagged word or all flagged words.

## Remix audio in Audition to match video duration

### Use Adobe Audition from Adobe Premiere to remix or stretch shorter audio so it fits the video duration.

The background score strongly affects the quality of a video sequence. Editors commonly loop music or cut it off early so it matches the video duration. Adobe Premiere working with Adobe Audition gives you another way to solve that fit problem and keep the result polished.

In Audition, these techniques can help prepare an audio clip as a background score for a video project without reducing quality:

### Remix

The Remix tool in Audition examines the audio file, finds hundreds of loops, transitions, and important sections, and then lets you reshape the material quickly for a chosen duration.

### Stretch

Stretch matches audio to video sequences by changing playback speed, either faster or slower, for the recording.

### Remix the audio of your Premiere project in Audition

Adobe Premiere can send audio to Audition so you can use advanced post-production audio techniques. With Adobe Audition installed, run Edit In Adobe Audition on an audio clip, edit it in Audition, and then use the Remix tool to stretch the sound creatively until it matches your video's duration.

Select the audio track in the Premiere project, then select Edit > Edit in Adobe Audition > Sequence.

Review the audio export options and destination path, then select OK. Audition opens the sequence.

In the Properties panel, expand Remix and select Enable Remix. Audition studies the clip and identifies the strongest transition points.

In Target Duration, enter the duration of the video clip that the audio should match and press Enter. You can also drag the zigzag handles on either side of the clip until the clip length matches the video duration.

Audition adjusts the audio on the timeline to the target duration.

Confirm the timeline shows a remixed icon and check Properties for the updated clip details.

### Export the remixed audio back to Premiere

When the Audition audio edits are finished, export the clip back into the Premiere project. Premiere Pro stores the edited result as a separate clip, leaving the original clip unchanged.

In Audition, select the remixed music track so other audio clips sent from Premiere are not included in the mixdown.

Select Multitrack > Export to Adobe Premiere.

Under Options, choose whether the mixdown session should be exported as mono, stereo, or 5.1, or whether each track should be exported as a stem.

Select Export, then choose the Premiere project that should receive the edited audio. The project opens in Premiere with the mixdown track used as the project's audio track, and the original track remains unchanged in the project panel.

On the timeline during playback, select M beside the original audio track if you want only the remixed track to be heard.

## Assign multiple audio channels

### Assign one track to several stereo channel pairs in Adobe Premiere so sequence audio can be routed to different outputs.

Select Window > Audio Track Mixer.

In the Audio Track Mixer panel, find the mono or standard track that should feed multiple channel pairs.

Select the Direct Output Assignment icon for that track. The icon is located in the track's output section.

In Assign Stereo Pairs, select the checkboxes for every stereo pair you need. For example, choose 1+2 and 3+4 to route the audio to both pairs.

Select OK to apply the channel assignments.

The track audio is sent to every selected stereo pair. Check the sequence and watch the audio levels in each channel pair to verify the routing.

Tip

Assigning tracks to different stereo-pair combinations lets you build different mixes for different output uses. This approach supports separate mixes intended for different delivery requirements.

To change the routing later, select the Direct Output Assignment icon again and adjust the selections.
