# About Loudness Meter, Apply Loudness Meter To A Track, Measure The Loudness Of Your Track, Edit Loudness Meter Settings ...

> Adobe Premiere Pro reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Loudness Meter overview; Apply Loudness Meter to a track; Measure the loudness of your track; Edit Loudness Meter settings; Remix audio in Premiere; Remix tool considerations in Premiere; Set automation modes for Audio Clip Mixer; Audio panning and balancing controls in Audio Track Mixer; Pan or balance a stereo track; Pan or balance an adaptive track; Pan or balance a track in the timeline; Record changes to sound tracks; Add effects to audio tracks; Copy and paste audio effects in the timeline; Adjust audio track effects in the Timeline.

## Loudness Meter overview

### Loudness Meter helps Adobe Premiere meet broadcast, podcast, and streaming loudness standards.

Broadcast television delivery can require media files that meet strict specifications. One frequent specification limits the maximum loudness of a sequence. Use the Loudness Meter to measure audio level for clips, tracks, or sequences. It supplies ITU-based loudness monitoring that matches industry practice for broadcast, podcast, and streaming media.

The Loudness Meter measures program loudness transparently for complete mixes, individual tracks, buses, and submixes. Presets cover common regional standards such as EBU in Europe and ATSC in the Americas, and newer presets support online destinations including Spotify, Apple Podcasts, Netflix, and YouTube.

Premiere and Adobe Audition use the same Loudness Meter workflow, so the tool can be used in either application.

## Apply Loudness Meter to a track

### Measure and manage sequence audio with Loudness Meter.

Choose Window > Audio Track Mixer.

Note

When the default Audio workspace is active, Audio Track Mixer opens automatically.

On the Mix Track, use the tiny triangle in the first effect slot to open the Effect Selection menu, then choose Special > Loudness Meter.

Add the Loudness Meter effect so audio levels can be monitored and analyzed.

Use the Loudness Meter effect for monitoring and analysis of audio levels.

## Measure the loudness of your track

### Premiere track loudness workflow for consistent delivery levels.

Right-click (Windows) or Ctrl + click (macOS) the Loudness Meter, then select Edit to open the Loudness Meter dialog box.

Set Loudness Levels or choose Presets in the Loudness Meter settings.

Choose Presets or configure Loudness Levels in the Loudness Meter settings.

Start playback by pressing the spacebar or selecting Play on the Program Monitor. While audio plays, the Loudness Meter watches every active channel and displays the loudness range with blue, green, and yellow values.

- Input: Shows the audio-signal level while accounting for inter-sample peaks.
- Short-Term: Measures with a sliding time window of 3 seconds, giving a more averaged loudness view for the past 3 seconds that is less tied to brief events.
- Integrated: Averages the program from beginning to end to describe overall loudness for the whole program.
- Momentary: Uses a sliding time window of 400ms and best represents instant loudness.

The Loudness Meter does not alter audio level. It provides an exact Loudness Range measurement that can guide changes to audio loudness levels.

Use Input, Short-Term, Integrated, and Momentary options to adjust different Loudness Meter levels.

Adjust separate Loudness Meter levels with the Input, Short-Term, Integrated, and Momentary options.

## Edit Loudness Meter settings

### Edit Loudness Meter settings in Premiere for clear, broadcast-ready audio monitoring.

To manually change measurement levels in Loudness Meter, right-click Loudness Meter, or double-click it, to open the Track Fx Editor - Loudness Meter dialog. Select Settings.

If manual level editing is uncomfortable, use a preset built from widely used standards.

Use an existing preset to fine-tune audio levels automatically.

Automatically fine-tune audio levels with one of the existing presets.

In the Settings tab, configure these loudness options:

Fine-tune audio levels to improve sound quality.

Adjust audio levels to reach optimal sound quality.

Note

The channel map in the Loudness Meter window shows the In and Out channels and how the effect is instantiated.

Select the icon in the Track Fx Editor - Loudness Meter dialog to switch to the channel map editor.

## Remix audio in Premiere

### Use AI-powered analysis in Adobe Premiere to adjust music duration with cut points and seamless transitions.

Matching background music to video length often means manually cutting, moving clips, and adding crossfades. Premiere's Remix feature uses Adobe Sensei to retime music tracks automatically and remove hours of editing work.

Remix examines musical structure by measuring each beat's qualities and comparing them across the whole song. It then finds strong cut points and loops to build a musically coherent version at the requested duration, with automatic crossfades included. The feature works with Adobe Stock music, personal libraries, or any other audio source.

Remix keeps the original clip's beginning and ending while intelligently rearranging the middle. Depending on tempo and composition, results usually land within one second of the target duration.

### Apply Remix to adjust music duration

Select the music clip in the timeline that needs a duration change.

In the Toolbar panel, hold the Ripple Edit tool group open, then select Remix Tool.

Drag the right edge of the music clip until it reaches the desired duration.

In the Essential Sound panel under Duration, enter the target duration or use the Segments and Variations sliders to refine the result.

Use Duration controls in the Essential Sound panel to remix audio against a target duration.

Match audio to a target duration by using the Duration controls in the Essential Sound panel.

Once Remix is applied, vertical zigzag lines appear on the audio clip at the edit locations. Move the playhead slightly before those marks and press Play to hear the transitions live. The clip can also be double-clicked and played by itself in the Source Monitor.

### Customize Remix parameters

- The Essential Sound panel provides three parameters for refining a remix:
- Target Duration: Enter the video's exact length. Remix usually finds a musically coherent version within one second of that duration.
- Segments: Sets the number of cuts and crossfades. Lower values create fewer cuts, while higher values give the algorithm more flexibility for songs with dynamic structures.
- Variations: Lets you preview alternate arrangements that emphasize melodic elements, which are best for tracks with prominent solo instruments or vocals, or harmonic elements, which suit orchestral or choral pieces.

Note

When Remix is used on a preview version of Adobe Stock music and the full track is purchased later, check timing against the purchased version. If small timing differences appear, apply Remix again to the full-length song.

### Work with specific song sections

When a specific part of a song must line up with a specific moment in a video, split the original clip at that exact point before applying Remix. Use Remix on both sections separately, then place them so the transition stays smooth and matches the video moment precisely.

Tip

Remix does not analyze vocal lyrics, so it can join lines from separate verses. For vocal tracks, preview remixed music carefully to confirm the lyric continuity works for the project.

## Remix tool considerations in Premiere

### Music-remix quality and duration accuracy depend on several Adobe Premiere factors.

Use this reference while planning a remix or diagnosing unexpected results. Better outcomes come from understanding how song characteristics, parameter choices, and content types influence the Remix algorithm.

Remix evaluates beat qualities across the full music clip to locate effective cut points and loops. Several factors affect how well the algorithm can adapt a song to the target duration.

### Parameter settings

Adjust these properties in the Essential Sound panel to control Remix processing for the music clip.

### Target duration accuracy

Remix creates a music version within 5 seconds of the target duration, and it usually lands no more than 1 second away. Accuracy depends on:

- The song's original tempo and composition.
- Transition points available within the song structure.
- The count of distinct musical sections.
- Additional parameter settings (Segments, Variations).

### Music characteristics that affect remixing

Songs do not all behave the same way with the Remix algorithm. Before choosing music for Remix, evaluate the points below.

### Song structure

- Dynamic songs with multiple sections: higher Segments settings give the algorithm additional places where transitions can work.
- Repetitive or simple structures: lower Segments settings often fit better because they avoid extra cuts that are not needed.
- Songs with strong intros/outros: the opening and closing portions remain unchanged.

### Instrumentation

### Vocal content

Remix evaluates musical traits, but it does not interpret lyrics or their meaning. For songs that include vocals:

- A cut can join lines taken from separate verses.
- Lyric flow may not continue cleanly after an edit.
- The first lines from one verse can connect with the final lines of a different verse.
- For timing that must land exactly, consider relying on instrumental passages.

### Preserved sections and split-clip technique

Remix leaves the start and end of the clip as they are and changes the middle only. To keep a chosen musical moment lined up with a specific point in the sequence:

- Cut the source clip at the precise moment that must be retained.
- Run Remix on each new clip independently.
- Place the clips on the timeline so the split lines up with the video.

Using this split-clip approach can join the two remixed parts smoothly while keeping the important musical point intact.

### Verification techniques

Once Remix has been applied, check the edit with these techniques:

- Use the vertical zigzag marks on the audio clip to identify edit locations.
- Put the playhead before each mark, then press Play so you can judge the cut in context.
- Open the clip in the Source Monitor with a double-click when you want to listen to it by itself.
- Confirm that the new length is within the expected accuracy range for your target duration.

## Set automation modes for Audio Clip Mixer

### Use Touch or Latch modes in Adobe Premiere to define how volume and pan moves become recorded during playback.

In the Audio Clip Mixer, automation modes specify the way volume and pan changes are written as keyframes while you mix.

Choose these automation modes when playback is running and you need to capture changing audio adjustments. They apply only in the Audio Clip Mixer, and only to clips currently under the playhead. If you need automation at the track level, where the whole audio track is affected instead of one clip, use the Audio Track Mixer.

Two keyframe automation modes in the Audio Clip Mixer decide how playback adjustments are stored and held. Touch mode returns a control to its earlier setting after you let go, which is useful for precise moves. Latch mode keeps the newly set value in place until playback stops.

### Select an automation mode

Open the Audio Clip Mixer panel by choosing Window > Audio Clip Mixer.

Use the panel menu icon to find the automation mode menu for the Audio Clip Mixer.

From that menu, choose either Keyframe Mode Latch or Keyframe Mode Touch.

In the Audio Clip Mixer panel menu, pick the keyframe automation mode you want to use.

Choose the required keyframe automation mode from the Audio Clip Mixer panel menu.

After the mode is selected, play the sequence and move volume faders or pan controls so Premiere records the edits as clip keyframes. The active mode controls what happens after you move a control or let it go.

- Keyframe Mode Latch starts writing automation as soon as you change a control, then holds the adjusted value during playback. The first settings come from the last adjustment, and the new value remains until playback ends or you change the control again.
- Keyframe Mode Touch writes automation only for the time you are actively moving a control. Once you release it, the control returns to the previous setting from before the automated edit. The automatch time audio preference sets how quickly that return happens.

Tip

To review the automation, move the playhead to the start of the changed area and play the sequence. Keyframes made with the Audio Clip Mixer are shown on the matching audio tracks in the Timeline panel.

## Audio panning and balancing controls in Audio Track Mixer

### See how pan and balance controls place audio across output channels for spatial mixing in Adobe Premiere.

When dialogue needs to sit on the left side of a stereo mix, or a car effect should travel from right to left as it crosses the screen, pan and balance controls give you detailed control over channel distribution. As edits become more complex, these controls help align spatial audio placement with the story shown on screen.

In the Audio Track Mixer, dedicated controls define how each track's audio is sent to the output channels of the master track or a submix. The controls available depend on both the source track's channel layout and the destination output, so the interface adapts for mono, stereo, and 5.1 surround work.

### How pan and balance controls work

Pan and balance do different jobs in a mix. Panning shifts sound among output channels over time, which can create movement through a stereo or surround space. Balance spreads a multi-channel source across the output channels that are available, setting that sound's fixed spatial position.

Premiere compares the channel count of the audio track with the channel count of its output track to decide which controls to show. Based on that relationship, the application displays the control interface that fits the current setup.

### Control types in the Audio Track Mixer

The Audio Track Mixer changes its control interface to match the track routing setup:

- Stereo pan knob appears when a mono or stereo track is sent to a stereo output. The round knob can be rotated to distribute sound between left and right. The value under the knob reports the current pan position: center is 0, full left is -100, and full right is +100.
- 5.1 Panner tray appears when a mono or stereo track is routed to a 5.1 surround output. This square control represents the 2D field used by surround audio. You can move a puck anywhere in that field, while pockets around the edge stand for the five main speakers. Center channel percentage and LFE (subwoofer) level adjustment controls are also included in the tray.
- No pan control is shown when the destination has the same channel count as the track or fewer channels. If both the audio track and output track are mono, or both are 5.1 surround, each channel maps directly and panning or balancing is unnecessary. A 5.1 surround track also does not show pan controls because it already contains every available output channel.

### Channel configurations and control availability

Whether audio can be panned or balanced depends on these channel-count rules:

A mono track routed to stereo or 5.1 surround can be panned, so its position can be placed anywhere in the output field. A stereo track routed to stereo or 5.1 surround can be balanced, which lets you control how the left and right channels feed the outputs.

If the output track has fewer channels than the audio track, Premiere Pro downmixes automatically so the audio matches the output channel count. That conversion keeps the audio content while fitting it to the available output configuration.

### Master tracks versus submix tracks

The master audio track is the usual output target, but a sequence may also contain submix tracks. A submix can receive output from other audio tracks and can also act as an audio source for the master track or another submix. This routing model means the submix track's channel count controls which controls appear on tracks routed into it.

Because the master track does not send its output to another track, it never shows pan or balance controls. If a sequence is used as a track inside another sequence, however, that whole sequence can be panned or balanced like one audio element.

### Automation and keyframes

Pan and balance values may stay unchanged for the whole sequence, or they can vary across time. Automation modes in the Audio Track Mixer let you record pan movement while playback runs. You can also place keyframes directly in the Timeline panel, assigning exact pan or balance values at chosen sequence times. This time-based control supports spatial audio changes that follow the visuals.

Knowing how these controls behave helps you build polished spatial mixes where audio placement supports the story.

## Pan or balance a stereo track

### Adjust left-right audio distribution in Adobe Premiere with the Audio Track Mixer controls.

Use panning and balancing controls to place sound within the stereo field of a project. These controls are shown in the Audio Track Mixer when audio is routed between tracks that do not share the same channel layout.

Stereo panning controls how a mono or stereo track feeds a stereo destination. When a mono track is routed to stereo output, the Audio Track Mixer shows a pan knob so the sound can be placed between the left and right channels. With a stereo track routed to stereo output, that same control works as balance, setting how much of each input channel reaches the output channels. For 5.1 surround routing or adjustments made in the timeline, use the other Premiere methods provided for those cases.

### Adjust the pan or balance setting

In the Audio Track Mixer, find the circular pan control knob for the track.

Move the knob left or right, or drag the numeric value below it, to change the setting.

You can also click the numeric value, enter a percentage from -100 through 100, and press Enter (Windows) or Return (macOS).

The pan value updates at once and is heard during playback. Negative numbers favor the left channel, positive numbers favor the right channel, and 0 is the centered position.

Tip

For accurate monitoring, check that every audio output is connected to the intended speaker and that positive and negative wiring is consistent across the speaker set.

## Pan or balance an adaptive track

### Map audio channels in multichannel sequences in Adobe Premiere with the Track Output Channel Assignments button.

Use this procedure for sequences that have an adaptive or multichannel master audio track. When individual track channels need to feed particular master track channels, use Direct Output Assignment. The Track Assignment dialog box gives you a matrix interface for exact channel mapping.

Premiere normally assigns track channels to master track channels automatically according to how many channels each new track contains. With multichannel masters, new mono, stereo, and 5.1 tracks are assigned to channel 1, 1-2, or 1-6 respectively. You can change those assignments when a mix needs a particular routing layout.

### Configure track output channel assignments

Choose Window > Audio Track Mixer.

In the Audio Track Mixer, find the Direct Output Assignment button beside the track you want to set up. The labels next to the button show the current master track channel assignments.

Click the Direct Output Assignment button, or right-click the track header and choose Track Output Assignment.

In the Track Assignment dialog box, choose a channel in the Master track as the destination by marking that route in the matrix.

Select OK to apply the channel assignments.

Note

Track sends cannot be assigned to the Master track in a multichannel sequence.

After you apply the mapping, the labels beside the Direct Output Assignment button change to show the new channel routes, so you can inspect the routing without reopening the dialog box.

## Pan or balance a track in the timeline

### Set and automate track pan or balance in the Adobe Premiere timeline for accurate sound placement.

In the Timeline panel, expand the track view if needed by clicking the triangle beside the track name.

Click the Show Keyframes button and choose Show Track Keyframes from the menu.

At the upper left of the track, choose Track:Volume, then choose Panner > Balance or Panner > Pan from that menu. With 5.1 surround audio, use the Panner menu to choose the dimension to edit.

If the pan or balance change should vary over time, move the current-time indicator and click the Add/Remove Keyframe icon.

Adjust the level with the Selection tool or the Pen tool.

When the pan or balance change is animated over time, repeat steps 4 and 5 as needed.

## Record changes to sound tracks

### Record and automate soundtrack changes in Adobe Premiere with the Audio Track Mixer.

Each Audio Track Mixer channel maps to one audio track in the timeline. The controls in a channel can record changes onto the matching audio track. For instance, change clip volume on Audio 1 through the Volume slider in the Audio 1 channel of Audio Track Mixer.

Set the current time in the Timeline or Audio Track Mixer panel to the point where automation recording should begin.

Note

In Audio Track Mixer, the current time can be set from the upper-left corner of the panel.

In Audio Track Mixer, use the Automation Mode menu at the top of each track you plan to change. To record adjustments, choose any mode except Off or Read.

To keep a property from changing while Write automation mode is active, right-click (Windows) or Control-click (macOS) an effect or send, then choose Safe During Write from the menu.

In Audio Track Mixer, choose one of these actions:

- To begin automation, click the Play button in Audio Track Mixer.
- To loop the sequence continuously, click the Loop button.
- To play only from the In point through the Out point, click the Play Video In To Out button.

While audio is playing, change the options for any automatable property.

Click the Stop button to end automation.

To review the result, set the current time to the start of the changed section and click the Play button.

Safe During Write can preserve a property's settings while an audio mix is being recorded, so the selected property is not edited. That protection covers the property across every track in the sequence. On a track's Effects and Sends panel, right-click (Windows) or Control-click (macOS) an effect or send, then choose Safe During Write from the menu.

Use Audio Track Mixer for automation of track properties only, not clip properties. Clip keyframes can be edited by selecting the clip and using the Effect Controls or Timeline panel.

## Add effects to audio tracks

### Change track-level audio settings in Adobe Premiere to shape tone, balance volume, and improve sound quality.

Choose Window > Audio Track Mixer.

Click the Show/Hide Effects and Sends icon in the upper-left corner to display the Effects and Sends panel.

Choose the track that should receive the effect.

Click the Effect Selection icon, then choose an effect. Its parameters appear in the lower-right corner of the Effects and Sends panel.

Enter or adjust the value for the selected parameter. The available options vary by effect.

Use the Analog Delay parameters to adjust how the audio repeats.

Change the Analog Delay parameters to control audio repetition.

Toggle the fx icon to enable or disable the effect.

Play the track so you can hear the audio effect and see the highlighted.

To remove a track effect, click the Effect Selection icon and choose None from the list.

To bypass a track effect, use the Effects Bypass icon at the lower-right of the effects list.

## Copy and paste audio effects in the timeline

### Copy audio effects from one track section and paste them elsewhere in the Adobe Premiere timeline.

Track effects can be copied from one part of a track and pasted to another location. After pasting, keyframes for the track effect are placed at the current-time indicator. Track targeting does not change where the pasted keyframes land.

Use Window > Timelines, then choose the timeline.

In the timeline, select one or more track keyframes. For multiple keyframes, hold Shift while selecting each keyframe.

Run Edit > Copy.

Set the current-time indicator to the new location on the audio track.

Choose Edit > Paste.

If the destination audio track is not the same as the source, expand it so it matches the original.

Tip

Every audio effect has a bypass option, letting you enable or disable the effect according to the keyframes you set.

## Adjust audio track effects in the Timeline

### Fine-tune and automate Adobe Premiere audio track effects directly in the timeline with keyframes.

Fixed audio Track or Panner effects can be changed with track keyframes, the rubber band, or Audio Track Mixer controls.

Expand the audio track by double-clicking it in the Timeline panel.

Click the Show Keyframes icon, then choose Show Track Keyframes from the menu.

Open the menu in the upper-left corner of the clip on the audio track. By default, it shows Track: Volume.

From the menu, choose the effect name and property:

- Pre-fader effects are shown in the upper-right corner of the menu.
- Post-fader effects are shown in the lower-right corner of the menu.

Numbers in effect names show both their position in the track effects list and their render order.

Use the Pen tool when you need to adjust the level evenly or add and edit keyframes.
