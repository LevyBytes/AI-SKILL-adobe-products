# Designate A Track Effect As Pre Fade Or Post Fade, Channelize Effects, Copy And Move Effects In Audio Track Mixer, Audio Track Mixer Automation Modes ...

> Adobe Premiere Pro reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Designate a track effect as pre-fade or post-fade; Channelize effects; Copy and move effects in Audio Track Mixer; Audio Track Mixer automation modes; Set Automatch Time for Touch mode and Read mode; Specify automated keyframe creation; Remix in Premiere.

## Designate a track effect as pre-fade or post-fade

### Control where audio effects enter the signal path relative to a track's volume fader in Adobe Premiere, so mixes react as intended.

Premiere lets each audio effect run either before the track's volume fader or after it. That placement changes how later volume moves influence the audible result.

Newly added effects start as pre-fader effects, and you can switch that placement when the mix calls for a different response.

Choose Window > Audio Track Mixer.

Use the Show/Hide Effects and Sends icon (top-left corner) to display the Effects and Sends panel.

In that track's effects rack, identify the target effect.

For the effect name, right-click (Windows) or control-click (macOS).

Choose Pre-Fader or Post-Fader.

Pre-fader and post-fader choices place the effect at different points in the signal flow.

## Channelize effects

### Build custom audio effect layouts in Adobe Premiere, apply effects to selected channels, and save those layouts as reusable presets.

Effects channelization lets you design custom arrangements for effects. It is useful when a sequence has multiple audio tracks but an effect should process only certain channels. After you build the layout, you can store it as a preset for later use.

Choose Window > Effect Controls.

Select an effect, then choose the Re-map button beside Channel Map.

Choose Request Layout.

In the Request Effect Layout dialog box, choose the input type.

Choose Custom when a Channel Label needs assignment or editing.

Add or remove channels as required with the plus (+) and minus (-) icons.

Assign or edit Channel Labels for the custom layout.

Choose Save Preset after completing the changes.

Enter a preset name, then choose OK.

For every individual channel, you can adjust both the effect input and effect output. The output remains tied to the input and cannot be edited independently.

## Copy and move effects in Audio Track Mixer

### Refine audio in Adobe Premiere by changing track-level effects to rebalance tone, increase clarity, and shape the mix.

When gain staging needs adjustment or the signal path needs a different order, use the Audio Track Mixer to move, duplicate, or rearrange audio track effects.

Choose Window > Audio Track Mixer.

Click the Show/Hide Effects and Sends icon at the upper-left to reveal Effects and Sends.

Choose an effect from the Audio Track Mixer.

Within a single track, move or copy an effect:

- To move an effect: Drag the selected effect to the slot where it should sit in that track.
- To copy an effect: With the effect selected, hold Ctrl-key (Windows) or Cmd (macOS) while dragging to another slot in the same track.

Between tracks, move or copy an effect:

- To move an effect: With the effect selected, hold Ctrl-key (Windows) or Cmd (macOS) while dragging onto the destination track.
- To copy an effect: Drag the selected effect to another track; Premiere creates a duplicate.

For a whole audio effects rack, right-click the rack header and choose Copy Track Effects. Next, right-click the target rack and choose Paste Track Effects.

The pasted rack carries over every effect and setting from the source track. You can change settings inside the pasted rack without changing the source rack or any other track.

## Audio Track Mixer automation modes

### Understand how Audio Track Mixer automation modes govern track changes during playback in Adobe Premiere.

Set automation modes from the menu at the top of each track. For instance, while playback is running, drag a track's volume fader or pan control. On later playback, if that track's automation menu is set to Read, Touch, or Latch, Premiere plays the track using the adjustments you recorded. As you change channels in the Audio Track Mixer, Premiere writes those changes to the matching tracks by adding track keyframes in the Timeline panel. In the other direction, audio track keyframes that you create or edit in the Timeline panel drive values, including fader positions, inside the Audio Track Mixer.

For each audio track, the automation options menu selection defines how the track behaves during mixing:

- Off: During playback, stored settings for the track are ignored. Off permits live use of Audio Track Mixer controls without existing keyframes taking over. Changes made to the audio track are not recorded while Off mode is active.
- Read: Track keyframes are read and used to control playback. When a track has no keyframes, changing a track option such as volume applies the change evenly to the whole track. If you change an option on a track in Read automation, that option returns to the value it had before the current automation pass after you stop changing it. The Automatch Time preference controls the return rate.
- Write: Premiere records changes to any automatable track setting that is not set to Safe During Write, then creates the matching track keyframes in the Timeline panel. Write mode begins writing automation as soon as playback begins, without waiting for you to move a control. To alter that behavior, open the Audio Track Mixer menu and choose Switch To Touch After Write. When playback stops or a playback loop finishes, the Switch To Touch After Write command changes every Write mode track to Touch mode.
- Latch: This mode matches Write except that automation begins only after you start changing a property. The starting property values come from the earlier adjustment.
- Touch: This mode matches Write except that automation begins only after you start changing a property. After you stop changing the property, its option settings move back to the previous state from before the current automation pass. The Automatch Time audio preference controls the return rate.

## Set Automatch Time for Touch mode and Read mode

### Set Automatch Time for Touch and Read modes so effect properties return to their starting values at the intended speed in Adobe Premiere.

In Touch mode, an effect property moves back to its initial value once you stop changing it. Read mode behaves the same way when the affected parameter already has a keyframe. The Automatch Time preference sets how long that return takes.

Audio automation recorded through the Audio Track Mixer may create more keyframes than the track needs, which can hurt performance. To limit unnecessary keyframes while preserving quality interpretation and reducing performance impact, enable the Automation Keyframe Optimization preference. Because optimized keyframes are less densely packed on the track, editing individual keyframes also becomes simpler.

Open Edit > Preferences > Audio (Windows) or Premiere > Settings > Audio (macOS).

Set Automatch Time to the desired value, then choose OK.

## Specify automated keyframe creation

### Make audio editing more efficient in Adobe Premiere by using keyframe optimization.

Audio automation changes made in the Audio Track Mixer can produce extra keyframes in the audio track and reduce performance. Use the Automation Keyframe Optimization preference to avoid unneeded keyframes while maintaining quality interpretation and minimizing performance degradation.

This preference also makes individual keyframes easier to edit because the keyframe graph contains fewer tightly clustered points.

Review the Linear Keyframe Thinning and Minimum Time Interval Thinning options.

Open Edit > Preferences > Audio (Windows) or Premiere > Settings > Audio (macOS).

Under Automation Keyframe Optimizations, enable Linear keyframe thinning, Minimum time interval thinning, or both.

Choose OK.

## Remix in Premiere

See how AI-powered music retiming in Adobe Premiere can automatically adapt audio tracks to the duration of a video.

Choosing music for a video often exposes a mismatch: the best track may run longer or shorter than the scene. The traditional fix requires manual cuts, crossfades, and repeated previews until the song fits smoothly. Remix replaces that labor by retiming music to the requested duration while keeping the musical structure coherent.

Remix studies the structure and rhythm of the music, then rearranges sections so the track fits the target length. Whether the audio is from Adobe Stock, a personal library, or a custom composition, Remix can adapt it to the video without the manual work required by conventional audio editing.

### How Remix works

Remix applies artificial intelligence to interpret the musical structure of an audio track. After you apply Remix to a music clip, Premiere evaluates several qualities for each beat and compares each beat with the rest of the song. That analysis finds natural transition points, loops, and sections that can connect musically throughout the track.

Using the analysis, Remix chooses the best route for rebuilding the music. It cuts at musically suitable moments and inserts crossfades between sections so transitions stay smooth. The result is a revised track that sounds natural and connected even when parts were removed or moved.

The algorithm gives priority to the original clip's beginning and ending, while most edits happen in the middle. This keeps the introduction and conclusion recognizable as the body changes to meet the needed duration.

### Key parameters and controls

Remix includes parameters that shape how forcefully and creatively the algorithm changes the music. Knowing these controls helps you choose settings that fit different kinds of musical material.

Target duration sets the length that the remixed track should reach. You can enter the duration as a number or adjust it visually by dragging the clip edge in the timeline with the Remix tool. Depending on the song's tempo and composition, the algorithm usually lands within one second of the target and is often even closer.

Segments sets how many cuts and crossfades Remix may create in the track. Lower values direct Remix to use the fewest edits it can, which is useful for songs with simple structures. Higher values give the algorithm more room to handle complex, changing compositions that contain multiple distinct sections. For songs with major tempo or mood shifts, more segments often yield a more natural result.

Variations lets you quickly audition different remix arrangements for the same song. This control steers the algorithm toward melodic elements, such as lead instruments or vocals, or toward harmonic elements, such as orchestral backgrounds or chord progressions. A track centered on a solo instrument may work better with a melodic variation, while a dense orchestral piece may feel more natural with a harmonic variation.

### Understanding Remix results

After Remix finishes analyzing the audio and builds the new track, visual markers show what changed. Vertical zigzag lines appear on the remixed audio clip wherever Remix made an edit. These markers identify the points where the algorithm cut and crossfaded sections from the original music.

To check an edit, place the playhead just before a zigzag marker and play through the transition. This helps you judge whether the change sounds natural in context. To hear the remixed clip by itself, open it in the Source Monitor by double-clicking the clip; other timeline audio will not be included.

### Remix capabilities and limitations

Remix works especially well with instrumental music and tracks that have steady rhythmic patterns. Beat analysis is most reliable when the music has clear beats and recognizable transitions. Electronic music, orchestral scores, and many popular music genres usually produce strong results.

One key limitation is that Remix does not analyze or understand vocal content. Vocals are treated like any other musical element, so the algorithm may cut a verse in an awkward place or join lines from separate verses. For vocal-heavy tracks, review the output closely and be ready to adjust sections manually when lyrics do not flow well.

If a specific musical moment must line up with a certain point in the video, split the original clip at that exact moment before applying Remix. Then remix the two sections separately and reassemble them, which keeps the critical moment anchored to the video while nearby music changes to fit.

### Enhance your workflow with Remix

Remix is useful in several common editing situations. If a rough cut changes length during editing, Remix lets you resize the music quickly without hunting for a replacement track or manually rebuilding the audio. For deliverables that need several durations, Remix can create suitable music lengths for each version from one source track.

Preview versions of Adobe Stock music need an extra check. If you apply Remix to a preview track and later buy the full version, verify the remix timing against the purchased file. Small timing differences between preview and licensed versions may mean you need to apply Remix again to the full-quality track.
